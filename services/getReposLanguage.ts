'use server'
export const getReposLanguage = async (language: string) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
  )
  if (!response.ok)
    throw new Error('Не удалось получить репозитории: !response.ok')

  return response.json()
}

// export const getReposLanguage = async (language: string) => {

//   const response = await fetch(
//     `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
//     {
//       headers: {
//         // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
//         authorization: `token ${process.env.VITE_GITHUB_API_KEY_30DAY}` // так нельзя делать, ключ все ровно попадет на фронт
//       }
//     }
//   )
//   if (!response.ok)
//     throw new Error('Не удалось получить репозитории: !response.ok')

//   return response.json()
// }
