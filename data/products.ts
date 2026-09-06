export type ProductCategory = "buket" | "saksi" | "yapay";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string | null;
  description: string;
}

export const categoryLabels: Record<ProductCategory, string> = {
  buket: "Buket",
  saksi: "Saksı Çiçeği",
  yapay: "Yapay Çiçek",
};

export const products: Product[] = [
  {
    id: "gun-isigi-buketi",
    name: "Gün Işığı Buketi",
    category: "buket",
    image: "/images/instagram/buket-beyaz-mor-zambak.jpg",
    description:
      "Beyaz ve mor zambaklarla hazırlanan, güne neşe katan ferah bir buket.",
  },
  {
    id: "zarafet-buketi",
    name: "Zarafet Buketi",
    category: "buket",
    image: "/images/instagram/buket-pembe-gul.webp",
    description:
      "Pudra pembesi güllerden oluşan, sade ve zarif bir seçim.",
  },
  {
    id: "kir-cicegi-buketi",
    name: "Kır Çiçeği Buketi",
    category: "buket",
    image: "/images/instagram/buket-bordo-karisik.jpg",
    description:
      "Protea, dahlia ve kasımpatının bir araya geldiği, dokulu ve rengarenk bir buket.",
  },
  {
    id: "orkide-saksisi",
    name: "Orkide Saksısı",
    category: "saksi",
    image: "/images/instagram/orkide-turuncu-saksi.jpg",
    description:
      "Zarif duruşuyla salonlara ve ofislere uzun süre eşlik eden turuncu tonlarında orkide.",
  },
  {
    id: "sukulent-bahcesi",
    name: "Sukulent Bahçesi",
    category: "saksi",
    image: null,
    description:
      "Mini sukulentlerden oluşan, az bakım isteyen sevimli bir saksı düzenlemesi.",
  },
  {
    id: "mimoza-anthurium-aranjmani",
    name: "Mimoza ve Anthurium Aranjmanı",
    category: "saksi",
    image: "/images/instagram/mimoza-anthurium-saksi.jpg",
    description:
      "Sarı mimoza ve beyaz anthuriumun bir araya geldiği, seramik saksıda canlı bir düzenleme.",
  },
  {
    id: "ipek-lavanta-demeti",
    name: "Lavanta Aranjmanı",
    category: "yapay",
    image: "/images/instagram/aranjman-lavanta-mor.jpg",
    description:
      "Mor tonlarında lavanta ve kurutulmuş güllerle hazırlanan, uzun süre solmayan bir düzenleme.",
  },
  {
    id: "beyaz-orkide-replikasi",
    name: "Beyaz Orkide Replikası",
    category: "yapay",
    image: null,
    description:
      "Bakım gerektirmeyen, gerçekçi dokusuyla öne çıkan yapay orkide düzenlemesi.",
  },
  {
    id: "sonbahar-yaprak-duzenlemesi",
    name: "Altın Vazo Aranjmanı",
    category: "yapay",
    image: "/images/instagram/aranjman-krem-altin-vazo.jpg",
    description:
      "Krem güller ve kurutulmuş detaylarla hazırlanan, sıcak tonlarda zarif bir vazo düzenlemesi.",
  },
];
