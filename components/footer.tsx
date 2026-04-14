'use client'

import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'

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
          {/* Full Width Brand Logo */}
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="w-11/12">
              <Image
                src="/images/simpler-footer-logo.png"
                alt="Simpler"
                width={800}
                height={200}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Company Info & Regulatory Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info & Contact */}
            <div>
              <p className="text-background/70 text-sm mb-4 leading-relaxed">
                Plataforma fintech dedicada a simplificar remesas internacionales y acceso a activos virtuales.
              </p>
              <div className="space-y-2 text-sm text-background/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@simpler.app" className="hover:text-background transition">
                    support@simpler.app
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Disponible globalmente</span>
                </div>
              </div>
            </div>

            {/* Regulatory Info & Disclaimers */}
            <div>
              <h4 className="font-bold text-background mb-4">Información Regulatoria</h4>
              <div className="space-y-3 text-xs text-background/70">
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
          </div>

          {/* Bottom Bar */}
          <div className="h-px bg-background/10" />
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-background/60">
            <p>&copy; 2024 Simpler. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-background transition">Twitter</a>
              <a href="#" className="hover:text-background transition">LinkedIn</a>
              <a href="#" className="hover:text-background transition">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
