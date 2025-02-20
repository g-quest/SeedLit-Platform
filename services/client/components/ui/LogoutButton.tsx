'use client'
import { createSupabaseBrowserClient } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const supabase = createSupabaseBrowserClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/signin')
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded"
    >
      Logout
    </button>
  )
}
