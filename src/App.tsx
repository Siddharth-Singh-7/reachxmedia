import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { BrandsMarquee } from '@/components/sections/BrandsMarquee';
import { Portfolio } from '@/components/sections/Portfolio';
import { Stats } from '@/components/sections/Stats';
import { Results } from '@/components/sections/Results';
import { Services } from '@/components/sections/Services';
import { TheGoal } from '@/components/sections/TheGoal';
import { LeadPopup } from '@/components/ui/LeadPopup';
import { FAQs } from '@/components/sections/FAQs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Founder } from '@/components/sections/Founder';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-background">
      <Toaster position="top-right" />
      <LeadPopup />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BrandsMarquee />
        <Portfolio />
        <Testimonials />
        <Results />
        <Services />
        <TheGoal />
        <CTA />
        <FAQs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
