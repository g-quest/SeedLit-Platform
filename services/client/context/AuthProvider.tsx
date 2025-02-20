'use client'

import { createBrowserClient } from '@supabase/ssr'
import { useState, useEffect, createContext, useContext } from 'react'
import { Session, SupabaseClient } from '@supabase/supabase-js'

interface AuthContextType {
  supabase: SupabaseClient
  session: Session | null
  loading: boolean
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [supabase] = useState(() =>
    createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    ),
  )
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
      setLoading(false)
    }

    getSession()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, newSession) => {
        setSession(newSession)
      },
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase])

  const logout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ supabase, session, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook for accessing Auth state
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
