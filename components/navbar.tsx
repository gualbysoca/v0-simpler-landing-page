'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#manifiesto', label: 'Manifiesto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-foreground transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hamburger button - mobile only */}
            <button
              onClick={() => setIsOpen(true)}
              className="sm:hidden p-2 rounded-md text-foreground/60 hover:text-foreground transition active:scale-95"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in drawer from right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Simpler"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="font-semibold text-foreground">Simpler</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-foreground/60 hover:text-foreground transition active:scale-95"
            aria-label="Cerrar menú"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-base font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-3 py-3 rounded-lg transition active:scale-[0.98]"
              style={{ transitionDelay: isOpen ? `${idx * 40}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
