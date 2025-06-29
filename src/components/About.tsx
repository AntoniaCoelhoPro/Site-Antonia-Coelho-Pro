import React from 'react';
import { Award, BookOpen, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: '+4 Anos de Experiência',
      description: 'Especializada em tráfego médico para clínicas, infoprodutos e lançamentos'
    },
    {
      icon: Award,
      title: 'Certificação Internacional',
      description: 'ESPM/DMI e mentoria exclusiva com Pedro Sobral (SUBIDO PRO)'
    },
    {
      icon: BookOpen,
      title: 'MBA Business Strategy',
      description: 'IPOG - Especialização em estratégias de negócios digitais'
    },
    {
      icon: Users,
      title: '50+ Médicos Atendidos',
      description: 'Clínicas e profissionais de diversas especialidades médicas'
    }
  ];

  const skills = [
    'Google Ads Especialista',
    'Meta Ads Avançado',
    'LinkedIn Ads B2B',
    'Copywriting Médico',
    'Funis de Conversão',
    'Automação com IA',
    'Analytics & Tracking',
    'Compliance CFM'
  ];

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT - IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://i.ibb.co/7tVJM8rr/Antonia.png"
                alt="Antonia Coelho - Especialista em Tráfego Médico"
                className="w-full h-auto object-cover rounded-2xl"
              />

              {/* Floating - TOP RIGHT */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl ring-1 ring-gray-200 px-5 py-3 z-10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-bold text-gray-900 text-sm">98% Satisfação</span>
                </div>
              </div>

              {/* Floating - BOTTOM LEFT */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-2xl ring-1 ring-gray-200 px-5 py-3 z-10">
                <div className="text-center leading-tight">
                  <p className="text-xl font-bold text-green-600">+70%</p>
                  <p className="text-sm text-gray-600">ROI Médio</p>
                </div>
              </div>
            </div>

            {/* Background shadow pattern */}
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl" />
            </div>
          </div>

          {/* RIGHT - TEXT */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Antonia Coelho</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Especialista em tráfego pago para médicos com foco em resultados éticos e sustentáveis. 
                Transformo clínicas em referências digitais através de estratégias de marketing médico comprovadas.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Especialidades Técnicas</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border-l-4 border-blue-600">
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "Acredito que cada médico merece ter sua agenda cheia de pacientes que realmente precisam dos seus serviços. 
                Minha missão é conectar profissionais de saúde com quem mais precisa deles."
              </blockquote>
              <div className="font-semibold text-gray-900">
                — Antonia Coelho, Fundadora MedTraffic Pro
              </div>
            </div>

            {/* CTA */}
            <div>
              <button 
                onClick={scrollToForm}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Conheça Meu Método Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
