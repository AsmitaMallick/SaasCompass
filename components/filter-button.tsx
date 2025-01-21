'use client'

import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

interface FilterButtonProps {
  label: string
  active?: boolean
}

function FilterButton({ label, active }: FilterButtonProps) {
  return (
    <Button
      variant="ghost"
      className={`h-9 rounded-full border ${
        active 
          ? "bg-white/10 text-white border-transparent" 
          : "bg-transparent text-gray-400 border-gray-800"
      } hover:bg-white/20 hover:text-white`}
    >
      {label}
      <ChevronDown className="ml-2 h-4 w-4" />
    </Button>
  )
}
export default FilterButton

