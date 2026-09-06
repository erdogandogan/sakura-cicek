# Yapılacaklar

## Faz 1 — Metin/İçerik Düzenlemeleri (düşük risk)
- [x] Çalışma saatlerini güncelle: Pazar Kapalı, Pazartesi-Cumartesi 09:00-20:00. 
      Tasarımını "bugün açık/kapalı" vurgusu olacak şekilde iyileştir.
- [x] Hakkımızda sayfası: "Ayşe Yılmaz, kurucu" bölümünü kaldır.
- [x] Footer'dan "Talas'ta küçük bir atölyeden, her gün elle hazırlanan buketler ve 
      çiçek düzenlemeleri." yazısını sil.
- [x] Telefon numarasını (0533 090 38 00) şu yerlere ekle: footer, iletişim sayfası, 
      header (varsa iletişim bilgisi alanı).
- [x] "Ürünler nasıl hazırlanır" başlıklı yeni bir bölüm oluştur (ana sayfada uygun 
      bir yere, örn. "Nasıl Sipariş Verilir" bölümünün yakınına): ürünlerin özenle, 
      elle hazırlandığından bahseden bir metin yaz; her buketin içine konan çiçek 
      vitamininden (çiçek besini) bahset — çiçeklerin daha uzun süre taze kalmasına 
      yardımcı olduğunu vurgula. Mevcut tasarım diline uygun bir layout kullan.

## Faz 2 — Instagram/WhatsApp Buton Eklemeleri (düşük-orta risk)
- [ ] Header: WhatsApp'tan Yaz butonunun yanına Instagram adresi ve konum butonlarını ekle.
- [ ] Hero bölümü: WhatsApp'tan Yaz butonunun yanına Instagram butonu ekle.
- [ ] Ana sayfa kapanış CTA'sı ("Bugün Bir Buket Hazırlayalım mı?"): Instagram adresini de ekle.
- [ ] Hakkımızda sayfası kapanış CTA'sı (aynı metin): Instagram adresini de ekle.
- [ ] İletişim sayfası: WhatsApp'tan Yaz butonunun tasarımını, altındaki Instagram 
      butonuyla aynı stile getir (tutarlı görünüm).
- [ ] İletişim sayfası: "Sorularınız ve siparişleriniz için bize WhatsApp üzerinden 
      ulaşabilir, atölyemizi Talas'ta ziyaret edebilirsiniz." cümlesine Instagram'ı da ekle.

Not: Bu bölümdeki tüm Instagram/WhatsApp butonları aynı shared component 
(whatsapp-button.tsx benzeri bir instagram-button.tsx) kullanılarak tutarlı 
tasarımla eklenmeli — her yerde ayrı ayrı stil yazma.

## Faz 3 — Görsel/Layout Düzeltmeleri (görsel gerektirir)
- [ ] Hakkımızda: "Nasıl başladık" yazısının yanındaki görselin boyutunu büyüt ve 
      düzelt (mevcut oranı/kırpmayı kontrol et).
- [ ] Hakkımızda: "Atölye felsefemiz" yazısının yanına da bir görsel ekle 
      (henüz gerçek görsel yoksa uygun bir placeholder/AI-generated atölye 
      atmosferi görseli kullan, sonra değiştirilecek).
- [ ] Ana sayfa: "Öne çıkan ürünler" bölümünün tasarımını, 
      /public/reference/one_cikarilanlar.png dosyasındaki (bu dosyayı önce 
      projeye kopyala) tasarıma uyarla. Mevcut renk/tipografi sistemini koru, 
      sadece kart/layout yapısını referans görsele göre güncelle.
- [ ] Ürünler sayfası: fotoğrafı olmayan ürünleri tespit et ve listele. Gerçek 
      fotoğraf gelene kadar tutarlı bir placeholder (örn. kategoriye uygun 
      nötr bir görsel) kullan — kırık görsel ikonu görünmesin.

## Faz 4 — Dış Kaynak Entegrasyonları (yüksek risk, sırayla ve tek tek)
- [ ] Google Maps konumunu iframe embed ile ekle (basit embed, API key gerekmez), 
      site temasına uygun kart/çerçeve ile.
- [ ] Instagram görsellerinin çözünürlüğünü kontrol et — Instagram kaynaklı görsel 
      sıkıştırması teknik bir sınırdır, tekrar scrape ETME; orijinal dosyalar için 
      /public/images/products/ klasör yapısını hazırla.
- [ ] Müşteri yorumları component'i (infinite-moving-cards) kur ve temaya uyarla. 
      Google Maps yorumlarını OTOMATİK scrape etmeye çalışma — sadece metin 
      yorumlarını oku ve bana listele, fotoğraflı olanları BELİRT ama indirme; 
      fotoğrafları ben manuel ekleyeceğim.

## Faz 5 — Mobil Optimizasyon (TÜM DİĞER FAZLAR BİTTİKTEN SONRA yapılacak, kritik)
- [ ] Projeyi iPhone 16 genişliğinde (390px) her sayfada test et, düzensiz duran 
      tüm bölümleri düzelt. Kullanıcıların neredeyse tamamı mobilden girecek, 
      bu yüzden bu faz atlanamaz.
- [ ] Her yeni eklenen bölümü (Instagram butonları, Google Maps, yorumlar, 
      öne çıkan ürünler yeni tasarımı, yeni "nasıl hazırlanır" bölümü) ayrı ayrı 
      mobilde kontrol et.
- [ ] Dokunma hedeflerinin (butonlar) mobilde rahat tıklanabilir boyutta olduğunu doğrula.
- [ ] npm run build ile hata olmadığını son kez doğrula.