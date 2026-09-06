import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

// Carousel akışı ancak yeterli sayıda gerçek yorumla anlamlı görünüyor;
// az sayıda yorum varken tek bir alıntıya düşüyoruz.
const MIN_FOR_CAROUSEL = 3;

export default function Testimonial() {
  const useCarousel = testimonials.length >= MIN_FOR_CAROUSEL;

  return (
    <section className="bg-surface py-16">
      <Reveal className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
          Müşterilerimiz Ne Diyor
        </h2>
      </Reveal>

      {useCarousel ? (
        <Reveal delay={0.1} className="mt-10">
          <InfiniteMovingCards items={testimonials} speed="slow" />
        </Reveal>
      ) : (
        <Reveal
          delay={0.1}
          className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8"
        >
          <Quotes size={32} weight="fill" className="text-accent-secondary" />
          <p className="font-display text-xl leading-snug text-foreground md:text-2xl">
            {testimonials[0].quote}
          </p>
          <span className="text-sm font-medium text-muted-foreground">
            {testimonials[0].name}, {testimonials[0].title.toLowerCase()}
          </span>
        </Reveal>
      )}
    </section>
  );
}
