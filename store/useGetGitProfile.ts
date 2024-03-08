import { IUser } from '@/models/models'
import { create } from 'zustand'

export interface IProfileState {
  profile: IUser | null
  loading: boolean
  getProfileArt: (value: string) => Promise<void>
}
// export interface IProfileState {
//   profile: {
//     name?: string
//     email?: string
//     login?: string
//     bio?: string
//     html_url?: string
//     avatar_url?: string
//     location?: string
//     twitter_username?: string
//     followers?: string
//     following?: string
//     public_repos?: string
//     public_gists?: string
//     repos_url?: string
//   }
//   loading: boolean
//   getProfileArt: (value: string) => Promise<void>
// }

export const useGetGitProfile = create<IProfileState>()((set) => ({
  profile: null,
  // profile: {},
  loading: false,
  getProfileArt: async (username) => {
    console.log(3, username)
    set({ loading: true })
    const response = await fetch(`https://api.github.com/users/${username}`)
    // const response = await fetch(`https://api.github.com/users/Art-San`)
    set({ profile: await response.json(), loading: false })
  }
}))
