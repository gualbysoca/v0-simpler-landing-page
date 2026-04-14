'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 'remesas',
    name: 'Remesas',
    description: 'Envía dinero a tus seres queridos en Bolivia',
    features: [
      '🇪🇸 España',
      '🇺🇸 Estados Unidos',
      '🇦🇷 Argentina',
      '🇧🇷 Brasil',
      '🇨🇱 Chile',
      '🇵🇪 Perú'
    ],
    buttonText: 'Enviar Remesa'
  },
  {
    id: 'usdt',
    name: 'USDT',
    description: 'Compra USDT fácil y seguro',
    features: ['Precio en tiempo real', 'Operaciones 24/7', 'Máxima seguridad'],
    buttonText: 'Comprar USDT'
  }
]

export function ServiceCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-2xl p-8 sm:p-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 mb-6">
                {product.description}
              </p>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {product.features.map((feature, idx) => (
                  <p key={idx} className="text-sm text-foreground/60">
                    {feature}
                  </p>
                ))}
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
                {product.buttonText}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
