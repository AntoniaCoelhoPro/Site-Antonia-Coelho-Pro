# 📊 Configuração do Google Sheets para Formulários

## Passo 1: Criar a Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para "Leads - Site Antonia Coelho"
4. **IMPORTANTE**: Copie o ID da planilha da URL (exemplo: `1ABC123DEF456GHI789JKL`)

## Passo 2: Configurar o Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo Projeto"
3. Cole o código do arquivo `google-apps-script.js`
4. **Substitua** `SEU_SPREADSHEET_ID` pelo ID da sua planilha
5. Salve o projeto (Ctrl+S)
6. Dê um nome ao projeto: "API Formulários Site"

## Passo 3: Publicar como Web App
1. No Google Apps Script, clique em "Implantar" > "Nova implantação"
2. Escolha "Tipo": "Aplicativo da Web"
3. Configure:
   - **Descrição**: "API para formulários do site"
   - **Executar como**: "Eu"
   - **Quem tem acesso**: "Qualquer pessoa"
4. Clique em "Implantar"
5. **COPIE A URL** gerada (exemplo: `https://script.google.com/macros/s/ABC123.../exec`)

## Passo 4: Testar a Integração
1. A URL deve retornar: `{"message":"API funcionando! Use POST para enviar dados."}`
2. Se funcionar, a integração está pronta!

## Estrutura da Planilha
A planilha terá as seguintes colunas:
- **A**: Data/Hora
- **B**: Nome
- **C**: Email  
- **D**: WhatsApp
- **E**: Nicho
- **F**: Mensagem
- **G**: Origem (Popup ou Formulário)

## Próximos Passos
Após configurar, me informe a URL do web app para integrar com o site!
