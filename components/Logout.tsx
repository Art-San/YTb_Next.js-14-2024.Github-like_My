import { handleLogOut } from '@/lib/action'
import Image from 'next/image'
import { MdLogout } from 'react-icons/md'

// interface IProp {
//   image: string
// }

const Logout = ({ image }) => {
  return (
    <>
      <Image
        alt=""
        width={25}
        height={25}
        src={image}
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
