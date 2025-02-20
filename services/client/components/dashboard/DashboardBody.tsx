'use client'

import { useAuth } from '@/context/AuthProvider'
import { useState, useEffect } from 'react'
import { Button } from '@/components/core-ui/button'

export default function DashboardBody() {
  const { supabase, session, logout } = useAuth()

  const [userData, setUserData] = useState<{
    email: string
    username?: string
  } | null>(null)

  useEffect(() => {
    if (session) {
      const fetchUserData = async () => {
        const { data, error } = await supabase
          .from('users')
          .select('email, username')
          .eq('id', session.user.id)
          .single()

        if (!error) setUserData(data)
      }

      fetchUserData()
    }
  }, [session, supabase])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {userData ? (
          <>
            <p className="mb-2">
              <strong>Email:</strong> {userData.email}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Loading user data...</p>
        )}
        <Button onClick={logout} className="mt-4 bg-red-500 text-white w-full">
          Logout
        </Button>
      </div>
    </div>
  )
}
