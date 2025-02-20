'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthProvider'
import { Button } from '@/components/core-ui/button'
import { Input } from '@/components/core-ui/input'
import { Alert } from '@/components/core-ui/alert'
import { signUp } from '@/actions/user'

export default function SignUpBody() {
  const { supabase } = useAuth()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await signUp(email, password)

      // console.log('RESPONSE:', response)
      if (!response.success) {
        throw new Error('Signup failed. Please try again.')
      }

      // ✅ If signup succeeds, redirect to email confirmation
      router.push(`/email-confirmation?email=${encodeURIComponent(email)}`)
    } catch (err) {
      setError(err.message) // ✅ Show error message instead of redirecting
      setLoading(false)
    }
  }

  return (
    <div className="min-w-[350px] mx-auto bg-white py-12 px-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      {error && <Alert variant="destructive">{error}</Alert>}

      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded"
        />

        <Button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  )
}
