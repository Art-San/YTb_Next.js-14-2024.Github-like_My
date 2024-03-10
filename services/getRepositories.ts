'use server'
export const getRepositories = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok)
    throw new Error('Не удалось получить репозитории: !response.ok')

  return response.json()
}

// export const getRepositories = async (url: string) => {
//   const response = await fetch(url, {
//     headers: {
//       authorization: `token ${process.env.VITE_GITHUB_API_KEY_30DAY}`
//     }
//   })
//   if (!response.ok)
//     throw new Error('Не удалось получить репозитории: !response.ok')

//   return response.json()
// }
