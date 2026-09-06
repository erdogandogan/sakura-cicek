import type { Metadata } from "next";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import EditorialSplit from "@/components/editorial-split";
import ClosingCta from "@/components/sections/closing-cta";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Hakkımızda | Sakura Çiçek Atölyesi",
  description:
    "Sakura Çiçek Atölyesi'nin Talas'taki hikayesi ve çiçek hazırlama felsefesi.",
};

export default function HakkimizdaPage() {
  return (
    <div>
      <Reveal className="mx-auto max-w-3xl px-4 pb-4 pt-12 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          Hakkımızda
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Talas&apos;ta küçük bir dükkanla başlayan Sakura Çiçek
          Atölyesi, bugün de her buketi elle ve taze çiçeklerle hazırlıyor.
        </p>
      </Reveal>

      <EditorialSplit
        imagePosition="left"
        image="/images/instagram/aranjman-pembe-mor-kova.jpg"
        alt="Sakura Çiçek Atölyesi'nden pembe ve mor tonlarında bir aranjman"
        heading="Nasıl Başladık"
        body="Talas'ta küçük bir dükkanla açtığımız Sakura Çiçek Atölyesi, komşularımızın günlük çiçek ihtiyacından doğdu. Zamanla mahallenin özel günlerinde akla gelen ilk adres olduk."
        imageAspect="aspect-[3/4]"
        emphasizeImage
      />

      <EditorialSplit
        imagePosition="right"
        image="/images/instagram/mimoza-anthurium-saksi.jpg"
        alt="Sarı mimoza ve beyaz anthuriumdan hazırlanmış bir saksı aranjmanı"
        heading="Atölye Felsefemiz"
        body="Her buketi, o günün taze çiçekleriyle elde hazırlıyoruz. Seri üretim yerine, her siparişe ayrı zaman ayırmayı tercih ediyoruz."
      />

      <section className="bg-surface py-16">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          <Quotes size={32} weight="fill" className="text-accent-secondary" />
          <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
            Çiçekçilik bizim için bir zanaat. Her sipariş, alıcısı kadar
            özel hazırlanmayı hak ediyor.
          </p>
        </Reveal>
      </section>

      <ClosingCta />
    </div>
  );
}
