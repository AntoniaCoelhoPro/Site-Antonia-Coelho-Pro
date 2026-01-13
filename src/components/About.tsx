import { Award, BookOpen, Users, TrendingUp, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <section id="sobre" className="pt-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Target className="w-4 h-4 mr-2" />
            Sobre Antonia Coelho
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            <span className="text-blue-600">+ de 04 anos</span> como Gestora de Tráfego
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experiência em campanhas para diversos segmentos, lançamentos e perpétuos de infoprodutos, negócios locais e eventos.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div
                className="w-full rounded-3xl overflow-hidden antonia-photo-bg"
                style={{
                  height: '500px'
                }}
              />
            </div>
          </div>

          {/* Right Column - Credentials */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Credentials */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      Mentoria Especializada
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Pedro Sobral (SUBIDO PRO) - Maior programa de mentorias para gestores de tráfego da América Latina
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      Especialização em Tráfego
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Domínio em Google Ads, Meta Ads e LinkedIn Ads com copywriting estratégico e IA
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      Certificação Internacional
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Marketing Digital (ESPM/DMI)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      MBA Business Strategy
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      IPOG - Ênfase em Marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Destaques Técnicos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Google Ads Especialista',
                  'Meta Ads Performance',
                  'LinkedIn Ads B2B',
                  'Copywriting Estratégico',
                  'IA para Performance',
                  'Integração de Funil',
                  'Atendimento via WhatsApp',
                  'Otimização Contínua PDCA'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <blockquote className="text-xl italic mb-4 leading-relaxed max-w-3xl mx-auto">
            "Meu objetivo é transformar tráfego em resultados reais para empresas de todos os segmentos.
            Cada campanha é estrategicamente planejada para gerar leads qualificados e aumentar a autoridade digital."
          </blockquote>
          <div className="font-semibold text-lg">
            — Antonia Coelho
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            to="/analise-gratuita"
            className="bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto max-w-fit"
          >
            <span>Agende uma Consultoria Grátis</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;