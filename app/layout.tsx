import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub Likes',
  description: 'You will always find your favorite repository.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
            {children}
          </div>
          {/* <Toaster /> */}
        </div>
      </body>
    </html>
  )
}
