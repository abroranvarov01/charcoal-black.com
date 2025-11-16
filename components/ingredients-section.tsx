import { Leaf, Droplet, Sparkles, Beaker } from 'lucide-react'

const ingredients = [
  {
    icon: Beaker,
    name: 'Retinol Complex',
    benefit: 'Stimulates collagen production and cell turnover',
    concentration: '2.5%',
  },
  {
    icon: Droplet,
    name: 'Hyaluronic Acid',
    benefit: 'Provides deep hydration and plumps fine lines',
    concentration: '3.0%',
  },
  {
    icon: Sparkles,
    name: 'Vitamin C',
    benefit: 'Brightens complexion and protects from free radicals',
    concentration: '15%',
  },
  {
    icon: Leaf,
    name: 'Peptide Blend',
    benefit: 'Firms skin and reduces wrinkle depth',
    concentration: '5%',
  },
]

export function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border">
              <img
                src="/natural-skincare-ingredients-botanical-extracts.jpg"
                alt="Natural Ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 mb-6">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Premium Ingredients</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Powerful actives that work
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Each ingredient is carefully selected and formulated at optimal concentrations 
              for maximum efficacy without irritation.
            </p>

            <div className="space-y-6">
              {ingredients.map((ingredient, index) => {
                const Icon = ingredient.icon
                return (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold">{ingredient.name}</h3>
                        <span className="text-sm text-accent font-medium">{ingredient.concentration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
