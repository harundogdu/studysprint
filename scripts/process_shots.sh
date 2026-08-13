#!/bin/zsh
# capture_shots.sh'ın ham karelerini siteye hazırlar:
#   1320x2868 PNG  →  660x1434 WebP q90  (kare başına ~50 KB, PNG'nin altıda biri)
# Hedef: shots/<dil>/<tema>-<ekran>.webp   (index.html bu yolu kuruyor)
#
# Kullanım: ./process_shots.sh [ham-klasör]
# Ön koşul: cwebp (brew install webp)
set -e

SRC=${1:-$(dirname "$0")/../.shots-raw}
DST="$(dirname "$0")/../shots"

command -v cwebp >/dev/null || { echo "✗ cwebp yok: brew install webp"; exit 1; }

typeset -A DIL
DIL=(turkish tr english en german de spanish es french fr russian ru)

sayac=0
for dir in "$SRC"/*/; do
  [ -d "$dir" ] || continue
  base=$(basename "$dir")            # ör. turkish-dark
  lang=${DIL[${base%-*}]}
  style=${base##*-}
  [ -z "$lang" ] && { echo "· bilinmeyen dil, atlandı: $base"; continue; }

  mkdir -p "$DST/$lang"
  for f in "$dir"*.png; do
    [ -e "$f" ] || continue
    name=$(basename "$f" .png)
    tmp=$(mktemp -t shot).png
    sips -Z 1434 "$f" --out "$tmp" >/dev/null 2>&1
    cwebp -quiet -q 90 "$tmp" -o "$DST/$lang/$style-$name.webp"
    rm -f "$tmp"
    sayac=$((sayac+1))
  done
  echo "✓ $base"
done

echo "$sayac dosya → $DST ($(du -sh "$DST" | cut -f1))"
