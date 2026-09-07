import type { Metadata } from "next";
import ProductCatalog from "@/components/product-catalog";
import type { ProductCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Ürünler | Sakura Çiçek Atölyesi",
  description:
    "Buket, saksı çiçeği ve yapay çiçek seçeneklerimize göz atın, WhatsApp üzerinden sipariş verin.",
};

const validCategories: ProductCategory[] = ["buket", "saksi", "yapay"];

export default async function UrunlerPage({
  searchParams,
}: PageProps<"/urunler">) {
  const params = await searchParams;
  const raw = params.kategori;
  const kategoriParam = Array.isArray(raw) ? raw[0] : raw;
  const initialCategory = validCategories.includes(
    kategoriParam as ProductCategory,
  )
    ? (kategoriParam as ProductCategory)
    : "tumu";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-xl">
        <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
          Ürünlerimiz
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Taze buketlerden saksı çiçeklerine, solmayan yapay düzenlemelere
          kadar tüm ürünlerimiz burada.
        </p>
      </div>
      <ProductCatalog initialCategory={initialCategory} />
    </div>
  );
}
