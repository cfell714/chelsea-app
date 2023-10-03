import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Main } from './main';

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'cf',
  description: 'this'
}

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Main> {children} </Main>
      </body>
    </html>
  )
}
