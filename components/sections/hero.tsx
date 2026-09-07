import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import { Reveal } from "@/components/reveal";
import { CyclingWord } from "@/components/ui/cycling-word";

const HERO_IMAGE = "/images/hero-flowers-v3.webp";
const HERO_ALT =
  "Sakura Çiçek Atölyesi'nde hazırlanan stargazer zambak, gül ve protea ile bir çiçek kümesi";
const HEADLINE_WORDS = ["Elle", "Özenle", "Sevgiyle"];

function HeroCta() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-nowrap sm:items-center sm:gap-3">
      <WhatsAppButton
        label="WhatsApp"
        className="shadow-lg shadow-accent/40"
      />
      <InstagramButton variant="soft" />
      <Link
        href="/urunler"
        className="col-span-2 inline-flex min-h-11 items-center justify-center border border-border px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 hover:border-accent-text hover:text-accent-text active:translate-y-0 sm:col-span-1"
      >
        Ürünlerimiz
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="hero-media-frame relative flex items-stretch">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[54%] sm:w-[56%] lg:w-[62%] xl:w-[58%]">
          <Image
            src={HERO_IMAGE}
            alt={HERO_ALT}
            fill
            priority
            sizes="(max-width: 1024px) 48vw, 48vw"
            className="object-contain object-right-top"
          />
        </div>

        <Reveal className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <h1 className="flex h-full max-w-[80%] flex-col justify-between text-foreground sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <span className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
              Her Gün
            </span>
            <CyclingWord
              words={HEADLINE_WORDS}
              className="font-script text-6xl leading-tight text-accent-text sm:text-8xl lg:text-9xl"
              widthClassName="w-[6ch] sm:w-[7ch] xl:w-[8ch]"
            />
            <span className="font-display text-2xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
              Taze Hazırlanan
            </span>
            <span className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-7xl lg:text-8xl xl:text-[9rem]">
              Buketler
            </span>
          </h1>
        </Reveal>
      </div>

      <Reveal
        delay={0.1}
        className="relative z-10 -mt-6 mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:-mt-16 lg:px-8 lg:pb-14"
      >
        <div className="flex max-w-xl flex-col gap-5">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Talas&apos;taki atölyemizden sevdiklerinize özel buketler, saksı
            çiçekleri ve yapay çiçek düzenlemeleri hazırlıyoruz.
          </p>
          <HeroCta />
        </div>
      </Reveal>
    </section>
  );
}
