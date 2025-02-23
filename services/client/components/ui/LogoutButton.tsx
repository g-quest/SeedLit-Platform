'use client'
import { useAuth } from '@/context/useAuth'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/core-ui/button'

export default function LogoutButton() {
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/auth/signin')
  }

  return <Button onClick={handleLogout}>Logout</Button>
}
