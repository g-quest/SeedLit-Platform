'use client'

import { useAuth } from '@/context/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardBody() {
  const { session, loading, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return // Early return if still loading

    if (!session) {
      console.warn('⚠️ No session found, redirecting to /signin...')
      router.push('/signin')
    }
  }, [loading, session, router])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {user ? (
          <>
            <p className="mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="mb-2">
              <strong>Username:</strong> {user.username || 'N/A'}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Loading user data...</p>
        )}
      </div>
    </div>
  )
}
