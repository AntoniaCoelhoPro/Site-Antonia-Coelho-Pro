import { Feature72 } from '@/components/ui/feature-72';

const Services = () => {
  const services = [
    {
      id: "service-1",
      title: "Gestão de Tráfego",
      description: "Campanhas estratégicas em Google Ads, Meta Ads e LinkedIn Ads para aumento de base, vendas, leads e remarketing. Configuração completa, segmentação inteligente e otimização contínua baseada em dados.",
      image: "/Ads.png",
    },
    {
      id: "service-2",
      title: "Google Meu Negócio",
      description: "Otimização completa do perfil com gestão de avaliações, posts regulares e fotos profissionais. Aumento de 3x em buscas locais com relatórios de performance detalhados.",
      image: "/Google Meu Negocio.png",
    },
    {
      id: "service-3",
      title: "Criação de Sites",
      description: "Landing pages mobile-first com SEO otimizado, integração com WhatsApp Business e formulários de agendamento. Templates que geram 3x mais conversão com certificado SSL incluído.",
      image: "/sites.png",
    },
    {
      id: "service-4",
      title: "Dashboards",
      description: "Acompanhamento diário e transparente com dashboards em tempo real, métricas específicas do seu setor, análise de ROI por campanha e relatórios executivos mensais.",
      image: "/DASHBOARD.png",
    },
  ];

  return (
    <section id="serviços" className="pt-8 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Feature72
          heading="Soluções para Maximizar Sua Presença Digital"
          description="Oferecemos um ecossistema completo de marketing digital com foco em resultados mensuráveis e conformidade ética para empresas de todos os segmentos."
          linkText="Agende uma Consultoria Grátis"
          linkUrl="#hero"
          features={services}
        />
      </div>
    </section>
  );
};

export default Services;