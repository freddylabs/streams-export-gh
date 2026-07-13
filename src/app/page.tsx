import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductGrid from "@/components/ProductGrid";
import StatsBand from "@/components/StatsBand";
import TrustedByBanner from "@/components/TrustedByBanner";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProductGrid />
      <StatsBand />
      <TrustedByBanner />
      <CTABand />
      <Footer />
    </main>
  );
}
