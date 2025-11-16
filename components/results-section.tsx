'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function ResultsSection() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            See the transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real before and after results from our clinical studies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeTab === 'before' ? 'default' : 'outline'}
              onClick={() => setActiveTab('before')}
              className="min-w-32"
            >
              Before
            </Button>
            <Button
              variant={activeTab === 'after' ? 'default' : 'outline'}
              onClick={() => setActiveTab('after')}
              className="min-w-32"
            >
              After 28 Days
            </Button>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-secondary/50">
            {activeTab === 'before' ? (
              <img
                src="/close-up-skin-before-treatment-fine-lines.jpg"
                alt="Before Treatment"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="/close-up-skin-after-treatment-smooth-youthful.jpg"
                alt="After Treatment"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">-67%</div>
              <div className="text-sm text-muted-foreground">Fine Lines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">+89%</div>
              <div className="text-sm text-muted-foreground">Firmness</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">+92%</div>
              <div className="text-sm text-muted-foreground">Hydration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">-54%</div>
              <div className="text-sm text-muted-foreground">Dark Spots</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
