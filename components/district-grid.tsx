"use client"

import { useState, useEffect } from "react"
import { DistrictCard } from "@/components/district-card"
import { getAllDistricts } from "@/lib/db"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { District } from "@/lib/models"

export function DistrictGrid() {
  const [districts, setDistricts] = useState<District[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [areaFilter, setAreaFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchDistricts() {
      try {
        const data = await getAllDistricts()
        setDistricts(data)
      } catch (error) {
        console.error("Error fetching districts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDistricts()
  }, [])

  // Define areas for filtering
  const areas = [
    { value: "all", label: "Tất cả khu vực" },
    { value: "central", label: "Trung tâm" },
    { value: "east", label: "Đông" },
    { value: "west", label: "Tây" },
    { value: "south", label: "Nam" },
    { value: "north", label: "Bắc" },
  ]

  // Map districts to areas for filtering
  const districtAreas: Record<string, string> = {
    "quan-1": "central",
    "quan-3": "central",
    "quan-4": "central",
    "quan-5": "central",
    "quan-10": "central",
    "quan-11": "central",
    "quan-phu-nhuan": "central",
    "quan-binh-thanh": "central",
    "quan-2": "east",
    "quan-9": "east",
    "quan-thu-duc": "east",
    "thanh-pho-thu-duc": "east",
    "quan-6": "west",
    "quan-8": "west",
    "quan-tan-phu": "west",
    "quan-tan-binh": "west",
    "quan-7": "south",
    "quan-12": "north",
    "quan-go-vap": "north",
  }

  const filteredDistricts = districts.filter((district) => {
    const matchesSearch =
      district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      district.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesArea = areaFilter === "all" || districtAreas[district.slug] === areaFilter

    return matchesSearch && matchesArea
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm quận..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full md:w-auto">
          <Select value={areaFilter} onValueChange={setAreaFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Khu vực" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.value} value={area.value}>
                  {area.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Đang tải dữ liệu...</p>
        </div>
      ) : filteredDistricts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy quận phù hợp.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDistricts.map((district) => (
            <DistrictCard key={district.slug} district={district} />
          ))}
        </div>
      )}
    </div>
  )
}
