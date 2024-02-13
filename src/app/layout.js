import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Jesus Cerdan Diaz',
  description:
    'Front-end Developer con 1 año de experiencia; Conocimientos sólidos en React, JavaScript, CSS, HTML.',
  icons: {
    icon: '/favicon.png?v=1',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefer-color-scheme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
