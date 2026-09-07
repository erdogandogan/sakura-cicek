import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Marquee } from "@/components/ui/marquee";

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className = "",
}: InfiniteMovingCardsProps) {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      pauseOnHover={pauseOnHover}
      className={className}
      itemClassName="w-[320px] max-w-full sm:w-[380px]"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative h-full border border-border bg-background px-6 py-6"
        >
          <Quotes size={22} weight="fill" className="text-accent-secondary" />
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {item.quote}
          </p>
          <div className="mt-4">
            <span className="block text-sm font-semibold text-foreground">
              {item.name}
            </span>
            <span className="block text-xs text-muted-foreground">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </Marquee>
  );
}
