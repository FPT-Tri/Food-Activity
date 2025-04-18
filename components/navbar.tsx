"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Giải Trí TP.HCM
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-50 bg-background p-6 animate-in slide-in-from-top-5">
                  <nav className="flex flex-col gap-6 text-lg">
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>
                      Trang chủ
                    </Link>
                    <Link href="/#activities" onClick={() => setIsMenuOpen(false)}>
                      Hoạt động
                    </Link>
                    <Link href="/food" onClick={() => setIsMenuOpen(false)}>
                      Food
                    </Link>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="font-medium transition-colors hover:text-primary">
                Trang chủ
              </Link>
              <Link href="/#activities" className="font-medium transition-colors hover:text-primary">
                Hoạt động
              </Link>
              <Link href="/food" className="font-medium transition-colors hover:text-primary">
                Food
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
