import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SCONVERGE IMMOBILIER — Votre avenir immobilier sûr et réussi',
  description: 'Agence immobilière à Abidjan, Cocody Angré. Achat, vente, location et gestion immobilière de qualité. Votre projet, notre priorité.',
  keywords: ['immobilier', 'Abidjan', 'achat', 'vente', 'location', 'gestion immobilière', 'SCONVERGE'],
  authors: [{ name: 'SCONVERGE IMMOBILIER' }],
  openGraph: {
    title: 'SCONVERGE IMMOBILIER — Votre avenir immobilier sûr et réussi',
    description: 'Agence immobilière premium à Abidjan. Achat, vente, location et gestion immobilière.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SCONVERGE IMMOBILIER',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCONVERGE IMMOBILIER — Votre avenir immobilier sûr et réussi',
    description: 'Agence immobilière premium à Abidjan. Achat, vente, location et gestion immobilière.',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
