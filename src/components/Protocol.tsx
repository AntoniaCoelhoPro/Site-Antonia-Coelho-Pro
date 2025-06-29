import React from 'react';
import { Target, Play, BarChart3, Zap } from 'lucide-react';

const Protocol = () => {
  const steps = [
    {
      icon: Target,
      title: 'PLAN – Diagnóstico Estratégico',
      description: 'Análise completa do seu público-alvo, concorrência e oportunidades de mercado específicas para sua especialidade médica.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Play,
      title: 'DO – Execução Inteligente',
      description: 'Implementação de campanhas otimizadas com copy médico especializado e landing pages de alta conversão.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'CHECK – Análise de Performance',
      description: 'Monitoramento em tempo real com métricas médicas específicas: CPL, ROI, taxa de agendamento e lifetime value.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'ACT – Otimização e Escala',
      description: 'Ajustes contínuos baseados em dados reais para maximizar resultados e escalar campanhas de sucesso.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="protocolo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso Protocolo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">PDCA para Médicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia comprovada que combina o ciclo PDCA com estratégias específicas para o setor médico, 
            garantindo <strong>segurança, ética e alta performance</strong> em suas campanhas de tráfego pago.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                {/* Card Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para Implementar o Protocolo PDCA?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa metodologia já gerou mais de R$ 2 milhões em faturamento para médicos em todo o Brasil.
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Conheça Meu Método
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;