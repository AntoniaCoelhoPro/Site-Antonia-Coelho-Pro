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
      answer: 'Meus serviços começam a partir de R$ 1.500/mês para gestão de campanhas + investimento em mídia (mínimo R$ 1.000/mês). Para empresas maiores, ofereço pacotes de R$ 2.500/mês com investimento de R$ 3.000/mês em mídia. Sem taxa de setup.',
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
      answer: 'Sim, é fundamental ter um site otimizado ou landing page. Se não tiver, posso criar uma landing page de conversão por R$ 800-1.500. O site precisa ter formulários de contato e carregar rápido.',
    },
    {
      question: 'Você faz a criação dos anúncios?',
      answer: 'Sim! Crio textos, imagens, vídeos e segmentações. Trabalho com copywriters e designers quando necessário. Testo diferentes versões para encontrar o que converte melhor.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim, sem fidelidade. Aviso de 30 dias para cancelamento. Seus dados e campanhas ficam salvos caso queira retomar futuramente. Transparência total nos relatórios.',
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