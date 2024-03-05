import { IoHomeSharp } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import { MdOutlineExplore } from 'react-icons/md'
import { PiSignInBold } from 'react-icons/pi'
import { MdEditDocument } from 'react-icons/md'
import Logout from './Logout'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/lib/auth'

const Sidebar = async () => {
  const session = await auth()

  // console.log('session', session?.user?.image)

  return (
    <aside
      className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8
      overflow-y-auto border-r bg-glass"
    >
      <nav className="h-full flex flex-col gap-3">
        <Link href="/" className="flex justify-center w-auto h-auto">
          <Image
            src="/github.svg"
            alt="Github Logo"
            width="0"
            height="0"
            className=" w-6 h-6"
          />
        </Link>

        <Link
          href="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800"
        >
          <IoHomeSharp size={20} />
        </Link>

        {session && (
          <Link
            href="/likes"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <FaHeart size={22} />
          </Link>
        )}

        {session && (
          <Link
            href="/explore"
            className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdOutlineExplore size={25} />
          </Link>
        )}

        {!session && (
          <Link
            href="/login"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <PiSignInBold size={25} />
          </Link>
        )}

        {!session && (
          <Link
            href="/signup"
            className="p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdEditDocument size={25} />
          </Link>
        )}

        {session && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout image={session.user.image} />
          </div>
        )}
      </nav>
    </aside>
  )
}
export default Sidebar
