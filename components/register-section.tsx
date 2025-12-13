"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { supabase } from "@/lib/supabase"

export function RegisterSection() {
const [formData, setFormData] = useState({
  companyName: "",
  contactPerson: "",
  workEmail: "",
  phoneNumber: "",
  companySize: "",
  domains: {
    marketing: false,
    design: false,
    operations: false,
    dataEntry: false,
    events: false,
    others: false,
  },
})


  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
]


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (domain: keyof typeof formData.domains) => {
    setFormData((prev) => ({
      ...prev,
      domains: {
        ...prev.domains,
        [domain]: !prev.domains[domain],
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Transform domains object to array
    const selectedDomains = Object.entries(formData.domains)
      .filter(([_, value]) => value)
      .map(([key]) => key)

    // Validation
   if (
  !formData.companyName ||
  !formData.contactPerson ||
  !formData.workEmail ||
  !formData.phoneNumber ||
  !formData.companySize ||
  selectedDomains.length === 0
)
{
      alert("Please fill all fields and select at least one domain.")
      setLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from("registrations-o")
        .insert([
          {
            company_name: formData.companyName,
            contact_person: formData.contactPerson,
            work_email: formData.workEmail,
            phone_number: formData.phoneNumber,
            domains: selectedDomains,
          },
        ])

      if (error) throw error

      setSubmitted(true)
      setFormData({
  companyName: "",
  contactPerson: "",
  workEmail: "",
  phoneNumber: "",
  companySize: "",
  domains: {
    marketing: false,
    design: false,
    operations: false,
    dataEntry: false,
    events: false,
    others: false,
  },
})


      // Reset submitted after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error("Error inserting registration:", err)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const whatHappensNext = [
    "We review your use case and confirm if InstaTask SkillConnect is a good fit for your organization.",
    "You get onboarding support to set up task templates, approval flows, and permissions for your team.",
    "Once you're live, you can post tasks and start receiving matched students within hours.",
  ]

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Form */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-96">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600">Our team will contact you within one business day.</p>
              </div>
            ) : (
              <>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                  Register your company for early access
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Share a few details and our team will reach out with next steps within one business day.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {/* Company Name */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 text-sm sm:text-base">Company name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Labs"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 text-sm sm:text-base">Contact person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="Full name"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 text-sm sm:text-base">Work email *</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-2 text-sm sm:text-base">Phone number *</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+91 955580XXXX"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 transition-all text-sm sm:text-base"
                      required
                    />
                  </div>


                  {/* Company Size */}
<div>
  <label className="block text-[#1A1A1A] font-medium mb-2 text-sm sm:text-base">
    Company size *
  </label>

  <select
    name="companySize"
    value={formData.companySize}
    onChange={(e) =>
      setFormData((prev) => ({
        ...prev,
        companySize: e.target.value,
      }))
    }
    className="
      w-full px-3 sm:px-4 py-2.5 sm:py-3
      rounded-lg border border-gray-300
      bg-white
      focus:border-[#FF7A00]
      focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20
      transition-all text-sm sm:text-base
    "
    required
  >
    <option value="" disabled>
      Select company size
    </option>
    <option value="1-10">1–10</option>
    <option value="11-50">11–50</option>
    <option value="51-200">51–200</option>
    <option value="201-500">201–500</option>
    <option value="500+">500+</option>
  </select>
</div>


                  {/* Domain Checkboxes */}
                  <div>
                    <label className="block text-[#1A1A1A] font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                      Domain you're looking to hire in *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { key: "marketing", label: "Marketing" },
                        { key: "design", label: "Design" },
                        { key: "operations", label: "Operations" },
                        { key: "dataEntry", label: "Data entry" },
                        { key: "events", label: "Events" },
                        { key: "others", label: "Others" },
                      ].map((domain) => (
                        <label key={domain.key} className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                          <div
                            onClick={() => handleCheckboxChange(domain.key as keyof typeof formData.domains)}
                            className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
                              formData.domains[domain.key as keyof typeof formData.domains]
                                ? "bg-[#FF7A00] border-[#FF7A00]"
                                : "border-gray-300"
                            }`}
                          >
                            {formData.domains[domain.key as keyof typeof formData.domains] && (
                              <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                            )}
                          </div>
                          <span className="text-[#1A1A1A] text-sm sm:text-base">{domain.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#FF7A00] text-white py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-[#e66e00] transition-all hover:scale-[1.02] transform duration-200"
                  >
                    {loading ? "Registering..." : "Register Your Company"}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Right - What happens after */}
          <div className="bg-[#FFF8F3] rounded-2xl p-5 sm:p-6 md:p-8 h-fit">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 sm:mb-8">
              What happens after you register
            </h3>

            <div className="space-y-5 sm:space-y-6">
              {whatHappensNext.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <p className="text-[#1A1A1A] leading-relaxed text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#FFE5D3]">
              <p className="text-gray-600 text-xs sm:text-sm">
                No setup fees. Cancel anytime. We only activate billing once you approve your first student task.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
