import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies()

    // 🔹 Create Supabase client with cookies
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: cookieStore },
    )

    // 🔹 Fetch the current session (checks if user is logged in)
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // 🔴 If no session, redirect to `/signin`
    if (!session) {
      return NextResponse.redirect(new URL('/signin', req.url))
    }

    // 🔹 Fetch authenticated user (gets metadata even if session is expired)
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    // 🔴 If fetching the user fails, log out
    if (error || !user) {
      return NextResponse.redirect(new URL('/signin', req.url))
    }

    // 🔹 Extract `email_confirmed_at` manually since TypeScript doesn’t detect it
    const emailConfirmedAt = (user as any).email_confirmed_at // 🔥 Fix here

    // 🔴 If email is NOT confirmed, redirect to `/email-confirmation`
    if (!emailConfirmedAt) {
      return NextResponse.redirect(
        new URL(
          `/email-confirmation?email=${encodeURIComponent(user.email)}`,
          req.url,
        ),
      )
    }

    // ✅ If user is confirmed, allow access
    return NextResponse.next()
  } catch (error) {
    console.error('Middleware Error:', error)
    return NextResponse.next() // Prevents breaking the app
  }
}

// 🔹 Protect specific routes
export const config = {
  matcher: [
    '/dashboard/:path*', // Protects all `/dashboard` routes
    '/profile/:path*', // Protects all `/profile` routes
  ],
}
