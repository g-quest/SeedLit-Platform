'use client'

import { Toaster } from '@/components/core-ui/toaster'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
      <Toaster />
    </>
  )
}
