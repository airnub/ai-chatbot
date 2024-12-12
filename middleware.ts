import NextAuth from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authConfig } from '@/app/(auth)/auth.config';

export default NextAuth(authConfig).auth;

const validCountries = ['ie', 'uk', 'us']; // Add supported countries

export function middleware(request: NextRequest) {
  const countryCookie = request.cookies.get('country')?.value;
  const countryFromPath = request.nextUrl.pathname.split('/')[1];

  // Allow valid country paths
  if (validCountries.includes(countryFromPath)) {
    return NextResponse.next();
  }

  // Redirect to cookie's country if no valid path
  if (!countryFromPath && countryCookie) {
    const url = request.nextUrl.clone();
    url.pathname = `/${countryCookie}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow access to `/` landing page
}

export const config = {
  matcher: ['/', '/:id', '/api/:path*', '/login', '/register'],
};
