import { createServerClient, createBrowserClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Server-side Supabase client (used in server components & middleware)
export async function createSupabaseServerClient() {
  const cookieMethods = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: cookieMethods },
  )
}

// Client-side Supabase client (used in React components)
export function createSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
