import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import CTASection from "@/components/home/CTASection";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/components/SEO";
import { localBusinessSchema, websiteSchema } from "@/lib/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [localBusinessSchema, websiteSchema],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Spare World - Commercial Kitchen & Laundry Equipment Spare Parts | Saudi Arabia"
        description="Spare World is the trusted supplier of commercial kitchen and laundry equipment spare parts in Jeddah, Riyadh, and Khobar. Quality parts, expert installation, fast delivery across Saudi Arabia."
        keywords="spare parts, commercial kitchen, laundry equipment, HVAC parts, boiler parts, Saudi Arabia, Jeddah, Riyadh, Khobar, commercial equipment spare parts, restaurant equipment parts, hotel equipment parts"
        image="/logo.png"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProductsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Index;
