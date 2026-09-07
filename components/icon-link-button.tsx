import type { ComponentType } from "react";

interface IconProps {
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}

interface IconLinkButtonProps {
  href: string;
  label: string;
  icon: ComponentType<IconProps>;
  variant?: "primary" | "secondary" | "soft" | "onAccent";
  className?: string;
  external?: boolean;
  iconOnly?: boolean;
}

export default function IconLinkButton({
  href,
  label,
  icon: Icon,
  variant = "secondary",
  className = "",
  external = true,
  iconOnly = false,
}: IconLinkButtonProps) {
  const base = iconOnly
    ? "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
    : "inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]";
  const variantStyles = {
    primary: "bg-accent text-accent-foreground hover:brightness-105",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-accent-text hover:text-accent-text",
    soft: "bg-accent-soft text-accent-text hover:brightness-95",
    onAccent: "bg-accent-foreground text-accent hover:brightness-95",
  };
  const styles = variantStyles[variant];

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={iconOnly ? label : undefined}
      className={`${base} ${styles} ${className}`}
    >
      <Icon size={18} weight={iconOnly ? "regular" : "fill"} className="shrink-0" />
      {!iconOnly && label}
    </a>
  );
}
