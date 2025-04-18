import { LocationCard } from "@/components/location-card"
import type { Location } from "@/lib/types"

interface LocationListProps {
  activity: string
  locations: Location[]
}

export function LocationList({ activity, locations }: LocationListProps) {
  return (
    <div className="space-y-8">
      {locations.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Chưa có địa điểm nào được thêm vào.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  )
}
