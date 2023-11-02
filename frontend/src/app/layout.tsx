import { HotToastConfig } from '@/app/components/next/hot-toast-config'
import { ThemeProvider } from '@/app/components/theme-provider'
import { env } from '@/config/environment'
import { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { PropsWithChildren } from 'react'
import RootLayoutClientProvider from './components/client-provider'
import './styles/globals.css'

// Google Font(s) via `next/font`
const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
})

export const metadata: Metadata = {
  title: 'ink!athon',
  description: 'Substrate-based Smart Contract & DApp Development Boilerplate',
  metadataBase: new URL(env.url),
  robots: env.isProduction ? 'all' : 'noindex,nofollow',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: env.url,
    siteName: 'ink!athon',
    images: [
      {
        url: `${env.url}/images/cover.jpg`,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    site: '@scio_xyz',
    creator: '@scio_xyz',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${inconsolata.variable} font-sans`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <RootLayoutClientProvider>
            {children}
            <HotToastConfig />
          </RootLayoutClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
