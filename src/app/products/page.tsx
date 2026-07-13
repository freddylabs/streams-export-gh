import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/ProductGrid";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Products | Streams Export GH",
  description: "Explore our full catalog of authentic Ghanaian export products including Gari, Shea Butter, Black Soap, and Kente textiles.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-24">
      <Navbar />
      
      <div className="pt-12 pb-8 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-brand-brown mb-6">
          Our Full <span className="text-brand-gold">Catalog</span>
        </h1>
        <p className="text-lg text-brand-brown/80 font-inter max-w-2xl mx-auto">
          Browse our extensive selection of premium goods sourced directly from Ghana. If you don&apos;t see what you&apos;re looking for, contact us for custom sourcing.
        </p>
      </div>

      <ProductGrid />
      <CTABand />
      <Footer />
    </main>
  );
}
