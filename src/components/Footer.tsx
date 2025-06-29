import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, MessageCircle, MapPin, Clock, Shield,
} from 'lucide-react';
import logo from '../assets/logo-antonia-branca.svg'; // ✅ Nova logo branca SVG

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToForm = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="Logo Antonia Coelho" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialista em tráfego pago para médicos com foco em resultados éticos, 
              sustentáveis e em conformidade com as normas do CFM.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { name: 'Serviços', href: '#serviços' },
                { name: 'Protocolo PDCA', href: '#protocolo' },
                { name: 'Sobre Antonia', href: '#sobre' },
                { name: 'Cases de Sucesso', href: '#cases' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Blog', href: '/blog' },
              ].map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white font-medium">(92) 99146-0804</p>
                  <p>Segunda à Sexta, 9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white">contato@antoniacoelhopro.com</p>
                  <p>Resposta em até 2h úteis</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-white">WhatsApp Business</p>
                  <p>Atendimento imediato</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white">Manaus, AM</p>
                  <p>Atendimento nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horários e Certificações */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informações</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <div className="flex items-center space-x-2 mb-2 text-white">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Horário de Atendimento</span>
                </div>
                <p>Seg. a Sex.: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p>Domingo: Fechado</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2 text-white">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Certificações</span>
                </div>
                <ul className="space-y-1">
                  <li>✓ Google Ads Specialist</li>
                  <li>✓ Meta Business Partner</li>
                  <li>✓ MBA em Estratégia Digital</li>
                  <li>✓ Certificação ESPM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA + Disclaimer */}
        <div className="mt-12 border-t border-gray-800 pt-10">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Transformar Sua Clínica?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Agende uma consultoria gratuita e veja o potencial da sua presença digital em ação.
            </p>
            <button
              onClick={scrollToForm}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                Este site segue as diretrizes da Resolução CFM nº 2.336/2023. Nenhum conteúdo substitui consulta médica. Os resultados apresentados são reais, mas variam conforme especialidade, região e investimento.
              </p>
            </div>
          </div>

          <div className="mt-6 text-gray-500 text-sm text-center">
            © {currentYear} Antonia Coelho. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
