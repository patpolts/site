import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '../components/Header'

const inter = Inter({ subsets: ['latin'] })
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={montserrat.className}>
        <div className='container text-center bg-center  min-w-full min-h-screen p-4'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
