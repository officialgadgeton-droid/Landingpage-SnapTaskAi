import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AppMockup from '@/components/AppMockup';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export default function App() {
  const [isPrivacy, setIsPrivacy] = useState(window.location.hash === '#privacy');

  useEffect(() => {
    const handleHashChange = () => {
      setIsPrivacy(window.location.hash === '#privacy');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isPrivacy) {
    return <PrivacyPolicy onBack={() => { window.location.hash = ''; }} />;
  }

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
