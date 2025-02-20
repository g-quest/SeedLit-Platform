'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useAuth } from '@/context/AuthProvider'
import { Button } from '@/components/core-ui/button'
import { Alert } from '@/components/core-ui/alert'

export default function EmailConfirmationPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ''
  const { supabase } = useAuth()

  const [resendLoading, setResendLoading] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [resendError, setResendError] = useState('')

  const handleResend = async () => {
    setResendLoading(true)
    setResendMessage('')
    setResendError('')

    const { error } = await supabase.auth.resend({
      type: 'signup',
      email,
    })

    if (error) {
      setResendError(error.message)
    } else {
      setResendMessage('Confirmation email resent! Check your inbox.')
    }

    setResendLoading(false)
  }

  return (
    <div className="min-w-[350px] mx-auto bg-white py-12 px-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Email</h2>
      <p>
        We've sent a confirmation email to <strong>{email}</strong>. Please
        check your inbox and click the confirmation link.
      </p>

      {resendMessage && <Alert variant="default">{resendMessage}</Alert>}
      {resendError && <Alert variant="destructive">{resendError}</Alert>}

      <Button
        onClick={handleResend}
        className="bg-blue-500 text-white p-2 rounded mt-4"
        disabled={resendLoading}
      >
        {resendLoading ? 'Resending...' : 'Resend Email'}
      </Button>
    </div>
  )
}
