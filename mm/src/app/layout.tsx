import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "h-screen w-full flex justify-center items-center"}>
        <div className='w-[350px] bg-gray-200 text-gray-700 h-screen flex justify-center p-5'>
          <main className='w-full'>{children}</main>
        </div>
      </body>
    </html>
  )
}
