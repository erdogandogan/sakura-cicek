import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import { Reveal } from "@/components/reveal";
import { CyclingWord } from "@/components/ui/cycling-word";

const HERO_IMAGE = "/images/hero-flowers-v2.webp";
const HERO_ALT =
  "Sakura Çiçek Atölyesi'nde hazırlanan stargazer zambak, gül ve protea ile bir çiçek kümesi";
const HEADLINE_WORDS = ["Elle", "Özenle", "Sevgiyle"];

function HeroCta() {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-3">
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
      <div className="relative flex min-h-[420px] items-center sm:min-h-[520px] lg:min-h-[640px]">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] sm:w-[45%] lg:w-[50%] xl:w-[46%]">
          <Image
            src={HERO_IMAGE}
            alt={HERO_ALT}
            fill
            priority
            sizes="(max-width: 1024px) 45vw, 46vw"
            className="object-cover object-[68%_42%] [mask-image:linear-gradient(to_right,transparent,white_12%)]"
          />
        </div>

        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex max-w-[58%] flex-col gap-3 sm:max-w-[54%] sm:gap-5 lg:max-w-lg lg:gap-6">
            <h1 className="flex flex-col text-foreground">
              <span className="font-display text-xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                Her Gün
              </span>
              <CyclingWord
                words={HEADLINE_WORDS}
                className="font-script text-4xl leading-tight text-accent-text sm:text-6xl lg:text-7xl xl:text-8xl"
                widthClassName="w-[5ch] sm:w-[6ch] xl:w-[7ch]"
              />
              <span className="font-display text-sm font-medium leading-tight tracking-tight sm:text-xl lg:text-2xl xl:text-3xl">
                Taze Hazırlanan
              </span>
              <span className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Buketler
              </span>
            </h1>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground sm:max-w-sm sm:text-base lg:text-lg">
              Talas&apos;taki atölyemizden sevdiklerinize özel buketler, saksı
              çiçekleri ve yapay çiçek düzenlemeleri hazırlıyoruz.
            </p>
            <HeroCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
