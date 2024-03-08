'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ErrorType {
  message: string
}

export default function Error({ error }: { error: ErrorType }) {
  let errorMessage = error.message

  if (error.message.startsWith('Cast to ObjectId failed')) {
    errorMessage = 'User not found'
  }

  return (
    <main className="flex flex-[3_3_0%] h-screen flex-col items-center justify-center bg-[#222220f4] bg-opacity-50">
      <h2 className="text-center">{errorMessage}</h2>
      <button className="mt-4 rounded-md bg-sigSurface px-4 py-2 text-sm text-white transition-colors hover:bg-main">
        <Link href="/chat">Go Back to Chat</Link>
      </button>
    </main>
  )
}
