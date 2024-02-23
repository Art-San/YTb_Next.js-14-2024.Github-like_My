import { handleLogOut } from '@/lib/action'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

const Logout = () => {
  return (
    <>
      <Image
        alt=""
        width={25}
        height={25}
        src={
          'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
        }
        className="w-10 h-10 rounded-full border border-gray-800"
      />

      <form action={handleLogOut}>
        <button className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
          <MdLogout size={22} />
        </button>
      </form>
    </>
  )
}

export default Logout
