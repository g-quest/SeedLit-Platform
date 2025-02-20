'use client'

import { AuthProvider } from '@/context/AuthProvider'
import { Toaster } from '@/components/core-ui/toaster'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AuthProvider>
        <main>{children}</main>
      </AuthProvider>
      <Toaster />
    </>
  )
}
