import { IUser } from '@/models/models'
import { getGitProfileSearch } from '@/services/getGitProfileSearch'
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

    const response = await getGitProfileSearch(search)

    set({ serverResponse: response.items, loading: false }) // Предполагается, что вы хотите получить только первого пользователя из результатов поиска
  }
}))
