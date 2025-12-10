"use client"

export function OrgStatsSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="
            relative bg-white rounded-2xl shadow-md p-10 
            text-center transition-all duration-300
            hover:shadow-[0_0_25px_rgba(255,115,40,0.4)] 
            hover:scale-[1.02]
          "
        >
          {/* LIVE badge */}
          <div
            className="
              absolute -top-3 left-1/2 -translate-x-1/2
              bg-orange-500 text-white px-4 py-1 text-sm 
              font-semibold rounded-full shadow-md
              animate-pulse
            "
          >
            LIVE
          </div>

          <p className="text-5xl font-extrabold text-orange-600">500+</p>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-gray-800">
            Organizations onboarded & ready to hire
          </p>

          <p className="mt-2 text-gray-600">
            Trusted companies using SkillConnect for short-term, skill-based hiring.
          </p>
        </div>
      </div>
    </section>
  )
}
