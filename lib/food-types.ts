export interface District {
  id: number
  name: string
  slug: string
  description: string
  imageUrl: string
}

export interface Food {
  id: number
  name: string
  slug: string
  description: string
  category: "Món Ăn" | "Cà Phê" | "Trà Sữa" | "Ăn Vặt"
  districts: string[] // district slugs
  imageUrl: string
}

export interface Restaurant {
  id: number
  name: string
  address: string
  district: string // district slug
  foods: string[] // food slugs
  phone?: string
  hours?: string
  priceRange?: string
  rating?: number
  imageUrl: string
}
