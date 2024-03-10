'use server'
export const getGitProfileSearch = async (search: string) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${search}&per_page=10`
  )
  if (!response.ok) throw new Error('Не удалось получить профиль: !response.ok')

  return response.json()
}

// export const getGitProfileSearch = async (search: string) => {
//   const response = await fetch(
//     `https://api.github.com/search/users?q=${search}&per_page=10`,
//     {
//       headers: {
//         authorization: `token ${process.env.VITE_GITHUB_API_KEY_30DAY}`
//       }
//     }
//   )
//   if (!response.ok) throw new Error('Не удалось получить профиль: !response.ok')

//   return response.json()
// }
