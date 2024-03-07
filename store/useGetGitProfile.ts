import { create } from 'zustand'

export interface IProfileState {
  profile: {
    name?: string
    email?: string
    login?: string
    bio?: string
    html_url?: string
    avatar_url?: string
    location?: string
    twitter_username?: string
    followers?: string
    following?: string
    public_repos?: string
    public_gists?: string
    repos_url?: string
  }
  loading: boolean
  getProfileArt: (value: string) => Promise<void>
}

export const useGetGitProfile = create<IProfileState>()((set) => ({
  profile: {},
  loading: false,
  getProfileArt: async (username) => {
    set({ loading: true })
    const response = await fetch(`https://api.github.com/users/${username}`)
    // const response = await fetch(`https://api.github.com/users/Art-San`)
    set({ profile: await response.json(), loading: false })
  }
}))
// export const useGetGitProfile = create((set) => ({
//   profile: {},
//   loading: false,
//   getProfileArt: async (username) => {
//     set({ loading: true })
//     const profile = await getUserProfileArt(username)
//     // console.log('useRepo repo', repo)
//     set({ profile, loading: false })
//   }
// }))
