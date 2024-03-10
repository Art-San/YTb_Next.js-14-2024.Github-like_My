'use server'
export const getUserProfile = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`)

  if (response.statusText === 'Not Found')
    throw new Error('Unable to fetch repo.')

  return response.json()
}

// export const getUserProfile = async (username: string) => {
//   const response = await fetch(`https://api.github.com/users/${username}`, {
//     headers: {
//       // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
//       authorization: `token ${process.env.VITE_GITHUB_API_KEY_30DAY}` // так нельзя делать, ключ все ровно попадет на фронт
//     }
//   })
//   if (!response.ok) throw new Error('Не удалось получить профиль: !response.ok')

//   return response.json()
// }
