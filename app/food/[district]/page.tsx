import { notFound } from "next/navigation"
import { FoodGrid } from "@/components/food-grid"
import { PageHeader } from "@/components/page-header"
import { getDistrictBySlug, getFoodsByDistrict } from "@/lib/db"

export async function generateMetadata({ params }: { params: { district: string } }) {
  const district = await getDistrictBySlug(params.district)

  if (!district) {
    return {
      title: "Quận không tồn tại",
      description: "Không tìm thấy thông tin về quận này",
    }
  }

  return {
    title: `Ẩm Thực Quận ${district.name}`,
    description: `Khám phá các món ăn, quán cà phê và trà sữa nổi tiếng tại Quận ${district.name}, TP.HCM`,
  }
}

export default async function DistrictFoodPage({ params }: { params: { district: string } }) {
  const district = await getDistrictBySlug(params.district)

  if (!district) {
    notFound()
  }

  const foods = await getFoodsByDistrict(params.district)

  return (
    <main className="min-h-screen">
      <PageHeader
        title={`Ẩm Thực Quận ${district.name}`}
        description="Khám phá các món ăn, quán cà phê và trà sữa nổi tiếng tại quận này"
      />
      <div className="container mx-auto px-4 py-12">
        <FoodGrid district={params.district} foods={foods} />
      </div>
    </main>
  )
}
