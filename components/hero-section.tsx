import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Khám Phá Hoạt Động Giải Trí Tại TP.HCM</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Tìm kiếm và trải nghiệm những hoạt động giải trí thú vị nhất tại Thành phố Hồ Chí Minh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="#activities">Khám Phá Ngay</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
