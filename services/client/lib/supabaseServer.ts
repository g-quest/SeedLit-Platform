import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Validate environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL and Anon Key must be set in .env.local')
}

// 🔹 Server-side Supabase client (ONLY for Server Components & Middleware)
export async function createSupabaseServerClient() {
  const cookieStore = await cookies()
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: cookieStore,
  })
}
