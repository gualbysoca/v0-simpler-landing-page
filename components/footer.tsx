'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const navigationGroups = [
  {
    title: 'Simpler',
    links: [
      { label: 'Documentación', href: '#' },
      { label: 'Soporte', href: '#' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Centro de Ayuda', href: '#' },
      { label: 'Estado del Sistema', href: '#' }
    ]
  }
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' }
]

const legalLinks = [
  { label: 'Preguntas Frecuentes', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Términos Legales', href: '#' }
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Navigation Groups */}
          <div className="md:col-span-3 space-y-8">
            {navigationGroups.map((group, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-base mb-4 text-background underline">{group.title}</h3>
                <ul className="space-y-2">
                  {group.links.map((link, linkIdx) => (
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

          {/* Middle Column: Social & Legal Links */}
          <div className="md:col-span-3 space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="font-bold text-base mb-4 text-background opacity-0 pointer-events-none">_</h3>
              <ul className="space-y-2">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
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

            {/* Legal Links */}
            <div>
              <h3 className="font-bold text-base mb-4 text-background opacity-0 pointer-events-none">_</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
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
          </div>

          {/* Right Column: Newsletter Subscription */}
          <div className="md:col-span-6 flex flex-col justify-start">
            <h3 className="text-2xl md:text-3xl font-light text-background mb-6">
              Suscríbete y no te pierdas nada
            </h3>
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-full bg-transparent border-2 border-background text-background placeholder-background/50 focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="ml-2 p-3 rounded-full bg-background text-foreground hover:bg-accent transition"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-12" />

        {/* Bottom Section - Full Width Logo */}
        <div className="flex flex-col gap-4">
          {/* Full Width Brand Name */}
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-background tracking-tighter leading-none">
              Simpler
            </h2>
          </div>

          {/* Bottom Info */}
          <div className="text-xs text-background/60 space-y-1">
            <p>&copy; 2024 Simpler. Todos los derechos reservados.</p>
            <p className="text-background/50">
              USDT es un Activo Virtual. Consulta regulaciones locales antes de usar.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
