import { MagnifyingGlass, WhatsappLogo, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Ürünü Seç",
    description: "Ürünler sayfasından beğendiğin buketi veya çiçeği seç.",
  },
  {
    number: "02",
    icon: WhatsappLogo,
    title: "WhatsApp'tan Yaz",
    description: "Seçtiğin ürünü tek dokunuşla WhatsApp üzerinden bize ilet.",
  },
  {
    number: "03",
    icon: ChatCircleDots,
    title: "Detayları Konuşalım",
    description: "Teslimat veya atölyeden teslim alma seçeneklerini birlikte planlayalım.",
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Nasıl Sipariş Verilir
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.1}
              className="relative flex flex-col gap-4 bg-background p-8"
            >
              <span className="font-display text-6xl font-semibold leading-none text-accent-soft">
                {step.number}
              </span>
              <div className="flex h-14 w-14 items-center justify-center bg-accent-soft">
                <step.icon size={30} weight="light" className="text-accent-secondary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
