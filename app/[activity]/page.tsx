import { notFound } from "next/navigation"
import { LocationList } from "@/components/location-list"
import { getActivityBySlug, getLocations } from "@/lib/db"

export default async function ActivityPage({ params }: { params: { activity: string } }) {
  const activity = await getActivityBySlug(params.activity)

  if (!activity) {
    notFound()
  }

  const locations = await getLocations(params.activity)

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{activity.name}</h1>
            <p className="text-lg text-muted-foreground">{activity.description}</p>
          </div>

          <LocationList activity={params.activity} locations={locations} />
        </div>
      </div>
    </main>
  )
}
