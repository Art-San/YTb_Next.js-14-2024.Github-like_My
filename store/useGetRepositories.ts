// вариант от gpt No: 4 рефакторинг
import { Repository } from '@/models/models'
import { getRepositories } from '@/services/getRepositories'
import { create } from 'zustand'

interface IRepository {
  repos: Repository[]
  loading: boolean
  getRepositories: (value: string) => Promise<void>
  sortRepositories: (sortType: string) => void
}

export const useGetRepositories = create<IRepository>((set) => ({
  repos: [],
  loading: false,
  getRepositories: async (url: string) => {
    set({ loading: true })
    try {
      const repos = await getRepositories(url)
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
