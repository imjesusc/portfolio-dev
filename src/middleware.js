import { NextResponse } from 'next/server'

export function middleware(request) {
  const excluede = ['sitemap.xml', 'robots.txt']
  if (request.nextUrl.pathname.includes(excluede)) {
    return NextResponse.redirect(new URL('/sitemap.xml', request.url))
  }

  if (request.nextUrl.pathname.startsWith('/')) {
    return NextResponse.redirect(new URL('/es', request.url))
  }
}
export const config = {
  matcher: '/',
}
