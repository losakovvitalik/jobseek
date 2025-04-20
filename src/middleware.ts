import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const session = await auth();

  if (
    pathname === '/auth' ||
    pathname === '/auth/code' ||
    pathname.startsWith('/_next/') ||
    pathname === '/favicon.ico' ||
    pathname === '/manifest.webmanifest'
  ) {
    if (session) {
      const loginUrl = new URL('/jobs', origin);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  if (!session) {
    const loginUrl = new URL('/auth', origin);
    // loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/auth|auth|_next/static|_next/image|favicon.ico).*)'],
};
