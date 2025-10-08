import React, { useState } from 'react';
import { TrendingUp, Users, Award, Clock, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: ''
  });
  const growthValue = 50;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Atraia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Clientes Qualificados</span> com Marketing Digital Estratégico
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                <span className="font-semibold text-green-600">+50% de vendas em 3 meses</span> comprovados em nossos cases
              </p>
            </div>

            {/* Platforms Icons with Original Logos */}
            <div className="flex justify-center lg:justify-start items-center space-x-6">
              <div className="group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">Google Ads</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">Meta Ads</p>
              </div>
              <div className="group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <p className="text-xs text-gray-600 mt-1 text-center">LinkedIn Ads</p>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Crescimento de Vendas</h3>
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="relative h-20 bg-gray-50 rounded-lg p-4 overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-t transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${growthValue}%`, 
                    height: '100%',
                    minHeight: '8px'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">+{growthValue}%</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mx-auto mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">50+</p>
                <p className="text-xs text-gray-600">Clientes Atendidos</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mx-auto mb-2">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">70%</p>
                <p className="text-xs text-gray-600">ROI Médio</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg mx-auto mb-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">15</p>
                <p className="text-xs text-gray-600">Dias p/ Resultado</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Agende Sua Consultoria Gratuita
                </h2>
                <p className="text-gray-600">
                  Aumente suas vendas em 30 dias com nossa metodologia comprovada
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp (com DDD)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Selecione seu segmento</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="servicos">Serviços</option>
                    <option value="saude">Saúde</option>
                    <option value="educacao">Educação</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="imobiliario">Imobiliário</option>
                    <option value="automotivo">Automotivo</option>
                    <option value="outro">Outro segmento</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Quero Aumentar Minhas Vendas em 30 Dias</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ✓ Consultoria 100% gratuita • ✓ Sem compromisso • ✓ Resultados em 30 dias
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;