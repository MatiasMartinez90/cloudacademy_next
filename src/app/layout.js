import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plataforma de Cursos',
  description: 'Plataforma de documentación y cursos técnicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-red-500">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
