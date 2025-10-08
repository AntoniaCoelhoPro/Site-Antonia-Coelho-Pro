import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUTMTracking } from "../../hooks/useUTMTracking";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
}

export const Contact2 = ({
  title = "Entre em Contato",
  description = "Estamos disponíveis para esclarecer dúvidas, receber feedback ou oportunidades de colaboração. Deixe-nos saber como podemos ajudar!",
  phone = "(92) 99146-0804",
  email = "contato@antoniacoelhopro.com.br",
}: Contact2Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    niche: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getFormattedUTMs } = useUTMTracking();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para enviar dados para Google Forms
  const sendToGoogleForms = async (data: any) => {
    try {
      // URL do Google Forms
      const FORM_ID = '1FAIpQLSc20WRTxxBCn0pGGMbwJI65QPf5ZB_wYluon364XqCbgjqhDg';
      const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
      
      // Obter dados de UTM
      const utmData = getFormattedUTMs();
      
      // Função para extrair informações do dispositivo
      const getDeviceInfo = (userAgent: string) => {
        if (!userAgent) return 'Unknown';
        
        const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const isTablet = /iPad|Android(?=.*Tablet)|Windows Phone/i.test(userAgent);
        
        let deviceType = 'Desktop';
        if (isTablet) deviceType = 'Tablet';
        else if (isMobile) deviceType = 'Mobile';
        
        let browser = 'Unknown';
        if (userAgent.includes('Chrome')) browser = 'Chrome';
        else if (userAgent.includes('Firefox')) browser = 'Firefox';
        else if (userAgent.includes('Safari')) browser = 'Safari';
        else if (userAgent.includes('Edge')) browser = 'Edge';
        
        let os = 'Unknown';
        if (userAgent.includes('Windows')) os = 'Windows';
        else if (userAgent.includes('Mac')) os = 'macOS';
        else if (userAgent.includes('Linux')) os = 'Linux';
        else if (userAgent.includes('Android')) os = 'Android';
        else if (userAgent.includes('iOS')) os = 'iOS';
        
        return `${deviceType} - ${browser} - ${os}`;
      };
      
      // 🔍 DEBUG: Ver o que está sendo enviado
      console.log('🚀 Enviando para Google Forms (Principal):');
      console.log('Nome:', data.name);
      console.log('Email:', data.email);
      console.log('WhatsApp:', data.whatsapp);
      console.log('Nicho:', data.niche);
      console.log('Mensagem:', data.message);
      console.log('UTM Data:', utmData);
      
      // Criar FormData
      const formData = new FormData();
      formData.append('entry.1714807403', data.name); // Nome
      formData.append('entry.182561658', data.email); // Email
      formData.append('entry.1190233945', data.whatsapp); // WhatsApp
      formData.append('entry.1093122736', data.niche); // Nicho
      formData.append('entry.2088552847', data.message); // Mensagem
      formData.append('entry.1863634779', 'Formulário Principal'); // Origem
      formData.append('entry.609614134', utmData.utm_source || 'direct'); // UTM Source
      formData.append('entry.1697531618', utmData.utm_medium || 'none'); // UTM Medium
      formData.append('entry.1102663734', utmData.utm_campaign || ''); // UTM Campaign
      formData.append('entry.1889020776', utmData.utm_term || ''); // UTM Term
      formData.append('entry.1849113644', utmData.utm_content || ''); // UTM Content
      formData.append('entry.838153434', utmData.gclid || ''); // GCLID
      formData.append('entry.540138108', utmData.fbclid || ''); // FBCLID
      formData.append('entry.1449117657', utmData.ref || ''); // Referrer
      formData.append('entry.1474593484', utmData.landing_page || window.location.href); // Landing Page
      formData.append('entry.266399907', utmData.timestamp || new Date().toISOString()); // Timestamp
      formData.append('entry.608855165', utmData.user_agent || navigator.userAgent); // User Agent
      formData.append('entry.2072259232', ''); // IP Address (vazio)
      formData.append('entry.1419377696', getDeviceInfo(utmData.user_agent || navigator.userAgent)); // Device Info
      
      // 🔍 DEBUG: Ver todos os dados do FormData
      console.log('📋 FormData completo (Principal):');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      
      // Enviar para Google Forms
      await fetch(FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Funciona perfeitamente com Google Forms!
        body: formData
      });
      
      return true;
    } catch (error) {
      console.error('Erro ao enviar para Google Forms:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 🔍 DEBUG: Ver o que está sendo enviado
      console.log('📝 Dados do formulário principal:', formData);
      console.log('📍 UTM Data:', getFormattedUTMs());
      
      // Enviar dados para Google Forms
      await sendToGoogleForms(formData);
      
      // Criar mensagem personalizada para WhatsApp
      const message = `Olá! Gostaria de entrar em contato.

📋 *Dados do Interessado:*
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}
• Nicho: ${formData.niche}

💬 *Mensagem:*
${formData.message}

Aguardo retorno!`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Número do WhatsApp
      const whatsappNumber = "5592991460804";
      
      // Redirecionar para WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Limpar formulário
      setFormData({ name: "", email: "", whatsapp: "", niche: "", message: "" });
      
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      // Mesmo com erro, redirecionar para WhatsApp
      const message = `Olá! Gostaria de entrar em contato.

📋 *Dados do Interessado:*
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}
• Nicho: ${formData.niche}

💬 *Mensagem:*
${formData.message}

Aguardo retorno!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "5592991460804";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      setFormData({ name: "", email: "", whatsapp: "", niche: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl font-semibold lg:mb-1 lg:text-5xl">
                {title}
              </h1>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Informações de Contato
              </h3>
              <ul className="ml-4 list-disc space-y-2">
                <li>
                  <span className="font-bold">Telefone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline text-blue-600 hover:text-blue-800">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border bg-white p-10 shadow-lg">
            <div className="grid w-full items-center gap-1.5">
              <span className="text-sm font-medium">Nome Completo</span>
              <Input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo" 
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <span className="text-sm font-medium">Email</span>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com" 
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <span className="text-sm font-medium">WhatsApp (com DDD)</span>
                <Input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(92) 99146-0804" 
                  required
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <span className="text-sm font-medium">Qual o seu nicho?</span>
              <Input 
                type="text" 
                id="niche" 
                name="niche"
                value={formData.niche}
                onChange={handleInputChange}
                placeholder="Ex: Clínicas médicas, E-commerce, Infoprodutos..." 
                required
              />
            </div>
            <div className="grid w-full gap-1.5">
              <span className="text-sm font-medium">Mensagem</span>
              <Textarea 
                placeholder="Descreva sua necessidade ou dúvida..." 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-green-700 disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


