import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Food } from "@/lib/food-types"

interface FoodCardProps {
  district: string
  food: Food
}

export function FoodCard({ district, food }: FoodCardProps) {
  return (
    <Link href={`/food/${district}/${food.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square">
          <Image
            src={food.imageUrl || "/placeholder.svg"}
            alt={food.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {food.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{food.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{food.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
