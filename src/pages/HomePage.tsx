import React from 'react';
import { HeroSection } from '../components/ui/hero-section-1';
import Protocol from '../components/Protocol';
import About from '../components/About';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import { Contact2 } from '../components/ui/contact-2';
import Footer from '../components/Footer';
import { MetaTags } from '../components/MetaTags';
import { StructuredData } from '../components/StructuredData';
import { FAQSchema, seoFAQs } from '../components/FAQSchema';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <MetaTags 
        title="Antonia Coelho PRO | Especialista em Tráfego Pago #1 | +50% Vendas"
        description="🚀 Especialista em tráfego pago com +4 anos de experiência. +50% de vendas em 3 meses comprovados. Google Ads, Meta Ads, LinkedIn Ads. Consultoria GRATUITA! WhatsApp: (92) 99146-0804"
        keywords="tráfego pago, marketing digital, google ads, facebook ads, meta ads, linkedin ads, gestão de tráfego, consultoria marketing, antonia coelho, performance digital, roi, conversão, campanhas pagas, especialista tráfego, marketing de performance, digital marketing, ads specialist, google ads specialist, facebook ads specialist, consultoria gratuita, marketing digital brasil, especialista tráfego pago, gestão campanhas, otimização ads, aumento vendas, roi marketing"
        url="https://antoniacoelhopro.com.br"
      />
      
      {/* Structured Data */}
      <StructuredData type="Organization" />
      <StructuredData type="Person" />
      <StructuredData type="Service" />
      <FAQSchema faqs={seoFAQs} />
      
      {/* Content */}
      <HeroSection />
      <Protocol />
      <About />
      <Services />
      <FAQ />
      <Contact2 />
      <Footer />
    </div>
  );
};

export default HomePage;