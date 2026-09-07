import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import IconLinkButton from "@/components/icon-link-button";
import { shopInfo } from "@/lib/shop-info";

interface InstagramButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "soft" | "onAccent";
  className?: string;
  iconOnly?: boolean;
}

export default function InstagramButton({
  label = "Instagram",
  variant = "secondary",
  className = "",
  iconOnly = false,
}: InstagramButtonProps) {
  return (
    <IconLinkButton
      href={shopInfo.instagramUrl}
      label={label}
      icon={InstagramLogo}
      variant={variant}
      className={className}
      iconOnly={iconOnly}
    />
  );
}
