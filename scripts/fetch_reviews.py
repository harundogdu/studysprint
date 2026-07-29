#!/usr/bin/env python3
"""App Store yorumlarını çekip site için reviews.json üretir.

Seçim kuralı: yalnızca 5 yıldızlı yorumlar; içinde en dolgun metni olanlar öne geçer,
eşitlikte daha yeni olan kazanır. Tek cümlelik "harika uygulama" yorumları kart olarak
zayıf kaldığı için uzunluk bir eşiğe kadar ödüllendirilir, sonrası fark etmez.

Ortam değişkenleri: ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY (p8 içeriği), ASC_APP_ID.
"""
import json
import os
import sys
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone

import jwt  # PyJWT

APP_ID = os.environ.get("ASC_APP_ID", "6788031531")
KEY_ID = os.environ["ASC_KEY_ID"]
ISSUER = os.environ["ASC_ISSUER_ID"]
PRIVATE_KEY = os.environ["ASC_PRIVATE_KEY"]

CARD_COUNT = 3
# Bu uzunluktan sonrası ek puan getirmez; amaç kısa ve içi boş yorumları elemek.
LENGTH_CAP = 160
# Kartta bu uzunluğu aşan metin kırpılır (kart yüksekliği kontrolden çıkmasın).
MAX_CHARS = 210


def token() -> str:
    now = int(time.time())
    payload = {"iss": ISSUER, "iat": now, "exp": now + 1200, "aud": "appstoreconnect-v1"}
    return jwt.encode(payload, PRIVATE_KEY, algorithm="ES256",
                      headers={"kid": KEY_ID, "typ": "JWT"})


def fetch_all() -> list:
    url = (f"https://api.appstoreconnect.apple.com/v1/apps/{APP_ID}"
           "/customerReviews?limit=200&sort=-createdDate")
    rows = []
    while url:
        req = urllib.request.Request(url)
        req.add_header("Authorization", "Bearer " + token())
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
        rows += data.get("data", [])
        url = data.get("links", {}).get("next")
    return rows


# Henüz kullanmadan yazılmış yorumların işareti. Bunlar uzun olabilir ama kart olarak
# bir şey söylemez ("umarım faydalı olur"), o yüzden ağır ceza alır.
TENTATIVE = (
    "umarım", "umuyorum", "bakalım", "inşallah", "yeni indirdim", "yeni başladım",
    "deneyeceğim", "kullanacağım", "göreceğiz",
    "hope it", "hoping", "just downloaded", "will try", "we'll see",
)
# Somut fayda anlatan yorumlar öne çıksın.
CONCRETE = (
    "verim", "odak", "odaklan", "tavsiye", "yardımcı", "işime yara", "arttı", "artıyor",
    "başardım", "çalışabiliyorum", "kolaylaş", "motive", "takip",
    "focus", "productiv", "recommend", "helped", "doubled", "improved",
)


def score(attrs: dict) -> tuple:
    body = (attrs.get("body") or "").strip()
    lower = body.lower()
    created = attrs.get("createdDate") or ""

    points = min(len(body), LENGTH_CAP)
    if sum(lower.count(ch) for ch in ".!?") >= 2:
        points += 20                      # birden fazla cümle: anlatısı olan yorum
    if any(word in lower for word in CONCRETE):
        points += 30
    if any(word in lower for word in TENTATIVE):
        points -= 80                      # daha kullanmadan yazılmış
    return (points, created)


def clean(body: str) -> str:
    """Kart için tek paragraf; cümle sınırında kırpar, ortasında kesmez.

    Cümle sınırı metnin yarısından fazlasını atıyorsa (ilk cümle çok kısaysa)
    kelime sınırında kırpıp üç nokta koyar; yoksa yorumun asıl anlattığı yer gidiyor.
    """
    text = " ".join(body.split())
    if len(text) <= MAX_CHARS:
        return text
    cut = text[:MAX_CHARS]
    ends = [cut.rfind(e) for e in (". ", "! ", "? ") if e in cut]
    if ends:
        candidate = cut[:max(ends) + 1].strip()
        if len(candidate) >= MAX_CHARS * 0.6:
            return candidate
    return cut.rsplit(" ", 1)[0].strip() + "…"


def main() -> int:
    try:
        rows = fetch_all()
    except urllib.error.HTTPError as exc:
        print(f"ASC isteği başarısız: {exc.code} {exc.read()[:300]!r}", file=sys.stderr)
        return 1

    five_star = [r["attributes"] for r in rows
                 if r["attributes"].get("rating") == 5
                 and (r["attributes"].get("body") or "").strip()]
    if len(five_star) < CARD_COUNT:
        # Yeterli yorum yoksa mevcut dosyaya dokunma; site eldeki kartlarla devam etsin.
        print(f"Yalnızca {len(five_star)} uygun yorum var, dosya güncellenmedi.", file=sys.stderr)
        return 0

    picked = sorted(five_star, key=score, reverse=True)[:CARD_COUNT]
    payload = {
        "updatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "totalReviews": len(rows),
        "reviews": [
            {
                "body": clean(a.get("body") or ""),
                "nickname": (a.get("reviewerNickname") or "").strip(),
                "territory": a.get("territory") or "",
                "rating": a.get("rating"),
                "date": (a.get("createdDate") or "")[:10],
            }
            for a in picked
        ],
    }

    out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       "reviews.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)
        fh.write("\n")
    print(f"{len(rows)} yorum tarandı, {CARD_COUNT} kart yazıldı: {out}")
    for r in payload["reviews"]:
        print(f'  {r["date"]} | {r["nickname"]} | {r["body"][:60]}')
    return 0


if __name__ == "__main__":
    sys.exit(main())
