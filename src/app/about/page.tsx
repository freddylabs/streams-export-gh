import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Streams Export GH",
  description: "Learn more about Streams Export GH, our mission, and our commitment to bringing authentic Ghanaian products to the global market.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-brand-brown mb-8 text-center">
            About <span className="text-brand-gold">Us</span>
          </h1>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm text-brand-brown/80 font-inter space-y-6 text-lg leading-relaxed">
            <p>
              <strong>Streams Export GH</strong> is a premier export business dedicated to bridging the gap between authentic Ghanaian craftsmanship and the international market.
            </p>
            <p>
              Our journey began with a simple vision: to showcase the rich culture and exceptional quality of products originating from Ghana. From the nutrient-rich fields where our cassava and cocoa are grown, to the skilled hands of artisans weaving vibrant Kente textiles, every product we export tells a story of tradition, quality, and dedication.
            </p>
            <p>
              We pride ourselves on our <strong>reliability and integrity</strong>. By working directly with local farmers and producers, we not only ensure that you receive the highest quality goods, but we also support sustainable trade practices that benefit local communities.
            </p>
            <p>
              Whether you are looking to source premium Gari, raw Shea Butter, authentic Black Soap, or traditional textiles, Streams Export GH is your trusted partner. We handle all aspects of quality control, packaging, and logistics to ensure your goods arrive safely and on time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
