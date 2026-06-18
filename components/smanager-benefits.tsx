'use client'

import { DollarSign, Zap, Clock, BarChart3 } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Liquidez Inmediata',
    description: 'Al usar QRs Interoperables (Simple), el dinero va directo a tu cuenta bancaria sin intermediarios.'
  },
  {
    icon: Zap,
    title: 'Cero Fricción',
    description: 'Tus clientes no necesitan descargar apps ni registrar tarjetas. Pagan con la app de su banco.'
  },
  {
    icon: Clock,
    title: 'Ahorro Operativo',
    description: 'Elimina trabajo manual de conciliación. El sistema funciona 24/7 como un departamento de cobranzas completo.'
  },
  {
    icon: BarChart3,
    title: 'Crecimiento Escalable',
    description: 'Gestiona múltiples productos, sucursales o franquicias desde un mismo núcleo tecnológico.'
  }
]

export function SManagerBenefits() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 bg-foreground/5">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            ¿Por qué elegir Simpler Subscription Manager?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Transformamos la manera en que cobras y administras tus suscripciones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div key={idx} className="p-6 sm:p-8 bg-background border border-border rounded-xl hover:border-primary/50 transition">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/60">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-primary/5 border border-primary/20 rounded-xl text-center">
          <p className="text-lg sm:text-xl text-foreground font-semibold mb-4">
            ¡Transforma hoy mismo tu manera de cobrar!
          </p>
          <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition">
            Solicitar acceso a la plataforma
          </button>
        </div>
      </div>
    </section>
  )
}
