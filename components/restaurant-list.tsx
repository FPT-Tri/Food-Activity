"use client"

import { useState } from "react"
import { RestaurantCard } from "@/components/restaurant-card"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import type { Restaurant } from "@/lib/food-types"

interface RestaurantListProps {
  restaurants: Restaurant[]
}

export function RestaurantList({ restaurants }: RestaurantListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("rating")
  const [priceRange, setPriceRange] = useState([0, 500000]) // Min and max price in VND

  // Extract min and max prices for the slider
  const extractPrice = (priceString: string | undefined): number => {
    if (!priceString) return 0
    const matches = priceString.match(/(\d+)\.000đ/g)
    if (!matches || matches.length === 0) return 0
    return Math.max(...(matches.map((m) => Number.parseInt(m.replace(/\D/g, ""))) * 1000))
  }

  const maxPossiblePrice = Math.max(...restaurants.map((r) => extractPrice(r.priceRange)))

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const matchesSearch =
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(searchQuery.toLowerCase())

      // Price filtering
      const restaurantMaxPrice = extractPrice(restaurant.priceRange)
      const matchesPrice =
        restaurantMaxPrice >= priceRange[0] &&
        (priceRange[1] >= maxPossiblePrice || restaurantMaxPrice <= priceRange[1])

      return matchesSearch && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === "rating") {
        return (b.rating || 0) - (a.rating || 0)
      } else if (sortBy === "price-low") {
        return extractPrice(a.priceRange) - extractPrice(b.priceRange)
      } else if (sortBy === "price-high") {
        return extractPrice(b.priceRange) - extractPrice(a.priceRange)
      }
      return 0
    })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm quán ăn..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Đánh giá cao nhất</SelectItem>
              <SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
              <SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h4 className="font-medium">Khoảng giá</h4>
                <div className="space-y-2">
                  <Slider
                    defaultValue={[0, maxPossiblePrice]}
                    max={maxPossiblePrice}
                    step={10000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{(priceRange[0] / 1000).toLocaleString()}k</span>
                    <span>{(priceRange[1] / 1000).toLocaleString()}k</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy quán ăn phù hợp.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      )}
    </div>
  )
}
