interface ThemeMapProps {
  className?: string;
}

const MAP_SRC =
  "https://www.google.com/maps?q=38.7185264,35.5569368&z=16&output=embed";

export default function ThemeMap({ className = "" }: ThemeMapProps) {
  return (
    <div
      className={`overflow-hidden rounded-panel border border-border ${className}`}
    >
      <iframe
        src={MAP_SRC}
        title="Sakura Çiçek Atölyesi konumu"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale-[15%] sepia-[12%] saturate-[1.05] contrast-[0.97]"
        style={{ border: 0, minHeight: 320 }}
      />
    </div>
  );
}
