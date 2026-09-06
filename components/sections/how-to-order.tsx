import { MagnifyingGlass, WhatsappLogo, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    icon: MagnifyingGlass,
    title: "Ürünü Seç",
    description: "Ürünler sayfasından beğendiğin buketi veya çiçeği seç.",
  },
  {
    icon: WhatsappLogo,
    title: "WhatsApp'tan Yaz",
    description: "Seçtiğin ürünü tek dokunuşla WhatsApp üzerinden bize ilet.",
  },
  {
    icon: ChatCircleDots,
    title: "Detayları Konuşalım",
    description: "Teslimat veya atölyeden teslim alma seçeneklerini birlikte planlayalım.",
  },
];

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mb-10 max-w-xl">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
          Nasıl Sipariş Verilir
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-border">
        {steps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i * 0.08}
            className="flex flex-col gap-3 md:px-8 md:first:pl-0"
          >
            <step.icon size={28} weight="light" className="text-accent-secondary" />
            <h3 className="font-display text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
