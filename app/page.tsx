import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { BenefitsSection } from '@/components/benefits-section'
import { ScienceSection } from '@/components/science-section'
import { ProductsSection } from '@/components/products-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ResultsSection } from '@/components/results-section'
import { IngredientsSection } from '@/components/ingredients-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ScienceSection />
      <ProductsSection />
      <TestimonialsSection />
      <ResultsSection />
      <IngredientsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
