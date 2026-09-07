import { MagnifyingGlass, WhatsappLogo, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { FeatureSteps } from "@/components/ui/feature-steps";

const orderSteps = [
  {
    step: "Adım 1",
    title: "Ürünü Seç",
    icon: <MagnifyingGlass size={28} weight="light" />,
  },
  {
    step: "Adım 2",
    title: "WhatsApp'tan Yaz",
    icon: <WhatsappLogo size={28} weight="light" />,
  },
  {
    step: "Adım 3",
    title: "Detayları Konuşalım",
    icon: <ChatCircleDots size={28} weight="light" />,
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
            showImage={false}
          />
        </Reveal>
      </div>
    </section>
  );
}
