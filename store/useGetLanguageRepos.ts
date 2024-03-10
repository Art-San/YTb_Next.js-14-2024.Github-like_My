import { Repository } from '@/models/models'
import { create } from 'zustand'

interface IServerResponse {
  languageRepos: Repository[]
  error: string | null
  loading: boolean
  getReposLanguage: (value: string) => Promise<void>
}

export const useGetLangRepo = create<IServerResponse>((set) => ({
  languageRepos: [],
  error: null,
  loading: false,
  getReposLanguage: async (language: string) => {
    set({ loading: true })
    console.log('process.env.MONGO:', process.env.MONGO)
    console.log(
      'process.env.VITE_GITHUB_API_KEY_7DAY:',
      process.env.VITE_GITHUB_API_KEY_7DAY
    )
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
          authorization: `token ${process.env.VITE_GITHUB_API_KEY_7DAY}` // так нельзя делать, ключ все ровно попадет на фронт
        }
      }
    )
    // const response = await fetch(
    //   `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
    // )
    if (!response.ok) {
      set({ error: 'Не удалось получить репозитории: !response.ok' })
      throw new Error('Failed to fetch user serverResponse')
    }

    const data = await response.json()

    set({ error: null, languageRepos: data.items, loading: false })
  }
}))

// import { Repository } from '@/models/models'
// import { create } from 'zustand'

// interface IServerResponse {
//   languageRepos: Repository[]
//   error: string | null
//   loading: boolean
//   getReposLanguage: (value: string) => Promise<void>
// }

// export const useGetLangRepo = create<IServerResponse>((set) => ({
//   languageRepos: [],
//   error: null,
//   loading: false,
//   getReposLanguage: async (language: string) => {
//     set({ loading: true })
//     try {
//       //   const response = await fetch(
//       //     `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
//       //     {
//       //       headers: {
//       //         // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
//       //         authorization: `token ${process.env.VITE_GITHUB_API_KEY_7DAY}` // так нельзя делать, ключ все ровно попадет на фронт
//       //       }
//       //     }
//       //   )
//       const response = await fetch(
//         `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
//       )
//       if (!response.ok) {
//         set({ error: 'Не удалось получить репозитории: !response.ok' })
//         throw new Error('Failed to fetch user serverResponse')
//       }

//       set({ error: null })
//       const data = await response.json()
//       set({ languageRepos: data.items })
//     } catch (error) {
//       console.error('Failed to fetch repositories:', error)
//     } finally {
//       set({ loading: false })
//     }
//   }
// }))
