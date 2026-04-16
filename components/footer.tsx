'use client'

import Image from 'next/image'
import { ChevronDown, Shield } from 'lucide-react'
import { useState } from 'react'
import { ContactModal } from './contact-modal'

const footerSections = [
  {
    title: 'Legales',
    links: [
      { label: 'Términos de Servicio', href: '/Simpler_Terminos_Condiciones.pdf', external: true },
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
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <footer className="bg-black text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {/* Column 1: Legal & Transparency */}
          <div>
            <h3 className="font-bold text-xs sm:text-lg mb-2 sm:mb-4 text-background">Legales</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[0].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-background/70 hover:text-background transition text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs sm:text-lg mb-2 sm:mb-4 text-background">Transparencia</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[1].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: User Protection & Institutional */}
          <div>
            <h3 className="font-bold text-xs sm:text-lg mb-2 sm:mb-4 text-background">Protección</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[2].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xs sm:text-lg mb-2 sm:mb-4 text-background">Institucional</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerSections[3].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  {link.label === 'Contáctanos' ? (
                    <button
                      onClick={() => setIsContactOpen(true)}
                      className="text-background/70 hover:text-background transition text-xs sm:text-sm text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition text-xs sm:text-sm">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
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
          <div className="w-full overflow-hidden">
            <div className="relative flex items-center justify-center opacity-10 scale-150">
              <Image
                src="/images/simpler-footer-logo.png"
                alt="Simpler"
                width={800}
                height={200}
                className="w-screen h-auto"
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

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </footer>
  )
}
