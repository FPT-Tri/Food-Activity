export interface Activity {
  id: number
  name: string
  slug: string
  description: string
  imageUrl: string
}

export interface Location {
  id: number
  activitySlug: string
  name: string
  address: string
  phone?: string
  hours?: string
  price?: string
}
