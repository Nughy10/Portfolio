import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pau Isach Noguera — Full-Stack Developer',
  description:
    'Full-Stack Developer con +4 años de experiencia en Angular, React, Vue.js, Java/Spring Boot. Portfolio profesional.',
  keywords: [
    'Full-Stack Developer',
    'Angular',
    'React',
    'Vue.js',
    'Java',
    'Spring Boot',
    'TypeScript',
    'Barcelona',
    'Portfolio',
  ],
  authors: [{ name: 'Pau Isach Noguera' }],
  openGraph: {
    title: 'Pau Isach Noguera — Full-Stack Developer',
    description:
      'Full-Stack Developer con +4 años de experiencia. Angular, React, Vue.js, Java/Spring Boot.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
          </LanguageProvider>
        </ThemeProvider>

        {/* Easter egg for devs who open the console */}
        <Script
          id="easter-egg"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              console.log(
                '%c👋 Hey developer!',
                'font-size: 24px; font-weight: bold; color: #6366f1;'
              );
              console.log(
                '%cIf you\\'re reading this, we should talk.\\n📧 pau.nughy@gmail.com\\n🔗 github.com/Nughy10',
                'font-size: 14px; color: #a1a1aa;'
              );
              console.log(
                '%cBuilt with Next.js 15 + TypeScript + Tailwind + Framer Motion',
                'font-size: 12px; color: #6366f1; font-style: italic;'
              );
            `,
          }}
        />
      </body>
    </html>
  );
}