import { Zap, Shield, Sparkles, Timer, Heart, Award } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Fast-Acting Formula',
    description: 'Advanced peptide technology delivers visible results in just 4 weeks',
  },
  {
    icon: Shield,
    title: 'Protective Barrier',
    description: 'Strengthens skin defense against environmental stressors and pollution',
  },
  {
    icon: Sparkles,
    title: 'Radiant Glow',
    description: 'Restores luminosity and evens skin tone for a youthful appearance',
  },
  {
    icon: Timer,
    title: 'Time-Release Technology',
    description: 'Continuous delivery of active ingredients for 24-hour skin renewal',
  },
  {
    icon: Heart,
    title: 'Gentle & Safe',
    description: 'Dermatologist-tested formula suitable for all skin types',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognized by leading beauty experts and dermatologists worldwide',
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why choose our serums
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the perfect blend of nature and science with our premium formulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
