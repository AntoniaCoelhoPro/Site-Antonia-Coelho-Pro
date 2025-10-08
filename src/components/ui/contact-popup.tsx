import React, { useState } from "react";
import { Modal } from "./modal";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { useUTMTracking } from "../../hooks/useUTMTracking";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getFormattedUTMs } = useUTMTracking();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      console.log('🚀 Enviando para Google Forms:');
      console.log('Nome:', data.name);
      console.log('Email:', data.email);
      console.log('WhatsApp:', data.whatsapp);
      console.log('UTM Data:', utmData);
      
      // Criar FormData
      const formData = new FormData();
      formData.append('entry.1714807403', data.name); // Nome
      formData.append('entry.182561658', data.email); // Email
      formData.append('entry.1093122736', data.whatsapp); // WhatsApp
      formData.append('entry.1190233945', ''); // Nicho (vazio no popup)
      formData.append('entry.2088552847', 'Consultoria Gratuita via Popup'); // Mensagem
      formData.append('entry.1863634779', 'Popup'); // Origem
      formData.append('entry.609614134', utmData.utm_source || 'direct'); // UTM Source
      formData.append('entry.1697531618', utmData.utm_medium || 'none'); // UTM Medium
      formData.append('entry.1102667374', utmData.utm_campaign || ''); // UTM Campaign
      formData.append('entry.1889020776', utmData.utm_term || ''); // UTM Term
      formData.append('entry.1849113644', utmData.utm_content || ''); // UTM Content
      formData.append('entry.838153434', utmData.gclid || ''); // GCLID
      formData.append('entry.540138108', utmData.fbclid || ''); // FBCLID
      formData.append('entry.1449117657', utmData.ref || ''); // Referrer
      formData.append('entry.1474593474', utmData.landing_page || window.location.href); // Landing Page
      formData.append('entry.266399070', utmData.timestamp || new Date().toISOString()); // Timestamp
      formData.append('entry.608855165', utmData.user_agent || navigator.userAgent); // User Agent
      formData.append('entry.2072259232', ''); // IP Address (vazio)
      formData.append('entry.1419377696', getDeviceInfo(utmData.user_agent || navigator.userAgent)); // Device Info
      
      // 🔍 DEBUG: Ver todos os dados do FormData
      console.log('📋 FormData completo:');
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
      console.log('📝 Dados do formulário:', formData);
      console.log('📍 UTM Data:', getFormattedUTMs());
      
      // Enviar dados para Google Forms
      await sendToGoogleForms(formData);
      
      // Criar mensagem personalizada para WhatsApp
      const message = `Olá! Gostaria de agendar uma consultoria gratuita.

📋 *Dados do Interessado:*
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}

🚀 *Interesse:* Consultoria Gratuita de Marketing Digital

Aguardo retorno para agendarmos nossa conversa!`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Número do WhatsApp
      const whatsappNumber = "5592991460804"; // Formato: 55 (Brasil) + DDD + número
      
      // Redirecionar para WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      // Fechar popup
      onClose();
      
      // Limpar formulário
      setFormData({ name: "", email: "", whatsapp: "" });
      
    } catch (error) {
      console.error('Erro ao processar formulário:', error);
      // Mesmo com erro, redirecionar para WhatsApp
      const message = `Olá! Gostaria de agendar uma consultoria gratuita.

📋 *Dados do Interessado:*
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}

🚀 *Interesse:* Consultoria Gratuita de Marketing Digital

Aguardo retorno para agendarmos nossa conversa!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "5592991460804";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      
      onClose();
      setFormData({ name: "", email: "", whatsapp: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agende sua Consultoria Gratuita">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center mb-6">
          <p className="text-gray-600">
            Preencha seus dados abaixo e será redirecionado para o WhatsApp para agendar sua consultoria gratuita.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Nome Completo *</Label>
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

          <div>
            <Label htmlFor="email">Email *</Label>
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

          <div>
            <Label htmlFor="whatsapp">WhatsApp (com DDD) *</Label>
            <Input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="(11) 99999-9999"
              required
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar para WhatsApp'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
