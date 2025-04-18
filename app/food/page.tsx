import { DistrictGrid } from "@/components/district-grid"
import { PageHeader } from "@/components/page-header"

export const metadata = {
  title: "Khám Phá Ẩm Thực TP.HCM",
  description: "Khám phá ẩm thực đặc sắc tại các quận của Thành phố Hồ Chí Minh",
}

export default function FoodPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Khám Phá Ẩm Thực TP.HCM"
        description="Chọn quận để khám phá các món ăn, quán cà phê và trà sữa nổi tiếng"
      />
      <div className="container mx-auto px-4 py-12">
        <DistrictGrid />
      </div>
    </main>
  )
}
