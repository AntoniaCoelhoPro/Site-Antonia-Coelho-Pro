import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = "Antonia Coelho PRO - Especialista em Tráfego Pago | #1 Marketing Digital",
  description = "🚀 Especialista em tráfego pago com +4 anos de experiência. +50% de vendas em 3 meses comprovados. Google Ads, Meta Ads, LinkedIn Ads. Consultoria GRATUITA disponível!",
  keywords = "tráfego pago, marketing digital, google ads, facebook ads, meta ads, linkedin ads, gestão de tráfego, consultoria marketing, antonia coelho, performance digital, roi, conversão, campanhas pagas, especialista tráfego, marketing de performance, digital marketing, ads specialist, google ads specialist, facebook ads specialist, consultoria gratuita, marketing digital brasil",
  image = "https://i.ibb.co/gLfsR1Ky/GERENCIADOR.png",
  url = "https://antoniacoelhopro.com.br",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Antonia Coelho" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Language and Geo */}
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />
      <meta name="geo.position" content="-23.5505;-46.6333" />
      <meta name="ICBM" content="-23.5505, -46.6333" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="São Paulo, SP" />
      <meta name="business:contact_data:locality" content="São Paulo" />
      <meta name="business:contact_data:region" content="SP" />
      <meta name="business:contact_data:postal_code" content="00000-000" />
      <meta name="business:contact_data:country_name" content="Brasil" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="rating" content="5" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Antonia Coelho PRO" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://i.ibb.co" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//wa.me" />
      <link rel="dns-prefetch" href="//instagram.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
    </Helmet>
  );
};
