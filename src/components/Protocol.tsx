import { ArrowRight, CheckCircle, Target, TrendingUp, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Protocol = () => {
  const steps = [
    {
      icon: Target,
      number: '01',
      title: 'PLAN',
      subtitle: 'Diagnóstico Estratégico',
      description: 'Analisamos seu cenário atual, especialidade, posicionamento e concorrência para criar uma estratégia personalizada de tráfego.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      number: '02',
      title: 'DO',
      subtitle: 'Execução Inteligente',
      description: 'Implementamos campanhas segmentadas com mensagens éticas e alinhadas às diretrizes médicas para impactar o público ideal.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      icon: BarChart3,
      number: '03',
      title: 'CHECK',
      subtitle: 'Análise de Performance',
      description: 'Monitoramos custo por lead, taxa de conversão, alcance e retorno. Transformamos dados em decisões inteligentes.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'ACT',
      subtitle: 'Otimização e Escala',
      description: 'Ajustamos rotas e aceleramos o que dá resultado para crescimento contínuo, previsível e sustentável.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];



  return (
    <section id="protocolo" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4 mr-2" />
            Metodologia PDCA
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            Protocolo de Tráfego baseado na metodologia <span className="text-blue-600">PDCA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aplicamos o ciclo de melhoria contínua para criar campanhas mais seguras, eficientes e com resultados previsíveis.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative group h-full">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 h-full flex flex-col">
                  {/* Icon and Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-8 h-8 ${step.textColor}`} />
                    </div>
                    <div className={`w-10 h-10 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className={`text-sm font-semibold ${step.textColor} uppercase tracking-wide`}>
                        {step.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="subsection-title text-gray-900 mb-4">
              Por que a metodologia PDCA funciona?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossa abordagem sistemática garante resultados consistentes e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Estratégia Clara</h4>
              <p className="text-gray-600">Cada etapa é planejada e executada com precisão</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Dados Reais</h4>
              <p className="text-gray-600">Decisões baseadas em métricas comprovadas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Melhoria Contínua</h4>
              <p className="text-gray-600">Otimização constante para melhores resultados</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para implementar o Protocolo PDCA?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa metodologia já gerou resultados comprovados para empresas em todo o Brasil.
            </p>
            <Link
              to="/analise-gratuita"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto max-w-fit"
            >
              <span>Agende uma Consultoria Grátis</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;