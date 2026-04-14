'use client'

import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Simpler"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-semibold text-lg text-foreground">Simpler</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#nosotros" className="text-sm text-foreground/60 hover:text-foreground transition">
              Nosotros
            </a>
            <a href="#servicios" className="text-sm text-foreground/60 hover:text-foreground transition">
              Servicios
            </a>
            <a href="#caracteristicas" className="text-sm text-foreground/60 hover:text-foreground transition">
              Características
            </a>
            <a href="#manifiesto" className="text-sm text-foreground/60 hover:text-foreground transition">
              Manifiesto
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
