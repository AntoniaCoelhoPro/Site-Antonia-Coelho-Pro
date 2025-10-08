import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'Organization' | 'Person' | 'Service' | 'FAQPage' | 'Article';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'Organization', 
  data 
}) => {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Antonia Coelho PRO",
          "alternateName": "Antonia Coelho Marketing Digital",
          "url": "https://antoniacoelhopro.com.br",
          "logo": "https://antoniacoelhopro.com.br/LOGO ICON.png",
          "image": "https://i.ibb.co/gLfsR1Ky/GERENCIADOR.png",
          "description": "Especialista em tráfego pago e performance digital. +50% de vendas em 3 meses comprovados. Google Ads, Meta Ads e LinkedIn Ads com metodologia exclusiva.",
          "foundingDate": "2020",
          "founder": {
            "@type": "Person",
            "name": "Antonia Coelho",
            "jobTitle": "Especialista em Tráfego Pago",
            "image": "https://antoniacoelhopro.com.br/LOGO ICON.png",
            "sameAs": [
              "https://instagram.com/antonia.coelho.pro",
              "https://linkedin.com/in/antonia-coelho",
              "https://facebook.com/antonia.coelho.pro"
            ]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
            "addressRegion": "São Paulo"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-92-99146-0804",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://instagram.com/antonia.coelho.pro",
            "https://linkedin.com/in/antonia-coelho",
            "https://facebook.com/antonia.coelho.pro",
            "https://twitter.com/antonia_coelho"
          ],
          "serviceArea": {
            "@type": "Country",
            "name": "Brasil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Marketing Digital",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gestão de Tráfego Pago",
                  "description": "Gestão completa de campanhas no Google Ads, Meta Ads e LinkedIn Ads"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Meu Negócio",
                  "description": "Otimização e gestão do Google Meu Negócio para maior visibilidade local"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Criação de Sites",
                  "description": "Desenvolvimento de sites otimizados para conversão e SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dashboards de Performance",
                  "description": "Criação de dashboards personalizados para acompanhamento de resultados"
                }
              }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'Person':
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Antonia Coelho",
          "jobTitle": "Especialista em Tráfego Pago e Performance Digital",
          "description": "Especialista em tráfego pago com +4 anos de experiência. Transformo tráfego em resultados reais para empresas de todos os segmentos.",
          "image": "https://antoniacoelhopro.com.br/LOGO ICON.png",
          "url": "https://antoniacoelhopro.com.br",
          "sameAs": [
            "https://instagram.com/antonia.coelho.pro",
            "https://linkedin.com/in/antonia-coelho",
            "https://facebook.com/antonia.coelho.pro",
            "https://twitter.com/antonia_coelho"
          ],
          "knowsAbout": [
            "Google Ads",
            "Meta Ads",
            "LinkedIn Ads",
            "Marketing Digital",
            "Tráfego Pago",
            "Performance Digital",
            "Conversão",
            "ROI"
          ],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Especialização em Marketing Digital"
          },
          "award": [
            "Especialista em Tráfego Pago",
            "Certificação Google Ads",
            "Certificação Meta Ads"
          ]
        };

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultoria em Tráfego Pago",
          "description": "Consultoria especializada em tráfego pago para aumentar vendas e ROI das campanhas",
          "provider": {
            "@type": "Organization",
            "name": "Antonia Coelho PRO"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Brasil"
          },
          "serviceType": "Marketing Digital",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "BRL",
            "description": "Consultoria Gratuita"
          }
        };

      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Como funciona a consultoria de tráfego pago?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A consultoria inclui análise completa das campanhas, otimização de anúncios, ajuste de orçamentos e estratégias personalizadas para aumentar o ROI."
              }
            },
            {
              "@type": "Question",
              "name": "Quanto tempo leva para ver resultados?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Os primeiros resultados podem aparecer em 30 dias, mas o pico de performance geralmente acontece entre 60-90 dias de campanhas otimizadas."
              }
            },
            {
              "@type": "Question",
              "name": "Você trabalha com quais plataformas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trabalho com Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads e outras plataformas de tráfego pago."
              }
            }
          ]
        };

      default:
        return data;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  );
};
