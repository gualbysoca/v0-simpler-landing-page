'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
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

  // Observe scroll to keep activeProduct in sync when user swipes
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const itemWidth = carousel.offsetWidth
      const newActive = Math.round(carousel.scrollLeft / itemWidth)
      setActiveProduct(newActive)
    }

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to exact card by index
  const scrollToProduct = (idx: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollTo({ left: carousel.offsetWidth * idx, behavior: 'smooth' })
    setActiveProduct(idx)
  }

  return (
    <section id="servicios" className="scroll-mt-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-background via-background to-background">


      {/* Interactive Product Cards - Grid on desktop, Carousel on mobile */}
      <div className="w-full max-w-4xl mb-8">
        {/* Mobile Carousel - Single card visible with horizontal scroll */}
        <div className="sm:hidden">
          <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-4">
            <div className="flex">
              {products.map((product, idx) => (
                <button
                  key={product.id}
                  onClick={() => scrollToProduct(idx)}
                  style={{ width: '100%' }}
                  className={`flex-shrink-0 p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 snap-start snap-always ${activeProduct === idx
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

          {/* Dash + Dot Indicators - same style as Características */}
          <div className="flex items-center justify-center gap-3">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToProduct(idx)}
                className={`transition-all duration-300 rounded-full ${idx === activeProduct
                  ? 'bg-primary w-5 h-2'
                  : 'bg-foreground/30 w-2 h-2'
                  }`}
                aria-label={`Ir al servicio ${idx + 1}`}
              />
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
                className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 ${activeProduct === idx
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

      {/* Product Details - Always visible on mobile, shown above carousel */}
      <div className="w-full max-w-4xl">
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
    </section>
  )
}
