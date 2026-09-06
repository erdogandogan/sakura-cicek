import Image from "next/image";
import { Reveal } from "@/components/reveal";

interface EditorialSplitProps {
  image: string;
  alt: string;
  heading: string;
  body: string;
  imagePosition?: "left" | "right";
  imageAspect?: string;
  emphasizeImage?: boolean;
}

export default function EditorialSplit({
  image,
  alt,
  heading,
  body,
  imagePosition = "left",
  imageAspect = "aspect-[4/3]",
  emphasizeImage = false,
}: EditorialSplitProps) {
  const imageBlock = (
    <Reveal
      className={`relative w-full overflow-hidden rounded-panel ${imageAspect} lg:aspect-auto ${
        emphasizeImage ? "lg:h-[560px]" : "lg:h-full"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </Reveal>
  );

  const textBlock = (
    <Reveal
      delay={0.1}
      className="flex flex-col justify-center gap-4 py-4 lg:py-0"
    >
      <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
        {heading}
      </h2>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground">
        {body}
      </p>
    </Reveal>
  );

  return (
    <div
      className={`mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 ${
        emphasizeImage ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-2"
      } lg:gap-16 lg:px-8 lg:py-16`}
    >
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          <div className="lg:order-2">{imageBlock}</div>
          <div className="lg:order-1">{textBlock}</div>
        </>
      )}
    </div>
  );
}
