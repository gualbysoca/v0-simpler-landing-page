'use client'

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
  return (
    <section id="caracteristicas" className="scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Por qué elegir Simpler?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Características diseñadas para tu seguridad, velocidad y tranquilidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}
