import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import { Reveal } from "@/components/reveal";

export default function ClosingCta() {
  return (
    <section className="bg-accent">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-accent-foreground md:text-4xl">
          Bugün Bir Buket Hazırlayalım mı?
        </h2>
        <p className="max-w-md text-accent-foreground/85">
          Aklındaki çiçeği anlat, birlikte en uygun buketi seçelim.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <WhatsAppButton label="WhatsApp'tan Yaz" variant="onAccent" />
          <InstagramButton variant="onAccent" />
        </div>
      </Reveal>
    </section>
  );
}
