// вариант от gpt No: 1
'use client'
import { useGetGitProfile } from '@/store/useGetGitProfile'
import { useGetRepositories } from '@/store/useGetRepositories'
import { useEffect, useState } from 'react'
const SortRepos = () => {
  const [sortType, setSortType] = useState('recent')
  const sortRepositories = useGetRepositories((state) => state.sortRepositories)
  const profile = useGetGitProfile((state) => state.profile)

  useEffect(() => {
    setSortType('recent')
  }, [profile])

  const BUTTONS = [
    { type: 'recent', text: 'Most Recent' },
    { type: 'stars', text: 'Most Stars' },
    { type: 'forks', text: 'Most Forks' }
  ]

  const onSort = (sortType: string) => {
    setSortType(sortType)
    sortRepositories(sortType)
  }

  return (
    <div className="mb-2 flex justify-center lg:justify-end">
      {BUTTONS.map((button) => (
        <button
          key={button.type}
          type="button"
          className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
            button.type == sortType ? 'border-blue-500' : ''
          }`}
          onClick={() => onSort(button.type)}
        >
          {button.text}
        </button>
      ))}
    </div>
  )
}

export default SortRepos
