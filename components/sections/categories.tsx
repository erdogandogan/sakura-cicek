import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { ProductCategory } from "@/data/products";

const categories: {
  category: ProductCategory;
  label: string;
  description: string;
  image: string;
}[] = [
  {
    category: "buket",
    label: "Buket",
    description: "Her anlam için özenle bağlanmış taze buketler.",
    image: "/images/instagram/buket-beyaz-krem.jpg",
  },
  {
    category: "saksi",
    label: "Saksı Çiçeği",
    description: "Evinize ve ofisinize uzun süre eşlik eden bitkiler.",
    image: "/images/instagram/orkide-turuncu-saksi.jpg",
  },
  {
    category: "yapay",
    label: "Yapay Çiçek",
    description: "Bakım gerektirmeyen, solmayan çiçek düzenlemeleri.",
    image: "/images/instagram/aranjman-lavanta-mor.jpg",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mb-8 max-w-xl">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
          Ne Aradığınızı Seçin
        </h2>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
        {categories.map((cat, i) => (
          <Reveal
            key={cat.category}
            delay={i * 0.08}
            className={
              i === 0
                ? "md:col-start-1 md:row-span-2"
                : i === 1
                  ? "md:col-start-2 md:row-start-1"
                  : "md:col-start-2 md:row-start-2"
            }
          >
            <Link
              href={`/urunler?kategori=${cat.category}`}
              className="group relative flex h-full min-h-[220px] items-end overflow-hidden rounded-panel"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="relative flex flex-col gap-1 p-6 text-white">
                <span className="font-display text-xl font-semibold">
                  {cat.label}
                </span>
                <span className="max-w-xs text-sm text-white/85">
                  {cat.description}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
