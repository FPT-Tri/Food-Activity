import { MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Location } from "@/lib/types"

interface LocationCardProps {
  location: Location
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <span>{location.address}</span>
        </div>

        {location.phone && (
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span>{location.phone}</span>
          </div>
        )}

        {location.hours && (
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{location.hours}</span>
          </div>
        )}

        {location.price && (
          <div className="mt-2 text-sm">
            <span className="font-medium">Giá:</span> {location.price}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
