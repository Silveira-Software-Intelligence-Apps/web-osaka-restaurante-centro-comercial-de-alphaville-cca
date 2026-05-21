import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Osaka Restaurante | Centro Comercial de Alphaville (CCA) — Barueri',
  description: 'Produtos selecionados com qualidade garantida. Visite a Osaka Restaurante | Centro Comercial de Alphaville (CCA) em Barueri e encontre o que você procura.',
  keywords: 'Osaka Restaurante | Centro Comercial de Alphaville (CCA), sushi, sushi Barueri, Barueri, melhor sushi, sushi profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Osaka Restaurante | Centro Comercial de Alphaville (CCA)',
    description: 'Osaka Restaurante | Centro Comercial de Alphaville (CCA) — sushi em Barueri. Produtos selecionados com qualidade garantida. Visite a Osaka Restaurante | Centro Comercial de Alphaville (CCA) em Barueri e encontre o que você procura.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Osaka Restaurante | Centro Comercial de Alphaville (CCA)',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
