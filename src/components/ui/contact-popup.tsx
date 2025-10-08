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

  // Função para enviar dados para Google Sheets
  const sendToGoogleSheets = async (data: any) => {
    try {
      // URL do Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVRJiO13N9iBNAbOT7oXwLuHZVfTVFsIjeIH9--8f_-axAv3bI8dmp7cl5c8QJ1yfg/exec';
      
      // Obter dados de UTM
      const utmData = getFormattedUTMs();
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Necessário para Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Dados do formulário
          nome: data.name,
          email: data.email,
          whatsapp: data.whatsapp,
          nicho: '',
          mensagem: 'Consultoria Gratuita via Popup',
          origem: 'Popup',
          
          // Dados de UTM
          utm_source: utmData.utm_source || 'direct',
          utm_medium: utmData.utm_medium || 'none',
          utm_campaign: utmData.utm_campaign || '',
          utm_term: utmData.utm_term || '',
          utm_content: utmData.utm_content || '',
          gclid: utmData.gclid || '',
          fbclid: utmData.fbclid || '',
          ref: utmData.ref || '',
          landing_page: utmData.landing_page || window.location.href,
          timestamp: utmData.timestamp || new Date().toISOString(),
          user_agent: utmData.user_agent || navigator.userAgent,
        })
      });
      
      return true;
    } catch (error) {
      console.error('Erro ao enviar para Google Sheets:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar dados para Google Sheets
      await sendToGoogleSheets(formData);
      
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
