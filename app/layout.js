import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footter from '@/components/Footter'
import { ThemeModeScript } from 'flowbite-react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NoteFolio',
  description: 'My notes, ideas and blog ',
}
// app/layout.tsx

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <ThemeModeScript />
      </head>
      <body>
      <NavBar />
      <main>  
        {children}
      </main>
      <Footter />
      </body>
    </html>
  );
}
