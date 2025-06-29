import React, { useState } from 'react';
import { ChevronDown, Shield, Clock, DollarSign, Target, Users, BarChart3 } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shield,
      question: 'Como garantem a conformidade com o CFM?',
      answer: 'Todas as nossas campanhas passam por revisão ética prévia seguindo rigorosamente a Resolução CFM nº 2.336/2023. Temos um checklist específico que inclui: não uso de superlativo, não promessa de cura, respeito à privacidade do paciente e linguagem técnica adequada. Nosso time está sempre atualizado com as normativas do Conselho Federal de Medicina.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      question: 'Quando verei os primeiros resultados?',
      answer: 'Normalmente, as primeiras conversões (leads) aparecem entre 7 a 15 dias após o lançamento das campanhas. O ROI consistente e sustentável costuma ser estabelecido entre 30-45 dias, quando temos dados suficientes para otimizações avançadas. Fornecemos relatórios semanais para acompanhar toda a evolução.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: DollarSign,
      question: 'Quais são os investimentos mínimos?',
      answer: 'Nossos pacotes começam a partir de R$ 3.500/mês para gestão completa + investimento em mídia (recomendamos mínimo R$ 2.000/mês). O valor varia conforme a especialidade, concorrência local e objetivos. Oferecemos planos personalizados para diferentes perfis: médico iniciante, clínica estabelecida ou expansão digital.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      question: 'Como funciona a segmentação para minha especialidade?',
      answer: 'Criamos personas específicas baseadas em dados reais do seu público-alvo. Analisamos: idade, gênero, localização, interesses, comportamento online e histórico médico (quando aplicável). Para especialidades como cardiologia, focamos em +40 anos; dermatologia abrange faixa mais ampla; ortopedia segmenta por atividade física, etc.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      question: 'Qual o diferencial para médicos vs. outros setores?',
      answer: 'Temos expertise específica em marketing médico: conhecemos as limitações éticas, o perfil do paciente que busca informações de saúde online, como abordar questões sensíveis, timing ideal para campanhas médicas e como gerar confiança através da comunicação digital. Isso resulta em leads mais qualificados e maior taxa de conversão.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BarChart3,
      question: 'Como acompanho os resultados das campanhas?',
      answer: 'Você recebe dashboards personalizados em tempo real via Looker Studio com: CPL (custo por lead), taxa de conversão, ROI, origem dos pacientes, horários de maior conversão, análise de concorrência e relatórios detalhados semanais. Também fazemos reuniões mensais para ajustar estratégias baseadas nos dados.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre marketing digital médico e nossa metodologia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${faq.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre marketing médico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Agendar Consultoria Gratuita
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
                Falar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;