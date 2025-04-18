import type { Activity, Location } from "./types"

export const activities: Activity[] = [
  {
    id: 1,
    name: "Golf Mini",
    slug: "golf-mini",
    description: "Trải nghiệm môn thể thao golf thu nhỏ, phù hợp cho mọi lứa tuổi.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Đánh Bóng Chày",
    slug: "danh-bong-chay",
    description: "Thử sức với môn thể thao bóng chày đầy thú vị và năng động.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Trượt Patin",
    slug: "truot-patin",
    description: "Trượt patin - môn thể thao kết hợp giữa vận động và nghệ thuật.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Hoạ Kim Sa",
    slug: "hoa-kim-sa",
    description: "Khám phá nghệ thuật vẽ tranh kim sa độc đáo và sáng tạo.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "Làm Gốm",
    slug: "lam-gom",
    description: "Trải nghiệm nghề làm gốm truyền thống, tạo ra những sản phẩm thủ công độc đáo.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Cafe Landmark 81",
    slug: "cafe-landmark-81",
    description: "Thưởng thức cà phê với tầm nhìn toàn cảnh thành phố từ tòa nhà cao nhất Việt Nam.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 7,
    name: "Go Kart",
    slug: "go-kart",
    description: "Cảm giác mạnh với trải nghiệm đua xe Go Kart tốc độ cao.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 8,
    name: "Global City",
    slug: "global-city",
    description: "Khám phá khu đô thị hiện đại với nhiều hoạt động giải trí đa dạng.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 9,
    name: "Game Center Gigamall",
    slug: "game-center-gigamall",
    description: "Trung tâm trò chơi điện tử hiện đại với đa dạng các loại game.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 10,
    name: "Ca Kịch Chợ Lớn",
    slug: "ca-kich-cho-lon",
    description: "Thưởng thức nghệ thuật ca kịch truyền thống tại khu vực Chợ Lớn.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 11,
    name: "Trượt Băng",
    slug: "truot-bang",
    description: "Trải nghiệm cảm giác trượt băng mát lạnh giữa thành phố nhiệt đới.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 12,
    name: "Bắn Súng",
    slug: "ban-sung",
    description: "Thử thách kỹ năng bắn súng tại các trung tâm bắn súng thể thao chuyên nghiệp.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 13,
    name: "Bắn Cung",
    slug: "ban-cung",
    description: "Rèn luyện sự tập trung và độ chính xác với môn bắn cung.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 14,
    name: "Jump Arena",
    slug: "jump-arena",
    description: "Nhảy nhót thỏa thích tại khu vui chơi bạt nhún lớn nhất thành phố.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 15,
    name: "Xplay Zone Quận 10",
    slug: "xplay-zone-quan-10",
    description: "Khu vui chơi giải trí đa dạng dành cho mọi lứa tuổi tại Quận 10.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 16,
    name: "Escape Room",
    slug: "escape-room",
    description: "Thử thách trí tuệ với các phòng giải đố hấp dẫn.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 17,
    name: "PlayStation",
    slug: "playstation",
    description: "Trải nghiệm chơi game PlayStation với bạn bè tại các phòng game chuyên nghiệp.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 18,
    name: "Nghe Acoustic",
    slug: "nghe-acoustic",
    description: "Thưởng thức âm nhạc acoustic sống động tại các quán cà phê và bar nhạc.",
    imageUrl: "/placeholder.svg?height=400&width=400",
  },
]

