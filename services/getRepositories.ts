'use server'
export const getRepositories = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok)
    throw new Error('Не удалось получить репозитории: !response.ok')

  return response.json()
}
