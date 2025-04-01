
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoPortfolio from '@/components/VideoPortfolio';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import About from '@/components/About';
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VideoPortfolio />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
