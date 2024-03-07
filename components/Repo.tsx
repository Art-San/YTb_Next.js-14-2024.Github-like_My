import { FaCodeBranch, FaCopy, FaRegStar } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa6'

import toast from 'react-hot-toast'
import Image from 'next/image'
import { formatDate } from '@/utils/functions'
import { PROGRAMMING_LANGUAGES } from '@/utils/constants'

const Repo = ({ repo }) => {
  const formattedDate = formatDate(repo.created_at)

  const handleCloneClick = async (repo) => {
    try {
      await navigator.clipboard.writeText(repo.clone_url)
      toast.success('URL-адрес репо клонирован в буфер обмена.')
    } catch (error) {
      toast.error('Не удалось выполнить запись в буфер обмена ')
    }
  }

  return (
    <li className="mb-10 ms-7">
      <span
        className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
    rounded-full -start-3 ring-8 ring-white"
      >
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repo.name}
        </a>
        <span
          className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
        py-0.5 rounded-full flex items-center gap-1"
        >
          <FaRegStar /> {repo.stargazers_count}
        </span>
        <span
          className="bg-purple-100 text-purple-800 text-xs font-medium
         px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCodeFork /> {repo.forks_count}
        </span>
        <span
          onClick={() => handleCloneClick(repo)}
          className="cursor-pointer bg-green-100 text-green-800 text-xs
        font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"
        >
          <FaCopy /> Clone
        </span>
      </div>

      <time
        className="block my-1 text-xs font-normal leading-none
     text-gray-400"
      >
        Released on {formattedDate}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500">
        {repo.description
          ? repo.description.slice(0, 500)
          : 'No description provided'}
      </p>
      {PROGRAMMING_LANGUAGES[repo.language] ? (
        <Image
          width={25}
          height={25}
          src={PROGRAMMING_LANGUAGES[repo.language]}
          alt="Programming language icon"
        />
      ) : null}
    </li>
  )
}
export default Repo

// import Image from 'next/image'
// import { FaCodeBranch, FaCopy, FaRegStar } from 'react-icons/fa'
// import { FaCodeFork } from 'react-icons/fa6'

// const Repo = () => {
//   return (
//     <li className="mb-10 ms-7">
//       <span
//         className="absolute flex items-center justify-center w-6 h-6 bg-blue-100
// 			rounded-full -start-3 ring-8 ring-white"
//       >
//         <FaCodeBranch className="w-5 h-5 text-blue-800" />
//       </span>
//       <div className="flex gap-2 items-center flex-wrap">
//         <a
//           href={'https://github.com/burakorkmez/mern-chat-app'}
//           target="_blank"
//           rel="noreferrer"
//           className="flex items-center gap-2 text-lg font-semibold"
//         >
//           mern-chat-app
//         </a>
//         <span
//           className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
// 					py-0.5 rounded-full flex items-center gap-1"
//         >
//           <FaRegStar /> 167
//         </span>
//         <span
//           className="bg-purple-100 text-purple-800 text-xs font-medium
// 					 px-2.5 py-0.5 rounded-full flex items-center gap-1"
//         >
//           <FaCodeFork /> 25
//         </span>
//         <span
//           className="cursor-pointer bg-green-100 text-green-800 text-xs
// 					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1"
//         >
//           <FaCopy /> Clone
//         </span>
//       </div>

//       <time
//         className="block my-1 text-xs font-normal leading-none
// 			 text-gray-400"
//       >
//         Released on Jan 1, 2021
//       </time>
//       <p className="mb-4 text-base font-normal text-gray-500">
//         Real Time Chat App | MERN && Socket.io && JWT
//       </p>
//       <Image
//         width={32}
//         height={32}
//         src={'/javascript.svg'}
//         alt="Programming language icon"
//         className="h-8"
//       />
//     </li>
//   )
// }

// export default Repo
