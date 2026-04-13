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
            <a href="#productos" className="text-sm text-foreground/60 hover:text-foreground transition">
              Productos
            </a>
            <a href="#caracteristicas" className="text-sm text-foreground/60 hover:text-foreground transition">
              Características
            </a>
            <a href="#seguridad" className="text-sm text-foreground/60 hover:text-foreground transition">
              Seguridad
            </a>
          </div>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition">
            Solicitar Acceso
          </button>
        </div>
      </div>
    </nav>
  )
}
