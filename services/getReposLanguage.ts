'use server'
// export const getReposLanguage = async (language: string) => {
//   const response = await fetch(
//     `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
//   )
//   if (!response.ok)
//     throw new Error('Не удалось получить репозитории: !response.ok')

//   return response.json()
// }

export const getReposLanguage = async (language: string) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
    {
      headers: {
        // 5000 запросов в час, так как есть ключ, но он действует до 02.03.24
        authorization: `token ${process.env.VITE_GITHUB_API_KEY_7DAY}` // так нельзя делать, ключ все ровно попадет на фронт
      }
    }
  )
  if (!response.ok)
    throw new Error('Не удалось получить репозитории: !response.ok')

  return response.json()
}

// # MONGO = mongodb://127.0.0.1:27017/lama-dev-app-beginner
// VITE_GITHUB_API_KEY_7DAY='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'

// AUTH_SECRET=your-secret-123fgyrrwwecgjpERTvvvv
// NEXTAUTH_URL=http://localhost:3000

// # Git --- For tests
// GITHUB_ID=88632b6a7b8f2476b1dd
// GITHUB_SECRET=75770f05bc5393c678173783792adb525d6b2353

// # Комп
// MONGO = mongodb://127.0.0.1:27017/dashboard-lama-dev
