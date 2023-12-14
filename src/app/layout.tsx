import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fullstack Developer » Pati Polts',
  description: 'Pati Polts desenvolvedora fullstack portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container text-center bg-center  min-w-full min-h-screen p-4'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
