export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Post a task",
      description:
        "Share what you need, your timeline, and budget in a guided task brief designed for student projects.",
    },
    {
      number: 2,
      title: "Get matched",
      description: "We instantly surface vetted students with the right skills, availability, and verified profiles.",
    },
    {
      number: 3,
      title: "Track & pay students",
      description: "Monitor progress, approve deliverables, and handle secure payments — all from one place.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] text-center mb-12 md:mb-16">
          How InstaTask SkillConnect Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#FF7A00] rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
