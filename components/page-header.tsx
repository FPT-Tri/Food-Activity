import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  imageUrl?: string
}

export function PageHeader({ title, description, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      {imageUrl && (
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg opacity-90">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
