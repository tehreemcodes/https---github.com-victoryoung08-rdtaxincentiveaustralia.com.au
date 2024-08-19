export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
/*import BusinessCategories from "@/components/business-categories";*/
/*import LargeTestimonial from "@/components/large-testimonial";*/
import FeaturesPlanet from "@/components/features-planet";
import Eligibility from "@/components/eligibility";
import Outcome from "@/components/outcome";
/*import Features from "@/components/features-home";*/
/*import TestimonialsCarousel from "@/components/testimonials-carousel";*/
import Cta from "@/components/cta";
import FAQs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      {/*<BusinessCategories />*/}
      {/*<LargeTestimonial />*/}
      <FeaturesPlanet />
      <Eligibility />
      <Outcome />
      {/*<Features />*/}
      {/*<TestimonialsCarousel />*/}
      <Cta />
      <FAQs />
    </>
  );
}
