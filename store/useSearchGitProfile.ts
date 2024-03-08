import { IUser } from '@/models/models'
import { create } from 'zustand'

interface IServerResponse {
  serverResponse: IUser[]
  loading: boolean
  getSearchProfile: (value: string) => Promise<void>
}

export const useSearchGitProfile = create<IServerResponse>((set) => ({
  serverResponse: [],
  loading: false,
  getSearchProfile: async (search: string) => {
    set({ loading: true })
    const response = await fetch(
      `https://api.github.com/search/users?q=${search}&per_page=10`
    )
    if (!response.ok) {
      throw new Error('Failed to fetch user serverResponse')
    }
    const data = await response.json()

    set({ serverResponse: data.items, loading: false }) // Предполагается, что вы хотите получить только первого пользователя из результатов поиска
  }
}))
