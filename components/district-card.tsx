import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { District } from "@/lib/food-types"

interface DistrictCardProps {
  district: District
}

export function DistrictCard({ district }: DistrictCardProps) {
  return (
    <Link href={`/food/${district.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={district.imageUrl || "/placeholder.svg"}
            alt={`Quận ${district.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">Quận {district.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{district.description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
