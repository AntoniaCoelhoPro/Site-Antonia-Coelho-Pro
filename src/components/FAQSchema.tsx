import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema, null, 2)}
      </script>
    </Helmet>
  );
};

// FAQ data otimizada para SEO
export const seoFAQs: FAQItem[] = [
  {
    question: "Como funciona a consultoria de tráfego pago da Antonia Coelho?",
    answer: "A consultoria de tráfego pago da Antonia Coelho inclui análise completa das campanhas, otimização de anúncios, ajuste de orçamentos e estratégias personalizadas para aumentar o ROI. Trabalhamos com Google Ads, Meta Ads, LinkedIn Ads e outras plataformas para maximizar seus resultados."
  },
  {
    question: "Quanto tempo leva para ver resultados com tráfego pago?",
    answer: "Os primeiros resultados podem aparecer em 30 dias, mas o pico de performance geralmente acontece entre 60-90 dias de campanhas otimizadas. A Antonia Coelho já comprovou +50% de vendas em 3 meses para seus clientes."
  },
  {
    question: "Quais plataformas de tráfego pago a Antonia Coelho trabalha?",
    answer: "A Antonia Coelho trabalha com Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads e outras plataformas de tráfego pago. Temos especialização em todas as principais redes para maximizar seu alcance e conversões."
  },
  {
    question: "A consultoria de marketing digital é realmente gratuita?",
    answer: "Sim! A Antonia Coelho oferece consultoria gratuita para avaliar seu negócio e identificar oportunidades de melhoria no tráfego pago. É uma oportunidade única de receber insights de uma especialista com +4 anos de experiência."
  },
  {
    question: "Qual o ROI médio dos clientes da Antonia Coelho?",
    answer: "Nossos clientes alcançam em média +50% de vendas em 3 meses. A Antonia Coelho tem metodologia comprovada que transforma tráfego em resultados reais para empresas de todos os segmentos."
  },
  {
    question: "Como agendar uma consultoria gratuita com a Antonia Coelho?",
    answer: "Para agendar sua consultoria gratuita, clique no botão 'Consultoria Gratuita' em qualquer lugar do site ou entre em contato via WhatsApp (92) 99146-0804. A consultoria é totalmente gratuita e sem compromisso."
  },
  {
    question: "A Antonia Coelho trabalha com empresas de que tamanho?",
    answer: "A Antonia Coelho trabalha com empresas de todos os tamanhos, desde pequenos negócios até grandes corporações. Nossa metodologia se adapta a qualquer orçamento e segmento, sempre focando em maximizar o ROI."
  },
  {
    question: "Quais são os diferenciais da Antonia Coelho no marketing digital?",
    answer: "A Antonia Coelho se destaca por ter +4 anos de experiência, metodologia própria comprovada, foco em ROI, atendimento personalizado e resultados mensuráveis. Já ajudou centenas de empresas a aumentarem suas vendas através do tráfego pago."
  }
];
