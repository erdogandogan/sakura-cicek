import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock } from "@phosphor-icons/react/dist/ssr";
import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import { Reveal } from "@/components/reveal";
import { shopInfo } from "@/lib/shop-info";
import HoursStatus from "@/components/hours-status";

export const metadata: Metadata = {
  title: "İletişim | Sakura Çiçek Atölyesi",
  description:
    "Sakura Çiçek Atölyesi'ne WhatsApp üzerinden ulaşın, Talas'taki atölyemizi ziyaret edin.",
};

export default function IletisimPage() {
  return (
    <div>
      <Reveal className="mx-auto max-w-3xl px-4 pb-4 pt-12 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          İletişim
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Sorularınız ve siparişleriniz için bize WhatsApp üzerinden
          ulaşabilir, Instagram&apos;dan takip edebilir, atölyemizi
          Talas&apos;ta ziyaret edebilirsiniz.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <Reveal className="flex flex-col items-start gap-6">
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton label="WhatsApp'tan Yaz" />
            <InstagramButton label={shopInfo.instagramHandle} />
          </div>

          <a
            href={shopInfo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-foreground hover:text-accent-text"
          >
            <MapPin size={20} className="mt-0.5 shrink-0 text-accent-secondary" />
            {shopInfo.address}
          </a>

          <a
            href={shopInfo.phoneLink}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-text"
          >
            <Phone size={20} className="text-accent-secondary" />
            {shopInfo.phone}
          </a>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-panel"
        >
          <Image
            src="/images/instagram/aranjman-balon-pembe.webp"
            alt="Sakura Çiçek Atölyesi'nden özel gün aranjmanı"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-accent-secondary" />
          <h2 className="font-display text-xl font-semibold text-foreground">
            Çalışma Saatleri
          </h2>
        </div>
        <div className="mt-4">
          <HoursStatus />
        </div>
      </section>
    </div>
  );
}
