import { create } from 'zustand'

export const useGetGitProfile = create((set) => ({
  profile: {},
  loading: false,
  getProfileArt: async (username = 'burakorkmez') => {
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
