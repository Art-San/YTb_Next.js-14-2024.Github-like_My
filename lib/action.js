'use server'

import { signIn, signOut } from './auth'

export const handleGithubLogin = async () => {
  console.log('handleGithubLogin !!!')
  await signIn('github')
}

export const handleLogOut = async () => {
  await signOut({ redirectTo: '/' })
}
