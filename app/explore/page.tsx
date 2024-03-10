'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'

import Image from 'next/image'
import Spinner from '@/components/Spinner'
import Repos2 from '@/components/Repos2'
import { useGetLangRepo } from '@/store/useGetLanguageRepos'

const languages = [
  {
    id: 1,
    name: 'javascript',
    path: '/javascript.svg',
    alt: 'JavaScript logo'
  },
  {
    id: 2,
    name: 'typescript',
    path: '/typescript.svg',
    alt: 'TypeScript logo'
  },
  { id: 3, name: 'c++', path: '/c++.svg', alt: 'C++ logo' },
  { id: 4, name: 'python', path: '/python.svg', alt: 'Python logo' },
  { id: 5, name: 'java', path: '/java.svg', alt: 'Java logo' }
]

const ExplorePage = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState('')
  const [loading, name, languageRepos, getReposLanguage] = useGetLangRepo(
    (state) => [
      state.loading,
      state.name,
      state.languageRepos,
      state.getReposLanguage
    ]
  )

  const clickHandler = async (language: string) => {
    // setSelectedLanguage(language)
    await getReposLanguage(language)
  }

  return (
    <div className="px-4">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          {languages.map((item) => (
            <Image
              key={item.id}
              width={0}
              height={0}
              src={item.path}
              alt={item.alt}
              className="h-11 w-11 sm:h-20 cursor-pointer"
              onClick={() => clickHandler(item.name)}
            />
          ))}
        </div>
        {languageRepos?.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full ">
              {name?.toUpperCase()}{' '}
            </span>
            Repositories
          </h2>
        )}
        {!loading && languageRepos?.length > 0 && (
          <Repos2 repos={languageRepos} alwaysFullWidth />
        )}

        {loading && <Spinner />}
      </div>
    </div>
  )
}
export default ExplorePage
