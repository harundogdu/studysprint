#!/usr/bin/env python3
"""App Store yorumlarını çekip Google Play arşiviyle birleştirir, site için reviews.json üretir.

Play tarafı buradan çekilemiyor (sahip hesabın kimliği gerekiyor); ios-apps reposundaki
scripts/site_play_yorumlari.py play_reviews.json arşivini tazeler, bu betik onu okur.
Kartların en az biri her mağazadan gelir (iki tarafta da uygun yorum varsa).

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
    created = attrs.get("createdDate") or attrs.get("date") or ""

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


def load_play() -> list:
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        "play_reviews.json")
    try:
        with open(path, encoding="utf-8") as fh:
            return json.load(fh).get("reviews", [])
    except (OSError, ValueError):
        return []


def pick(apple: list, play: list) -> list:
    """En iyi CARD_COUNT kart; iki mağazada da aday varsa ikisi de en az bir kartla temsil edilir."""
    ranked = sorted(apple + play, key=score, reverse=True)
    picked = ranked[:CARD_COUNT]
    for store, pool in (("play", play), ("appstore", apple)):
        if pool and not any(p["store"] == store for p in picked):
            best = max(pool, key=score)
            # Diğer mağazadan, kendi mağazasında tek kalmayan en zayıf kartı çıkar.
            for i in range(len(picked) - 1, -1, -1):
                other = picked[i]["store"]
                if sum(1 for p in picked if p["store"] == other) > 1:
                    picked[i] = best
                    break
    return picked


def main() -> int:
    try:
        rows = fetch_all()
    except urllib.error.HTTPError as exc:
        print(f"ASC isteği başarısız: {exc.code} {exc.read()[:300]!r}", file=sys.stderr)
        return 1

    apple = [{"store": "appstore",
              "body": a.get("body") or "",
              "nickname": (a.get("reviewerNickname") or "").strip(),
              "territory": a.get("territory") or "",
              "rating": a.get("rating"),
              "date": (a.get("createdDate") or "")[:10]}
             for a in (r["attributes"] for r in rows)]
    play_all = load_play()
    play = [{"store": "play",
             "body": p.get("body") or "",
             "nickname": p.get("nickname") or "",
             "territory": "",
             "rating": p.get("rating"),
             "date": p.get("date") or ""}
            for p in play_all]

    candidates = [r for r in apple + play if r["rating"] == 5 and r["body"].strip()]
    if len(candidates) < CARD_COUNT:
        # Yeterli yorum yoksa mevcut dosyaya dokunma; site eldeki kartlarla devam etsin.
        print(f"Yalnızca {len(candidates)} uygun yorum var, dosya güncellenmedi.", file=sys.stderr)
        return 0

    picked = pick([r for r in candidates if r["store"] == "appstore"],
                  [r for r in candidates if r["store"] == "play"])
    ratings = [r["rating"] for r in apple + play if isinstance(r["rating"], int)]
    average = round(sum(ratings) / len(ratings), 1) if ratings else None

    payload = {
        "updatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "totalReviews": len(apple) + len(play),
        "appStoreReviews": len(apple),
        "playReviews": len(play),
        "averageRating": average,
        "reviews": [dict(r, body=clean(r["body"])) for r in picked],
    }

    out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       "reviews.json")
    with open(out, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)
        fh.write("\n")
    print(f"{len(apple)} App Store + {len(play)} Google Play yorumu tarandı, "
          f"{len(picked)} kart yazıldı: {out}")
    for r in payload["reviews"]:
        print(f'  {r["store"]} | {r["date"]} | {r["nickname"]} | {r["body"][:60]}')
    return 0


if __name__ == "__main__":
    sys.exit(main())
