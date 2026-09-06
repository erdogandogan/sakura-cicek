import { Reveal } from "@/components/reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data/testimonials";

export default function Testimonial() {
  return (
    <section className="bg-surface py-16">
      <Reveal className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
          Müşterilerimiz Ne Diyor
        </h2>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <InfiniteMovingCards items={testimonials} speed="slow" />
      </Reveal>
    </section>
  );
}
