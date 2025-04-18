import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Activity } from "@/lib/types"

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link href={`/${activity.slug}`}>
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square">
          <Image
            src={activity.imageUrl || "/placeholder.svg"}
            alt={activity.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{activity.name}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-sm text-muted-foreground">Khám phá các địa điểm</CardFooter>
      </Card>
    </Link>
  )
}
