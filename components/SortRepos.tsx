'use client'
import { useGetRepositories } from '@/store/useGetRepositories'
import { useState } from 'react'

const SortRepos = () => {
  const [sortType, setSortType] = useState('recent')
  const [repos, sortRepositories] = useGetRepositories((state) => [
    state.repos,
    state.sortRepositories
  ])

  const BUTTONS = [
    { type: 'recent', text: 'Most Recent' },
    { type: 'stars', text: 'Most Stars' },
    { type: 'forks', text: 'Most Forks' }
  ]

  const onSort = (sortType) => {
    if (sortType === 'recent') {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) //descending, recent first
    } else if (sortType === 'stars') {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count) //descending, most stars first
    } else if (sortType === 'forks') {
      repos.sort((a, b) => b.forks_count - a.forks_count) //descending, most forks first
    }
    setSortType(sortType)

    sortRepositories(repos)
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

// вариант от gpt
// 'use client'
// import { useGetRepositories } from '@/store/useGetRepositories'
// import { useEffect, useState } from 'react'
// const SortRepos = () => {
//   const [sortType, setSortType] = useState('recent')
//   const [repos, loading, sortRepositories] = useGetRepositories((state) => [
//     state.repos,
//     state.loading,
//     state.sortRepositories
//   ])

//   const BUTTONS = [
//     { type: 'recent', text: 'Most Recent' },
//     { type: 'stars', text: 'Most Stars' },
//     { type: 'forks', text: 'Most Forks' }
//   ]

//   const onSort = (sortType) => {
//     setSortType(sortType)
//     sortRepositories(sortType)
//   }

//   // useEffect(() => {}, [sortRepositories])

//   return (
//     <div className="mb-2 flex justify-center lg:justify-end">
//       {BUTTONS.map((button) => (
//         <button
//           key={button.type}
//           type="button"
//           className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
//             button.type == sortType ? 'border-blue-500' : ''
//           }`}
//           onClick={() => onSort(button.type)}
//         >
//           {button.text}
//         </button>
//       ))}
//     </div>
//   )
// }

// export default SortRepos
