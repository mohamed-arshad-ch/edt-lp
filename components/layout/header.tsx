"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`)
  }

  return (
    <header className="w-full py-5 bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium ${isActive("/") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors`}
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className={`text-sm font-medium ${isActive("/about-us") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors`}
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium ${isActive("/services") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors`}
          >
            SERVICES
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-medium ${isActive("/contact-us") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors`}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 border-b border-gray-100">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium ${isActive("/") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-medium ${isActive("/about-us") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium ${isActive("/services") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-medium ${isActive("/contact-us") ? "text-[#D64B65]" : "text-gray-700 hover:text-[#D64B65]"} transition-colors py-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

