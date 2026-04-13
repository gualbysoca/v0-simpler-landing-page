'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const products = [
  {
    id: 'remesas',
    name: 'Remesas',
    description: 'Envía dinero de forma segura y rápida a tus seres queridos',
    subtitle: 'Transacciones internacionales simplificadas',
    features: ['Comisiones bajas', 'Velocidad garantizada', 'Múltiples monedas']
  },
  {
    id: 'usdt',
    name: 'USDT',
    description: 'Acceso a activos virtuales con transparencia total',
    subtitle: 'Activo Virtual regulado y seguro',
    features: ['Precio en tiempo real', 'Operaciones 24/7', 'Máxima seguridad']
  }
]

export function HeroCarousel() {
  const [activeProduct, setActiveProduct] = useState(0)

  const current = products[activeProduct]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background via-background to-background">
      <div className="max-w-4xl w-full text-center mb-16">
        <div className="inline-block mb-6 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
          <p className="text-sm font-medium text-secondary">Nueva plataforma fintech</p>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance text-foreground mb-6">
          Transacciones que simplifican tu vida
        </h1>
        <p className="text-lg sm:text-xl text-foreground/60 text-balance max-w-2xl mx-auto mb-12">
          Remesas rápidas y USDT seguro. Toda la tecnología fintech que necesitas en una plataforma confiable.
        </p>
      </div>

      {/* Interactive Product Cards */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
          {products.map((product, idx) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(idx)}
              className={`p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 ${
                activeProduct === idx
                  ? 'border-primary bg-primary/5 shadow-lg'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="text-left">
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-1">{product.name}</h3>
                <p className="text-sm text-foreground/60">{product.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Product Details */}
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{current.name}</h2>
          <p className="text-lg text-foreground/70 mb-8">{current.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {current.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <p className="text-sm text-foreground/60">{feature}</p>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
            Explorar {current.name}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-foreground/60 mb-4">¿Listo para comenzar?</p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition shadow-lg hover:shadow-xl">
            Solicitar Acceso Ahora
          </button>
        </div>
      </div>
    </section>
  )
}
