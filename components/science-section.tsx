import { Microscope, FlaskConical, Atom } from 'lucide-react'

export function ScienceSection() {
  return (
    <section id="science" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
              <Atom className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Science-Backed Formula</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Advanced biotechnology meets natural efficacy
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our serums are developed in collaboration with leading dermatologists and biochemists, 
              utilizing breakthrough peptide technology and bioactive compounds that target aging at the cellular level.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Microscope className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clinical Testing</h3>
                  <p className="text-muted-foreground">
                    Every formula undergoes rigorous clinical trials with documented results
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Pure Ingredients</h3>
                  <p className="text-muted-foreground">
                    Pharmaceutical-grade actives with no harmful additives or fillers
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Atom className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Molecular Precision</h3>
                  <p className="text-muted-foreground">
                    Optimized molecular structure for maximum skin penetration and efficacy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border">
              <img
                src="/scientific-laboratory-anti-aging-research.jpg"
                alt="Scientific Research"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years of Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
