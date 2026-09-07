import { MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { shopInfo } from "@/lib/shop-info";
import HoursBadge from "@/components/hours-badge";

export default function VisitInfo() {
  return (
    <Reveal className="border-y border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-center sm:gap-10 sm:px-6 lg:px-8">
        <a
          href={shopInfo.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex max-w-xs items-start gap-2 text-left text-sm text-foreground hover:text-accent-text sm:max-w-sm"
        >
          <MapPin size={18} className="mt-0.5 shrink-0 text-accent-secondary" />
          {shopInfo.address}
        </a>
        <div className="flex items-center gap-2 text-sm text-foreground">
          <Clock size={18} className="text-accent-secondary" />
          <HoursBadge />
        </div>
      </div>
    </Reveal>
  );
}
