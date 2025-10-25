import { Footer7 } from '@/components/ui/footer-7';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Footer7
          logo={{
            url: "#hero",
            src: "/LOGO ICON.png",
            alt: "Antonia Coelho PRO",
            title: "Antonia Coelho PRO"
          }}
          sections={[
            {
              title: "Serviços",
              links: [
                { name: "Gestão de Tráfego", href: "#serviços" },
                { name: "Google Meu Negócio", href: "#serviços" },
                { name: "Criação de Sites", href: "#serviços" },
                { name: "Dashboards", href: "#serviços" },
              ],
            },
            {
              title: "Empresa",
              links: [
                { name: "Sobre Antonia", href: "#sobre" },
                { name: "Protocolo PDCA", href: "#protocolo" },
                { name: "FAQ", href: "#faq" },
                { name: "Contato", href: "#contato" },
              ],
            },
            {
              title: "Contato",
              links: [
                { name: "WhatsApp", href: "https://wa.me/5592991460804" },
                { name: "Email", href: "mailto:contato@antoniacoelhopro.com.br" },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/antoniacoelhopro" },
                { name: "Instagram", href: "https://www.instagram.com/antoniacoelhopro" },
              ],
            },
          ]}
          description="Especialista em tráfego pago com +4 anos de experiência. Transformo tráfego em resultados reais para empresas de todos os segmentos."
          socialLinks={[
            { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/antoniacoelhopro/", label: "Instagram" },
            { icon: <FaFacebook className="size-5" />, href: "https://web.facebook.com/antoniacoelhopro", label: "Facebook" },
            { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/antoniacoelhopro/", label: "LinkedIn" },
          ]}
          copyright={`© ${currentYear} Antonia Coelho PRO. Todos os direitos reservados.`}
          legalLinks={[
            { name: "Política de Privacidade", href: "#" },
            { name: "Termos de Uso", href: "#" },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
