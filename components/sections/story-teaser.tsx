import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function StoryTeaser() {
  return (
    <section className="bg-accent-soft">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative min-h-[280px] w-full lg:min-h-[420px]">
          <Image
            src="/images/story-flowers.webp"
            alt="Sakura Çiçek Atölyesi'nde hazırlanan pembe şakayık ve lale buketi"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col justify-center gap-4 px-4 py-12 sm:px-0 lg:py-16 lg:pl-16"
        >
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Küçük Bir Atölyeden, Büyük Bir Özenle
          </h2>
          <Link
            href="/hakkimizda"
            className="text-sm font-semibold text-accent-text hover:underline"
          >
            Hikayemizi oku
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
