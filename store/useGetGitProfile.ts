import { getUserProfileArt } from '@/services/getUserProfile'
import { create } from 'zustand'

export const useGetGitProfile = create((set) => ({
  profile: {},
  loading: false,
  getProfileArt: async (username) => {
    set({ loading: true })
    const profile = await getUserProfileArt(username)
    // console.log('useRepo repo', repo)
    set({ profile, loading: false })
  }
}))
