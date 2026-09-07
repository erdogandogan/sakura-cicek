"use client";

import { useMemo, useState } from "react";
import { products, categoryLabels, type ProductCategory } from "@/data/products";
import ProductCard from "@/components/product-card";

type FilterValue = ProductCategory | "tumu";

const tabs: { value: FilterValue; label: string }[] = [
  { value: "tumu", label: "Tümü" },
  { value: "buket", label: categoryLabels.buket },
  { value: "saksi", label: categoryLabels.saksi },
  { value: "yapay", label: categoryLabels.yapay },
];

export default function ProductCatalog({
  initialCategory,
}: {
  initialCategory: FilterValue;
}) {
  const [active, setActive] = useState<FilterValue>(initialCategory);

  const filtered = useMemo(
    () =>
      active === "tumu"
        ? products
        : products.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActive(tab.value)}
            className={`min-h-11 rounded-none border px-4 py-2 text-sm font-semibold transition-colors ${
              active === tab.value
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-transparent text-foreground hover:border-accent-text hover:text-accent-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
