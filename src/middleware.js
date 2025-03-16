import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    let cookie = request.cookies.get('next-js-token')
    console.log(cookie?.value)

   let dummyUserData={

    role:"admin"
   }

   let isAdmin= dummyUserData.role=="admin"

    let isServices= (request.nextUrl.pathname.startsWith('/services'))

    if(isServices && !isAdmin){

           return NextResponse.redirect(new URL('/login', request.url))

        //    return NextResponse.rewrite(new URL('/login', request.url))

    }



//   return NextResponse.redirect(new URL('/', request.url))


  return NextResponse.next()
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }