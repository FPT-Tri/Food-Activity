import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Giải Trí TP.HCM</h3>
            <p className="text-sm text-muted-foreground">
              Khám phá các hoạt động giải trí thú vị tại Thành phố Hồ Chí Minh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/#activities" className="text-muted-foreground hover:text-foreground transition-colors">
                  Hoạt động
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-sm text-muted-foreground">
              Email: info@giaitritphcm.com
              <br />
              Điện thoại: (028) 1234 5678
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Giải Trí TP.HCM. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
