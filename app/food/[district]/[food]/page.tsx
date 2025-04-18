import { notFound } from "next/navigation"
import { RestaurantList } from "@/components/restaurant-list"
import { PageHeader } from "@/components/page-header"
import { getDistrictBySlug, getFoodBySlug, getRestaurantsByDistrictAndFood } from "@/lib/db"

export async function generateMetadata({ params }: { params: { district: string; food: string } }) {
  const district = await getDistrictBySlug(params.district)
  const food = await getFoodBySlug(params.food)

  if (!district || !food) {
    return {
      title: "Không tìm thấy",
      description: "Không tìm thấy thông tin về món ăn này",
    }
  }

  return {
    title: `${food.name} tại Quận ${district.name}`,
    description: `Khám phá các quán ${food.name} nổi tiếng tại Quận ${district.name}, TP.HCM`,
  }
}

export default async function FoodDetailPage({ params }: { params: { district: string; food: string } }) {
  const district = await getDistrictBySlug(params.district)
  const food = await getFoodBySlug(params.food)

  if (!district || !food) {
    notFound()
  }

  const restaurants = await getRestaurantsByDistrictAndFood(params.district, params.food)

  return (
    <main className="min-h-screen">
      <PageHeader
        title={`${food.name} tại Quận ${district.name}`}
        description={`Khám phá các quán ${food.name} nổi tiếng tại Quận ${district.name}`}
        imageUrl={food.imageUrl}
      />
      <div className="container mx-auto px-4 py-12">
        <RestaurantList restaurants={restaurants} />
      </div>
    </main>
  )
}
