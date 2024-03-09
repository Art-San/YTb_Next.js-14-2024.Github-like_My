'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'

import Image from 'next/image'
import Spinner from '@/components/Spinner'
import Repos2 from '@/components/Repos2'

//2:02:00
const ExplorePage = () => {
  // https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=10
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('')

  const exploreRepos = async (language: string) => {
    setLoading(true)
    setRepos([])
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
        // {
        //   headers: {
        //     // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
        //     authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY_7DAY}` // так нельзя делать, ключ все ровно попадет на фронт
        //   }
        // }
      )
      const repos = await res.json()
      console.log('ExplorePage repos', repos.items)
      setRepos(repos.items)

      setSelectedLanguage(language)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <Image
            width={0}
            height={0}
            src="/javascript.svg"
            alt="JavaScript"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('javascript')}
          />
          <Image
            width={0}
            height={0}
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('typescript')}
          />
          <Image
            width={0}
            height={0}
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('c++')}
          />
          <Image
            width={0}
            height={0}
            src="/python.svg"
            alt="Python logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('python')}
          />

          <Image
            width={0}
            height={0}
            src="/java.svg"
            alt="Java logo"
            className="h-11 w-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos('java')}
          />
        </div>
        {repos?.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {selectedLanguage.toUpperCase()}{' '}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos?.length > 0 && (
          <Repos2 repos={repos} alwaysFullWidth />
        )}
        {loading && <Spinner />}
      </div>
    </div>
  )
}
export default ExplorePage

// import Image from 'next/image'

// const ExplorePage = () => {
//   return (
//     <div className="px-4">
//       <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
//         <h1 className="text-xl font-bold text-center">
//           Explore Popular Repositories
//         </h1>
//         <div className="flex flex-wrap gap-2 my-2 justify-center">
//           <Image
//             width={0}
//             height={0}
//             src="/javascript.svg"
//             alt="JavaScript"
//             className="h-11 w-11 sm:h-20 cursor-pointer"
//           />
//           <Image
//             width={0}
//             height={0}
//             src="/typescript.svg"
//             alt="TypeScript logo"
//             className="h-11 w-11 sm:h-20 cursor-pointer"
//           />
//           <Image
//             width={0}
//             height={0}
//             src="/c++.svg"
//             alt="C++ logo"
//             className="h-11 w-11 sm:h-20 cursor-pointer"
//           />
//           <Image
//             width={0}
//             height={0}
//             src="/python.svg"
//             alt="Python logo"
//             className="h-11 w-11 sm:h-20 cursor-pointer"
//           />
//           <Image
//             width={0}
//             height={0}
//             src="/java.svg"
//             alt="Java logo"
//             className="h-11 w-11 sm:h-20 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
// export default ExplorePage
