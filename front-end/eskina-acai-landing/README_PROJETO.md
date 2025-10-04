# 🍇 Eskina do Açaí - Landing Page

Landing page profissional desenvolvida em Next.js para o comércio de açaí "Eskina do Açaí".

## 🚀 Tecnologias

- **Next.js 15.5.4** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones

## 📋 Funcionalidades

✅ Design responsivo e moderno  
✅ 6 seções completas (Home, Sobre, Produtos, Promoções, Contato)  
✅ Carrossel de imagens interativo  
✅ Formulário de contato com validação  
✅ Botão flutuante do WhatsApp  
✅ Integração com redes sociais  
✅ SEO otimizado  
✅ Performance otimizada  

## 🎨 Paleta de Cores

- **Roxo Primário**: #5A2D82
- **Amarelo Destaque**: #FDCB00
- **Vermelho Açaí**: #E63946
- **Roxo Claro**: #A07CD0

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório ou navegue até a pasta
cd eskina-acai-landing

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Produção

```bash
# Faça o build de produção
npm run build

# Inicie o servidor de produção
npm start
```

## 📁 Estrutura de Pastas

```
eskina-acai-landing/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── layout/           # Header e Footer
│   ├── sections/         # Seções da página
│   └── ui/               # Componentes UI reutilizáveis
├── public/               # Arquivos estáticos
│   └── images/          # Imagens do site
└── DOCUMENTACAO.md      # Documentação completa
```

## 🔧 Configurações Necessárias

### 1. Informações de Contato

Edite os seguintes arquivos com as informações reais:

- `components/layout/Header.tsx` - Links de redes sociais
- `components/layout/Footer.tsx` - Telefone, e-mail, site
- `components/sections/ContactSection.tsx` - Endereço, horários
- `components/ui/WhatsAppButton.tsx` - Número do WhatsApp

### 2. Preços

Atualize os preços em:
- `components/sections/ProductsSection.tsx`
- `components/sections/PromotionsSection.tsx`

### 3. Imagens

Substitua as imagens em `public/images/` pelas imagens reais do negócio.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (375px+)
- 💻 Tablet (768px+)
- 🖥️ Desktop (1024px+)

## 🌐 Deploy

O site pode ser facilmente deployado em:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- Qualquer servidor com suporte a Node.js

### Deploy na Vercel

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça o deploy
vercel
```

## 📖 Documentação Completa

Para informações detalhadas sobre arquitetura, personalização e manutenção, consulte o arquivo `DOCUMENTACAO.md`.

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato através dos canais oficiais da Eskina do Açaí.

---

**Desenvolvido com ❤️ para Eskina do Açaí**
