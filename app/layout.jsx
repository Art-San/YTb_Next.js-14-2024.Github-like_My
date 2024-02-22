import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub Likes',
  description: 'You will always find your favorite repository.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
