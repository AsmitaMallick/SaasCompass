'use client'

import { DashboardSidebar } from "../../components/dashboard/sidebar"
import { ToolCard } from "../../components/dashboard/tool-card"
import FeatureComparison from "../../components/dashboard/feature-comparison"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const recommendedTools = [
  { name: "Tool 1", description: "Description 1", icon: "icon1.png" },
  { name: "Tool 2", description: "Description 2", icon: "icon2.png" },
  { name: "Tool 3", description: "Description 3", icon: "icon3.png" },
  { name: "Tool 4", description: "Description 4", icon: "icon4.png" },
  { name: "Tool 5", description: "Description 5", icon: "icon5.png" },
];

const additionalTools = [
  { name: "Tool 6", description: "Description 6", icon: "icon6.png" },
  { name: "Tool 7", description: "Description 7", icon: "icon7.png" },
  { name: "Tool 8", description: "Description 8", icon: "icon8.png" },
  { name: "Tool 9", description: "Description 9", icon: "icon9.png" },
];

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/')
    }
  })

  // Show loading state
  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  // Get user's first name from email or name
  const userName = session?.user?.name?.split(' ')[0] || 
                  session?.user?.email?.split('@')[0] || 
                  'User'

  return (
    <div className="flex h-screen bg-black text-white">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-white">
                Welcome back, {userName}
              </h1>
              <p className="text-gray-400">
                We have found {recommendedTools.length} tools that are likely to be a good fit for your company
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Update profile</Button>
            </div>
          </div>

          {/* Recommended Tools Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
              {recommendedTools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </section>

          {/* Feature Comparison Section */}
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2 space-y-8">
                <FeatureComparison
                  tool1="CronCraft Manager"
                  tool2="StaticSitePro"
                  description="CronCraft Manager is more popular than StaticSitePro"
                />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Integration compatibility</h3>
                  <p className="text-sm text-gray-400">CronCraft Manager is compatible with 80+ integrations</p>
                  <Button variant="outline" size="sm">View details</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">AI-generated insights</h3>
                  <p className="text-sm text-gray-400">CronCraft Manager rated higher than StaticSitePro</p>
                  <Button variant="outline" size="sm">View details</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Tools Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Tool recommendations based on your needs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalTools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}