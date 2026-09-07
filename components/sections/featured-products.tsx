import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Reveal } from "@/components/reveal";
import { AutoScrollRow } from "@/components/ui/auto-scroll-row";
import { getWhatsAppLink } from "@/lib/whatsapp";

const featuredIds = [
  "zarafet-buketi",
  "orkide-saksisi",
  "gun-isigi-buketi",
  "ipek-lavanta-demeti",
  "mimoza-anthurium-aranjmani",
  "kir-cicegi-buketi",
];

const backdrops = ["bg-accent-soft", "bg-surface", "bg-accent-secondary/10"];
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-2"];

export default function FeaturedProducts() {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p) && Boolean(p?.image));

  return (
    <section className="overflow-hidden py-16">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Öne Çıkan Ürünler
          </h2>
        </Reveal>
        <Link
          href="/urunler"
          className="hidden shrink-0 text-sm font-semibold text-accent-text hover:underline sm:block"
        >
          Tüm ürünleri gör
        </Link>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <AutoScrollRow
          itemClassName="w-56 sm:w-64 md:w-72"
          className="cursor-grab px-4 py-2 [mask-image:linear-gradient(to_right,transparent,white_3%,white_97%,transparent)] active:cursor-grabbing sm:px-6 lg:px-8"
        >
          {featured.map((product, i) => (
            <a
              key={product.id}
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className={`group block select-none p-3 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${
                backdrops[i % backdrops.length]
              } ${tilts[i % tilts.length]}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={product.image as string}
                  alt={product.name}
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 60vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-center text-base font-medium text-foreground">
                {product.name}
              </span>
            </a>
          ))}
        </AutoScrollRow>
      </Reveal>

      <Link
        href="/urunler"
        className="mt-6 block text-center text-sm font-semibold text-accent-text hover:underline sm:hidden"
      >
        Tüm ürünleri gör
      </Link>
    </section>
  );
}
