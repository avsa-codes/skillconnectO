"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-200 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center flex-shrink-0">
            <span className="text-sm sm:text-lg md:text-xl font-bold text-[#1A1A1A]">InstaTask</span>
            <span className="text-sm sm:text-lg md:text-xl font-bold text-[#1A1A1A] mx-0.5 sm:mx-1">|</span>
            <span className="text-sm sm:text-lg md:text-xl font-bold text-[#FF7A00]">SkillConnect</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-[#1A1A1A] hover:text-[#FF7A00] transition-colors font-medium"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-[#1A1A1A] hover:text-[#FF7A00] transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-[#1A1A1A] hover:text-[#FF7A00] transition-colors font-medium"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#e66e00] transition-colors hover:scale-105 transform duration-200"
            >
              Register
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("register")}
            className="md:hidden bg-[#FF7A00] text-white px-3 py-1.5 rounded-full font-medium text-xs hover:bg-[#e66e00] transition-colors flex-shrink-0"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
