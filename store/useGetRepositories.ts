// вариант от gpt No: 4 рефакторинг
import { Repository } from '@/models/models'
import { create } from 'zustand'

interface IRepository {
  repos: Repository[]
  loading: boolean
  getRepositories: (value: string) => Promise<void>
  sortRepositories: (sortType: string) => void
}
// В функции сортировки
;(a: Repository, b: Repository) => {
  const dateA = new Date(a.created_at || Date.now()).getTime()
  const dateB = new Date(b.created_at || Date.now()).getTime()
  return dateB - dateA
}
export const useGetRepositories = create<IRepository>((set) => ({
  repos: [],
  loading: false,
  getRepositories: async (url: string) => {
    set({ loading: true })
    try {
      const response = await fetch(url)
      const repos = await response.json()
      set({
        repos: repos.sort((a: Repository, b: Repository) => {
          const dateA = new Date(a.created_at || Date.now()).getTime()
          const dateB = new Date(b.created_at || Date.now()).getTime()
          return dateB - dateA
        }),
        loading: false
      })
    } catch (error) {
      console.error('Failed to fetch repositories:', error)
      set({ loading: false })
    }
  },
  sortRepositories: (sortType: string) => {
    set((state) => {
      let sortedRepos = [...state.repos]
      if (sortType === 'recent') {
        sortedRepos.sort((a: Repository, b: Repository) => {
          const dateA = new Date(a.created_at || Date.now()).getTime() // из за TS пришлось || Date.now())
          const dateB = new Date(b.created_at || Date.now()).getTime()
          return dateB - dateA
        })
      } else if (sortType === 'stars') {
        sortedRepos.sort(
          (a: Repository, b: Repository) =>
            (b.stargazers_count || 0) - (a.stargazers_count || 0) // из за TS пришлось || 0
        )
      } else if (sortType === 'forks') {
        sortedRepos.sort(
          (a: Repository, b: Repository) =>
            (b.forks_count || 0) - (a.forks_count || 0) // из за TS пришлось || 0
        )
      }
      return { repos: sortedRepos }
    })
  }
}))

// вариант от gpt No: 1
// import { create } from 'zustand'
// export interface Repository {
//   id?: string
//   created_at?: string
//   clone_url?: string
//   html_url?: string
//   name?: string
//   stargazers_count?: string
//   forks_count?: string
//   language?: string
//   description?: string
// }

// interface IRepository {
//   repos: Repository[]
//   loading: boolean
//   getRepositories: (value: string) => Promise<void>
//   sortRepositories: (sortType: string) => void
// }
// function sorting(arr: Repository[]) {
//   arr.sort((a: any, b: any) => {
//     const dateA = new Date(a.created_at)
//     const dateB = new Date(b.created_at)
//     return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
//   })
// }
// export const useGetRepositories = create<IRepository>((set) => ({
//   repos: [],
//   loading: false,
//   getRepositories: async (url: string) => {
//     set({ loading: true })
//     const response = await fetch(url)
//     const repos = await response.json()

//     sorting(repos)
//     // repos.sort((a: any, b: any) => {
//     //   const dateA = new Date(a.created_at)
//     //   const dateB = new Date(b.created_at)
//     //   return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
//     // })

//     set({ repos, loading: false })
//   },
//   sortRepositories: (sortType: string) => {
//     set((state) => {
//       let sortedRepos = [...state.repos]
//       if (sortType === 'recent') {
//         sorting(sortedRepos)
//         // sortedRepos.sort(
//         //   (a: any, b: any) =>
//         //     new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//         // )
//       } else if (sortType === 'stars') {
//         sortedRepos.sort(
//           (a: any, b: any) => b.stargazers_count - a.stargazers_count
//         )
//       } else if (sortType === 'forks') {
//         sortedRepos.sort((a: any, b: any) => b.forks_count - a.forks_count)
//       }
//       return { repos: sortedRepos }
//     })
//   }
// }))
