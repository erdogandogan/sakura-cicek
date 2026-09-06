import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp-button";
import { Reveal } from "@/components/reveal";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8 lg:pt-16">
      <Reveal className="order-2 flex flex-col items-start gap-6 lg:order-1">
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Her Gün Elle Hazırlanan Taze Buketler
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
          Talas&apos;taki atölyemizden sevdiklerinize özel buketler, saksı
          çiçekleri ve yapay çiçek düzenlemeleri hazırlıyoruz.
        </p>
        <div className="flex flex-wrap gap-3">
          <WhatsAppButton label="WhatsApp'tan Yaz" />
          <Link
            href="/urunler"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-text hover:text-accent-text"
          >
            Ürünleri Gör
          </Link>
        </div>
      </Reveal>

      <Reveal
        delay={0.1}
        className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-panel lg:order-2"
      >
        <Image
          src="/images/instagram/buket-bordo-karisik.jpg"
          alt="Sakura Çiçek Atölyesi'nde hazırlanan protea ve dahlia ile bir buket"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
