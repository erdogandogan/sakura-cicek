import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import { Reveal } from "@/components/reveal";

const HERO_IMAGE = "/images/hero-flowers.webp";
const HERO_ALT =
  "Sakura Çiçek Atölyesi'nde hazırlanan stargazer zambak, gül ve protea ile bir çiçek kümesi";

function HeroCta() {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-3">
      <WhatsAppButton
        label="WhatsApp"
        className="shadow-lg shadow-accent/40"
      />
      <InstagramButton variant="soft" />
      <Link
        href="/urunler"
        className="inline-flex min-h-11 items-center justify-center border border-border px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:border-accent-text hover:text-accent-text active:translate-y-0"
      >
        Ürünlerimiz
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Masaüstü: sağdan taşan görsel + sol tarafta metin */}
      <div className="relative hidden lg:flex lg:min-h-[640px] lg:items-center">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[50%] xl:w-[46%]">
          <Image
            src={HERO_IMAGE}
            alt={HERO_ALT}
            fill
            priority
            sizes="46vw"
            className="object-cover object-[62%_38%] [mask-image:linear-gradient(to_right,transparent,white_16%)]"
          />
        </div>

        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-lg flex-col gap-6">
            <h1 className="font-display text-6xl font-semibold leading-[1.05] tracking-tight text-foreground xl:text-7xl">
              Her Gün <span className="font-normal italic text-accent-text">Elle</span>
              <br />
              Hazırlanan Taze Buketler
            </h1>
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              Talas&apos;taki atölyemizden sevdiklerinize özel buketler, saksı
              çiçekleri ve yapay çiçek düzenlemeleri hazırlıyoruz.
            </p>
            <HeroCta />
          </div>
        </Reveal>
      </div>

      {/* Mobil ve tablet: çiçeğin bulanıklaşan alt kısmına metnin taştığı, iç içe geçen düzen */}
      <div className="lg:hidden">
        <Reveal className="relative h-[380px] w-full sm:h-[460px]">
          <Image
            src={HERO_IMAGE}
            alt={HERO_ALT}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[55%_30%]"
          />
          <div className="absolute inset-0 [background:linear-gradient(to_bottom,transparent_0%,transparent_42%,var(--background)_75%,var(--background)_100%)]" />
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative z-10 -mt-16 flex flex-col gap-5 px-4 pb-14 sm:-mt-20 sm:px-6"
        >
          <h1 className="max-w-[15ch] font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
            Her Gün <span className="font-normal italic text-accent-text">Elle</span>{" "}
            Hazırlanan Taze Buketler
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            Talas&apos;taki atölyemizden sevdiklerinize özel buketler, saksı
            çiçekleri ve yapay çiçek düzenlemeleri hazırlıyoruz.
          </p>
          <HeroCta />
        </Reveal>
      </div>
    </section>
  );
}
