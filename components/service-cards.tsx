'use client'

import { ArrowRight } from 'lucide-react'

export function ServiceCards() {
  const services = [
    {
      id: 'remesas',
      title: 'Remesas',
      description: 'Transacciones internacionales simplificadas',
      icon: '💸',
      countries: [
        { flag: '🇪🇸', name: 'España' },
        { flag: '🇺🇸', name: 'Estados Unidos' },
        { flag: '🇦🇷', name: 'Argentina' },
        { flag: '🇧🇷', name: 'Brasil' },
        { flag: '🇨🇱', name: 'Chile' },
        { flag: '🇵🇪', name: 'Perú' },
      ],
      buttonText: 'Enviar Remesa',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'usdt',
      title: 'USDT',
      description: 'Activo Virtual regulado y seguro',
      icon: '⬆️',
      features: [
        'Compra y venta instantánea',
        'Staking de USDT',
        'Transferencias P2P',
      ],
      buttonText: 'Comprar USDT',
      color: 'from-purple-600 to-purple-700',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-2xl p-8 sm:p-10 hover:border-primary/40 transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {service.description}
                  </p>
                </div>
              </div>

              {service.id === 'remesas' && service.countries && (
                <div className="mb-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {service.countries.map((country, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-lg">{country.flag}</span>
                        <span className="text-sm text-foreground/70">
                          {country.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.id === 'usdt' && service.features && (
                <div className="mb-8 space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <button className="w-full px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                {service.buttonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
