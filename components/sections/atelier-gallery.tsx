import Image from "next/image";
import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { shopInfo } from "@/lib/shop-info";

const photos = [
  {
    src: "/images/instagram/aranjman-pembe-mor-kova.jpg",
    alt: "Pembe ve mor tonlarında kova aranjmanı",
    tall: true,
  },
  {
    src: "/images/instagram/aranjman-balon-pembe.webp",
    alt: "Balonlu özel gün aranjmanı",
    tall: false,
  },
  {
    src: "/images/instagram/buket-pembe-bordo.jpg",
    alt: "Pembe ve bordo tonlarında buket",
    tall: false,
  },
  {
    src: "/images/instagram/aranjman-krem-altin-vazo.jpg",
    alt: "Krem güllerden altın vazo aranjmanı",
    tall: true,
  },
  {
    src: "/images/instagram/mimoza-anthurium-saksi.jpg",
    alt: "Mimoza ve anthurium saksı aranjmanı",
    tall: false,
  },
  {
    src: "/images/instagram/buket-pembe-gul.webp",
    alt: "Pembe güllerden hazırlanmış yuvarlak buket",
    tall: false,
  },
];

export default function AtelierGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
          Atölyeden Kareler
        </h2>
        <a
          href={shopInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-text hover:underline"
        >
          <InstagramLogo size={18} />
          Instagram&apos;da takip et
        </a>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {photos.map((photo, i) => (
          <Reveal
            key={photo.src}
            delay={i * 0.05}
            className={`relative overflow-hidden rounded-panel ${
              photo.tall ? "row-span-2" : "aspect-square"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
