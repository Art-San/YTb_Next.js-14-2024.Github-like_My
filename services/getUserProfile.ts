'use server'
export const getUserProfile = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`)

  if (response.statusText === 'Not Found')
    throw new Error('Unable to fetch repo.')

  return response.json()
}
