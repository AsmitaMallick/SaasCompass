// "use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Home, Search, GitCompare, Star, Users } from 'lucide-react'
// import { cn } from "@/lib/utils"

// const navigation = [
//   { name: "Home", href: "/dashboard", icon: Home },
//   { name: "Explore", href: "/dashboard/explore", icon: Search },
//   { name: "Compare", href: "/dashboard/compare", icon: GitCompare },
//   { name: "Reviews", href: "/dashboard/reviews", icon: Star },
//   { name: "Community", href: "/dashboard/community", icon: Users },
// ]

// export function DashboardSidebar() {
//   const pathname = usePathname()

//   return (
//     <div className="flex h-screen w-64 flex-col bg-black border-r">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold">SaaS Compass</h2>
//       </div>
//       <nav className="flex-1 space-y-1 p-2">
//         {navigation.map((item) => {
//           const isActive = pathname === item.href
//           return (
//             <Link
//               key={item.name}
//               href={item.href}
//               className={cn(
//                 "flex items-center px-3 py-2 text-sm font-medium rounded-md",
//                 isActive
//                   ? "bg-primary text-primary-foreground"
//                   : "text-muted-foreground hover:bg-muted"
//               )}
//             >
//               <item.icon className="mr-3 h-5 w-5" />
//               {item.name}
//             </Link>
//           )
//         })}
//       </nav>
//     </div>
//   )
// }

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { Home, Search, GitCompare, Star, Users, LogOut } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Explore", href: "/dashboard/explore", icon: Search },
  { name: "Compare", href: "/dashboard/compare", icon: GitCompare },
  { name: "Reviews", href: "/dashboard/reviews", icon: Star },
  { name: "Community", href: "/dashboard/community", icon: Users },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  return (
    <div className="flex h-screen w-64 flex-col bg-black border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">SaaS Compass</h2>
      </div>
      
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User profile and logout section */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center gap-3 mb-4">
          {session?.user?.image ? (
            <img 
              src={session.user.image} 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-medium text-primary-foreground">
                {session?.user?.name?.charAt(0) || session?.user?.email?.charAt(0) || '?'}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {session?.user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {session?.user?.email}
            </p>
          </div>
        </div>
        
        <Button
          onClick={() => signOut({ callbackUrl: '/' })}
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}