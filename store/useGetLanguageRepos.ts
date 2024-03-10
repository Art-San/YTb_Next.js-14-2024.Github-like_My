import { Repository } from '@/models/models'
import { getReposLanguage } from '@/services/getReposLanguage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IServerResponse {
  languageRepos: Repository[]
  name: string | null
  loading: boolean
  getReposLanguage: (value: string) => Promise<void>
}

// export const useGetLangRepo = create<IServerResponse>((set) => ({
//   languageRepos: [],

//   loading: false,
//   getReposLanguage: async (language: string) => {
//     set({ loading: true })

//     const data = await getReposLanguage(language)

//     set({ languageRepos: data.items, loading: false })
//   }
// }))

export const useGetLangRepo = create<IServerResponse>()(
  persist(
    (set) => ({
      languageRepos: [],
      name: null,
      loading: false,
      getReposLanguage: async (language: string) => {
        set({ loading: true })
        const name = language
        const data = await getReposLanguage(language)

        set({ languageRepos: data.items, loading: false, name: name })
      }
    }),
    {
      name: 'language-repos'
    }
  )
)
