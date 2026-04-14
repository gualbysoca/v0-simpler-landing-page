'use client'

import Image from 'next/image'
import { ChevronDown, Shield } from 'lucide-react'
import { useState } from 'react'

const footerSections = [
  {
    title: 'Legales',
    links: [
      { label: 'Términos de Servicio', href: '#' },
      { label: 'Política de Privacidad', href: '#' }
    ]
  },
  {
    title: 'Transparencia',
    links: [
      { label: 'Tasas y Comisiones', href: '#' }
    ]
  },
  {
    title: 'Protección al Usuario',
    links: [
      { label: 'Centro de Seguridad', href: '#' }
    ]
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Acerca de Nosotros', href: '#' },
      { label: 'Contáctanos', href: '#' }
    ]
  }
]

export function Footer() {
  const [isRegulatoryOpen, setIsRegulatoryOpen] = useState(false)

  return (
    <footer className="bg-black text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold text-lg mb-4 text-background">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-8">
          {/* Regulatory Info - Moved to top */}
          <div className="max-w-md mx-auto w-full relative">
            <button
              onClick={() => setIsRegulatoryOpen(!isRegulatoryOpen)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-full bg-background/10 border border-background/20 hover:bg-background/15 transition group"
            >
              <Shield className="w-6 h-6 text-background flex-shrink-0" />
              <div className="flex-1 text-left">
                <p className="font-semibold text-background text-sm">Información Regulatoria</p>
                <p className="text-xs text-background/60">Lee nuestros términos y disclaimers</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-background/60 transition-transform group-hover:text-background ${isRegulatoryOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isRegulatoryOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-xl bg-background/5 border border-background/10 space-y-3 animate-in fade-in duration-200 z-10">
                <div className="text-xs text-background/70 space-y-3">
                  <p>
                    <strong className="text-background">USDT:</strong> Activo Virtual sujeto a regulaciones locales. Consulta la normativa de tu país.
                  </p>
                  <p>
                    <strong className="text-background">Disclaimer:</strong> Simpler no es un banco tradicional. Las transacciones pueden estar sujetas a límites y verificaciones adicionales.
                  </p>
                  <p>
                    <strong className="text-background">Riesgo:</strong> Los activos virtuales conllevan riesgo. Invierte solo lo que puedas permitirte perder.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Full Width Watermark Logo */}
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4 overflow-hidden">
            <div className="relative flex items-center justify-center opacity-10 scale-150">
              <Image
                src="/images/simpler-footer-logo.png"
                alt="Simpler"
                width={800}
                height={200}
                className="w-full max-w-4xl h-auto"
                priority
              />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="h-px bg-background/10" />
          <div className="text-center text-xs text-background/60">
            <p>&copy; 2024 Simpler. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
