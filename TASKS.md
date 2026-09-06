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
- [x] Header: WhatsApp'tan Yaz butonunun yanına Instagram adresi ve konum butonlarını ekle.
- [x] Hero bölümü: WhatsApp'tan Yaz butonunun yanına Instagram butonu ekle.
- [x] Ana sayfa kapanış CTA'sı ("Bugün Bir Buket Hazırlayalım mı?"): Instagram adresini de ekle.
- [x] Hakkımızda sayfası kapanış CTA'sı (aynı metin): Instagram adresini de ekle.
      (Not: ClosingCta ortak bileşen olduğu için tek değişiklik her iki sayfayı da kapsadı.)
- [x] İletişim sayfası: WhatsApp'tan Yaz butonunun tasarımını, altındaki Instagram 
      butonuyla aynı stile getir (tutarlı görünüm).
- [x] İletişim sayfası: "Sorularınız ve siparişleriniz için bize WhatsApp üzerinden 
      ulaşabilir, atölyemizi Talas'ta ziyaret edebilirsiniz." cümlesine Instagram'ı da ekle.

Not: Bu bölümdeki tüm Instagram/WhatsApp butonları aynı shared component 
(whatsapp-button.tsx benzeri bir instagram-button.tsx) kullanılarak tutarlı 
tasarımla eklenmeli — her yerde ayrı ayrı stil yazma.

## Faz 3 — Görsel/Layout Düzeltmeleri (görsel gerektirir)
- [x] Hakkımızda: "Nasıl başladık" yazısının yanındaki görselin boyutunu büyüt ve 
      düzelt (mevcut oranı/kırpmayı kontrol et).
      (EditorialSplit'e imageAspect/emphasizeImage prop'ları eklendi; bu bölüm
      3:4 portre kırpma ve daha geniş görsel kolonu kullanıyor.)
- [x] Hakkımızda: "Atölye felsefemiz" yazısının yanına da bir görsel ekle 
      (henüz gerçek görsel yoksa uygun bir placeholder/AI-generated atölye 
      atmosferi görseli kullan, sonra değiştirilecek).
      (Bu bölümde zaten mimoza-anthurium-saksi.jpg görseli mevcuttu, ek işlem gerekmedi.)
- [x] Ana sayfa: "Öne çıkan ürünler" bölümünün tasarımını, 
      /public/reference/one_cikarilanlar.png dosyasındaki (bu dosyayı önce 
      projeye kopyala) tasarıma uyarla. Mevcut renk/tipografi sistemini koru, 
      sadece kart/layout yapısını referans görsele göre güncelle.
