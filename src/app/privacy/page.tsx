import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-bg flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 py-32 max-w-4xl">
        <h1 className="text-4xl font-poppins font-bold text-brand-brown mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-brand-brown/80 font-inter">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Streams Export GH. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. The data we collect about you</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you, such as your identity data, contact data (including phone numbers +233 55 636 7951 and +1 225 397 4757 for WhatsApp communications), and technical data when you use our services.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How we use your personal data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our export and sourcing services, manage our relationship with you, and to improve our website and customer support.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
