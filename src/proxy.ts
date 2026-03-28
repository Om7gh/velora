import { NextRequest, NextResponse } from 'next/server';

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.includes('.') &&
    /\.(png|jpg|jpeg|gif|svg|ico|webp|css|js)$/.test(pathname)
  ) {
    return NextResponse.next();
  }
  const token = req.cookies.get('access_token')?.value;
  console.log(token);
  if (token && !pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
