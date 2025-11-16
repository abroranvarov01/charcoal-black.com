import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Elena Volkov',
    age: 42,
    location: 'New York, NY',
    rating: 5,
    text: 'After just 3 weeks, I noticed a significant reduction in fine lines around my eyes. This serum has become an essential part of my skincare routine.',
    image: '/professional-woman-portrait.png',
  },
  {
    name: 'Sophia Laurent',
    age: 38,
    location: 'San Francisco, CA',
    rating: 5,
    text: 'The best investment in my skin. My complexion is brighter, firmer, and I receive compliments constantly. Absolutely worth every penny.',
    image: '/elegant-woman-portrait.png',
  },
  {
    name: 'Isabella Martinez',
    age: 45,
    location: 'Miami, FL',
    rating: 5,
    text: "I've tried countless anti-aging products, but nothing compares to CharcoalBlack serums. My skin feels younger and more radiant than it has in years.",
    image: '/mature-woman-portrait.png',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Trusted by thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real results from real people who transformed their skin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-accent/20"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.age} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
