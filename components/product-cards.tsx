'use client'

import { useState, useRef, useEffect } from 'react'
import { ShieldCheck, Zap, TrendingUp, Globe } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Seguridad Total',
    description: 'Encriptación de grado bancario y cumplimiento normativo en todas las transacciones'
  },
  {
    icon: Zap,
    title: 'Ultra Rápido',
    description: 'Procesamiento instantáneo de remesas con confirmación en tiempo real'
  },
  {
    icon: TrendingUp,
    title: 'Tasas Competitivas',
    description: 'Comisiones bajas y tipos de cambio actualizados constantemente'
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Disponible en múltiples países con soporte en diferentes monedas'
  }
]

export function ProductCards() {
  const [activeCard, setActiveCard] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Observe scroll position to update active dot when user swipes
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft
      const itemWidth = carousel.offsetWidth
      const newActive = Math.round(scrollLeft / itemWidth)
      setActiveCard(newActive)
    }

    carousel.addEventListener('scroll', handleScroll, { passive: true })
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to the correct card when a dot is clicked
  const scrollToCard = (idx: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    const itemWidth = carousel.offsetWidth
    carousel.scrollTo({ left: itemWidth * idx, behavior: 'smooth' })
    setActiveCard(idx)
  }

  return (
    <section id="caracteristicas" className="scroll-mt-24 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir Simpler?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Características diseñadas para tu seguridad, velocidad y tranquilidad
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div ref={carouselRef} className="overflow-x-auto snap-x snap-mandatory scrollbar-hide mb-6 scroll-smooth">
            <div className="flex">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    ref={el => { cardRefs.current[idx] = el }}
                    className="flex-shrink-0 w-full p-6 bg-card border border-border rounded-xl snap-start snap-always"
                    style={{ width: '100%' }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dot Navigation Controls */}
          <div className="flex items-center justify-center gap-3">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeCard
                    ? 'bg-primary w-5 h-2'
                    : 'bg-foreground/30 w-2 h-2'
                }`}
                aria-label={`Ir al card ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
