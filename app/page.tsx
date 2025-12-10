import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { CategoriesSection } from "@/components/categories-section"
import { RegisterSection } from "@/components/register-section"
import { Footer } from "@/components/footer"
import { OrgStatsSection } from "@/components/org-stats-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
        <OrgStatsSection /> 
      <HowItWorksSection />
      <BenefitsSection />
      <CategoriesSection />
      <RegisterSection />
      <Footer />
    </main>
  )
}
