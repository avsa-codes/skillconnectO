import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const leftBenefits = [
    "Pre-screened students with verified skills and academic standing.",
    "48-hour replacement guarantee if a student cannot complete a task.",
    "Handled documentation, contracts, and compliance ready for your HR.",
    "Secure payroll and transparent reporting for every engagement.",
  ]

  const rightBenefits = [
    "Every student completes identity, enrollment, and skills verification before appearing in your matches.",
    "Need a change? Request a replacement and we rematch your task within 48 hours at no extra cost.",
    "We handle contracts, NDAs, timesheets, and payroll so your teams can stay focused on outcomes.",
  ]

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] text-center mb-12 md:mb-16">
          Benefits for Organizations
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            {leftBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFAF6] border border-[#FFE8D6] hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {rightBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#FFFAF6] border border-[#FFE8D6] hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
