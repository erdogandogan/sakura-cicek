import Image from "next/image";
import { ImageSquare } from "@phosphor-icons/react/dist/ssr";
import { Product, categoryLabels } from "@/data/products";
import WhatsAppButton from "@/components/whatsapp-button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-panel bg-surface">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-accent-soft">
            <ImageSquare
              size={32}
              weight="light"
              className="text-accent-text/60"
            />
            <span className="text-xs font-medium text-accent-text/70">
              Görsel yakında
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        </div>
        <WhatsAppButton
          productName={product.name}
          label="WhatsApp'tan Sipariş Ver"
          className="mt-auto w-full"
        />
      </div>
    </article>
  );
}
