#!/bin/zsh
# Widget karesi (13-widgets) — capture_shots.sh'ın ekran çekimlerinden ayrı duruyor,
# çünkü widget'lar uygulamanın içinde değil ana ekranda yaşıyor.
#
# Neden iki fazlı: uygulamayı açıp kapatmak SpringBoard'u BİRİNCİ sayfaya döndürüyor,
# widget'lar ise ikinci sayfada. simctl'in dokunuş/kaydırma komutu yok; sayfayı çeviren
# tek adım dışarıdan geliyor (Claude'un simülatör aracı ya da elle bir kaydırma).
#
#   ./widget_kare.sh <dil> <tema> hazirla   # tema + tohumlu açılış, sonra uygulamayı kapat
#   (burada widget sayfasına kaydır)
#   ./widget_kare.sh <dil> <tema> cek       # kareyi .shots-raw/<dil>-<tema>/ altına yaz
#
# Dil ve renk widget'a App Group üzerinden geçiyor: uygulama açılışta OwlWidgetBridge ile
# w_lang/w_accent yazıp reloadAllTimelines çağırıyor (MainTabView.onAppear).
#
# Widget'lar SST-Shots'un ana ekranına ELLE kondu: widget galerisindeki "Araç Takımını
# Ekle" düğmesi otomasyondan gelen dokunuşa yanıt vermiyor. Yerleşim kalıcı; simülatör
# silinir ya da `simctl erase` yenirse elle tekrar konmalı.

DIL=${1:?dil gerekli}
STYLE=${2:?tema gerekli (dark|light)}
FAZ=${3:?faz gerekli (hazirla|cek)}

UDID=${SST_SIM_UDID:-$(xcrun simctl list devices available | grep -m1 "SST-Shots (" | grep -oE "[0-9A-F-]{36}")}
[ -z "$UDID" ] && { echo "✗ SST-Shots simülatörü yok"; exit 1; }
BUNDLE=com.harundogdu.studysprint.timer.StudySprintTimer
THEME=$([ "$STYLE" = "dark" ] && echo turquoise_dark || echo turquoise)
OUT="${SST_RAW_OUT:-$(dirname "$0")/../.shots-raw}/$DIL-$STYLE"

case "$FAZ" in
  hazirla)
    xcrun simctl boot "$UDID" >/dev/null 2>&1
    xcrun simctl bootstatus "$UDID" -b >/dev/null 2>&1
    xcrun simctl ui "$UDID" appearance "$STYLE" >/dev/null 2>&1

    # Cihaz dili de degisiyor: uygulama dili -seedLang ile geliyor ama ana ekrandaki
    # arama hapi ("Ara"/"Search"/"Buscar") cihaz dilini izliyor. Ayrilirsa kare yari
    # Turkce yari Ispanyolca cikiyor. SpringBoard yeniden baslatilmadan dil degisimi
    # islemiyor; restart ekrani ilk sayfaya dondurdugu icin zaten sonrasinda bir
    # kaydirma gerekiyor.
    typeset -A DIL_KODU
    DIL_KODU=(turkish tr english en german de spanish es french fr russian ru)
    local kod=${DIL_KODU[$DIL]:-en}
    xcrun simctl spawn "$UDID" defaults write -g AppleLanguages -array "$kod" >/dev/null 2>&1
    xcrun simctl spawn "$UDID" defaults write -g AppleLocale -string "$kod" >/dev/null 2>&1
    xcrun simctl spawn "$UDID" launchctl kickstart -k system/com.apple.SpringBoard >/dev/null 2>&1
    sleep 9

    # Durum cubugu sabitleri respring'i gecemiyor, sonrasinda yaziliyor.
    xcrun simctl status_bar "$UDID" override --time "9:41" --batteryState charged \
      --batteryLevel 100 --wifiBars 3 --wifiMode active >/dev/null 2>&1
    xcrun simctl terminate "$UDID" "$BUNDLE" >/dev/null 2>&1; sleep 1
    xcrun simctl launch "$UDID" "$BUNDLE" -seedScreenshots -suppressNotifPermission \
      -suppressReviewPrompt -seedTheme "$THEME" -seedLang "$DIL" -seedExam >/dev/null 2>&1
    sleep 10                     # tohum yazılsın, zaman çizelgeleri yenilensin
    xcrun simctl terminate "$UDID" "$BUNDLE" >/dev/null 2>&1
    sleep 4                      # widget'lar yeni veriyle çizilsin
    echo "hazır: $DIL/$STYLE — şimdi widget sayfasına kaydır"
    ;;
  cek)
    mkdir -p "$OUT"
    local i
    for i in 1 2 3; do
      if xcrun simctl io "$UDID" screenshot "$OUT/13-widgets.png" >/dev/null 2>&1; then
        echo "✓ $DIL/$STYLE 13-widgets"; exit 0
      fi
      sleep 4
    done
    echo "✗ ALINAMADI: $DIL/$STYLE"; exit 1
    ;;
  *) echo "✗ bilinmeyen faz: $FAZ"; exit 1 ;;
esac
