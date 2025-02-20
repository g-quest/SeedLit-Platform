'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/core-ui/button'
import { Alert } from '@/components/core-ui/alert'

export default function EmailVerifiedPage() {
  const supabase = createClient()
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        setLoading(true)

        // ✅ Extract tokens from URL hash
        const hashParams = new URLSearchParams(
          window.location.hash.substring(1),
        )
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')

        console.log('🔹 Extracted tokens:', { accessToken, refreshToken }) // Debugging

        if (!accessToken || !refreshToken) {
          setError('Invalid or missing authentication tokens.')
          setLoading(false)
          return
        }

        console.log('🔄 Attempting to set session...')

        // ✅ Set session with Supabase
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        })

        if (error) {
          console.error('❌ Failed to set session:', error)
          setError(error.message || 'Email confirmation failed.')
          setLoading(false)
          return
        }

        console.log('✅ Session set successfully!')

        // ✅ Fetch the authenticated user to ensure session is working
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()

        if (userError || !user) {
          console.error('❌ Failed to retrieve user:', userError)
          setError('Failed to retrieve user. Please try logging in again.')
          setLoading(false)
          return
        }

        console.log('✅ User fetched:', user)

        setSuccess(true)

        // ✅ Redirect to dashboard after success
        setTimeout(() => router.push('/dashboard'), 2000)
      } catch (err) {
        console.error('❌ Unexpected error:', err)
        setError('Unexpected error occurred. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    confirmEmail()
  }, [supabase, router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Email Confirmation</h2>

        {loading && <p>Verifying your email...</p>}

        {error && <Alert variant="destructive">{error}</Alert>}

        {success && (
          <>
            <Alert variant="default">✅ Email verified successfully!</Alert>
            <Button
              className="mt-4 w-full bg-blue-500 text-white"
              onClick={() => router.push('/dashboard')}
            >
              Go to Dashboard
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
