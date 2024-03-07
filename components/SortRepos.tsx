// вариант от gpt No: 1
'use client'
import { useGetRepositories } from '@/store/useGetRepositories'
import { useState } from 'react'
const SortRepos = () => {
  const [sortType, setSortType] = useState('recent')
  const sortRepositories = useGetRepositories((state) => state.sortRepositories)

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

// вариант от gpt No: 3
// 'use client'
// import { useGetRepositories } from '@/store/useGetRepositories'
// import { useState } from 'react'

// const SortRepos = () => {
//   const [sortType, setSortType] = useState('recent')
//   const [repos, sortRepositories] = useGetRepositories((state) => [
//     state.repos,
//     state.sortRepositories
//   ])

//   const BUTTONS = [
//     { type: 'recent', text: 'Most Recent' },
//     { type: 'stars', text: 'Most Stars' },
//     { type: 'forks', text: 'Most Forks' }
//   ]

//   const onSort = (sortType: string) => {
//     setSortType(sortType)
//     sortRepositories(repos, sortType)
//   }

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

// // вариант от gpt No: 2
// 'use client'
// import { useGetRepositories } from '@/store/useGetRepositories'
// import { useState } from 'react'

// const SortRepos = () => {
//   const [sortType, setSortType] = useState('recent')
//   const [repos, sortRepositories] = useGetRepositories((state) => [
//     state.repos,
//     state.sortRepositories
//   ])

//   const BUTTONS = [
//     { type: 'recent', text: 'Most Recent' },
//     { type: 'stars', text: 'Most Stars' },
//     { type: 'forks', text: 'Most Forks' }
//   ]

//   const onSort = (sortType: string) => {
//     if (sortType === 'recent') {
//       repos.sort((a: any, b: any) => {
//         const dateA = new Date(a.created_at)
//         const dateB = new Date(b.created_at)
//         return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
//       })
//     } else if (sortType === 'stars') {
//       repos.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count) //descending, most stars first
//     } else if (sortType === 'forks') {
//       repos.sort((a: any, b: any) => b.forks_count - a.forks_count) //descending, most forks first
//     }
//     setSortType(sortType)

//     sortRepositories(repos)
//   }

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
