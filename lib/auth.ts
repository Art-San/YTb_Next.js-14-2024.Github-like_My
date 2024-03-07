import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
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
      // console.log('signIn user', user) // undefined
      // console.log('signIn account', account) // данные с гит
      // console.log('signIn profile', profile) // данные с гит профиля

      return true
    }
  }
})
