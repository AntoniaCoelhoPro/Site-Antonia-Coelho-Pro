# Instruções para Adicionar a Logo

## ✅ Configuração Concluída

O código do site já foi atualizado para usar sua logo PNG. Agora você precisa apenas:

## 📁 Onde Colocar a Imagem

1. **Copie o arquivo `LOGO ANT.png`** para a pasta `public` do projeto
2. **Caminho completo:** `C:\Users\andre\Desktop\site antonia\public\LOGO ANT.png`
3. **✅ Pasta `public` criada com sucesso!**

## 🔧 O que foi alterado

- ✅ Criada pasta `public` para arquivos estáticos
- ✅ Atualizado componente `Logo` em `src/components/ui/hero-section-1.tsx`
- ✅ Logo agora usa `<img>` com caminho `/LOGO ANT.png`
- ✅ Tamanho definido como `w-12 h-12` (48x48px)
- ✅ Classe `object-contain` para manter proporções

## 🚀 Como testar

1. Coloque o arquivo `LOGO ANT.png` na pasta `public`
2. Execute o projeto com `npm run dev`
3. A logo deve aparecer no header do site

## 📝 Notas

- A logo aparecerá no header principal do site
- O tamanho é responsivo e se adapta ao design
- Se precisar ajustar o tamanho, modifique as classes `w-12 h-12` no arquivo `hero-section-1.tsx`
