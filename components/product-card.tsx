'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  description: string
  category: string
  imageSrc: string
}

export function ProductCard({ title, description, category, imageSrc }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-[#1A2027] border-0 transition-all hover:bg-[#1A2027]/80">
      <CardContent className="p-6">
        <div className="mb-4 aspect-square w-16 overflow-hidden rounded-lg bg-gray-800">
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-400">{description}</p>
        <div className="text-xs text-gray-500">{category}</div>
      </CardContent>
    </Card>
  )
}

