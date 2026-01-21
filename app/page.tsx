import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import BestSellers from "@/components/home/BestSellers";
import PromoSection from "@/components/home/PromoSection";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <PromoSection />
      <Testimonials />
    </>
  );
}
