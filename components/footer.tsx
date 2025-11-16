import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold mb-4">
              CHARCOAL<span className="text-accent">BLACK</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Premium anti-aging serums backed by science and trusted by skincare professionals worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Serums</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Science</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CharcoalBlack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
