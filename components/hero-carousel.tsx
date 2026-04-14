'use client'

import { useState } from 'react'
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

  const current = products[activeProduct]

  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-background via-background to-background">
      <div className="max-w-4xl w-full text-center mb-12">
        <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
          <p className="text-sm font-medium text-secondary">Nueva plataforma fintech</p>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-4">
          Simpler es...
        </h1>
        <p className="text-base sm:text-lg text-foreground/60 text-balance max-w-2xl mx-auto mb-8">
          un ecosistema de "pequeños servicios financieros hipersimplificados" diseñados para solucionar necesidades específicas...
        </p>
      </div>

      {/* Interactive Product Cards */}
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
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

        {/* Product Details */}
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{current.name}</h2>
          <p className="text-base sm:text-lg text-foreground/70 mb-2">{current.description}</p>
          {current.subdescription && (
            <p className="text-base sm:text-lg text-foreground/70 mb-6">{current.subdescription}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {current.features.map((feature, idx) => (
              <p key={idx} className="text-sm text-foreground/60">{feature}</p>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
            {current.id === 'remesas' ? 'Enviar Remesa' : 'Comprar USDT'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
