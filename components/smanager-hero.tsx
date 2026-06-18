'use client'

import { ArrowRight, Zap, BarChart3, MessageCircle } from 'lucide-react'

export function SManagerHero() {
  return (
    <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-background/50">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="text-sm font-medium text-primary">Solución Fintech</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Simpler Subscription Manager
        </h1>
        
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
          Tu Motor de Cobranzas Automáticas. Automatiza tus cobros, fideliza a tus clientes y haz crecer tus ingresos recurrentes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
            Solicitar Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-6 sm:px-8 py-3 border border-border rounded-full font-semibold hover:bg-foreground/5 transition">
            Ver características
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-3 mx-auto">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">100% Automático</h3>
            <p className="text-sm text-foreground/60">Cobros sin intervención manual</p>
          </div>
          
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-3 mx-auto">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">WhatsApp Integrado</h3>
            <p className="text-sm text-foreground/60">Notificaciones directas a clientes</p>
          </div>
          
          <div className="p-4 bg-card border border-border rounded-lg">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg mb-3 mx-auto">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Liquidez Inmediata</h3>
            <p className="text-sm text-foreground/60">Dinero directo a tu cuenta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
