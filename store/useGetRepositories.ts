import { getRepositories } from '@/services/getRepositories'
import { create } from 'zustand'

export const useGetRepositories = create((set) => ({
  repos: [],
  loading: false,
  getRepositories: async (url) => {
    set({ loading: true })
    const repos = await getRepositories(url)
    // console.log('useRepo repo', repo)
    set({ repos, loading: false })
  },
  sortRepositories: async (sortRepos) => {
    // console.log('useRepo repos', sortRepos)
    set({ loading: true })
    const repos = sortRepos
    // console.log('useGetRepositories repos', repos)
    set({ repos, loading: false })
  }
}))
