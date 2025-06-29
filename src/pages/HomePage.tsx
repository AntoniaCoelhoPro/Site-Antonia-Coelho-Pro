import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Protocol from '../components/Protocol';
import About from '../components/About';
import Services from '../components/Services';
import Cases from '../components/Cases';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Tráfego Pago para Médicos | Aumente Consultas em 30 Dias | MedTraffic Pro"
        description="Especialista em tráfego pago para médicos. +50% de consultas em 3 meses comprovados. Google Ads, Meta Ads e LinkedIn Ads com metodologia PDCA exclusiva."
        keywords="tráfego pago médicos, marketing médico, google ads médicos, meta ads clínicas, consultoria médica digital"
        canonical="https://medtrafficpro.com"
      />
      <Header />
      <Hero />
      <Protocol />
      <About />
      <Services />
      <Cases />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;