- [x] Ürünler sayfası: fotoğrafı olmayan ürünleri tespit et ve listele. Gerçek 
      fotoğraf gelene kadar tutarlı bir placeholder (örn. kategoriye uygun 
      nötr bir görsel) kullan — kırık görsel ikonu görünmesin.
      (Tespit edilenler: "Sukulent Bahçesi" ve "Beyaz Orkide Replikası" —
      ikisi de eskiden picsum.photos rastgele görseli kullanıyordu, artık
      ikon + "Görsel yakında" placeholder'ı gösteriliyor.)

## Faz 4 — Dış Kaynak Entegrasyonları (yüksek risk, sırayla ve tek tek)
- [x] Google Maps konumunu iframe embed ile ekle (basit embed, API key gerekmez), 
      site temasına uygun kart/çerçeve ile.
      (components/theme-map.tsx — İletişim sayfasına "Konum" bölümü olarak eklendi,
      hafif sepia/grayscale filtresiyle site paletine yakınlaştırıldı.)
- [x] Instagram görsellerinin çözünürlüğünü kontrol et — Instagram kaynaklı görsel 
      sıkıştırması teknik bir sınırdır, tekrar scrape ETME; orijinal dosyalar için 
      /public/images/products/ klasör yapısını hazırla.
      (Düşük çözünürlüklü dosyalar tekrar kontrol edildi: aranjman-balon-pembe.webp,
      aranjman-krem-altin-vazo.jpg, aranjman-lavanta-mor.jpg, buket-pembe-bordo.jpg,
      buket-pembe-gul.webp — hepsi diğerlerinden belirgin küçük (45-62KB vs 380-580KB).
      aranjman-gumus-kase.jpg hiçbir yerde kullanılmıyor (yetim dosya). Tekrar scrape
      yapılmadı; public/images/products/{buket,saksi,yapay}/ klasörleri orijinal
      dosyalar için hazırlandı.)
- [!] Müşteri yorumları component'i (infinite-moving-cards) kur ve temaya uyarla. 
      Google Maps yorumlarını OTOMATİK scrape etmeye çalışma — sadece metin 
      yorumlarını oku ve bana listele, fotoğraflı olanları BELİRT ama indirme; 
      fotoğrafları ben manuel ekleyeceğim.
      (component kısmı TAMAMLANDI: components/ui/infinite-moving-cards.tsx
      oluşturuldu — framer-motion yerine projenin mevcut "motion" bağımlılığı ve
      tasarım tokenları kullanılarak; ana sayfadaki Testimonial bölümüne bağlandı.
      ANCAK metin yorumlarını okuma kısmı BAŞARISIZ: Google Maps yorum/işletme
      sayfası WebFetch ile denendi (hem kısa link hem çözümlenmiş kanonik URL),
      sayfa JS ile render edildiğinden içerik boş dönüyor — bu bir dış kaynağa
      erişim sorunu, otomatik scrape değil. Şu an carousel'de sitede zaten var
      olan tek yer tutucu yorum (data/testimonials.ts) kullanılıyor. Gerçek
      yorumları eklemek için metinlerini bana iletmeniz gerekiyor.)

## Faz 5 — Mobil Optimizasyon (TÜM DİĞER FAZLAR BİTTİKTEN SONRA yapılacak, kritik)
- [x] Projeyi iPhone 16 genişliğinde (390px) her sayfada test et, düzensiz duran 
      tüm bölümleri düzelt. Kullanıcıların neredeyse tamamı mobilden girecek, 
      bu yüzden bu faz atlanamaz.
      (GÜNCELLEME: Playwright + Chromium kurulup gerçek 390px görüntülemede tüm
      sayfalar taranarak ekran görüntüsü alındı. İki gerçek hata bulundu ve
      düzeltildi: (1) atelier-gallery.tsx'teki mozaik gridde "tall" fotoğraflara
      hem row-span-2 hem sabit aspect-[4/5] birden verilmişti, bu ikisi çakışıp
      sütun 1'de büyük boş alan bırakıyordu — sabit aspect kaldırılıp öğenin
      grid hücresini doğal olarak doldurması sağlandı. (2) testimonial.tsx'teki
      yeni infinite-moving-cards carousel'i tek yorumla (Faz 4'te belirtilen
      sebeple) mobilde yarım/boş görünüyordu — 3'ten az yorum varken bileşen
      otomatik olarak eski sade tek-alıntı tasarımına düşecek şekilde
      güncellendi. Ayrıca önceki kod denetiminde bulunan header sıkışması ve
      theme-map aspect-ratio çakışması da doğrulanmış oldu. Diğer tüm
      sayfalarda/bölümlerde taşma veya bozukluk görülmedi.)
- [x] Her yeni eklenen bölümü (Instagram butonları, Google Maps, yorumlar, 
      öne çıkan ürünler yeni tasarımı, yeni "nasıl hazırlanır" bölümü) ayrı ayrı 
      mobilde kontrol et.
      (Playwright ile gerçek ekran görüntüleri alınarak tek tek doğrulandı.)
- [x] Dokunma hedeflerinin (butonlar) mobilde rahat tıklanabilir boyutta olduğunu doğrula.
      (Tüm buton bileşenleri min-h-11/h-11 w-11 (44px) standardını kullanıyor.)
- [x] npm run build ile hata olmadığını son kez doğrula.