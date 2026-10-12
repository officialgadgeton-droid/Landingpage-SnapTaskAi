import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppMockup from '@/components/AppMockup';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Features />
        <AppMockup />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
