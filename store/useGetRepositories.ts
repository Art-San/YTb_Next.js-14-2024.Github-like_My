import { getRepositories } from '@/services/getRepositories'
import { create } from 'zustand'
interface Repository {
  id: string
  created_at: string
}
export const useGetRepositories = create((set) => ({
  repos: [] as Repository[],
  loading: false,
  getRepositories: async (url: string) => {
    set({ loading: true })
    const repos = await getRepositories(url)
    repos.sort((a, b) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateB.getTime() - dateA.getTime() // Используйте getTime() для сравнения дат
    })
    // repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    set({ repos, loading: false })
  },
  sortRepositories: async (sortRepos: Repository[]) => {
    // console.log('useRepo repos', sortRepos)
    set({ loading: true })
    const repos = sortRepos
    console.log('useGetRepositories repos', repos)
    set({ repos, loading: false })
  }
}))

// вариант от gpt
// export const useGetRepositories = create((set) => ({
//   repos: [],
//   loading: false,
//   getRepositories: async (url: string) => {
//     set({ loading: true })
//     const repos = await getRepositories(url)
//     set({ repos, loading: false })
//   },
//   sortRepositories: (sortType: string) => {
//     set((state) => {
//       let sortedRepos = [...state.repos]
//       if (sortType === 'recent') {
//         sortedRepos.sort(
//           (a, b) => new Date(b.created_at) - new Date(a.created_at) // Используйте getTime() для сравнения дат
//         )
//       } else if (sortType === 'stars') {
//         sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count)
//       } else if (sortType === 'forks') {
//         sortedRepos.sort((a, b) => b.forks_count - a.forks_count)
//       }
//       return { repos: sortedRepos }
//     })
//   }
// }))
