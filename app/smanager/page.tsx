import type { Metadata } from 'next'
import { SManagerHero } from '@/components/smanager-hero'
import { SManagerFeatures } from '@/components/smanager-features'
import { SManagerBenefits } from '@/components/smanager-benefits'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Simpler Subscription Manager - Cobros Automáticos',
  description: 'Automatiza tus cobros recurrentes con QR + WhatsApp. Notificaciones inteligentes, liquidez inmediata y cero fricción para tus clientes.',
  openGraph: {
    title: 'Simpler Subscription Manager - Tu Motor de Cobranzas',
    description: 'Solución definitiva para empresas con modelos de suscripción y pagos recurrentes',
    type: 'website',
  },
}

export default function SManagerPage() {
  return (
    <main className="w-full">
      <Navbar />
      <SManagerHero />
      <SManagerFeatures />
      <SManagerBenefits />
      <Footer />
    </main>
  )
}
