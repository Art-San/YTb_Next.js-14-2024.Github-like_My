// вариант от gpt No: 1
import { create } from 'zustand'
export interface Repository {
  id?: string
  created_at?: string
  clone_url?: string
  html_url?: string
  name?: string
  stargazers_count?: string
  forks_count?: string
  language?: string
  description?: string
}

interface IRepository {
  repos: Repository[]
  loading: boolean
  getRepositories: (value: string) => Promise<void>
  sortRepositories: (sortType: string) => void
}

interface IRepositorySort {
  id: string
  created_at: string
}

export const useGetRepositories = create<IRepository>((set) => ({
  repos: [],
  loading: false,
  getRepositories: async (url: string) => {
    set({ loading: true })
    const response = await fetch(url)
    const repos = await response.json()

    repos.sort((a: any, b: any) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
    })

    set({ repos, loading: false })
  },
  sortRepositories: (sortType: string) => {
    set((state) => {
      let sortedRepos = [...state.repos]
      if (sortType === 'recent') {
        sortedRepos.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
      } else if (sortType === 'stars') {
        sortedRepos.sort(
          (a: any, b: any) => b.stargazers_count - a.stargazers_count
        )
      } else if (sortType === 'forks') {
        sortedRepos.sort((a: any, b: any) => b.forks_count - a.forks_count)
      }
      return { repos: sortedRepos }
    })
  }
}))

// вариант от gpt No: 3
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
//   sortRepositories: (repos: Repository[], sortType: string) => void
// }

// interface IRepositorySort {
//   id: string
//   created_at: string
// }

// export const useGetRepositories = create<IRepository>((set) => ({
//   repos: [],
//   loading: false,
//   getRepositories: async (url: string) => {
//     set({ loading: true })
//     const response = await fetch(url)
//     const repos = await response.json()

//     repos.sort((a: any, b: any) => {
//       const dateA = new Date(a.created_at)
//       const dateB = new Date(b.created_at)
//       return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
//     })
//     set({ repos, loading: false })
//   },
//   sortRepositories: (repos: Repository[], sortType: string) => {
//     let sortedRepos = [...repos]
//     if (sortType === 'recent') {
//       sortedRepos.sort(
//         (a: any, b: any) =>
//           new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
//       )
//     } else if (sortType === 'stars') {
//       sortedRepos.sort(
//         (a: any, b: any) => b.stargazers_count - a.stargazers_count
//       )
//     } else if (sortType === 'forks') {
//       sortedRepos.sort((a: any, b: any) => b.forks_count - a.forks_count)
//     }
//     set({ repos: sortedRepos })
//   }
// }))
// // вариант от gpt No: 2
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
//   sortRepositories: (repos: Repository[]) => void
// }

// interface IRepositorySort {
//   id: string
//   created_at: string
// }

// export const useGetRepositories = create<IRepository>((set) => ({
//   repos: [],
//   loading: false,
//   getRepositories: async (url: string) => {
//     set({ loading: true })
//     const response = await fetch(url)
//     const repos = await response.json()

//     repos.sort((a: any, b: any) => {
//       const dateA = new Date(a.created_at)
//       const dateB = new Date(b.created_at)
//       return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
//     })
//     set({ repos, loading: false })
//   },
//   sortRepositories: async (sortRepos) => {
//     set({ loading: true })
//     const repos = sortRepos
//     set({ repos, loading: false })
//   }
// }))
