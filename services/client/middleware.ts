import { NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(req: NextRequest) {
  return await updateSession(req)
}

// 🔹 Protect specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
}
