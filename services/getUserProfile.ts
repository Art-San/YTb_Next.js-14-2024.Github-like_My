export const getUserProfileArt = async (username = 'burakorkmez') => {
  // const response = await fetch(`https://api.github.com/users/Art-San`)
  // const response = await fetch(`https://api.github.com/users/burakorkmez`)
  const response = await fetch(`https://api.github.com/users/${username}`)

  // if (response.statusText === 'Not Found')
  //   throw new Error('Unable to fetch repo.')
  // const repo = await response.json()

  // console.log(repo)

  return response.json()
}
