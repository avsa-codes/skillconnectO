"use client"

export function HeroSection() {
  const scrollToRegister = () => {
    const element = document.getElementById("register")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#FF7A00] font-medium mb-4 text-sm md:text-base">
              For organizations hiring student talent
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Hire pre-screened student talent instantly.
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
              Get matched with trained, verified student talent ready to start immediately with guaranteed quality and replacement support.
            </p>
            <button
              onClick={scrollToRegister}
              className="bg-[#FF7A00] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#e66e00] transition-all hover:scale-105 transform duration-200"
            >
              Register Your Company
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-[#FFF8F3] rounded-2xl p-5 sm:p-6 md:p-8">
            {/* Pre-screened matches badge */}
            <span className="inline-block bg-[#FF7A00] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Pre-screened matches
            </span>

            {/* Live student task board */}
            <div className="mb-4">
              <h3 className="text-[#1A1A1A] font-bold text-lg">Live student task board</h3>
              <p className="text-gray-600">Marketing, Ops, Events</p>
            </div>

            {/* Matches info */}
            <div className="bg-white rounded-xl p-4 mb-4">
              <h4 className="text-[#1A1A1A] font-bold text-xl">12 matches in under 6 hours</h4>
              <p className="text-gray-600">Qualified students ready to start</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4">
                <p className="text-gray-500 text-sm mb-1">Compliance ready</p>
                <h4 className="text-[#1A1A1A] font-bold">Documentation & payroll</h4>
                <p className="text-gray-600 text-sm">100% managed for you</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-gray-500 text-sm mb-1">Replacement guarantee</p>
                <h4 className="text-[#1A1A1A] font-bold">48-hour backup</h4>
                <p className="text-gray-600 text-sm">Student satisfaction</p>
                <p className="text-[#1A1A1A] font-bold">⭐4.2 / 5 avg.</p>
              </div>
            </div>

            {/* Footer text */}
            <p className="text-gray-500 text-sm">Onboarding handled by InstaTask</p>
          </div>
        </div>
      </div>
    </section>
  )
}
