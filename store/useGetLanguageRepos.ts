import { Repository } from '@/models/models'
import { getReposLanguage } from '@/services/getReposLanguage'
import { create } from 'zustand'

interface IServerResponse {
  languageRepos: Repository[]

  loading: boolean
  getReposLanguage: (value: string) => Promise<void>
}

export const useGetLangRepo = create<IServerResponse>((set) => ({
  languageRepos: [],

  loading: false,
  getReposLanguage: async (language: string) => {
    set({ loading: true })

    const data = await getReposLanguage(language)

    set({ languageRepos: data.items, loading: false })
  }
}))
