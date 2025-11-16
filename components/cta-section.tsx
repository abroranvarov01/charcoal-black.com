import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Truck, RefreshCw } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Start your transformation today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join thousands of satisfied customers who have discovered the secret to youthful, radiant skin
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto group">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Talk to a Specialist
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Free Shipping</div>
              <div className="text-sm text-muted-foreground text-center">On orders over $50</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Money-Back Guarantee</div>
              <div className="text-sm text-muted-foreground text-center">60-day satisfaction promise</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Subscribe & Save</div>
              <div className="text-sm text-muted-foreground text-center">Get 20% off with auto-delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
