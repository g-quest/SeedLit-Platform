'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/actions/auth'
import { Button } from '@/components/core-ui/button'
import { Input } from '@/components/core-ui/input'
import { Alert } from '@/components/core-ui/alert'
import { useAuth } from '@/context/useAuth'

export default function SignInBody() {
  const { supabase, session, loading } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Redirect if already authenticated
  useEffect(() => {
    if (loading) return // Wait for initial auth check

    if (session) {
      // console.log('✅ Session found, redirecting to /dashboard...')
      router.push('/dashboard')
    }
  }, [session, loading, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await signIn(email, password)

      if (!response.success) {
        throw new Error('Signin failed. Please try again.')
      }

      const { session } = response
      if (!session) {
        throw new Error('Login failed. No session received.')
      }

      // Set session in Supabase client
      const { error } = await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      })

      if (error) {
        throw new Error(`Failed to set session: ${error.message}`)
      }

      // No need for manual redirect - useEffect will handle it
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  // Don't show login form if already authenticated
  if (session) {
    return null
  }

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleLogin}>
        {error && (
          <Alert variant="destructive" className="mb-4">
            {error}
          </Alert>
        )}
        <div className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  )
}
