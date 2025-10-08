/**
 * Google Apps Script para receber dados dos formulários
 * Instruções:
 * 1. Acesse https://script.google.com
 * 2. Crie um novo projeto
 * 3. Cole este código
 * 4. Salve e publique como web app
 * 5. Configure permissões para "Qualquer pessoa"
 * 6. Copie a URL do web app
 */

function doPost(e) {
  try {
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Abrir a planilha
    const spreadsheet = SpreadsheetApp.openById('1Yy0SWCFPAxXzSpQdfhBKsDJHslKodffHK6Dg4vut0Q0');
    let sheet = spreadsheet.getSheetByName('LEADS');
    
    // Se a aba LEADS não existir, criar ela
    if (!sheet) {
      sheet = spreadsheet.insertSheet('LEADS');
      // Adicionar cabeçalhos na nova aba
      sheet.getRange(1, 1, 1, 20).setValues([
        ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Nicho', 'Mensagem', 'Origem', 
         'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content', 
         'GCLID', 'FBCLID', 'Referrer', 'Landing Page', 'Timestamp', 'User Agent', 'IP Address', 'Device Info']
      ]);
    }
    
    // Verificar se é o cabeçalho da primeira linha (se a aba já existia mas estava vazia)
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 20).setValues([
        ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Nicho', 'Mensagem', 'Origem', 
         'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content', 
         'GCLID', 'FBCLID', 'Referrer', 'Landing Page', 'Timestamp', 'User Agent', 'IP Address', 'Device Info']
      ]);
    }
    
    // Função para extrair informações do dispositivo do User Agent
    const getDeviceInfo = (userAgent) => {
      if (!userAgent) return 'Unknown';
      
      const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isTablet = /iPad|Android(?=.*Tablet)|Windows Phone/i.test(userAgent);
      const isDesktop = !isMobile && !isTablet;
      
      let deviceType = 'Desktop';
      if (isTablet) deviceType = 'Tablet';
      else if (isMobile) deviceType = 'Mobile';
      
      // Detectar navegador
      let browser = 'Unknown';
      if (userAgent.includes('Chrome')) browser = 'Chrome';
      else if (userAgent.includes('Firefox')) browser = 'Firefox';
      else if (userAgent.includes('Safari')) browser = 'Safari';
      else if (userAgent.includes('Edge')) browser = 'Edge';
      
      // Detectar sistema operacional
      let os = 'Unknown';
      if (userAgent.includes('Windows')) os = 'Windows';
      else if (userAgent.includes('Mac')) os = 'macOS';
      else if (userAgent.includes('Linux')) os = 'Linux';
      else if (userAgent.includes('Android')) os = 'Android';
      else if (userAgent.includes('iOS')) os = 'iOS';
      
      return `${deviceType} - ${browser} - ${os}`;
    };

    // Preparar dados para inserção
    const timestamp = new Date();
    const deviceInfo = getDeviceInfo(data.user_agent);
    
    const rowData = [
      timestamp,
      data.nome || '',
      data.email || '',
      data.whatsapp || '',
      data.nicho || '',
      data.mensagem || '',
      data.origem || 'Formulário',
      // Dados de UTM
      data.utm_source || 'direct',
      data.utm_medium || 'none',
      data.utm_campaign || '',
      data.utm_term || '',
      data.utm_content || '',
      data.gclid || '',
      data.fbclid || '',
      data.ref || '',
      data.landing_page || '',
      data.timestamp || new Date().toISOString(),
      data.user_agent || '',
      '', // IP Address (será preenchido pelo servidor se necessário)
      deviceInfo
    ];
    
    // Inserir dados na planilha
    sheet.appendRow(rowData);
    
    // Resposta de sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Dados salvos com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Resposta de erro
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Erro ao salvar dados: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'API funcionando! Use POST para enviar dados.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
