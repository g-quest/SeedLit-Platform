import React, { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import type { SupabaseClient, Session } from '@supabase/supabase-js'

interface AuthContextType {
  supabase: SupabaseClient
  session: Session | null
  user: { id: string; email: string; username?: string } | null
  loading: boolean
  logout: () => Promise<void>
  refreshSession: () => Promise<void>
}

// Create the context
const AuthContext = createContext<AuthContextType | null>(null)

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [supabase] = useState(() => createClient())

  const [session, setSession] = useState<any>(null)
  const [user, setUser] = useState<{
    id: string
    email: string
    username?: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  // 🔹 Function to refresh session & user
  const refreshSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession()
      if (error) throw error

      setSession(data.session)

      if (!data.session?.access_token) {
        setUser(null)
        setLoading(false)
        return
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/user/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.session.access_token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.warn('Unable to fetch user data:', errorData)
        setUser(null)
        return
      }

      const userData = await response.json()
      setUser(userData)
    } catch (err) {
      console.warn('Session refresh failed:', err)
      setUser(null)
      setSession(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refreshSession() // ✅ Fetch session on mount

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        // console.log('🔄 Auth state changed:', newSession)
        setSession(newSession)
        if (!newSession) {
          console.warn('⚠️ No session, logging out...')
          setSession(null)
          setUser(null)
        } else {
          setSession(newSession)
          refreshSession() // ✅ Ensure we fetch user data on session change
        }
      },
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase])

  const logout = async () => {
    console.log('🔴 Logging out...')
    await supabase.auth.signOut()
    setSession(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ supabase, session, user, loading, logout, refreshSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
