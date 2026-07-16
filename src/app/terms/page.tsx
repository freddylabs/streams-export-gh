import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-poppins font-bold text-brand-brown mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-brand-brown/80 font-inter">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our sourcing and export services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services Provided</h2>
          <p>
            Streams Export GH provides product sourcing, quality control, export logistics, and safe delivery services for premium Ghanaian goods to international markets, primarily the United States.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Contact & Communication</h2>
          <p>
            For any service inquiries, you can reach us at our dedicated phone numbers: +233 55 636 7951 or +1 225 397 4757, or via email at info@streamsexportgh.com. We strive to provide excellent customer support and timely responses.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
