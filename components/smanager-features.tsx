'use client'

import { QrCode, Clock, Bell, UserCheck, Cog, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: QrCode,
    title: 'Pagos Recurrentes 100% Automatizados',
    description: 'Genera códigos QR únicos para cada ciclo de facturación. El sistema detecta pagos instantáneamente y renueva suscripciones automáticamente.',
    benefits: [
      'Múltiples periodicidades (diaria, semanal, mensual, trimestral, semestral, anual)',
      'Integración bancaria segura con ATC / Red Enlace',
      'Auto-renovación instantánea tras validar pago'
    ]
  },
  {
    icon: Bell,
    title: 'Notificaciones Proactivas por WhatsApp',
    description: 'Mantén a tus clientes informados y facilita el pago enviando recordatorios directamente donde más revisan: WhatsApp.',
    benefits: [
      'Recordatorios de pago inteligentes configurables',
      'Alertas de vencimiento automáticas',
      'Confirmaciones de pago instantáneas'
    ]
  },
  {
    icon: UserCheck,
    title: 'Interacción Directa del Usuario',
    description: 'Tus clientes tienen control total, mejorando su experiencia y reduciendo la carga de soporte.',
    benefits: [
      'Cancelación de suscripciones por WhatsApp',
      'Procesamiento en tiempo real',
      'Detención automática de cobros'
    ]
  },
  {
    icon: Cog,
    title: 'Consola Centralizada',
    description: 'Control total de tu operación con herramientas de administración potentes y automatizadas.',
    benefits: [
      'Cron jobs para tareas programadas',
      'Respeto de zona horaria local',
      'Soporte multi-comercio'
    ]
  }
]

export function SManagerFeatures() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Funcionalidades Principales
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Todo lo que necesitas para automatizar tus cobranzas y crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex gap-2 text-sm text-foreground/70">
                      <span className="text-primary font-bold">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
