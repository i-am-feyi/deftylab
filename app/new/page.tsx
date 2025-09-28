import Footer from "@/components/footer";
import CTA from "@/features/home/components/cta";

import HeroSection from "@/features/home/components/hero";
import Testimonial from "@/features/home/components/testimonial";

export default function Home() {
  return (
    <section className="px-4">
      <HeroSection />
      <CTA />
      <Testimonial />
      <Footer />
    </section>
  );
}
