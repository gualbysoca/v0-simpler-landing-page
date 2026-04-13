'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

export function Manifesto() {
  const [speed, setSpeed] = useState(100)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setIsUserScrolling(true)
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    if (scrollContainerRef.current) {
      const scrollAmount = (e.deltaY * speed) / 100
      scrollContainerRef.current.scrollTop += scrollAmount
    }
    
    // Resume auto-scroll after 2 seconds of no mouse wheel activity
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false)
    }, 2000)
  }
  
  const manifestoText = `THIS IS SIMPLER.

No nacimos para ser uno más.
No somos la séptima billetera.
No vinimos a sumar complejidad.

Vinimos a eliminarla.

Creemos que el dinero no debería ser difícil.
Ni lento.
Ni confuso.
Ni exclusivo.

Creemos que lo esencial debe ser… simple.

Simple de entender.
Simple de usar.
Simple de confiar.

Simpler no es una app.
Es una arquitectura.
Un sistema vivo de microservicios financieros
que trabajan en silencio
para que tú no tengas que hacerlo.

Menos pasos.
Menos fricción.
Menos dudas.

Más control.
Más claridad.
Más libertad.

No construimos para impresionar.
Construimos para servir.

No vendemos features.
Entregamos soluciones.

Cada línea de código tiene un propósito:
hacer tu vida financiera más fácil.

Cada decisión tiene un principio:
si no es simple, no sirve.

Creemos en la confianza radical:
transparencia en cada transacción,
seguridad en cada interacción,
claridad en cada pantalla.

Creemos en la eficiencia:
menos costo, más valor.
Menos intermediarios, más acceso.

Creemos en Bolivia.
En su talento.
En su capacidad de crear tecnología de clase mundial.

Simpler es tecnología de alto nivel,
hecha aquí.
Para resolver problemas reales.
Para gente real.

No seguimos tendencias.
Construimos lo que debería existir.

Este no es el futuro financiero.
Es lo que siempre debió ser.

Claro.
Accesible.
Inteligente.

Simple.`

  const animationDuration = (100 / speed) * 60

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
          El manifiesto Simpler
        </h2>
        <div className="flex flex-col gap-6">
          {/* Manifesto Card */}
          <div className="bg-black rounded-2xl p-8 sm:p-12 relative">
            <style>{`
              @keyframes scrollUp {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-100%);
                }
              }
              .manifesto-scroll {
                animation: scrollUp ${animationDuration}s linear infinite;
              }
              .manifesto-scroll.paused {
                animation-play-state: paused;
              }
            `}</style>
            <div 
              ref={scrollContainerRef}
              onWheel={handleWheel}
              className="h-80 overflow-hidden relative"
            >
              <div className={`whitespace-pre-line text-white leading-relaxed font-light text-center space-y-4 manifesto-scroll ${isUserScrolling ? 'paused' : ''}`}>
                {manifestoText.split('\n\n').map((paragraph, idx) => (
                  <p key={`first-${idx}`} className="text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
                <div className="py-12 flex justify-center">
                  <Image
                    src="/images/simpler-logo.png"
                    alt="Simpler"
                    width={280}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>
                <div className="h-80" />
                {manifestoText.split('\n\n').map((paragraph, idx) => (
                  <p key={`second-${idx}`} className="text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Speed Control - Horizontal Bar */}
          <div className="flex flex-col items-center gap-4">
            <input
              type="range"
              min="10"
              max="200"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-64 h-2 cursor-pointer"
              style={{
                accentColor: 'var(--primary, #9B6DD0)',
              }}
            />
            <div className="text-center">
              <p className="text-lg font-bold text-primary">{speed}% - Velocidad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
