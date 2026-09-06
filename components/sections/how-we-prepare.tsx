import { Drop } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

export default function HowWePrepare() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="flex flex-col justify-center gap-4">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Ürünler Nasıl Hazırlanır
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Her buketi, o günün taze çiçekleriyle elimizle hazırlıyoruz. Seri
            üretim yok; her sipariş kendi zamanını ve özenini hak ediyor.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col justify-center gap-3 rounded-panel bg-surface p-8"
        >
          <Drop size={28} weight="light" className="text-accent-secondary" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            Çiçek Besini Hediyemiz
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Her buketin içine, çiçeklerinizin daha uzun süre taze ve canlı
            kalmasına yardımcı olan çiçek besinini ekliyoruz.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
