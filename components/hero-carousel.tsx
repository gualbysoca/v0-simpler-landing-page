'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 'remesas',
    name: 'Remesas',
    description: 'Envía dinero a tus seres queridos en Bolivia',
    subtitle: 'Transacciones internacionales simplificadas',
    features: [
      '🇪🇸 España',
      '🇺🇸 Estados Unidos',
      '🇦🇷 Argentina',
      '🇧🇷 Brasil',
      '🇨🇱 Chile',
      '🇵🇪 Perú'
    ]
  },
  {
    id: 'usdt',
    name: 'USDT',
    description: 'Compra USDT fácil y seguro',
    subdescription: 'Intercambia Bolivianos por USDT en minutos',
    subtitle: 'Activo Virtual regulado y seguro',
    features: ['Precio en tiempo real', 'Operaciones 24/7', 'Máxima seguridad']
  }
]

export function HeroCarousel() {
  const [activeProduct, setActiveProduct] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const current = products[activeProduct]

  // Auto-scroll carousel in mobile when activeProduct changes
  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const scrollAmount = carousel.children[activeProduct]?.clientWidth || 0
      carousel.scrollTo({
        left: scrollAmount * activeProduct + (activeProduct > 0 ? 16 * activeProduct : 0),
        behavior: 'smooth'
      })
    }
  }, [activeProduct])

  return (
    <section id="servicios" className="scroll-mt-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-background via-background to-background">
      {/* Product Details - Always visible on mobile, shown above carousel */}
      <div className="w-full max-w-4xl mb-8">
        <div className="bg-card border border-border rounded-2xl p-4 sm:p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-xl sm:text-3xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-3">{current.name}</h2>
            <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-1 sm:mb-2">{current.description}</p>
            {current.subdescription && (
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 mb-4 sm:mb-6">{current.subdescription}</p>
            )}

            <div className="mb-4 sm:mb-6">
              <ul className="flex flex-wrap gap-2 sm:gap-6 items-center justify-center sm:justify-start">
                {current.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-foreground/60">
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition w-fit text-sm sm:text-base">
            {current.id === 'remesas' ? 'Enviar Remesa' : 'Comprar USDT'}
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Interactive Product Cards - Grid on desktop, Carousel on mobile */}
      <div className="w-full max-w-4xl">
        {/* Mobile Carousel - Single card visible with horizontal scroll */}
        <div className="sm:hidden">
          <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 scroll-smooth">
            <div className="flex gap-4 pb-4 w-max">
              {products.map((product, idx) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(idx)}
                  className={`flex-shrink-0 w-screen max-w-sm px-4 py-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 snap-center ${
                    activeProduct === idx
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border bg-card'
                  }`}
                >
                  {(product.id === 'remesas' || product.id === 'usdt') && (
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Image
                          src={product.id === 'remesas' ? '/images/remesas-icon.png' : '/images/usdt-icon.png'}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <div className="text-left min-w-0">
                    <h3 className="font-bold text-base text-foreground mb-1">{product.name}</h3>
                    <p className="text-xs text-foreground/60 line-clamp-2">{product.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Dot and Dash Indicators with synchronized navigation */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {products.map((_, idx) => (
              <div key={idx} className="flex gap-1">
                <button
                  onClick={() => {
                    setActiveProduct(idx)
                    if (carouselRef.current) {
                      const itemWidth = carouselRef.current.offsetWidth
                      carouselRef.current.scrollTo({
                        left: itemWidth * idx,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeProduct 
                      ? 'bg-primary w-3 h-1' 
                      : 'bg-foreground/30 w-2 h-1'
                  }`}
                  aria-label={`Go to product ${idx + 1}`}
                />
                <div className={`transition-all duration-300 rounded-full ${
                  idx === activeProduct 
                    ? 'bg-primary w-3 h-3' 
                    : 'bg-foreground/30 w-2 h-2'
                }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {products.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(idx)}
                className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  activeProduct === idx
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                {(product.id === 'remesas' || product.id === 'usdt') && (
                  <div className="w-1/3 flex items-center justify-center flex-shrink-0">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                      <Image
                        src={product.id === 'remesas' ? '/images/remesas-icon.png' : '/images/usdt-icon.png'}
                        alt={product.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>
                )}
                <div className={(product.id === 'remesas' || product.id === 'usdt') ? 'w-2/3 text-left' : 'w-full text-left'}>
                  <h3 className="font-bold text-lg sm:text-xl text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-foreground/60">{product.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
