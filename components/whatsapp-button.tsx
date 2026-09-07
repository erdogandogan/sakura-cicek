import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { getWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  productName?: string;
  label: string;
  variant?: "primary" | "secondary" | "onAccent";
  className?: string;
}

export default function WhatsAppButton({
  productName,
  label,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-none px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]";
  const variantStyles = {
    primary: "bg-accent text-accent-foreground hover:brightness-105",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-accent-text hover:text-accent-text",
    onAccent: "bg-accent-foreground text-accent hover:brightness-95",
  };
  const styles = variantStyles[variant];

  return (
    <a
      href={getWhatsAppLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsappLogo size={18} weight="fill" className="shrink-0" />
      {label}
    </a>
  );
}
