'use client'

import { Button } from '@/components/ui/button'
import { Menu, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold tracking-tight">
              CHARCOAL<span className="text-accent">BLACK</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Science
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ingredients
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="hidden md:inline-flex">Shop Now</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#science" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Science
            </a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ingredients
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
