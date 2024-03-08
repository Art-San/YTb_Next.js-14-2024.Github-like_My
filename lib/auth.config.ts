// import { NextRequest, NextResponse } from 'next/server';
// import { Session } from 'next-auth';

// export const authConfig = {
//  providers: [],
//  pages: {
//     signIn: '/login'
//  },
//  callbacks: {
//     authorized: async ({ request, auth }: { request: NextRequest; auth: Session | null }) => {
//       // Ваша логика авторизации здесь
//       // Например, проверка наличия пользователя в сессии
//       if (!auth) {
//         // Если пользователь не авторизован, возвращаем false или перенаправляем на страницу входа
//         return false;
//       }

//       // Если пользователь авторизован, проверяем, на какую страницу он пытается перейти
//       const isOnLikesPage = request.nextUrl?.pathname.startsWith('/likes');
//       const isOnExplorePage = request.nextUrl?.pathname.startsWith('/explore');
//       const isOnSignUpPage = request.nextUrl?.pathname.startsWith('/signup');
//       const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

//       // Проверяем, разрешено ли пользователю переходить на определенные страницы
//       if ((isOnLikesPage || isOnExplorePage) && !auth.user) {
//         // Если пользователь не авторизован и пытается перейти на страницы /likes или /explore, возвращаем false
//         return false;
//       }

//       // Если пользователь авторизован и пытается перейти на страницу входа или регистрации, перенаправляем его на главную страницу
//       if ((isOnLoginPage || isOnSignUpPage) && auth.user) {
//         return NextResponse.redirect('/');
//       }

//       // В остальных случаях разрешаем доступ
//       return true;
//     }
//  }
// }
interface Auth {
  user?: {
    name: string
    email: string
    image: string
  }
  expires: string
}

interface Request {
  nextUrl?: {
    pathname: string
  }
}

export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // Нужно если есть Credentials в auth.js так как там "return user"
    // async jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id
    //     token.isAdmin = user.isAdmin
    //     token.name = user.name
    //     token.image = user.image
    //   }
    //   return token
    // },
    // async session({ session, token }) {
    //   if (token) {
    //     session.user.id = token.id
    //     session.user.isAdmin = token.isAdmin
    //     session.user.name = token.name
    //     session.user.image = token.image
    //   }
    //   // console.log('auth.config  session session', session)
    //   return session
    // },
    authorized({ auth, request }: { auth: Auth; request: Request }) {
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
        return Response.redirect(
          new URL(
            request.nextUrl ? request.nextUrl.pathname : '/',
            'http://localhost:3000'
          )
        )
        // return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
  }
}
