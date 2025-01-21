import { Button } from "@/components/ui/button"

interface ComparisonProps {
  tool1: string
  tool2: string
  description: string
}

const FeatureComparison = ({ tool1, tool2, description }: ComparisonProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Feature comparison</h3>
      <p className="text-sm text-muted-foreground">{tool1} vs {tool2}</p>
      <p className="text-sm">{description}</p>
      <Button variant="outline" size="sm">View details</Button>
    </div>
  )
}
export default FeatureComparison
