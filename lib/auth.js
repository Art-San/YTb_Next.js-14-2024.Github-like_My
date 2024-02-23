import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
// import Goggle from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
// import { connectToDB } from './utils'
// import { User } from './models/user'
// import bcrypt from 'bcrypt'
// import { createUserAds } from './actions/actionsUsers'
// import Credentials from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('user', user) // undefined
      console.log('account', account) // данные с гит
      console.log('profile', profile) // данные с гит профиля

      return true
    }
  }
})
