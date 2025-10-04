import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eskina do Açaí - Onde o sabor encontra a sua energia!",
  description: "Bem-vindo à Eskina do Açaí! Preparamos cada tigela com paixão e os melhores ingredientes. Açaí puro, cremoso e delicioso. Venha experimentar!",
  keywords: "açaí, eskina do açaí, açaí natural, tigela de açaí, açaí com frutas, delivery açaí, açaí gourmet",
  authors: [{ name: "Eskina do Açaí" }],
  openGraph: {
    title: "Eskina do Açaí - Onde o sabor encontra a sua energia!",
    description: "O melhor açaí da região! Preparado com carinho e ingredientes frescos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
