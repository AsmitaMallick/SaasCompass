interface ToolCardProps {
    name: string
    description: string
    icon: string
    price?: string
  }
  
  export function ToolCard({ name, description, icon, price }: ToolCardProps) {
    return (
      <div className="rounded-lg bg-card p-6 hover:bg-accent/50 transition-colors">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <img src={icon} alt={name} className="h-8 w-8" />
        </div>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {price && (
          <div className="text-sm font-medium">
            Starting from {price}
          </div>
        )}
      </div>
    )
  }
  
  