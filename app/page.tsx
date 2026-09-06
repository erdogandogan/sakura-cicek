import Hero from "@/components/sections/hero";
import Categories from "@/components/sections/categories";
import FeaturedProducts from "@/components/sections/featured-products";
import StoryTeaser from "@/components/sections/story-teaser";
import HowToOrder from "@/components/sections/how-to-order";
import HowWePrepare from "@/components/sections/how-we-prepare";
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
      <StoryTeaser />
      <HowToOrder />
      <HowWePrepare />
      <AtelierGallery />
      <Testimonial />
      <VisitInfo />
      <ClosingCta />
    </>
  );
}
