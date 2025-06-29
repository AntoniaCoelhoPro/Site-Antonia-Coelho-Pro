import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      iconUrl: 'https://i.ibb.co/tMqgMwVp/META.png',
      title: 'Gestão de Tráfego Pago',
      subtitle: 'Google Ads • Meta Ads • LinkedIn Ads',
      description: 'Campanhas otimizadas para médicos com foco em leads qualificados, vendas e remarketing estratégico.',
      features: [
        'Configuração completa das campanhas',
        'Copy médico especializado',
        'Segmentação por especialidade',
        'Compliance com CFM 2.336/2023',
        'Relatórios semanais detalhados'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      iconUrl: 'https://i.ibb.co/Q3xNbZPL/istockphoto-1207706829-612x612-1-removebg-preview.png',
      title: 'Sites & Landing Pages',
      subtitle: 'Mobile-first • SEO médico',
      description: 'Desenvolvimento de páginas de alta conversão com templates otimizados para o setor médico.',
      features: [
        'Design responsivo profissional',
        'SEO otimizado para médicos',
        'Integração com WhatsApp',
        'Formulários inteligentes',
        'Certificado SSL incluído'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      iconUrl: 'https://i.ibb.co/1YYQ4Wsy/id1v-An-Pw-AU-logos.png',
      title: 'Automações',
      subtitle: 'Fluxos personalizados',
      description: 'Automação completa do lead até o agendamento: WhatsApp → CRM → Follow-up automatizado.',
      features: [
        'Integração WhatsApp Business',
        'CRM médico personalizado',
        'Follow-up automatizado',
        'Lembretes de consulta',
        'Relatórios de conversão'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      iconUrl: 'https://i.ibb.co/Wvd3m3N7/looker-studio-logo-png-seeklogo-617989.png',
      title: 'Dashboards Avançados',
      subtitle: 'Looker Studio • Métricas em tempo real',
      description: 'Relatórios personalizados com métricas médicas específicas e insights estratégicos.',
      features: [
        'Dashboards em tempo real',
        'Métricas médicas específicas',
        'ROI por especialidade',
        'Análise de comportamento',
        'Insights estratégicos'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="serviços" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Premium</span> para Maximizar Sua Presença Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um ecossistema completo de marketing digital médico, 
            desde a captação até a conversão final em consultas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.bgColor} p-8 relative overflow-hidden`}>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full transform translate-x-16 -translate-y-16`} />
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="font-semibold text-gray-900 mb-4">O que está incluso:</h4>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToForm}
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pacotes Personalizados para Cada Especialidade
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Criamos soluções sob medida baseadas no seu público-alvo, concorrência e objetivos específicos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-2">15 dias</p>
                <p className="opacity-90">Para primeiros resultados</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">70%</p>
                <p className="opacity-90">ROI médio comprovado</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-2">24/7</p>
                <p className="opacity-90">Suporte especializado</p>
              </div>
            </div>
            <button 
              onClick={scrollToForm}
              className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Solicite Seu Orçamento Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
