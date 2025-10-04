import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import PromotionsSection from '@/components/sections/PromotionsSection';
import ContactSection from '@/components/sections/ContactSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ProductsSection />
        <PromotionsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
