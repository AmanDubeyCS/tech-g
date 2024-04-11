import Cta from "@/Components/CTA/Cta";
import Features from "@/Components/Features/Features";
import Features2 from "@/Components/Features2/Features2";
import Features3 from "@/Components/Features3/Features3";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Header/Navbar";
import Hero from "@/Components/Hero/Hero";
import Pricing from "@/Components/Pricing/Pricing";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Features />
   <Features2 />
   <Features3 />
   <Pricing />
   <Testimonials />
   <Cta />
   <Footer />
   </>
  );
}
