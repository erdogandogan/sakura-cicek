import { MagnifyingGlass, WhatsappLogo, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { FeatureSteps } from "@/components/ui/feature-steps";

const orderSteps = [
  {
    step: "Adım 1",
    title: "Ürünü Seç",
    icon: <MagnifyingGlass size={20} weight="light" />,
    image: "/images/instagram/buket-beyaz-krem.jpg",
  },
  {
    step: "Adım 2",
    title: "WhatsApp'tan Yaz",
    icon: <WhatsappLogo size={20} weight="light" />,
    image: "/images/instagram/orkide-turuncu-saksi.jpg",
  },
  {
    step: "Adım 3",
    title: "Detayları Konuşalım",
    icon: <ChatCircleDots size={20} weight="light" />,
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
