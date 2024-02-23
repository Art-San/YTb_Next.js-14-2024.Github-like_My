export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('auth.config  jwt user', user)
      // console.log('auth.config  jwt token', token)
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
        token.name = user.name
        token.image = user.image
      }
      // console.log('auth.config  jwt return token', token)
      return token
    },
    async session({ session, token }) {
      // console.log('auth.config  session token.id', token.id)
      // console.log('auth.config session', session)
      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
        session.user.name = token.name
        session.user.image = token.image
      }
      // console.log('auth.config  session session', session)
      return session
    },
    authorized({ auth, request }) {
      const user = auth?.user
      // console.log('authConfig user ', user)
      // console.log('auth.config authorized user', user)
      // console.log('auth.config authorized request?.nextUrl', request?.nextUrl)
      const isOnLikesPage = request.nextUrl?.pathname.startsWith('/likes')
      const isOnExplorePage = request.nextUrl?.pathname.startsWith('/explore')
      const isOnSignUpPage = request.nextUrl?.pathname.startsWith('/signup')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')

      // только аутентифицированные пользователи МОГУТ ПОЛУЧИТЬ СТРАНИЦу /likes или /explore
      if ((isOnLikesPage && !user) || (isOnExplorePage && !user)) {
        return false
      }

      // ТОЛЬКО НЕ АУТЕНТИФИЦИРОВАННЫЕ ПОЛЬЗОВАТЕЛИ МОГУТ достигнуть НА СТРАНИЦУ ВХОДА
      if ((isOnLoginPage && user) || (isOnSignUpPage && user)) {
        return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
  }
}
