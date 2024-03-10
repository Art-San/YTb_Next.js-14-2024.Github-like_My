import { IUser } from '@/models/models'
import { getUserProfile } from '@/services/getUserProfile'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

        const response = await getUserProfile(username)

        set({ profile: response, loading: false })
      }
    }),
    {
      name: 'current-profile'
    }
  )
)
