import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('/luxury-anti-aging-serum-bottle-dark-elegant-backgr.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Clinically Proven Results</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
            Timeless beauty begins with science
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Transform your skin with our revolutionary anti-aging serums. Powered by cutting-edge biotechnology and natural actives for visible results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Discover Your Serum
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Visible reduction in fine lines</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">28 days</div>
              <div className="text-sm text-muted-foreground">To see results</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Natural active ingredients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
