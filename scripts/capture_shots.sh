#!/bin/zsh
# studysprinttimer.com için ekran görüntüsü çekimi.
#
# Sitedeki her bölümün YANINDA o bölümün ekranı duruyor; bu betiğin ekran listesi
# index.html'deki data-shot adlarıyla birebir aynı. Bir sahne eklenirse buraya da
# bir satır eklenir.
#
# Kullanım:
#   ./capture_shots.sh <dil> <tema>          # tek set    (ör. turkish dark)
#   ./capture_shots.sh --hepsi               # 6 dil × koyu/açık = 144 kare
#
# Ön koşul: StudySprintTimer'ın Debug build'i DerivedData'da olmalı:
#   cd apps/StudySprintTimer && xcodebuild -project StudySprintTimer.xcodeproj \
#     -scheme StudySprintTimer -destination 'id=<sim-udid>' -configuration Debug build
#
# Çekimden sonra process_shots.sh ile WebP'ye çevrilip shots/<dil>/ altına konur.
#
# `set -e` BİLEREK YOK: simctl geçici olarak düşebiliyor ("Timeout waiting for screen
# surfaces", "server died", cihazın Shutdown'a düşmesi). Tek geçici hata koşumu
# öldürmesin; düşen kare sonda raporlanır.

DILLER=(turkish english german spanish french russian)

if [ "$1" = "--hepsi" ]; then
  for d in $DILLER; do for t in dark light; do "$0" $d $t; done; done
  exit $?
fi

LANG_ARG=${1:-turkish}
STYLE=${2:-dark}
THEME=$([ "$STYLE" = "dark" ] && echo turquoise_dark || echo turquoise)

# ADANMIŞ SİMÜLATÖR: ortak "iPhone 16 Pro Max"te çekim yapmak, aynı cihazda test
# koşan başka bir oturumun paketini düşürüyor (ve onun install/terminate'i de bu
# çekimi düşürüyor). 13 Ağu 2026'da yaşandı.
SIM_NAME=${SST_SIM_NAME:-SST-Shots}
SIM_TYPE="iPhone 16 Pro Max"
UDID=${SST_SIM_UDID:-$(xcrun simctl list devices available | grep -m1 "$SIM_NAME (" | grep -oE "[0-9A-F-]{36}")}
if [ -z "$UDID" ]; then
  RUNTIME=$(xcrun simctl list runtimes | grep -oE "com\.apple\.CoreSimulator\.SimRuntime\.iOS-[0-9-]+" | tail -1)
  echo "adanmış simülatör yok, oluşturuluyor: $SIM_NAME"
  UDID=$(xcrun simctl create "$SIM_NAME" "$SIM_TYPE" "$RUNTIME")
fi
[ -z "$UDID" ] && { echo "✗ simülatör yok"; exit 1; }

BUNDLE=com.harundogdu.studysprint.timer.StudySprintTimer
APP=${SST_APP:-$(ls -dt ~/Library/Developer/Xcode/DerivedData/StudySprintTimer-*/Build/Products/Debug-iphonesimulator/StudySprintTimer.app 2>/dev/null | head -1)}
[ -z "$APP" ] && { echo "✗ Debug build bulunamadı; önce uygulamayı simülatöre build et"; exit 1; }

OUT="${SST_RAW_OUT:-$(dirname "$0")/../.shots-raw}/$LANG_ARG-$STYLE"
mkdir -p "$OUT"
DUSEN=()

hazirla() {
  xcrun simctl boot "$UDID" >/dev/null 2>&1
  xcrun simctl bootstatus "$UDID" -b >/dev/null 2>&1
  # Sistem görünümü de temaya uysun: uygulamanın kendi teması var ama sheet ve
  # klavye gibi sistem yüzeyleri cihaz görünümünü izliyor.
  xcrun simctl ui "$UDID" appearance "$STYLE" >/dev/null 2>&1
  xcrun simctl status_bar "$UDID" override --time "9:41" --batteryState charged \
    --batteryLevel 100 --wifiBars 3 --wifiMode active >/dev/null 2>&1
  xcrun simctl install "$UDID" "$APP" >/dev/null 2>&1
}

acik_mi() {
  local durum=$(xcrun simctl list devices | grep "$UDID" | grep -oE "\((Booted|Shutdown|Booting)\)" | tr -d '()')
  [ "$durum" = "Booted" ] || { echo "  … cihaz ${durum:-bilinmiyor}, yeniden açılıyor"; hazirla; }
}

hazirla

capture() { name=$1; shift
  if [ -n "$SST_RESUME" ] && [ -s "$OUT/$name.png" ]; then echo "· atlandı $LANG_ARG/$STYLE $name"; return 0; fi
  acik_mi
  xcrun simctl terminate "$UDID" "$BUNDLE" >/dev/null 2>&1; sleep 1
  xcrun simctl launch "$UDID" "$BUNDLE" -seedScreenshots -suppressNotifPermission \
    -suppressReviewPrompt -seedTheme "$THEME" -seedLang "$LANG_ARG" "$@" >/dev/null 2>&1
  sleep 11   # kitap kapakları Open Library'den geç geliyor; 11 sn onları da kurtarıyor
  local i
  for i in 1 2 3; do
    if xcrun simctl io "$UDID" screenshot "$OUT/$name.png" >/dev/null 2>&1; then
      echo "✓ $LANG_ARG/$STYLE $name"; return 0
    fi
    echo "  … ekran yüzeyi hazır değil, tekrar ($i)"; acik_mi; sleep 6
  done
  echo "  ✗ ALINAMADI: $name"; DUSEN+=("$name"); return 0
}

capture 01-home       -seedExam
capture 02-reading    -seedReading
capture 03-shield     -settings -appShield -seedShieldApproved
# -appearanceStudio YALNIZ Ayarlar içinde işleniyor (SettingsView.onAppear); `-settings`
# olmadan sessizce ana ekranı veriyor. -studioSelect marka rengini sabitler.
# -studioDemo KULLANILMAZ: temalar arasında gezdiği için durağan karede rastgele renk çıkar.
capture 04-studio     -settings -appearanceStudio -studioSelect "$THEME"
capture 05-sounds     -focusSounds
capture 06-owl        -owlTab
capture 07-streak     -streakCalendar
capture 08-analytics  -analytics
# -seedExam şart: tohumda sınav yoksa ekran "Henüz sınav yok" boş durumunu veriyor.
capture 09-exam       -seedExam -settings -examCountdown
capture 10-library    -library
capture 11-planning   -planning
capture 12-tasks      -owlTab -owlDailyTasks
# 13-widgets burada YOK: widget karesi ana ekrandan geliyor ve arada bir sayfa kaydırması
# gerekiyor (simctl'de dokunuş komutu yok). Bkz. widget_kare.sh.

echo "Bitti → $OUT"
if [ ${#DUSEN[@]} -gt 0 ]; then
  echo "✗ ${#DUSEN[@]} kare alınamadı: ${DUSEN[*]}"
  echo "  eksikleri tamamlamak için: SST_RESUME=1 $0 $LANG_ARG $STYLE"
  exit 1
fi
