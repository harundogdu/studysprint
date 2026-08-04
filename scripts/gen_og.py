#!/usr/bin/env python3
"""og.png'yi scripts/og_template.html'den uretir (1200x630).

Sablon sitenin kendi paletini ve fontlarini kullanir; ikon ve ana ekran
goruntusu repodaki dosyalardan gelir. Renk ya da ikon degistiginde:

    python3 scripts/gen_og.py

Gereksinim: playwright (pip install playwright && playwright install chromium).
"""
import pathlib
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE = ROOT / "scripts" / "og_template.html"
OUT = ROOT / "og.png"


def main() -> int:
    if not TEMPLATE.exists():
        print(f"sablon yok: {TEMPLATE}", file=sys.stderr)
        return 1

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630},
                                device_scale_factor=1)
        page.goto(TEMPLATE.as_uri())
        # Google Fonts inip yerlesene kadar bekle, yoksa yedek font ile basilir.
        page.wait_for_timeout(2500)
        page.screenshot(path=str(OUT))
        browser.close()

    print(f"tamam: {OUT.relative_to(ROOT)} 1200x630")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
