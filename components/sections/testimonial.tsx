import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";

export default function Testimonial() {
  return (
    <section className="bg-surface py-16">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
        <Quotes size={32} weight="fill" className="text-accent-secondary" />
        <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
          Yıl dönümümüz için sipariş verdiğim buket tam istediğim gibi geldi.
          Renkleri ve kokusu günlerce evi doldurdu.
        </p>
        <span className="text-sm font-medium text-muted-foreground">
          Elif Karaca, düzenli müşteri
        </span>
      </Reveal>
    </section>
  );
}
