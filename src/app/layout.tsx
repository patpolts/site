import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pati Polts » Fullstack Developer',
  description: 'Pati Polts desenvolvedora fullstack nodeJs, php, python, html, css, react, next, vue, wordpress, django',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/ae74012174.js" crossOrigin="anonymous" async/>
      </head>
      <body >
        <div className='container text-center bg-center  min-w-full min-h-screen p-4'>
            <Header />
              {children}
            <Footer />
        </div>
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  )
}