export const locations: Location[] = [
  // Golf Mini
  {
    id: 1,
    activitySlug: "golf-mini",
    name: "Saigon Mini Golf",
    address: "146 Nguyễn Đình Chính, Phường 8, Quận Phú Nhuận, TP.HCM",
    phone: "028 3844 6066",
    hours: "9:00 - 22:00 (Hàng ngày)",
    price: "150.000đ - 250.000đ/người",
  },
  {
    id: 2,
    activitySlug: "golf-mini",
    name: "Thủ Đức Golf Club",
    address: "Đường Đỗ Xuân Hợp, Phường Phước Long B, Quận 9, TP.HCM",
    phone: "028 3896 2666",
    hours: "6:00 - 19:00 (Hàng ngày)",
    price: "500.000đ - 2.000.000đ/người",
  },

  // Đánh Bóng Chày
  {
    id: 3,
    activitySlug: "danh-bong-chay",
    name: "Saigon Baseball Club",
    address: "Khu Đô thị Thủ Thiêm, Quận 2, TP.HCM",
    phone: "090 123 4567",
    hours: "15:00 - 21:00 (Thứ 2-6), 9:00 - 21:00 (Thứ 7, CN)",
    price: "200.000đ/giờ",
  },

  // Trượt Patin
  {
    id: 4,
    activitySlug: "truot-patin",
    name: "Sân Trượt Patin Quận 1",
    address: "Công viên 23/9, Quận 1, TP.HCM",
    hours: "16:00 - 21:00 (Hàng ngày)",
    price: "60.000đ/giờ (thuê giày)",
  },
  {
    id: 5,
    activitySlug: "truot-patin",
    name: "Sân Trượt Patin Vincom Thảo Điền",
    address: "Tầng B1, Vincom Thảo Điền, Quận 2, TP.HCM",
    phone: "028 3744 5566",
    hours: "10:00 - 22:00 (Hàng ngày)",
    price: "100.000đ/giờ",
  },

  // Hoạ Kim Sa
  {
    id: 6,
    activitySlug: "hoa-kim-sa",
    name: "Lớp Học Hoạ Kim Sa Saigon",
    address: "25 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    phone: "090 987 6543",
    hours: "9:00 - 20:00 (Thứ 2-7)",
    price: "350.000đ/buổi học",
  },

  // Làm Gốm
  {
    id: 7,
    activitySlug: "lam-gom",
    name: "Xưởng Gốm Bát Tràng Sài Gòn",
    address: "123 Nguyễn Trãi, Quận 5, TP.HCM",
    phone: "028 3923 4567",
    hours: "8:00 - 17:00 (Thứ 2-CN)",
    price: "250.000đ/người/buổi",
  },
  {
    id: 8,
    activitySlug: "lam-gom",
    name: "Gốm Sứ Minh Long",
    address: "333 Lê Văn Sỹ, Quận 3, TP.HCM",
    phone: "028 3526 7890",
    hours: "8:30 - 17:30 (Thứ 2-7)",
    price: "300.000đ/người/buổi",
  },

  // Cafe Landmark 81
  {
    id: 9,
    activitySlug: "cafe-landmark-81",
    name: "Cafe EON 51",
    address: "Tầng 51, Landmark 81, Vinhomes Central Park, Quận Bình Thạnh, TP.HCM",
    phone: "028 5411 8181",
    hours: "8:00 - 23:00 (Hàng ngày)",
    price: "100.000đ - 300.000đ/người",
  },
  {
    id: 10,
    activitySlug: "cafe-landmark-81",
    name: "Starbucks Landmark 81",
    address: "Tầng 1, Landmark 81, Vinhomes Central Park, Quận Bình Thạnh, TP.HCM",
    phone: "028 3622 3223",
    hours: "7:00 - 22:00 (Hàng ngày)",
    price: "70.000đ - 150.000đ/người",
  },

  // Go Kart
  {
    id: 11,
    activitySlug: "go-kart",
    name: "Saigon Kart Center",
    address: "Khu Công Nghiệp Vĩnh Lộc, Huyện Bình Chánh, TP.HCM",
    phone: "090 123 7890",
    hours: "9:00 - 22:00 (Hàng ngày)",
    price: "300.000đ/10 phút",
  },

  // Global City
  {
    id: 12,
    activitySlug: "global-city",
    name: "The Global City",
    address: "Phường An Phú, TP. Thủ Đức, TP.HCM",
    phone: "028 7300 2222",
    hours: "Mở cửa cả ngày",
    price: "Miễn phí tham quan",
  },

  // Game Center Gigamall
  {
    id: 13,
    activitySlug: "game-center-gigamall",
    name: "Timezone Gigamall",
    address: "Tầng 5, TTTM Gigamall, 240 Phạm Văn Đồng, TP. Thủ Đức, TP.HCM",
    phone: "028 7108 8888",
    hours: "10:00 - 22:00 (Hàng ngày)",
    price: "20.000đ - 50.000đ/lượt chơi",
  },

  // Ca Kịch Chợ Lớn
  {
    id: 14,
    activitySlug: "ca-kich-cho-lon",
    name: "Nhà Hát Cải Lương Trần Hữu Trang",
    address: "136 Trần Hưng Đạo, Quận 1, TP.HCM",
    phone: "028 3837 6688",
    hours: "19:30 - 22:00 (Thứ 7, CN)",
    price: "150.000đ - 300.000đ/vé",
  },

  // Trượt Băng
  {
    id: 15,
    activitySlug: "truot-bang",
    name: "Vincom Ice Rink",
    address: "Tầng B1, Vincom Center, 72 Lê Thánh Tôn, Quận 1, TP.HCM",
    phone: "028 3821 2331",
    hours: "10:00 - 22:00 (Hàng ngày)",
    price: "180.000đ/giờ",
  },
  {
    id: 16,
    activitySlug: "truot-bang",
    name: "Sân Băng Landmark 81",
    address: "Tầng B1, Landmark 81, Vinhomes Central Park, Quận Bình Thạnh, TP.HCM",
    phone: "028 5411 8181",
    hours: "10:00 - 22:00 (Hàng ngày)",
    price: "200.000đ/giờ",
  },

  // Bắn Súng
  {
    id: 17,
    activitySlug: "ban-sung",
    name: "Câu Lạc Bộ Bắn Súng Thể Thao",
    address: "20 Hoàng Hoa Thám, Quận Tân Bình, TP.HCM",
    phone: "028 3845 6789",
    hours: "9:00 - 21:00 (Hàng ngày)",
    price: "300.000đ - 500.000đ/30 phút",
  },

  // Bắn Cung
  {
    id: 18,
    activitySlug: "ban-cung",
    name: "Câu Lạc Bộ Bắn Cung Sài Gòn",
    address: "45 Nguyễn Thị Thập, Quận 7, TP.HCM",
    phone: "090 456 7890",
    hours: "9:00 - 20:00 (Thứ 2-CN)",
    price: "150.000đ/giờ",
  },

  // Jump Arena
  {
    id: 19,
    activitySlug: "jump-arena",
    name: "Jump Arena Phú Thọ",
    address: "170 Lý Thường Kiệt, Quận 10, TP.HCM",
    phone: "028 3622 0499",
    hours: "9:30 - 21:30 (Hàng ngày)",
    price: "220.000đ/giờ",
  },
  {
    id: 20,
    activitySlug: "jump-arena",
    name: "Jump Arena Thảo Điền",
    address: "59 Xa Lộ Hà Nội, Quận 2, TP.HCM",
    phone: "028 7300 7300",
    hours: "9:30 - 21:30 (Hàng ngày)",
    price: "220.000đ/giờ",
  },

  // Xplay Zone Quận 10
  {
    id: 21,
    activitySlug: "xplay-zone-quan-10",
    name: "Xplay Zone",
    address: "Tầng 5, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10, TP.HCM",
    phone: "028 3636 7777",
    hours: "10:00 - 22:00 (Hàng ngày)",
    price: "150.000đ - 300.000đ/người",
  },

  // Escape Room
  {
    id: 22,
    activitySlug: "escape-room",
    name: "Lost SG Escape Room",
    address: "10B1 Nguyễn Thị Minh Khai, Quận 1, TP.HCM",
    phone: "090 944 5864",
    hours: "9:30 - 21:30 (Hàng ngày)",
    price: "200.000đ - 250.000đ/người",
  },
  {
    id: 23,
    activitySlug: "escape-room",
    name: "Escape Hunt",
    address: "119 Pasteur, Quận 1, TP.HCM",
    phone: "028 3822 5211",
    hours: "9:30 - 21:30 (Hàng ngày)",
    price: "220.000đ - 270.000đ/người",
  },

  // PlayStation
  {
    id: 24,
    activitySlug: "playstation",
    name: "PlayStation Center",
    address: "123 Nguyễn Du, Quận 1, TP.HCM",
    phone: "028 3925 8888",
    hours: "9:00 - 23:00 (Hàng ngày)",
    price: "50.000đ/giờ",
  },

  // Nghe Acoustic
  {
    id: 25,
    activitySlug: "nghe-acoustic",
    name: "Acoustic Bar",
    address: "6E Ngô Thời Nhiệm, Quận 3, TP.HCM",
    phone: "090 789 1234",
    hours: "18:00 - 24:00 (Hàng ngày)",
    price: "Giá đồ uống từ 60.000đ",
  },
  {
    id: 26,
    activitySlug: "nghe-acoustic",
    name: "Yoko Cafe",
    address: "22A Nguyễn Thị Diệu, Quận 3, TP.HCM",
    phone: "028 3930 4356",
    hours: "8:00 - 23:00 (Hàng ngày)",
    price: "Giá đồ uống từ 50.000đ",
  },
]

export function getAllActivities(): Activity[] {
  return activities
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((activity) => activity.slug === slug)
}

export function getLocations(activitySlug: string): Location[] {
  return locations.filter((location) => location.activitySlug === activitySlug)
}
