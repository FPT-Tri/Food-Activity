import Image from "next/image"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Restaurant } from "@/lib/food-types"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card className="h-full overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={restaurant.imageUrl || "/placeholder.svg"}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{restaurant.name}</CardTitle>
          {restaurant.rating && (
            <div className="flex items-center gap-1 text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>{restaurant.rating}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <span>{restaurant.address}</span>
        </div>

        {restaurant.phone && (
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{restaurant.phone}</span>
          </div>
        )}

        {restaurant.hours && (
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{restaurant.hours}</span>
          </div>
        )}

        {restaurant.priceRange && (
          <div className="mt-2 text-sm">
            <span className="font-medium">Giá:</span> {restaurant.priceRange}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
