/* Shared i18n for Study Sprint legal & support pages. Language persists via localStorage (sst_lang). */
(function () {
  var I18N = {
    en: {
      nav_home:`Home`, nav_privacy:`Privacy`, nav_terms:`Terms`, nav_support:`Support`, nav_help:`Get Help`, nav_contact:`Contact`,
      // Support
      sup_hero_title:`Support & Help Center`, sup_hero_sub:`We're here to help you focus.`,
      sup_get_title:`Get in touch`, sup_get_desc:`Need help, found a bug, or have a feature idea? We'd love to hear from you.`,
      sup_get_btn:`Contact Support`, sup_or_pre:`Or email us directly at`, sup_or_post:`. We typically reply within a few days.`,
      sup_faq_title:`Frequently Asked Questions`,
      sup_q1:`Does the app work offline?`, sup_a1:`Yes. Study Sprint Timer is offline-first — no account or internet connection is required to run study sessions and track your progress.`,
      sup_q2:`How do streaks work?`, sup_a2:`Complete at least one study session on a given day to keep your streak going. Miss a day and the streak resets — a gentle nudge to stay consistent.`,
      sup_q3:`How do I change the theme?`, sup_a3:`Open Settings → Theme and pick any color you like. On supported devices, the home-screen app icon updates to match your selected theme.`,
      sup_q4:`How do I remove ads?`, sup_a4:`Upgrade to Premium from the app to enjoy an ad-free experience and unlock extra themes.`,
      sup_q5:`How do I restore my purchase?`, sup_a5:`Go to Settings → Restore Purchases. Make sure you're signed in with the same Apple ID you used for the original purchase.`,
      sup_q6:`How do I delete my data?`, sup_a6:`All data is stored locally. You can clear everything from Settings → Clear Data, or by uninstalling the app.`,
      // Privacy
      priv_hero_title:`Privacy Policy`, priv_hero_sub:`How Study Sprint Timer handles your data.`, priv_updated:`Last updated: July 7, 2026`,
      priv_h1:`Overview`, priv_p1:`Study Sprint Timer ("the app") is an offline-first focus and Pomodoro study timer. We built it to respect your privacy. The app does not require an account and does not ask for your name, email, or any personal details to work.`,
      priv_h2:`Information We Collect`, priv_p2:`<strong>We (the developer) do not collect or store your personal data on any server.</strong> All of your app data — study sessions, streaks, statistics, and settings such as theme and language — is stored <strong>locally on your device only</strong>. It is not transmitted to us.`,
      priv_h3:`Advertising & Third-Party Services`, priv_p3:`The free version of the app displays ads through <strong>Google AdMob</strong>. To deliver and measure ads, Google may collect and process certain information, such as a device advertising identifier, IP address, and general usage data. This processing is performed by Google, not by us.`,
      priv_l3:`<li>We use Google's User Messaging Platform to request your consent where required.</li><li>On iOS, we show Apple's App Tracking Transparency prompt. If you do not allow tracking, the app still works fully and you may see less relevant ads.</li><li>Learn more in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google's Privacy Policy</a>.</li>`,
      priv_p3b:`Purchasing <strong>Premium</strong> removes all ads.`,
      priv_h4:`Purchases`, priv_p4:`Subscriptions and purchases are processed by <strong>Apple</strong> through the App Store. We never receive or store your payment information. Apple's handling is governed by <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple's Privacy Policy</a>.`,
      priv_h5:`Data Sharing`, priv_p5:`We do not sell, rent, or trade your information. We do not share your locally stored study data with anyone.`,
      priv_h6:`Your Choices`, priv_l6:`<li>Manage tracking via iOS Settings → Privacy & Security → Tracking.</li><li>Reset your advertising identifier in iOS Settings.</li><li>Remove ads entirely by purchasing Premium.</li><li>Delete all local data anytime from the app's Settings → Clear Data, or by uninstalling the app.</li>`,
      priv_h7:`Children's Privacy`, priv_p7:`The app is not directed to children under 13 and we do not knowingly collect personal information from children.`,
      priv_h8:`Changes to This Policy`, priv_p8:`We may update this policy from time to time. Material changes will be reflected on this page with a new "Last updated" date.`,
      priv_h9:`Contact`, priv_p9:`Questions about this Privacy Policy? Contact us at <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      // Terms
      term_hero_title:`Terms of Service`, term_hero_sub:`The rules for using Study Sprint Timer.`, term_updated:`Last updated: July 7, 2026`,
      term_h1:`1. Acceptance of Terms`, term_p1:`By downloading or using Study Sprint Timer ("the app"), you agree to these Terms of Service. If you do not agree, please do not use the app.`,
      term_h2:`2. The Service`, term_p2:`Study Sprint Timer is an offline focus and Pomodoro study timer. It helps you run timed study sessions, track streaks, and stay motivated. The app works without an account and stores your data locally on your device.`,
      term_h3:`3. License`, term_p3:`We grant you a personal, non-transferable, non-exclusive license to use the app on Apple devices you own or control, in accordance with the Apple Media Services Terms and the standard <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Apple End User License Agreement (EULA)</a>.`,
      term_h4:`4. Advertising`, term_p4:`The free version of the app displays advertisements provided by Google AdMob. By using the free version, you agree that ads may be shown. Purchasing Premium removes ads.`,
      term_h5:`5. Subscriptions & Purchases`, term_l5:`<li><strong>Premium</strong> is offered as an auto-renewable subscription (for example, weekly or yearly plans).</li><li>Payment is charged to your Apple ID at confirmation of purchase.</li><li>Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.</li><li>You can manage or cancel subscriptions anytime in your Apple ID account settings.</li><li>All purchases are processed and managed by Apple, subject to Apple's terms.</li>`,
      term_h6:`6. Acceptable Use`, term_p6:`You agree to use the app only for lawful, personal purposes and not to misuse, reverse-engineer, or interfere with the app or its security.`,
      term_h7:`7. Health Disclaimer`, term_p7:`Study Sprint Timer is a productivity and focus tool. It does not provide medical, psychological, or professional advice, and should not be relied upon for any such purpose.`,
      term_h8:`8. Disclaimer of Warranties`, term_p8:`The app is provided "as is" and "as available" without warranties of any kind, to the maximum extent permitted by law. We do not guarantee that the app will be uninterrupted or error-free.`,
      term_h9:`9. Limitation of Liability`, term_p9:`To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the app.`,
      term_h10:`10. Changes to These Terms`, term_p10:`We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the updated Terms.`,
      term_h11:`11. Contact`, term_p11:`Questions about these Terms? Contact us at <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      // Footer
      ft_desc:`Focus, Pomodoro & streaks — a simple offline study timer.`, ft_badge:`Coming soon to the App Store`,
      ft_productH:`Product`, ft_supportH:`Support`, ft_legalH:`Legal`,
      ft_features:`Features`, ft_how:`How It Works`, ft_reviews:`Reviews`, ft_help:`Help Center`, ft_contact:`Contact Us`, ft_privacy:`Privacy Policy`, ft_terms:`Terms of Service`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    },
    tr: {
      nav_home:`Ana Sayfa`, nav_privacy:`Gizlilik`, nav_terms:`Şartlar`, nav_support:`Destek`, nav_help:`Yardım Al`, nav_contact:`İletişim`,
      sup_hero_title:`Destek ve Yardım Merkezi`, sup_hero_sub:`Odaklanmana yardımcı olmak için buradayız.`,
      sup_get_title:`Bize ulaşın`, sup_get_desc:`Yardıma mı ihtiyacın var, bir hata mı buldun ya da bir fikrin mi var? Seni duymak isteriz.`,
      sup_get_btn:`Desteğe Yaz`, sup_or_pre:`Ya da doğrudan e-posta gönder:`, sup_or_post:`. Genellikle birkaç gün içinde yanıtlarız.`,
      sup_faq_title:`Sıkça Sorulan Sorular`,
      sup_q1:`Uygulama çevrimdışı çalışır mı?`, sup_a1:`Evet. Study Sprint Timer çevrimdışı önceliklidir — çalışma seanslarını yürütmek ve ilerlemeni takip etmek için hesap veya internet bağlantısı gerekmez.`,
      sup_q2:`Seriler nasıl çalışır?`, sup_a2:`Serini sürdürmek için o gün en az bir çalışma seansı tamamla. Bir günü kaçırırsan seri sıfırlanır — istikrarlı kalman için nazik bir dürtü.`,
      sup_q3:`Temayı nasıl değiştiririm?`, sup_a3:`Ayarlar → Tema'yı aç ve istediğin rengi seç. Desteklenen cihazlarda ana ekran uygulama ikonu seçtiğin temaya göre güncellenir.`,
      sup_q4:`Reklamları nasıl kaldırırım?`, sup_a4:`Uygulamadan Premium'a geç; reklamsız deneyimin tadını çıkar ve ekstra temaları aç.`,
      sup_q5:`Satın alımımı nasıl geri yüklerim?`, sup_a5:`Ayarlar → Satın Alımları Geri Yükle'ye git. İlk satın alımda kullandığın Apple Kimliği ile giriş yaptığından emin ol.`,
      sup_q6:`Verilerimi nasıl silerim?`, sup_a6:`Tüm veriler cihazında yerel olarak saklanır. Ayarlar → Verileri Temizle'den ya da uygulamayı kaldırarak her şeyi silebilirsin.`,
      priv_hero_title:`Gizlilik Politikası`, priv_hero_sub:`Study Sprint Timer verilerini nasıl işler.`, priv_updated:`Son güncelleme: 7 Temmuz 2026`,
      priv_h1:`Genel Bakış`, priv_p1:`Study Sprint Timer ("uygulama") çevrimdışı öncelikli bir odak ve Pomodoro çalışma zamanlayıcısıdır. Gizliliğine saygı duyacak şekilde tasarlandı. Uygulama bir hesap gerektirmez; çalışmak için adını, e-postanı veya herhangi bir kişisel bilgini istemez.`,
      priv_h2:`Topladığımız Bilgiler`, priv_p2:`<strong>Biz (geliştirici) kişisel verilerini hiçbir sunucuda toplamıyor veya saklamıyoruz.</strong> Tüm uygulama verilerin — çalışma seansları, seriler, istatistikler ve tema/dil gibi ayarlar — yalnızca <strong>cihazında yerel olarak</strong> saklanır. Bize iletilmez.`,
      priv_h3:`Reklam ve Üçüncü Taraf Hizmetleri`, priv_p3:`Uygulamanın ücretsiz sürümü <strong>Google AdMob</strong> aracılığıyla reklam gösterir. Reklamları sunmak ve ölçmek için Google, cihaz reklam kimliği, IP adresi ve genel kullanım verileri gibi bazı bilgileri toplayıp işleyebilir. Bu işleme biz değil, Google tarafından yapılır.`,
      priv_l3:`<li>Gerektiğinde onayını istemek için Google'ın User Messaging Platform'unu kullanırız.</li><li>iOS'ta Apple'ın App Tracking Transparency istemini gösteririz. Takibe izin vermezsen uygulama tüm özellikleriyle çalışmaya devam eder ve daha az ilgili reklamlar görebilirsin.</li><li>Daha fazlası için <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Gizlilik Politikası</a>.</li>`,
      priv_p3b:`<strong>Premium</strong> satın almak tüm reklamları kaldırır.`,
      priv_h4:`Satın Alımlar`, priv_p4:`Abonelikler ve satın alımlar App Store üzerinden <strong>Apple</strong> tarafından işlenir. Ödeme bilgilerini asla almaz veya saklamayız. Apple'ın işleyişi <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Apple Gizlilik Politikası</a> ile yönetilir.`,
      priv_h5:`Veri Paylaşımı`, priv_p5:`Bilgilerini satmaz, kiralamaz veya takas etmeyiz. Cihazında yerel olarak saklanan çalışma verilerini hiç kimseyle paylaşmayız.`,
      priv_h6:`Tercihlerin`, priv_l6:`<li>Takibi iOS Ayarlar → Gizlilik ve Güvenlik → İzleme'den yönet.</li><li>Reklam kimliğini iOS Ayarlar'dan sıfırla.</li><li>Premium satın alarak reklamları tamamen kaldır.</li><li>Tüm yerel verileri istediğin an uygulamanın Ayarlar → Verileri Temizle bölümünden ya da uygulamayı kaldırarak sil.</li>`,
      priv_h7:`Çocukların Gizliliği`, priv_p7:`Uygulama 13 yaşından küçük çocuklara yönelik değildir ve çocuklardan bilerek kişisel bilgi toplamayız.`,
      priv_h8:`Bu Politikadaki Değişiklikler`, priv_p8:`Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikler yeni bir "Son güncelleme" tarihiyle bu sayfada yansıtılır.`,
      priv_h9:`İletişim`, priv_p9:`Bu Gizlilik Politikası hakkında sorun mu var? Bize <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a> adresinden ulaş.`,
      term_hero_title:`Kullanım Şartları`, term_hero_sub:`Study Sprint Timer'ı kullanma kuralları.`, term_updated:`Son güncelleme: 7 Temmuz 2026`,
      term_h1:`1. Şartların Kabulü`, term_p1:`Study Sprint Timer'ı ("uygulama") indirerek veya kullanarak bu Kullanım Şartları'nı kabul etmiş olursun. Kabul etmiyorsan lütfen uygulamayı kullanma.`,
      term_h2:`2. Hizmet`, term_p2:`Study Sprint Timer çevrimdışı bir odak ve Pomodoro çalışma zamanlayıcısıdır. Zamanlı çalışma seansları yürütmene, serileri takip etmene ve motive kalmana yardımcı olur. Uygulama hesapsız çalışır ve verilerini cihazında yerel olarak saklar.`,
      term_h3:`3. Lisans`, term_p3:`Sahibi olduğun veya kontrol ettiğin Apple cihazlarında uygulamayı kullanman için Apple Media Services Şartları ve standart <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Apple Son Kullanıcı Lisans Sözleşmesi (EULA)</a> uyarınca kişisel, devredilemez ve münhasır olmayan bir lisans veririz.`,
      term_h4:`4. Reklam`, term_p4:`Uygulamanın ücretsiz sürümü Google AdMob tarafından sağlanan reklamlar gösterir. Ücretsiz sürümü kullanarak reklam gösterilebileceğini kabul edersin. Premium satın almak reklamları kaldırır.`,
      term_h5:`5. Abonelikler ve Satın Alımlar`, term_l5:`<li><strong>Premium</strong>, otomatik yenilenen bir abonelik olarak sunulur (örneğin haftalık veya yıllık planlar).</li><li>Ödeme, satın alım onayında Apple Kimliğine tahsil edilir.</li><li>Abonelikler, mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece otomatik yenilenir.</li><li>Abonelikleri istediğin an Apple Kimliği hesap ayarlarından yönetebilir veya iptal edebilirsin.</li><li>Tüm satın alımlar Apple tarafından, Apple'ın şartlarına tabi olarak işlenir ve yönetilir.</li>`,
      term_h6:`6. Kabul Edilebilir Kullanım`, term_p6:`Uygulamayı yalnızca yasal ve kişisel amaçlarla kullanmayı; kötüye kullanmamayı, tersine mühendislik yapmamayı ya da uygulamaya veya güvenliğine müdahale etmemeyi kabul edersin.`,
      term_h7:`7. Sağlık Sorumluluk Reddi`, term_p7:`Study Sprint Timer bir verimlilik ve odak aracıdır. Tıbbi, psikolojik veya profesyonel tavsiye vermez ve böyle bir amaçla kullanılmamalıdır.`,
      term_h8:`8. Garanti Reddi`, term_p8:`Uygulama, yasaların izin verdiği azami ölçüde, hiçbir garanti olmaksızın "olduğu gibi" ve "mevcut olduğu şekilde" sunulur. Uygulamanın kesintisiz veya hatasız olacağını garanti etmeyiz.`,
      term_h9:`9. Sorumluluğun Sınırlandırılması`, term_p9:`Yasaların izin verdiği azami ölçüde, uygulamayı kullanmandan doğan dolaylı, arızi veya sonuçsal zararlardan sorumlu değiliz.`,
      term_h10:`10. Bu Şartlardaki Değişiklikler`, term_p10:`Bu Şartları zaman zaman güncelleyebiliriz. Değişikliklerden sonra uygulamayı kullanmaya devam etmen güncellenmiş Şartları kabul ettiğin anlamına gelir.`,
      term_h11:`11. İletişim`, term_p11:`Bu Şartlar hakkında sorun mu var? Bize <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a> adresinden ulaş.`,
      ft_desc:`Odak, Pomodoro ve seriler — basit, çevrimdışı bir çalışma zamanlayıcısı.`, ft_badge:`Yakında App Store'da`,
      ft_productH:`Ürün`, ft_supportH:`Destek`, ft_legalH:`Yasal`,
      ft_features:`Özellikler`, ft_how:`Nasıl Çalışır`, ft_reviews:`Yorumlar`, ft_help:`Yardım Merkezi`, ft_contact:`Bize Ulaşın`, ft_privacy:`Gizlilik Politikası`, ft_terms:`Kullanım Şartları`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    },
    de: {
      nav_home:`Start`, nav_privacy:`Datenschutz`, nav_terms:`Bedingungen`, nav_support:`Support`, nav_help:`Hilfe`, nav_contact:`Kontakt`,
      sup_hero_title:`Support & Hilfe-Center`, sup_hero_sub:`Wir helfen dir, dich zu konzentrieren.`,
      sup_get_title:`Kontakt aufnehmen`, sup_get_desc:`Brauchst du Hilfe, hast du einen Fehler gefunden oder eine Idee? Wir freuen uns, von dir zu hören.`,
      sup_get_btn:`Support kontaktieren`, sup_or_pre:`Oder schreib uns direkt an`, sup_or_post:`. Wir antworten meist innerhalb weniger Tage.`,
      sup_faq_title:`Häufig gestellte Fragen`,
      sup_q1:`Funktioniert die App offline?`, sup_a1:`Ja. Study Sprint Timer ist offline-first — für Lernsessions und das Verfolgen deines Fortschritts sind kein Konto und keine Internetverbindung nötig.`,
      sup_q2:`Wie funktionieren Serien?`, sup_a2:`Schließe an einem Tag mindestens eine Lernsession ab, um deine Serie fortzuführen. Verpasst du einen Tag, wird sie zurückgesetzt — ein sanfter Anstoß, dranzubleiben.`,
      sup_q3:`Wie ändere ich das Theme?`, sup_a3:`Öffne Einstellungen → Theme und wähle eine Farbe. Auf unterstützten Geräten passt sich sogar das App-Icon deinem Theme an.`,
      sup_q4:`Wie entferne ich Werbung?`, sup_a4:`Wechsle in der App zu Premium für ein werbefreies Erlebnis und zusätzliche Themes.`,
      sup_q5:`Wie stelle ich meinen Kauf wieder her?`, sup_a5:`Gehe zu Einstellungen → Käufe wiederherstellen. Melde dich mit derselben Apple-ID an, mit der du gekauft hast.`,
      sup_q6:`Wie lösche ich meine Daten?`, sup_a6:`Alle Daten werden lokal gespeichert. Du kannst alles über Einstellungen → Daten löschen oder durch Deinstallation der App entfernen.`,
      priv_hero_title:`Datenschutzerklärung`, priv_hero_sub:`Wie Study Sprint Timer mit deinen Daten umgeht.`, priv_updated:`Zuletzt aktualisiert: 7. Juli 2026`,
      priv_h1:`Überblick`, priv_p1:`Study Sprint Timer ("die App") ist ein offline-first Fokus- und Pomodoro-Lerntimer. Wir haben ihn so gebaut, dass er deine Privatsphäre respektiert. Die App benötigt kein Konto und fragt nicht nach Namen, E-Mail oder anderen persönlichen Daten.`,
      priv_h2:`Erhobene Informationen`, priv_p2:`<strong>Wir (der Entwickler) erheben oder speichern keine personenbezogenen Daten auf Servern.</strong> Alle App-Daten — Lernsessions, Serien, Statistiken sowie Einstellungen wie Theme und Sprache — werden <strong>nur lokal auf deinem Gerät</strong> gespeichert und nicht an uns übertragen.`,
      priv_h3:`Werbung & Drittanbieter`, priv_p3:`Die kostenlose Version zeigt Werbung über <strong>Google AdMob</strong>. Zur Auslieferung und Messung kann Google bestimmte Informationen erheben, etwa eine Werbe-ID, IP-Adresse und allgemeine Nutzungsdaten. Diese Verarbeitung erfolgt durch Google, nicht durch uns.`,
      priv_l3:`<li>Wir nutzen Googles User Messaging Platform, um wo nötig deine Einwilligung einzuholen.</li><li>Auf iOS zeigen wir Apples App-Tracking-Transparenz-Dialog. Lehnst du das Tracking ab, funktioniert die App voll und du siehst ggf. weniger relevante Werbung.</li><li>Mehr in der <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a>.</li>`,
      priv_p3b:`Der Kauf von <strong>Premium</strong> entfernt jede Werbung.`,
      priv_h4:`Käufe`, priv_p4:`Abos und Käufe werden von <strong>Apple</strong> über den App Store abgewickelt. Wir erhalten oder speichern niemals deine Zahlungsdaten. Apples Umgang unterliegt der <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Datenschutzerklärung von Apple</a>.`,
      priv_h5:`Datenweitergabe`, priv_p5:`Wir verkaufen, vermieten oder handeln nicht mit deinen Informationen. Wir geben deine lokal gespeicherten Lerndaten an niemanden weiter.`,
      priv_h6:`Deine Optionen`, priv_l6:`<li>Tracking über iOS Einstellungen → Datenschutz & Sicherheit → Tracking verwalten.</li><li>Werbe-ID in den iOS-Einstellungen zurücksetzen.</li><li>Werbung durch den Kauf von Premium vollständig entfernen.</li><li>Alle lokalen Daten jederzeit über Einstellungen → Daten löschen oder durch Deinstallation entfernen.</li>`,
      priv_h7:`Datenschutz für Kinder`, priv_p7:`Die App richtet sich nicht an Kinder unter 13 Jahren und wir erheben wissentlich keine personenbezogenen Daten von Kindern.`,
      priv_h8:`Änderungen dieser Richtlinie`, priv_p8:`Wir können diese Richtlinie gelegentlich aktualisieren. Wesentliche Änderungen erscheinen auf dieser Seite mit einem neuen "Zuletzt aktualisiert"-Datum.`,
      priv_h9:`Kontakt`, priv_p9:`Fragen zu dieser Datenschutzerklärung? Kontaktiere uns unter <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      term_hero_title:`Nutzungsbedingungen`, term_hero_sub:`Die Regeln zur Nutzung von Study Sprint Timer.`, term_updated:`Zuletzt aktualisiert: 7. Juli 2026`,
      term_h1:`1. Annahme der Bedingungen`, term_p1:`Durch Herunterladen oder Nutzen von Study Sprint Timer ("die App") stimmst du diesen Nutzungsbedingungen zu. Wenn du nicht zustimmst, nutze die App bitte nicht.`,
      term_h2:`2. Der Dienst`, term_p2:`Study Sprint Timer ist ein offline Fokus- und Pomodoro-Lerntimer. Er hilft dir, getaktete Lernsessions durchzuführen, Serien zu verfolgen und motiviert zu bleiben. Die App funktioniert ohne Konto und speichert deine Daten lokal.`,
      term_h3:`3. Lizenz`, term_p3:`Wir gewähren dir eine persönliche, nicht übertragbare, nicht exklusive Lizenz zur Nutzung der App auf Apple-Geräten, die du besitzt oder kontrollierst, gemäß den Apple-Media-Services-Bedingungen und dem standardmäßigen <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Apple-Endnutzer-Lizenzvertrag (EULA)</a>.`,
      term_h4:`4. Werbung`, term_p4:`Die kostenlose Version zeigt Werbung von Google AdMob. Durch die Nutzung der kostenlosen Version stimmst du zu, dass Werbung angezeigt werden kann. Der Kauf von Premium entfernt Werbung.`,
      term_h5:`5. Abos & Käufe`, term_l5:`<li><strong>Premium</strong> wird als automatisch verlängerndes Abo angeboten (z. B. wöchentliche oder jährliche Pläne).</li><li>Die Zahlung wird bei Kaufbestätigung deiner Apple-ID belastet.</li><li>Abos verlängern sich automatisch, sofern nicht mindestens 24 Stunden vor Periodenende gekündigt.</li><li>Du kannst Abos jederzeit in den Einstellungen deiner Apple-ID verwalten oder kündigen.</li><li>Alle Käufe werden von Apple gemäß Apples Bedingungen abgewickelt.</li>`,
      term_h6:`6. Zulässige Nutzung`, term_p6:`Du verpflichtest dich, die App nur für rechtmäßige, persönliche Zwecke zu nutzen und sie oder ihre Sicherheit nicht zu missbrauchen, zurückzuentwickeln oder zu stören.`,
      term_h7:`7. Gesundheitshinweis`, term_p7:`Study Sprint Timer ist ein Produktivitäts- und Fokus-Tool. Es bietet keine medizinische, psychologische oder professionelle Beratung und sollte dafür nicht herangezogen werden.`,
      term_h8:`8. Gewährleistungsausschluss`, term_p8:`Die App wird im gesetzlich zulässigen Umfang "wie besehen" und "wie verfügbar" ohne jegliche Gewährleistung bereitgestellt. Wir garantieren keinen unterbrechungs- oder fehlerfreien Betrieb.`,
      term_h9:`9. Haftungsbeschränkung`, term_p9:`Im gesetzlich zulässigen Umfang haften wir nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung der App entstehen.`,
      term_h10:`10. Änderungen dieser Bedingungen`, term_p10:`Wir können diese Bedingungen gelegentlich aktualisieren. Die fortgesetzte Nutzung nach Änderungen gilt als Annahme der aktualisierten Bedingungen.`,
      term_h11:`11. Kontakt`, term_p11:`Fragen zu diesen Bedingungen? Kontaktiere uns unter <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      ft_desc:`Fokus, Pomodoro & Serien — ein einfacher, offline Lern-Timer.`, ft_badge:`Bald im App Store`,
      ft_productH:`Produkt`, ft_supportH:`Support`, ft_legalH:`Rechtliches`,
      ft_features:`Funktionen`, ft_how:`So funktioniert's`, ft_reviews:`Bewertungen`, ft_help:`Hilfe-Center`, ft_contact:`Kontakt`, ft_privacy:`Datenschutz`, ft_terms:`Nutzungsbedingungen`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    },
    es: {
      nav_home:`Inicio`, nav_privacy:`Privacidad`, nav_terms:`Términos`, nav_support:`Soporte`, nav_help:`Ayuda`, nav_contact:`Contacto`,
      sup_hero_title:`Soporte y centro de ayuda`, sup_hero_sub:`Estamos aquí para ayudarte a concentrarte.`,
      sup_get_title:`Ponte en contacto`, sup_get_desc:`¿Necesitas ayuda, encontraste un error o tienes una idea? Nos encantaría saber de ti.`,
      sup_get_btn:`Contactar soporte`, sup_or_pre:`O escríbenos directamente a`, sup_or_post:`. Normalmente respondemos en pocos días.`,
      sup_faq_title:`Preguntas frecuentes`,
      sup_q1:`¿La app funciona sin conexión?`, sup_a1:`Sí. Study Sprint Timer funciona sin conexión — no se necesita cuenta ni internet para hacer sesiones de estudio y seguir tu progreso.`,
      sup_q2:`¿Cómo funcionan las rachas?`, sup_a2:`Completa al menos una sesión de estudio en el día para mantener tu racha. Si te saltas un día, se reinicia — un empujón suave para ser constante.`,
      sup_q3:`¿Cómo cambio el tema?`, sup_a3:`Abre Ajustes → Tema y elige el color que quieras. En dispositivos compatibles, el icono de la app cambia para combinar con tu tema.`,
      sup_q4:`¿Cómo quito los anuncios?`, sup_a4:`Pasa a Premium desde la app para disfrutar sin anuncios y desbloquear temas adicionales.`,
      sup_q5:`¿Cómo restauro mi compra?`, sup_a5:`Ve a Ajustes → Restaurar compras. Asegúrate de iniciar sesión con el mismo Apple ID que usaste al comprar.`,
      sup_q6:`¿Cómo elimino mis datos?`, sup_a6:`Todos los datos se guardan localmente. Puedes borrar todo en Ajustes → Borrar datos, o desinstalando la app.`,
      priv_hero_title:`Política de privacidad`, priv_hero_sub:`Cómo Study Sprint Timer gestiona tus datos.`, priv_updated:`Última actualización: 7 de julio de 2026`,
      priv_h1:`Resumen`, priv_p1:`Study Sprint Timer ("la app") es un temporizador de estudio de enfoque y Pomodoro sin conexión. Lo creamos para respetar tu privacidad. La app no requiere cuenta ni pide tu nombre, correo ni datos personales para funcionar.`,
      priv_h2:`Información que recopilamos`, priv_p2:`<strong>Nosotros (el desarrollador) no recopilamos ni almacenamos tus datos personales en ningún servidor.</strong> Todos los datos de la app — sesiones, rachas, estadísticas y ajustes como tema e idioma — se guardan <strong>solo localmente en tu dispositivo</strong>. No se nos transmiten.`,
      priv_h3:`Publicidad y servicios de terceros`, priv_p3:`La versión gratuita muestra anuncios mediante <strong>Google AdMob</strong>. Para mostrar y medir anuncios, Google puede recopilar y procesar cierta información, como un identificador de publicidad, la dirección IP y datos de uso generales. Este procesamiento lo realiza Google, no nosotros.`,
      priv_l3:`<li>Usamos la User Messaging Platform de Google para solicitar tu consentimiento cuando corresponde.</li><li>En iOS mostramos el aviso de Transparencia de seguimiento de apps de Apple. Si no permites el seguimiento, la app sigue funcionando por completo y podrías ver anuncios menos relevantes.</li><li>Más información en la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a>.</li>`,
      priv_p3b:`Comprar <strong>Premium</strong> elimina todos los anuncios.`,
      priv_h4:`Compras`, priv_p4:`Las suscripciones y compras las procesa <strong>Apple</strong> a través de la App Store. Nunca recibimos ni almacenamos tu información de pago. La gestión de Apple se rige por la <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Política de privacidad de Apple</a>.`,
      priv_h5:`Uso compartido de datos`, priv_p5:`No vendemos, alquilamos ni intercambiamos tu información. No compartimos con nadie tus datos de estudio guardados localmente.`,
      priv_h6:`Tus opciones`, priv_l6:`<li>Gestiona el seguimiento en Ajustes de iOS → Privacidad y seguridad → Seguimiento.</li><li>Restablece tu identificador de publicidad en Ajustes de iOS.</li><li>Elimina los anuncios por completo comprando Premium.</li><li>Borra todos los datos locales cuando quieras desde Ajustes → Borrar datos, o desinstalando la app.</li>`,
      priv_h7:`Privacidad de los niños`, priv_p7:`La app no está dirigida a menores de 13 años y no recopilamos conscientemente información personal de niños.`,
      priv_h8:`Cambios en esta política`, priv_p8:`Podemos actualizar esta política de vez en cuando. Los cambios importantes se reflejarán en esta página con una nueva fecha de "Última actualización".`,
      priv_h9:`Contacto`, priv_p9:`¿Preguntas sobre esta Política de privacidad? Escríbenos a <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      term_hero_title:`Términos del servicio`, term_hero_sub:`Las reglas para usar Study Sprint Timer.`, term_updated:`Última actualización: 7 de julio de 2026`,
      term_h1:`1. Aceptación de los términos`, term_p1:`Al descargar o usar Study Sprint Timer ("la app"), aceptas estos Términos del servicio. Si no estás de acuerdo, no uses la app.`,
      term_h2:`2. El servicio`, term_p2:`Study Sprint Timer es un temporizador de estudio de enfoque y Pomodoro sin conexión. Te ayuda a hacer sesiones cronometradas, seguir rachas y mantener la motivación. Funciona sin cuenta y guarda tus datos localmente.`,
      term_h3:`3. Licencia`, term_p3:`Te concedemos una licencia personal, intransferible y no exclusiva para usar la app en dispositivos Apple que poseas o controles, conforme a los Términos de Apple Media Services y el <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Acuerdo de licencia de usuario final (EULA) estándar de Apple</a>.`,
      term_h4:`4. Publicidad`, term_p4:`La versión gratuita muestra anuncios de Google AdMob. Al usar la versión gratuita, aceptas que se puedan mostrar anuncios. Comprar Premium elimina los anuncios.`,
      term_h5:`5. Suscripciones y compras`, term_l5:`<li><strong>Premium</strong> se ofrece como suscripción de renovación automática (por ejemplo, planes semanales o anuales).</li><li>El pago se cobra a tu Apple ID al confirmar la compra.</li><li>Las suscripciones se renuevan automáticamente salvo que se cancelen al menos 24 horas antes de que termine el periodo actual.</li><li>Puedes gestionar o cancelar las suscripciones cuando quieras en los ajustes de tu Apple ID.</li><li>Todas las compras las procesa y gestiona Apple, sujetas a sus términos.</li>`,
      term_h6:`6. Uso aceptable`, term_p6:`Aceptas usar la app solo con fines legales y personales, y no hacer un mal uso, aplicar ingeniería inversa ni interferir con la app o su seguridad.`,
      term_h7:`7. Aviso de salud`, term_p7:`Study Sprint Timer es una herramienta de productividad y enfoque. No ofrece asesoramiento médico, psicológico ni profesional, y no debe usarse con ese fin.`,
      term_h8:`8. Renuncia de garantías`, term_p8:`La app se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, en la máxima medida permitida por la ley. No garantizamos que sea ininterrumpida ni esté libre de errores.`,
      term_h9:`9. Limitación de responsabilidad`, term_p9:`En la máxima medida permitida por la ley, no somos responsables de daños indirectos, incidentales o consecuentes derivados del uso de la app.`,
      term_h10:`10. Cambios en estos términos`, term_p10:`Podemos actualizar estos Términos de vez en cuando. El uso continuado de la app tras los cambios constituye la aceptación de los Términos actualizados.`,
      term_h11:`11. Contacto`, term_p11:`¿Preguntas sobre estos Términos? Escríbenos a <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      ft_desc:`Enfoque, Pomodoro y rachas — un temporizador de estudio simple y sin conexión.`, ft_badge:`Pronto en la App Store`,
      ft_productH:`Producto`, ft_supportH:`Soporte`, ft_legalH:`Legal`,
      ft_features:`Funciones`, ft_how:`Cómo funciona`, ft_reviews:`Opiniones`, ft_help:`Centro de ayuda`, ft_contact:`Contáctanos`, ft_privacy:`Política de privacidad`, ft_terms:`Términos del servicio`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    },
    fr: {
      nav_home:`Accueil`, nav_privacy:`Confidentialité`, nav_terms:`Conditions`, nav_support:`Support`, nav_help:`Aide`, nav_contact:`Contact`,
      sup_hero_title:`Support et centre d'aide`, sup_hero_sub:`Nous sommes là pour vous aider à vous concentrer.`,
      sup_get_title:`Nous contacter`, sup_get_desc:`Besoin d'aide, un bug repéré ou une idée de fonctionnalité ? Nous serions ravis de vous lire.`,
      sup_get_btn:`Contacter le support`, sup_or_pre:`Ou écrivez-nous directement à`, sup_or_post:`. Nous répondons généralement sous quelques jours.`,
      sup_faq_title:`Questions fréquentes`,
      sup_q1:`L'application fonctionne-t-elle hors ligne ?`, sup_a1:`Oui. Study Sprint Timer fonctionne hors ligne — aucun compte ni connexion Internet n'est requis pour lancer des sessions et suivre votre progression.`,
      sup_q2:`Comment fonctionnent les séries ?`, sup_a2:`Terminez au moins une session d'étude dans la journée pour garder votre série. Si vous manquez un jour, elle se réinitialise — un petit coup de pouce pour rester régulier.`,
      sup_q3:`Comment changer le thème ?`, sup_a3:`Ouvrez Réglages → Thème et choisissez la couleur souhaitée. Sur les appareils compatibles, l'icône de l'app s'adapte à votre thème.`,
      sup_q4:`Comment retirer les publicités ?`, sup_a4:`Passez à Premium depuis l'app pour une expérience sans publicité et des thèmes supplémentaires.`,
      sup_q5:`Comment restaurer mon achat ?`, sup_a5:`Allez dans Réglages → Restaurer les achats. Connectez-vous avec le même identifiant Apple utilisé lors de l'achat.`,
      sup_q6:`Comment supprimer mes données ?`, sup_a6:`Toutes les données sont stockées localement. Vous pouvez tout effacer via Réglages → Effacer les données, ou en désinstallant l'app.`,
      priv_hero_title:`Politique de confidentialité`, priv_hero_sub:`Comment Study Sprint Timer traite vos données.`, priv_updated:`Dernière mise à jour : 7 juillet 2026`,
      priv_h1:`Aperçu`, priv_p1:`Study Sprint Timer (« l'app ») est un minuteur d'étude de concentration et Pomodoro hors ligne. Nous l'avons conçu dans le respect de votre vie privée. L'app ne nécessite aucun compte et ne demande ni nom, ni e-mail, ni donnée personnelle.`,
      priv_h2:`Informations que nous collectons`, priv_p2:`<strong>Nous (le développeur) ne collectons ni ne stockons vos données personnelles sur aucun serveur.</strong> Toutes les données de l'app — sessions, séries, statistiques et réglages comme le thème et la langue — sont stockées <strong>uniquement en local sur votre appareil</strong>. Elles ne nous sont pas transmises.`,
      priv_h3:`Publicité et services tiers`, priv_p3:`La version gratuite affiche des publicités via <strong>Google AdMob</strong>. Pour diffuser et mesurer les publicités, Google peut collecter et traiter certaines informations, comme un identifiant publicitaire, l'adresse IP et des données d'usage générales. Ce traitement est effectué par Google, pas par nous.`,
      priv_l3:`<li>Nous utilisons la User Messaging Platform de Google pour recueillir votre consentement lorsque requis.</li><li>Sur iOS, nous affichons l'invite App Tracking Transparency d'Apple. Si vous refusez le suivi, l'app fonctionne pleinement et vous pouvez voir des publicités moins pertinentes.</li><li>En savoir plus dans la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Politique de confidentialité de Google</a>.</li>`,
      priv_p3b:`Acheter <strong>Premium</strong> supprime toutes les publicités.`,
      priv_h4:`Achats`, priv_p4:`Les abonnements et achats sont traités par <strong>Apple</strong> via l'App Store. Nous ne recevons ni ne stockons jamais vos informations de paiement. Le traitement par Apple est régi par la <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Politique de confidentialité d'Apple</a>.`,
      priv_h5:`Partage des données`, priv_p5:`Nous ne vendons, ne louons ni n'échangeons vos informations. Nous ne partageons vos données d'étude stockées localement avec personne.`,
      priv_h6:`Vos choix`, priv_l6:`<li>Gérez le suivi via Réglages iOS → Confidentialité et sécurité → Suivi.</li><li>Réinitialisez votre identifiant publicitaire dans les Réglages iOS.</li><li>Supprimez entièrement les publicités en achetant Premium.</li><li>Effacez toutes les données locales à tout moment via Réglages → Effacer les données, ou en désinstallant l'app.</li>`,
      priv_h7:`Confidentialité des enfants`, priv_p7:`L'app ne s'adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment de données personnelles d'enfants.`,
      priv_h8:`Modifications de cette politique`, priv_p8:`Nous pouvons mettre à jour cette politique de temps à autre. Les changements importants seront indiqués sur cette page avec une nouvelle date de « Dernière mise à jour ».`,
      priv_h9:`Contact`, priv_p9:`Des questions sur cette Politique de confidentialité ? Contactez-nous à <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      term_hero_title:`Conditions d'utilisation`, term_hero_sub:`Les règles d'utilisation de Study Sprint Timer.`, term_updated:`Dernière mise à jour : 7 juillet 2026`,
      term_h1:`1. Acceptation des conditions`, term_p1:`En téléchargeant ou en utilisant Study Sprint Timer (« l'app »), vous acceptez ces Conditions d'utilisation. Si vous n'êtes pas d'accord, veuillez ne pas utiliser l'app.`,
      term_h2:`2. Le service`, term_p2:`Study Sprint Timer est un minuteur d'étude de concentration et Pomodoro hors ligne. Il vous aide à réaliser des sessions minutées, à suivre des séries et à rester motivé. L'app fonctionne sans compte et stocke vos données localement.`,
      term_h3:`3. Licence`, term_p3:`Nous vous accordons une licence personnelle, non transférable et non exclusive d'utilisation de l'app sur des appareils Apple que vous possédez ou contrôlez, conformément aux Conditions d'Apple Media Services et au <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Contrat de licence utilisateur final (CLUF) standard d'Apple</a>.`,
      term_h4:`4. Publicité`, term_p4:`La version gratuite affiche des publicités fournies par Google AdMob. En utilisant la version gratuite, vous acceptez que des publicités puissent s'afficher. L'achat de Premium supprime les publicités.`,
      term_h5:`5. Abonnements et achats`, term_l5:`<li><strong>Premium</strong> est proposé sous forme d'abonnement à renouvellement automatique (par exemple, hebdomadaire ou annuel).</li><li>Le paiement est débité de votre identifiant Apple à la confirmation de l'achat.</li><li>Les abonnements se renouvellent automatiquement sauf annulation au moins 24 heures avant la fin de la période en cours.</li><li>Vous pouvez gérer ou annuler vos abonnements à tout moment dans les réglages de votre identifiant Apple.</li><li>Tous les achats sont traités et gérés par Apple, selon ses conditions.</li>`,
      term_h6:`6. Utilisation acceptable`, term_p6:`Vous acceptez d'utiliser l'app uniquement à des fins légales et personnelles, et de ne pas en abuser, la désosser ou perturber l'app ou sa sécurité.`,
      term_h7:`7. Avertissement santé`, term_p7:`Study Sprint Timer est un outil de productivité et de concentration. Il ne fournit aucun conseil médical, psychologique ou professionnel et ne doit pas être utilisé à cette fin.`,
      term_h8:`8. Exclusion de garanties`, term_p8:`L'app est fournie « telle quelle » et « selon disponibilité », sans garantie d'aucune sorte, dans la mesure maximale permise par la loi. Nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur.`,
      term_h9:`9. Limitation de responsabilité`, term_p9:`Dans la mesure maximale permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs découlant de votre utilisation de l'app.`,
      term_h10:`10. Modifications de ces conditions`, term_p10:`Nous pouvons mettre à jour ces Conditions de temps à autre. L'utilisation continue de l'app après modifications vaut acceptation des Conditions mises à jour.`,
      term_h11:`11. Contact`, term_p11:`Des questions sur ces Conditions ? Contactez-nous à <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      ft_desc:`Concentration, Pomodoro & séries — un minuteur d'étude simple et hors ligne.`, ft_badge:`Bientôt sur l'App Store`,
      ft_productH:`Produit`, ft_supportH:`Support`, ft_legalH:`Légal`,
      ft_features:`Fonctionnalités`, ft_how:`Comment ça marche`, ft_reviews:`Avis`, ft_help:`Centre d'aide`, ft_contact:`Nous contacter`, ft_privacy:`Politique de confidentialité`, ft_terms:`Conditions d'utilisation`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    },
    ru: {
      nav_home:`Главная`, nav_privacy:`Конфиденциальность`, nav_terms:`Условия`, nav_support:`Поддержка`, nav_help:`Помощь`, nav_contact:`Связаться`,
      sup_hero_title:`Поддержка и центр помощи`, sup_hero_sub:`Мы здесь, чтобы помочь вам сосредоточиться.`,
      sup_get_title:`Свяжитесь с нами`, sup_get_desc:`Нужна помощь, нашли ошибку или есть идея? Будем рады вашему сообщению.`,
      sup_get_btn:`Написать в поддержку`, sup_or_pre:`Или напишите нам напрямую на`, sup_or_post:`. Обычно отвечаем в течение нескольких дней.`,
      sup_faq_title:`Частые вопросы`,
      sup_q1:`Работает ли приложение офлайн?`, sup_a1:`Да. Study Sprint Timer работает офлайн — для учебных сессий и отслеживания прогресса не нужны аккаунт или интернет.`,
      sup_q2:`Как работают серии?`, sup_a2:`Завершите хотя бы одну учебную сессию за день, чтобы сохранить серию. Пропустите день — и она сбросится, мягко напоминая быть последовательным.`,
      sup_q3:`Как сменить тему?`, sup_a3:`Откройте Настройки → Тема и выберите любой цвет. На поддерживаемых устройствах иконка приложения меняется в тон вашей теме.`,
      sup_q4:`Как убрать рекламу?`, sup_a4:`Перейдите на Premium в приложении, чтобы избавиться от рекламы и открыть дополнительные темы.`,
      sup_q5:`Как восстановить покупку?`, sup_a5:`Откройте Настройки → Восстановить покупки. Убедитесь, что вошли с тем же Apple ID, что и при покупке.`,
      sup_q6:`Как удалить мои данные?`, sup_a6:`Все данные хранятся локально. Вы можете очистить всё в Настройки → Очистить данные или удалив приложение.`,
      priv_hero_title:`Политика конфиденциальности`, priv_hero_sub:`Как Study Sprint Timer обрабатывает ваши данные.`, priv_updated:`Обновлено: 7 июля 2026`,
      priv_h1:`Обзор`, priv_p1:`Study Sprint Timer («приложение») — это офлайн-таймер для фокуса и учёбы по методу Pomodoro. Мы создали его с уважением к вашей приватности. Приложению не нужен аккаунт, и оно не запрашивает ваше имя, e-mail или любые персональные данные.`,
      priv_h2:`Какие данные мы собираем`, priv_p2:`<strong>Мы (разработчик) не собираем и не храним ваши персональные данные на серверах.</strong> Все данные приложения — сессии, серии, статистика и настройки (тема, язык) — хранятся <strong>только локально на вашем устройстве</strong> и не передаются нам.`,
      priv_h3:`Реклама и сторонние сервисы`, priv_p3:`Бесплатная версия показывает рекламу через <strong>Google AdMob</strong>. Для показа и измерения рекламы Google может собирать и обрабатывать некоторые данные, например рекламный идентификатор, IP-адрес и общие данные об использовании. Эту обработку выполняет Google, а не мы.`,
      priv_l3:`<li>Мы используем Google User Messaging Platform, чтобы запросить ваше согласие там, где это необходимо.</li><li>На iOS мы показываем запрос App Tracking Transparency от Apple. Если вы откажетесь от отслеживания, приложение продолжит работать полностью, а реклама может стать менее релевантной.</li><li>Подробнее в <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Политике конфиденциальности Google</a>.</li>`,
      priv_p3b:`Покупка <strong>Premium</strong> убирает всю рекламу.`,
      priv_h4:`Покупки`, priv_p4:`Подписки и покупки обрабатывает <strong>Apple</strong> через App Store. Мы никогда не получаем и не храним ваши платёжные данные. Обработка со стороны Apple регулируется <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">Политикой конфиденциальности Apple</a>.`,
      priv_h5:`Передача данных`, priv_p5:`Мы не продаём, не сдаём в аренду и не обмениваем вашу информацию. Мы не передаём никому ваши локально хранимые учебные данные.`,
      priv_h6:`Ваш выбор`, priv_l6:`<li>Управляйте отслеживанием в Настройки iOS → Конфиденциальность и безопасность → Отслеживание.</li><li>Сбросьте рекламный идентификатор в настройках iOS.</li><li>Полностью уберите рекламу, купив Premium.</li><li>Удалите все локальные данные в любой момент через Настройки → Очистить данные или удалив приложение.</li>`,
      priv_h7:`Конфиденциальность детей`, priv_p7:`Приложение не предназначено для детей младше 13 лет, и мы сознательно не собираем персональные данные детей.`,
      priv_h8:`Изменения этой политики`, priv_p8:`Мы можем время от времени обновлять эту политику. Существенные изменения будут отражены на этой странице с новой датой «Обновлено».`,
      priv_h9:`Контакты`, priv_p9:`Вопросы по этой Политике конфиденциальности? Напишите нам на <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      term_hero_title:`Условия использования`, term_hero_sub:`Правила использования Study Sprint Timer.`, term_updated:`Обновлено: 7 июля 2026`,
      term_h1:`1. Принятие условий`, term_p1:`Загружая или используя Study Sprint Timer («приложение»), вы соглашаетесь с этими Условиями использования. Если вы не согласны, пожалуйста, не используйте приложение.`,
      term_h2:`2. Сервис`, term_p2:`Study Sprint Timer — это офлайн-таймер для фокуса и учёбы по методу Pomodoro. Он помогает проводить сессии по таймеру, отслеживать серии и оставаться мотивированным. Приложение работает без аккаунта и хранит данные локально.`,
      term_h3:`3. Лицензия`, term_p3:`Мы предоставляем вам личную, непередаваемую, неисключительную лицензию на использование приложения на устройствах Apple, которыми вы владеете или управляете, в соответствии с Условиями Apple Media Services и стандартным <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener">Лицензионным соглашением Apple (EULA)</a>.`,
      term_h4:`4. Реклама`, term_p4:`Бесплатная версия показывает рекламу от Google AdMob. Используя бесплатную версию, вы соглашаетесь на показ рекламы. Покупка Premium убирает рекламу.`,
      term_h5:`5. Подписки и покупки`, term_l5:`<li><strong>Premium</strong> предлагается как автопродлеваемая подписка (например, недельные или годовые планы).</li><li>Оплата списывается с вашего Apple ID при подтверждении покупки.</li><li>Подписки продлеваются автоматически, если не отменены не позднее чем за 24 часа до конца текущего периода.</li><li>Вы можете управлять подписками или отменить их в любой момент в настройках Apple ID.</li><li>Все покупки обрабатываются и управляются Apple в соответствии с её условиями.</li>`,
      term_h6:`6. Допустимое использование`, term_p6:`Вы соглашаетесь использовать приложение только в законных личных целях и не злоупотреблять им, не подвергать обратной разработке и не вмешиваться в его работу или безопасность.`,
      term_h7:`7. Отказ по вопросам здоровья`, term_p7:`Study Sprint Timer — инструмент продуктивности и фокуса. Он не даёт медицинских, психологических или профессиональных советов, и на него нельзя полагаться в таких целях.`,
      term_h8:`8. Отказ от гарантий`, term_p8:`Приложение предоставляется «как есть» и «как доступно», без каких-либо гарантий, в максимально разрешённой законом степени. Мы не гарантируем бесперебойную или безошибочную работу.`,
      term_h9:`9. Ограничение ответственности`, term_p9:`В максимально разрешённой законом степени мы не несём ответственности за косвенные, случайные или последующие убытки, возникшие в результате использования приложения.`,
      term_h10:`10. Изменения этих условий`, term_p10:`Мы можем время от времени обновлять эти Условия. Продолжение использования приложения после изменений означает принятие обновлённых Условий.`,
      term_h11:`11. Контакты`, term_p11:`Вопросы по этим Условиям? Напишите нам на <a href="mailto:studysprinttimer@gmail.com">studysprinttimer@gmail.com</a>.`,
      ft_desc:`Фокус, Pomodoro и серии — простой офлайн-таймер для учёбы.`, ft_badge:`Скоро в App Store`,
      ft_productH:`Продукт`, ft_supportH:`Поддержка`, ft_legalH:`Правовое`,
      ft_features:`Функции`, ft_how:`Как это работает`, ft_reviews:`Отзывы`, ft_help:`Центр помощи`, ft_contact:`Связаться`, ft_privacy:`Политика конфиденциальности`, ft_terms:`Условия использования`,
      ft_copy:`© 2026 Study Sprint Timer · Harun Doğdu`
    }
  };

  function applyLang(l) {
    var d = I18N[l] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] != null) el.innerHTML = d[k];
    });
    document.documentElement.lang = l;
    var code = document.getElementById('langCode');
    if (code) code.textContent = l.toUpperCase();
    document.querySelectorAll('.lang-menu button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === l);
    });
    try { localStorage.setItem('sst_lang', l); } catch (e) {}
  }

  var saved = null; try { saved = localStorage.getItem('sst_lang'); } catch (e) {}
  var navL = (navigator.language || 'en').slice(0, 2).toLowerCase();
  var init = I18N[saved] ? saved : (I18N[navL] ? navL : 'en');

  var lang = document.getElementById('lang');
  if (lang) {
    var btn = lang.querySelector('.lang-btn');
    btn.addEventListener('click', function (e) { e.stopPropagation(); lang.classList.toggle('open'); });
    document.addEventListener('click', function () { lang.classList.remove('open'); });
    lang.querySelectorAll('.lang-menu button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); lang.classList.remove('open'); });
    });
  }
  applyLang(init);

  var toggle = document.getElementById('themeToggle');
  if (toggle) toggle.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('sst_theme', next); } catch (e) {}
  });
})();
