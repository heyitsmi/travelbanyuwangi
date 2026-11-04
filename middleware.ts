import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'juragantravel-super-secret-key-change-in-production'
);

// Routes that require authentication
const PROTECTED_ROUTES = ['/admin'];
// Routes that should redirect to dashboard if already logged in
const AUTH_ROUTES = ['/login'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('jt_admin_token')?.value;

  const isProtected = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  // Verify token
  let isValidToken = false;
  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      isValidToken = true;
    } catch {
      isValidToken = false;
    }
  }

  // If accessing protected route without valid token → redirect to login
  if (isProtected && !isValidToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If already logged in and trying to access /login → redirect to dashboard
  if (isAuthRoute && isValidToken) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  const isComingSoonRoute = pathname === '/coming-soon';
  const isLoginRoute = pathname === '/login';
  const isContactRoute = pathname === '/kontak';
  if (
    process.env.COMING_SOON === 'true' &&
    !isProtected &&
    !isLoginRoute &&
    !isContactRoute &&
    !isComingSoonRoute
  ) {
    return NextResponse.rewrite(new URL('/coming-soon', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
