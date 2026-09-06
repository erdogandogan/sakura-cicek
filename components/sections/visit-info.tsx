import { MapPin, Clock } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { shopInfo } from "@/lib/shop-info";
import HoursBadge from "@/components/hours-badge";

export default function VisitInfo() {
  return (
    <Reveal className="border-y border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-center sm:gap-10 sm:px-6 lg:px-8">
        <a
          href={shopInfo.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-foreground hover:text-accent-text"
        >
          <MapPin size={18} className="text-accent-secondary" />
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
