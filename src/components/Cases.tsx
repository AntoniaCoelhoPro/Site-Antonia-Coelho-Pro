import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const Cases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      specialty: 'Cardiologista',
      image: 'CS',
      rating: 5,
      text: 'Em 3 meses, minha agenda passou de 60% para 95% de ocupação. O investimento em tráfego pago foi fundamental para atrair pacientes de qualidade.',
      results: 'Aumento de 58% nas consultas',
      location: 'São Paulo, SP'
    },
    {
      name: 'Dra. Marina Santos',
      specialty: 'Dermatologista',
      image: 'MS',
      rating: 5,
      text: 'A Antonia entende perfeitamente as necessidades do médico. As campanhas respeitam todas as normas do CFM e geram resultados consistentes.',
      results: 'ROI de 85% em 2 meses',
      location: 'Rio de Janeiro, RJ'
    },
    {
      name: 'Dr. Rafael Oliveira',
      specialty: 'Ortopedista',
      image: 'RO',
      rating: 5,
      text: 'Profissionalismo excepcional. As automações criadas otimizaram todo meu processo de agendamento. Recomendo para qualquer colega médico.',
      results: 'Agenda lotada em 45 dias',
      location: 'Belo Horizonte, MG'
    },
    {
      name: 'Dra. Ana Paula Costa',
      specialty: 'Ginecologista',
      image: 'AC',
      rating: 5,
      text: 'O trabalho da Antonia vai além do tráfego. Ela criou uma estratégia completa que transformou minha clínica em referência digital.',
      results: 'Crescimento de 120% em leads',
      location: 'Porto Alegre, RS'
    },
    {
      name: 'Dr. João Mendes',
      specialty: 'Neurologista',
      image: 'JM',
      rating: 5,
      text: 'Estava cético sobre marketing digital médico, mas os resultados falaram por si. Triplicamos o número de consultas particulares.',
      results: 'Aumento de 200% em consultas particulares',
      location: 'Brasília, DF'
    }
  ];

  const stats = [
    { value: '50+', label: 'Médicos Atendidos' },
    { value: '+70%', label: 'ROI Médio' },
    { value: '5', label: 'Clínicas com Agenda Lotada' },
    { value: '98%', label: 'Taxa de Satisfação' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Falam por Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como médicos de diferentes especialidades transformaram suas práticas com nossa metodologia comprovada.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 mb-4">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="absolute top-8 left-8">
            <Quote className="w-12 h-12 text-blue-200" />
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Profile */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.image}
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Results Badge */}
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {testimonial.results}
                    </div>

                    {/* Author */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.specialty} • {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Ser o Próximo Case de Sucesso?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Junte-se aos médicos que já transformaram suas práticas com nossa metodologia.
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Quero Meu Case de Sucesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;