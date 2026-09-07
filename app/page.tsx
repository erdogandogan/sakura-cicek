import Hero from "@/components/sections/hero";
import Categories from "@/components/sections/categories";
import FeaturedProducts from "@/components/sections/featured-products";
import HowToOrder from "@/components/sections/how-to-order";
import StoryTeaser from "@/components/sections/story-teaser";
import AtelierGallery from "@/components/sections/atelier-gallery";
import Testimonial from "@/components/sections/testimonial";
import VisitInfo from "@/components/sections/visit-info";
import ClosingCta from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <HowToOrder />
      <AtelierGallery />
      <StoryTeaser />
      <Testimonial />
      <VisitInfo />
      <ClosingCta />
    </>
  );
}
