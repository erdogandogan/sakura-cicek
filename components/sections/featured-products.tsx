import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/product-card";
import { Reveal } from "@/components/reveal";

const featuredIds = [
  "zarafet-buketi",
  "orkide-saksisi",
  "gun-isigi-buketi",
  "ipek-lavanta-demeti",
  "mimoza-anthurium-aranjmani",
  "kir-cicegi-buketi",
];

export default function FeaturedProducts() {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <section className="py-16">
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

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
        {featured.map((product) => (
          <div
            key={product.id}
            className="w-72 shrink-0 snap-start sm:w-80"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
