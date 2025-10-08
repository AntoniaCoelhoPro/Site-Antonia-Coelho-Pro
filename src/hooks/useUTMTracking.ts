import { useState, useEffect } from 'react';

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string; // Google Ads Click ID
  fbclid?: string; // Facebook Click ID
  ref?: string; // Referrer
  referrer?: string; // Alternative referrer
}

interface UTMData extends UTMParams {
  landing_page?: string;
  timestamp?: string;
  user_agent?: string;
  ip_address?: string; // Será preenchido pelo servidor
}

export const useUTMTracking = () => {
  const [utmData, setUtmData] = useState<UTMData>({});

  useEffect(() => {
    // Função para extrair parâmetros da URL
    const getUrlParams = (): UTMParams => {
      const params = new URLSearchParams(window.location.search);
      const utmParams: UTMParams = {};

      // Capturar UTMs padrão
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
      utmKeys.forEach(key => {
        const value = params.get(key);
        if (value) {
          utmParams[key as keyof UTMParams] = value;
        }
      });

      // Capturar IDs de clique específicos
      const gclid = params.get('gclid');
      const fbclid = params.get('fbclid');
      if (gclid) utmParams.gclid = gclid;
      if (fbclid) utmParams.fbclid = fbclid;

      // Capturar referrer
      const ref = params.get('ref') || params.get('referrer');
      if (ref) utmParams.ref = ref;

      return utmParams;
    };

    // Função para obter dados do navegador
    const getBrowserData = (): Partial<UTMData> => {
      return {
        landing_page: window.location.href,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
      };
    };

    // Função para salvar UTMs no localStorage
    const saveUTMsToStorage = (data: UTMData) => {
      try {
        localStorage.setItem('utm_tracking_data', JSON.stringify(data));
        localStorage.setItem('utm_tracking_timestamp', new Date().toISOString());
      } catch (error) {
        console.error('Erro ao salvar UTMs no localStorage:', error);
      }
    };

    // Função para carregar UTMs do localStorage
    const loadUTMsFromStorage = (): UTMData | null => {
      try {
        const stored = localStorage.getItem('utm_tracking_data');
        const timestamp = localStorage.getItem('utm_tracking_timestamp');
        
        if (stored && timestamp) {
          const data = JSON.parse(stored);
          const storedTime = new Date(timestamp);
          const now = new Date();
          
          // UTMs são válidos por 30 dias
          const daysDiff = (now.getTime() - storedTime.getTime()) / (1000 * 3600 * 24);
          
          if (daysDiff <= 30) {
            return data;
          }
        }
      } catch (error) {
        console.error('Erro ao carregar UTMs do localStorage:', error);
      }
      return null;
    };

    // Capturar UTMs da URL atual
    const urlParams = getUrlParams();
    const browserData = getBrowserData();
    
    // Se há UTMs na URL, salvar e usar
    if (Object.keys(urlParams).length > 0) {
      const newUtmData: UTMData = {
        ...urlParams,
        ...browserData,
      };
      
      setUtmData(newUtmData);
      saveUTMsToStorage(newUtmData);
    } else {
      // Se não há UTMs na URL, tentar carregar do localStorage
      const storedUtms = loadUTMsFromStorage();
      if (storedUtms) {
        setUtmData(storedUtms);
      } else {
        // Se não há UTMs armazenados, usar dados básicos
        setUtmData({
          ...browserData,
          utm_source: 'direct',
          utm_medium: 'none',
        });
      }
    }
  }, []);

  // Função para obter UTMs formatados para envio
  const getFormattedUTMs = (): UTMData => {
    return {
      ...utmData,
      timestamp: new Date().toISOString(),
    };
  };

  // Função para limpar UTMs (útil para testes)
  const clearUTMs = () => {
    localStorage.removeItem('utm_tracking_data');
    localStorage.removeItem('utm_tracking_timestamp');
    setUtmData({
      utm_source: 'direct',
      utm_medium: 'none',
      landing_page: window.location.href,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    utmData,
    getFormattedUTMs,
    clearUTMs,
  };
};
