import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/ui/marquee";
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
        <Marquee speed="slow" itemClassName="w-40 sm:w-52">
          {featured.map((product, i) => (
            <a
              key={product.id}
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-panel p-3 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${
                backdrops[i % backdrops.length]
              } ${tilts[i % tilts.length]}`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel">
                <Image
                  src={product.image as string}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 40vw, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-center text-sm font-medium text-foreground">
                {product.name}
              </span>
            </a>
          ))}
        </Marquee>
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
