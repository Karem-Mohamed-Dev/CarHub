import './globals.css'
import type { Metadata } from 'next'
import { Footer, Header } from './components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Online car rental service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
