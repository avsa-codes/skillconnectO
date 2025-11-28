"use client"

import { useState } from "react"

export function CategoriesSection() {
  const categories = ["Marketing", "Design", "Operations", "Events", "And Many More"]
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="categories" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6">Task categories we support</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          From campaign support to operational backlogs, tap into students with the right skills for short, focused
          engagements.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`px-6 py-3 rounded-full border-2 font-medium text-base md:text-lg transition-all duration-200 ${
                hoveredIndex === index
                  ? "border-[#FF7A00] bg-[#FF7A00] text-white scale-105"
                  : "border-gray-300 bg-white text-[#1A1A1A] hover:border-[#FF7A00]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
