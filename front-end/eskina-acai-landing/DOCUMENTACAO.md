# Documentação do Site Eskina do Açaí

## Visão Geral

Este é um site responsivo de landing page desenvolvido em **Next.js** para o comércio de açaí "Eskina do Açaí". O site foi construído seguindo as melhores práticas de desenvolvimento web, com foco em performance, responsividade e experiência do usuário.

## Tecnologias Utilizadas

- **Framework**: Next.js 15.5.4 (com App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: React Icons
- **Fontes**: Google Fonts (Montserrat e Open Sans)

## Estrutura do Projeto

```
eskina-acai-landing/
├── app/
│   ├── layout.tsx          # Layout principal com metadados SEO
│   ├── page.tsx             # Página principal que integra todas as seções
│   └── globals.css          # Estilos globais e variáveis CSS
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Cabeçalho com navegação e redes sociais
│   │   └── Footer.tsx       # Rodapé com informações de contato
│   ├── sections/
│   │   ├── HomeSection.tsx      # Seção inicial com carrossel
│   │   ├── AboutSection.tsx     # Seção sobre a empresa
│   │   ├── ProductsSection.tsx  # Seção de produtos
│   │   ├── PromotionsSection.tsx # Seção de promoções
│   │   └── ContactSection.tsx   # Seção de contato com formulário
│   └── ui/
│       ├── Carousel.tsx         # Componente de carrossel reutilizável
│       └── WhatsAppButton.tsx   # Botão flutuante do WhatsApp
└── public/
    └── images/              # Imagens do site
        ├── logo.png
        ├── about_us.png
        ├── carousel/
        ├── products/
        └── promotions/
```

## Design UX/UI

### Paleta de Cores

- **Roxo Escuro** (#5A2D82) - Cor primária da marca
- **Amarelo/Dourado** (#FDCB00) - Cor de destaque para CTAs
- **Rosa/Vermelho Açaí** (#E63946) - Para promoções e elementos de destaque
- **Marrom** (#6F4E37) - Para elementos relacionados a coberturas
- **Roxo Claro** (#A07CD0) - Para fundos secundários e gradientes

### Tipografia

- **Cabeçalhos**: Montserrat (700, 800)
- **Corpo de Texto**: Open Sans (400, 600)

## Seções do Site

### 1. Header
- Logo da empresa
- Menu de navegação responsivo
- Campo de busca
- Links para redes sociais (Facebook, Instagram, TikTok)
- Menu hambúrguer para dispositivos móveis

### 2. Home
- Slogan principal
- Texto de boas-vindas
- Carrossel com 3 imagens
- Botão de call-to-action

### 3. Sobre
- História da empresa
- Motivação e propósito
- Imagem da empresa

### 4. Produtos
- Açaí tradicional com tamanhos
- Categorias de produtos (Frutas, Cremes, Granola, Doces)
- Seção "Monte Seu Açaí"

### 5. Promoções
- Carrossel de promoções
- Destaque da semana
- Cards de promoções adicionais

### 6. Contato
- Informações de contato (telefone, e-mail, endereço)
- Horário de funcionamento
- Formulário de contato com validação

### 7. Footer
- Informações de contato
- Links rápidos
- Redes sociais
- Copyright

### 8. Botão Flutuante WhatsApp
- Botão fixo no canto inferior direito
- Tooltip animado
- Link direto para WhatsApp

## Como Executar o Projeto

### Desenvolvimento

```bash
cd eskina-acai-landing
npm install
npm run dev
```

Acesse: http://localhost:3000

### Build de Produção

```bash
npm run build
npm start
```

## Personalizações Necessárias

### 1. Informações de Contato

Edite os seguintes arquivos para adicionar as informações reais:

**components/layout/Header.tsx** e **Footer.tsx**:
- Telefone: (XX) XXXX-XXXX
- E-mail: contato@eskinadoacai.com.br
- Links das redes sociais

**components/sections/ContactSection.tsx**:
- Endereço completo
- Horário de funcionamento

**components/ui/WhatsAppButton.tsx**:
- Número do WhatsApp (linha 12): `const whatsappNumber = '5511999999999';`
  - Formato: código do país (55) + DDD + número

### 2. Preços dos Produtos

Edite **components/sections/ProductsSection.tsx** e **PromotionsSection.tsx** para adicionar os preços reais.

### 3. Implementação do Envio de E-mail

O formulário de contato atualmente simula o envio. Para implementar o envio real:

1. Crie uma API Route em `app/api/contact/route.ts`
2. Integre com um serviço de e-mail (SendGrid, Nodemailer, etc.)
3. Atualize o `handleSubmit` em `ContactSection.tsx`

Exemplo básico:

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Implementar lógica de envio de e-mail aqui
  // usando SendGrid, Nodemailer, etc.
  
  return NextResponse.json({ success: true });
}
```

### 4. Funcionalidade de Busca

Implemente a lógica de busca no Header.tsx conforme necessário.

## Responsividade

O site é totalmente responsivo e foi testado em:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## Performance

- Imagens otimizadas com Next.js Image
- Lazy loading de componentes
- Build otimizado com Turbopack
- CSS minificado

## SEO

- Metadados configurados no layout.tsx
- Open Graph tags para compartilhamento em redes sociais
- Títulos e descrições otimizados

## Manutenção

### Adicionar Novas Imagens

1. Adicione as imagens na pasta `public/images/`
2. Referencie usando `/images/nome-da-imagem.png`

### Adicionar Novas Seções

1. Crie um novo componente em `components/sections/`
2. Importe e adicione no `app/page.tsx`

### Atualizar Conteúdo

Todo o conteúdo textual está nos componentes das seções. Edite diretamente os arquivos TypeScript.

## Suporte

Para dúvidas ou problemas, consulte a documentação oficial:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

## Licença

© 2025 Eskina do Açaí. Todos os direitos reservados.
