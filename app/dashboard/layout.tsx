'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    }
  })

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return <>{children}</>
}