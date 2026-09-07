"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, MapPin, Phone, X } from "@phosphor-icons/react/dist/ssr";
import WhatsAppButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import IconLinkButton from "@/components/icon-link-button";
import { shopInfo } from "@/lib/shop-info";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Sakura Çiçek Atölyesi
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-text ${
                pathname === link.href ? "text-accent-text" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={shopInfo.phoneLink}
            className="mr-2 hidden items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent-text xl:inline-flex"
          >
            <Phone size={16} />
            {shopInfo.phone}
          </a>
          <InstagramButton iconOnly label={shopInfo.instagramHandle} />
          <IconLinkButton
            href={shopInfo.mapUrl}
            label="Konum"
            icon={MapPin}
            iconOnly
          />
          <WhatsAppButton label="WhatsApp'tan Yaz" className="ml-1" />
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-none text-foreground lg:hidden"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-none px-3 py-3 text-base font-medium ${
                  pathname === link.href
                    ? "bg-accent-soft text-accent-text"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={shopInfo.phoneLink}
            className="mt-3 inline-flex items-center gap-1.5 px-3 text-sm font-medium text-muted-foreground hover:text-accent-text"
          >
            <Phone size={16} />
            {shopInfo.phone}
          </a>
          <div className="mt-3 flex gap-3">
            <InstagramButton className="flex-1" />
            <IconLinkButton
              href={shopInfo.mapUrl}
              label="Konum"
              icon={MapPin}
              className="flex-1"
            />
          </div>
          <WhatsAppButton label="WhatsApp'tan Yaz" className="mt-3 w-full" />
        </div>
      )}
    </header>
  );
}
