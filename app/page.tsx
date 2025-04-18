import { Activities } from "@/components/activities"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Khám Phá Hoạt Động Giải Trí</h2>
        <Activities />
      </div>
    </main>
  )
}
