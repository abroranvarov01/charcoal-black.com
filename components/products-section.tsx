import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const products = [
  {
    name: 'Revitalizing Serum',
    description: 'Advanced peptide complex for deep wrinkle reduction',
    price: '$89',
    rating: 4.9,
    reviews: 1247,
    image: '/luxury-anti-aging-serum-bottle-black-gold.jpg',
  },
  {
    name: 'Brightening Elixir',
    description: 'Vitamin C and niacinamide for radiant, even-toned skin',
    price: '$79',
    rating: 4.8,
    reviews: 892,
    image: '/luxury-brightening-serum-bottle-elegant.jpg',
  },
  {
    name: 'Hydration Boost',
    description: 'Hyaluronic acid and ceramides for intense moisture',
    price: '$69',
    rating: 5.0,
    reviews: 1521,
    image: '/luxury-hydrating-serum-bottle-premium.jpg',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our signature collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Carefully crafted formulations to address every anti-aging concern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-square bg-secondary/50 relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  
                  <Button>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
