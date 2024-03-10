import { IUser } from '@/models/models'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export interface IProfileState {
  profile: IUser | null
  loading: boolean
  getProfileArt: (value: string) => Promise<void>
}

export const useGetGitProfile = create<IProfileState>()(
  persist(
    (set) => ({
      profile: null,
      loading: false,
      getProfileArt: async (username) => {
        set({ loading: true })
        const response = await fetch(`https://api.github.com/users/${username}`)
        // const response = await fetch(`https://api.github.com/users/Art-San`)
        set({ profile: await response.json(), loading: false })
      }
    }),
    {
      name: 'current-profile'
    }
  )
)
