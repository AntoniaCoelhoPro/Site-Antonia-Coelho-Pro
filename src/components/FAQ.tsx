import React from 'react';
import { FaqSection } from '@/components/ui/faq';

const FAQ = () => {
  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems = [
    {
      question: 'Quanto custa para começar com tráfego pago?',
      answer: 'Cada proposta é construída sob medida, garantindo que a estratégia esteja alinhada de acordo com os objetivos do negócio. A gestão inclui o planejamento estratégico, criação, acompanhamento e otimização contínua das campanhas, além da definição do investimento em mídia mais adequado para alcançar os melhores resultados.',
    },
    {
      question: 'Em quanto tempo vou ver resultados?',
      answer: 'Primeiros leads em 7-14 dias. ROI positivo geralmente entre 30-45 dias. Campanhas de remarketing podem gerar conversões já na primeira semana. Forneço relatórios semanais para acompanhar a evolução.',
    },
    {
      question: 'Você trabalha com Google Ads e Facebook Ads?',
      answer: 'Sim! Trabalho com Google Ads (busca, display, YouTube), Meta Ads (Facebook e Instagram), LinkedIn Ads e TikTok Ads. Escolho as melhores plataformas baseado no seu público-alvo e objetivos.',
    },
    {
      question: 'Como sei se estou gastando dinheiro à toa?',
      answer: 'Acompanho métricas essenciais: CPL (custo por lead), CPA (custo por aquisição), ROAS (retorno sobre investimento) e LTV (lifetime value). Se não estiver dando resultado, ajusto ou pauso a campanha.',
    },
    {
      question: 'Preciso ter site para fazer tráfego pago?',
      answer: 'Sim. É fundamental ter um site ou landing page otimizada para conversão, responsiva e estruturada com técnicas de SEO. Caso ainda não tenha, na equipe temos um desenvolvedor profissional que cria landing page / site focada em conversão, totalmente alinhada à estratégia do negócio. A proposta é personalizada, de acordo com a estrutura do projeto.',
    },
    {
      question: 'Você faz a criação dos anúncios?',
      answer: 'Sim! Crio textos, imagens, vídeos e segmentações. Trabalho com copywriters e designers quando necessário. Testo diferentes versões para encontrar o que converte melhor.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim. Os projetos são pensados para contratos de 12 meses, visando consistência e resultados. Caso a empresa opte pelo cancelamento, é necessário avisar com 30 dias de antecedência, conforme previsto em contrato, para evitar multas ou encargos de rescisão.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Pagamento mensal via PIX, boleto ou cartão. O investimento em mídia é cobrado separadamente (você paga direto para Google/Meta). Relatórios detalhados de todos os gastos.',
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection
          title="Respostas Rápidas para Suas Dúvidas"
          description="Esclarecemos as principais dúvidas sobre marketing digital e nossa metodologia"
          items={faqItems}
        />
      </div>
    </section>
  );
};

export default FAQ;
