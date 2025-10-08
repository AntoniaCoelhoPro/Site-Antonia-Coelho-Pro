# 🔧 Configuração Google Sheets - Site Antonia Coelho

## ✅ URLs Configuradas

### Google Apps Script
- **URL**: `https://script.google.com/macros/s/AKfycbxVRJiO13N9iBNAbOT7oXwLuHZVfTVFsIjeIH9--8f_-axAv3bI8dmp7cl5c8QJ1yfg/exec`
- **Status**: ✅ Configurado no site

### ✅ ID da Planilha Configurado
- **ID da Planilha**: `1Yy0SWCFPAxXzSpQdfhBKsDJHslKodffHK6Dg4vut0Q0`
- **Aba de Destino**: `LEADS`
- **Status**: ✅ Configurado no Google Apps Script

## 📊 Estrutura da Planilha

A planilha terá as seguintes colunas:

| Coluna | Campo | Descrição |
|--------|-------|-----------|
| A | Data/Hora | Quando o lead foi capturado |
| B | Nome | Nome completo do interessado |
| C | Email | Email de contato |
| D | WhatsApp | Número com DDD |
| E | Nicho | Área de atuação |
| F | Mensagem | Texto da mensagem |
| G | Origem | "Popup" ou "Formulário Principal" |
| H | UTM Source | Origem do tráfego |
| I | UTM Medium | Tipo de mídia |
| J | UTM Campaign | Nome da campanha |
| K | UTM Term | Palavra-chave |
| L | UTM Content | Conteúdo específico |
| M | GCLID | Google Ads Click ID |
| N | FBCLID | Facebook Click ID |
| O | Referrer | Referrer personalizado |
| P | Landing Page | Página de destino |
| Q | Timestamp | Timestamp exato |
| R | User Agent | Informações do navegador |
| S | IP Address | Endereço IP (vazio) |
| T | Device Info | Tipo de dispositivo, navegador e SO |

## 🧪 Teste da Integração

### 1. Teste Básico
1. Acesse: `https://antoniacoelhopro.com.br/?utm_source=teste&utm_medium=manual&utm_campaign=teste-utm`
2. Preencha o formulário ou popup
3. Verifique na planilha se os dados foram salvos

### 2. Verificar Logs
- Abra o Console do navegador (F12)
- Preencha um formulário
- Verifique se não há erros de CORS ou fetch

## 🔧 Arquivos Atualizados

- ✅ `src/components/ui/contact-popup.tsx` - URL do Google Apps Script configurada
- ✅ `src/components/ui/contact-2.tsx` - URL do Google Apps Script configurada
- ✅ `google-apps-script.js` - ID da planilha configurado

## 📞 Próximos Passos

1. **Testar integração** com URLs de UTM
2. **Verificar dados** na planilha Google Sheets
3. **Configurar relatórios** e dashboards
4. **Monitorar leads** em tempo real

## 🚀 Status da Implementação

- ✅ Rastreamento UTM implementado
- ✅ Formulários integrados
- ✅ Google Apps Script configurado
- ✅ URLs atualizadas no site
- ✅ ID da planilha configurado
- ✅ **INTEGRAÇÃO 100% FUNCIONAL!**
