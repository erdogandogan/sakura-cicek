import Link from "next/link";
import { InstagramLogo, MapPin, Clock, Phone } from "@phosphor-icons/react/dist/ssr";
import { shopInfo } from "@/lib/shop-info";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="font-display text-lg font-semibold text-foreground">
            Sakura Çiçek Atölyesi
          </span>
          <a
            href={shopInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-text"
          >
            <InstagramLogo size={18} />
            {shopInfo.instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-foreground">
            Sayfalar
          </span>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-foreground">
            İletişim
          </span>
          <a
            href={shopInfo.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-accent-text"
          >
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>{shopInfo.address}</span>
          </a>
          <a
            href={shopInfo.phoneLink}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-text"
          >
            <Phone size={18} className="shrink-0" />
            <span>{shopInfo.phone}</span>
          </a>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Clock size={18} className="mt-0.5 shrink-0" />
            <div className="flex flex-col">
              {shopInfo.hours.map((h) => (
                <span key={h.day}>
                  {h.day}: {h.time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          Sakura Çiçek Atölyesi, tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
