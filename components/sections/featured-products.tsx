import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { Reveal } from "@/components/reveal";
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
const stagger = ["", "sm:mt-8", "sm:mt-2", "sm:mt-10", "sm:mt-4", "sm:mt-1"];

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

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-5 px-4 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:grid-cols-6 lg:px-8">
        {featured.map((product, i) => (
          <Reveal
            key={product.id}
            delay={i * 0.06}
            className={stagger[i % stagger.length]}
          >
            <a
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
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-center text-sm font-medium text-foreground">
                {product.name}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
