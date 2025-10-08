import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  // Função para enviar dados para Google Sheets
  const sendToGoogleSheets = async (data: any) => {
    try {
      // URL do Google Apps Script
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwO2GUA2Wu1LR045Zu0cfKMKWDA5IqTOK5EaqEWYPMsZhVdNHKb5M_UP4blbSjBVPWS/exec';
      
      // Obter dados de UTM
      const utmData = getFormattedUTMs();
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors', // CORS configurado no Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Dados do formulário
          nome: data.name,
          email: data.email,
          whatsapp: data.whatsapp,
          nicho: data.niche,
          mensagem: data.message,
          origem: 'Formulário Principal',
          
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
              <Label htmlFor="name">
                Nome Completo
              </Label>
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
                <Label htmlFor="email">
                  Email
                </Label>
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
                <Label htmlFor="whatsapp">
                  WhatsApp (com DDD)
                </Label>
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
              <Label htmlFor="niche">
                Qual o seu nicho?
              </Label>
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
              <Label htmlFor="message">
                Mensagem
              </Label>
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


