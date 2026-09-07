import { Reveal } from "@/components/reveal";
import { FeatureSteps } from "@/components/ui/feature-steps";

const orderSteps = [
  {
    step: "Adım 1",
    title: "Ürünü Seç",
    content: "Ürünler sayfasından beğendiğin buketi veya çiçeği seç.",
    image: "/images/instagram/buket-beyaz-krem.jpg",
  },
  {
    step: "Adım 2",
    title: "WhatsApp'tan Yaz",
    content: "Seçtiğin ürünü tek dokunuşla WhatsApp üzerinden bize ilet.",
    image: "/images/instagram/orkide-turuncu-saksi.jpg",
  },
  {
    step: "Adım 3",
    title: "Detayları Konuşalım",
    content:
      "Teslimat veya atölyeden teslim alma seçeneklerini birlikte planlayalım.",
    image: "/images/instagram/aranjman-krem-altin-vazo.jpg",
  },
];

export default function HowToOrder() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <FeatureSteps
            features={orderSteps}
            title="Nasıl Sipariş Verilir"
            autoPlayInterval={3500}
          />
        </Reveal>
      </div>
    </section>
  );
}
