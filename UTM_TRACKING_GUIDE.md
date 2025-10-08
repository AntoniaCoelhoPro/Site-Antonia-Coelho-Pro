# 📊 Guia de Rastreamento UTM - Site Antonia Coelho

## 🎯 O que é Rastreamento UTM?

UTM (Urchin Tracking Module) são parâmetros adicionados às URLs para rastrear a origem do tráfego e medir a eficácia das campanhas de marketing.

## 📋 Parâmetros UTM Suportados

### UTMs Padrão
- **utm_source**: Origem do tráfego (ex: google, facebook, instagram, email)
- **utm_medium**: Tipo de mídia (ex: cpc, social, email, organic)
- **utm_campaign**: Nome da campanha (ex: black-friday-2024, lancamento-produto)
- **utm_term**: Palavra-chave (ex: marketing-digital, trafego-pago)
- **utm_content**: Conteúdo específico (ex: banner-topo, botao-azul)

### IDs de Clique
- **gclid**: Google Ads Click ID (automático)
- **fbclid**: Facebook Click ID (automático)

### Referrer
- **ref**: Referrer personalizado
- **referrer**: Referrer alternativo

## 🔗 Exemplos de URLs de Teste

### Google Ads
```
https://antoniacoelhopro.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=consultoria-gratuita&utm_term=marketing-digital&utm_content=anuncio-1
```

### Facebook Ads
```
https://antoniacoelhopro.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=traffic-pago&utm_content=video-anuncio
```

### Instagram
```
https://antoniacoelhopro.com.br/?utm_source=instagram&utm_medium=social&utm_campaign=stories-promocao&utm_content=story-1
```

### Email Marketing
```
https://antoniacoelhopro.com.br/?utm_source=email&utm_medium=newsletter&utm_campaign=newsletter-janeiro&utm_content=cta-principal
```

### YouTube
```
https://antoniacoelhopro.com.br/?utm_source=youtube&utm_medium=video&utm_campaign=tutorial-marketing&utm_content=descricao-video
```

### LinkedIn
```
https://antoniacoelhopro.com.br/?utm_source=linkedin&utm_medium=social&utm_campaign=posts-profissionais&utm_content=post-1
```

### WhatsApp
```
https://antoniacoelhopro.com.br/?utm_source=whatsapp&utm_medium=messaging&utm_campaign=grupos&utm_content=link-grupo
```

### Tráfego Direto (sem UTMs)
```
https://antoniacoelhopro.com.br/
```

## 📊 Dados Capturados na Planilha

### Informações Básicas
- **Data/Hora**: Quando o lead foi capturado
- **Nome**: Nome completo do interessado
- **Email**: Email de contato
- **WhatsApp**: Número com DDD
- **Nicho**: Área de atuação
- **Mensagem**: Texto da mensagem
- **Origem**: "Popup" ou "Formulário Principal"

### Dados de Rastreamento
- **UTM Source**: Origem do tráfego
- **UTM Medium**: Tipo de mídia
- **UTM Campaign**: Nome da campanha
- **UTM Term**: Palavra-chave
- **UTM Content**: Conteúdo específico
- **GCLID**: Google Ads Click ID
- **FBCLID**: Facebook Click ID
- **Referrer**: Referrer personalizado
- **Landing Page**: Página de destino
- **Timestamp**: Timestamp exato
- **User Agent**: Informações do navegador
- **Device Info**: Tipo de dispositivo, navegador e SO

## 🧪 Como Testar

### 1. Teste Básico
1. Acesse: `https://antoniacoelhopro.com.br/?utm_source=teste&utm_medium=manual&utm_campaign=teste-utm`
2. Preencha o formulário ou popup
3. Verifique na planilha se os dados foram salvos

### 2. Teste de Persistência
1. Acesse com UTMs: `https://antoniacoelhopro.com.br/?utm_source=facebook&utm_medium=cpc&utm_campaign=teste`
2. Navegue para outras páginas (sem UTMs)
3. Preencha o formulário
4. Verifique se os UTMs originais foram mantidos

### 3. Teste de Validade
1. Acesse com UTMs
2. Aguarde 31 dias
3. Preencha o formulário
4. Verifique se os UTMs foram limpos (voltou para "direct")

## 📈 Análise de Dados

### Relatórios Úteis
1. **Leads por Fonte**: Agrupar por UTM Source
2. **Eficácia de Campanhas**: Agrupar por UTM Campaign
3. **Performance por Mídia**: Agrupar por UTM Medium
4. **Dispositivos**: Analisar Device Info
5. **Horários**: Analisar Data/Hora

### Fórmulas Google Sheets
```excel
# Contar leads por fonte
=COUNTIF(H:H,"google")

# Contar leads por campanha
=COUNTIF(J:J,"consultoria-gratuita")

# Taxa de conversão por fonte
=COUNTIF(H:H,"facebook")/COUNT(H:H)
```

## 🔧 Configuração

### 1. Google Apps Script
- Substitua `SEU_SPREADSHEET_ID` pelo ID da sua planilha
- Publique como web app com permissões públicas

### 2. Site
- Substitua `SEU_SCRIPT_ID` pela URL do Google Apps Script nos arquivos:
  - `src/components/ui/contact-popup.tsx`
  - `src/components/ui/contact-2.tsx`

## 🚀 Benefícios

1. **Rastreamento Completo**: Saiba exatamente de onde vêm seus leads
2. **Otimização de Campanhas**: Identifique quais canais convertem melhor
3. **ROI Preciso**: Calcule o retorno real de cada investimento
4. **Dados Persistentes**: UTMs são mantidos por 30 dias
5. **Análise Detalhada**: Informações completas sobre cada lead

## 📞 Suporte

Para dúvidas sobre implementação ou análise de dados, entre em contato com a equipe de desenvolvimento.
