'use client'

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react" // Import logout icon

export function LogoutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: '/' })} // Redirects to home after logout
      variant="ghost"
      className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10"
    >
      <LogOut className="h-4 w-4" />
      Log out
    </Button>
  )
}