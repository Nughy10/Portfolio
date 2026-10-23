import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import MotionProvider from '@/components/MotionProvider';
import { contactLinks } from '@/data/i18n';

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

const siteUrl = 'https://pau-nughy.dev';

export const metadata: Metadata = {
  // Lets the generated opengraph-image get an absolute URL
  metadataBase: new URL(siteUrl),
  title: 'Pau Isach Noguera — Full-Stack Developer | Frontend Specialist',
  description:
    'Desarrollador Full-Stack especializado en Frontend con 8+ años de experiencia en desarrollo web y automatización industrial. Angular, React, Next.js, Vue.js, Java/Spring Boot.',
  keywords: [
    'Full-Stack Developer',
    'Frontend Developer',
    'Angular',
    'React',
    'Next.js',
    'Vue.js',
    'Java',
    'Spring Boot',
    'TypeScript',
    'Automatización',
    'Portfolio',
  ],
  authors: [{ name: 'Pau Isach Noguera' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Pau Isach Noguera — Full-Stack Developer | Frontend Specialist',
    description:
      'Desarrollador Full-Stack especializado en Frontend con 8+ años de experiencia. Angular, React, Next.js, Vue.js, Java/Spring Boot.',
    url: '/',
    siteName: 'Pau Isach Noguera',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// schema.org Person so search engines can identify who the site is about
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pau Isach Noguera',
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: 'Full-Stack Developer | Frontend Specialist',
  description:
    'Desarrollador Full-Stack especializado en Frontend con 8+ años de experiencia en desarrollo web y automatización industrial.',
  email: 'mailto:pau.nughy@gmail.com',
  nationality: { '@type': 'Country', name: 'España' },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad de Barcelona',
  },
  knowsAbout: [
    'Angular',
    'React',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Automatización industrial',
  ],
  sameAs: [contactLinks.linkedin.url, contactLinks.github.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Apply the saved (or system) theme before first paint to avoid a flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* In <body>: browser extensions inject scripts into <head> and break hydration there */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <MotionProvider>
              <Navbar />
              <main>{children}</main>
            </MotionProvider>
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
                '%cBuilt with Next.js 16 + TypeScript + Tailwind + Framer Motion',
                'font-size: 12px; color: #6366f1; font-style: italic;'
              );
            `,
          }}
        />
      </body>
    </html>
  );
}