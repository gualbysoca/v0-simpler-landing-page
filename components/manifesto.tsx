'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Play, Pause, ChevronUp } from 'lucide-react'

export function Manifesto() {
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [isUserScrolling, setIsUserScrolling] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const manifestoSectionRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()
  
  const speedOptions = [0.25, 0.5, 0.75, 1, 1.5, 2]
  
  const handleSpeedChange = (newSpeed: number) => {
    // Pause, change speed, then resume with new key to reset animation smoothly
    setAnimationKey(prev => prev + 1)
    setSpeedMultiplier(newSpeed)
    setIsSpeedMenuOpen(false)
  }
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setIsUserScrolling(true)
    
    // Clear existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    if (scrollContainerRef.current) {
      const scrollAmount = (e.deltaY * speedMultiplier)
      scrollContainerRef.current.scrollTop += scrollAmount
    }
    
    // Resume auto-scroll after 2 seconds of no mouse wheel activity
    scrollTimeoutRef.current = setTimeout(() => {
      setIsUserScrolling(false)
    }, 2000)
  }
  
  const manifestoText = `ESTO ES SIMPLER.

No nacimos para ser uno más.
No queremos ser la séptima billetera electrónica.
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
Es un sistema operativo financiero.
Un sistema vivo de microservicios hipersimplificados
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

  const animationDuration = 60 / speedMultiplier

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setIsPlaying(true)
        } else {
          setIsPlaying(false)
        }
      },
      { threshold: 0.3 }
    )

    if (manifestoSectionRef.current) {
      observer.observe(manifestoSectionRef.current)
    }

    return () => {
      if (manifestoSectionRef.current) {
        observer.unobserve(manifestoSectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={manifestoSectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
                animation: scrollUp ${animationDuration}s linear infinite !important;
                animation-timing-function: linear !important;
              }
              .manifesto-scroll.paused {
                animation-play-state: paused !important;
              }
            `}</style>
            <div 
              ref={scrollContainerRef}
              onWheel={handleWheel}
              className="h-80 overflow-hidden relative"
            >
              <div className={`whitespace-pre-line text-white leading-relaxed font-light text-center space-y-4 manifesto-scroll ${!isPlaying || isUserScrolling ? 'paused' : ''}`} key={animationKey} style={{ willChange: 'transform' }}>
                <div className="h-80" />
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
              </div>
            </div>
          </div>

          {/* Speed Control - Collapsible Menu */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              
              {/* Collapsible Speed Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsSpeedMenuOpen(!isSpeedMenuOpen)}
                  className={`px-4 py-2 rounded-full font-bold transition flex items-center gap-2 ${
                    isSpeedMenuOpen
                      ? 'bg-primary text-white'
                      : 'bg-primary/20 text-primary hover:bg-primary/40'
                  }`}
                >
                  x{speedMultiplier}
                  <ChevronUp
                    className={`w-4 h-4 transition-transform ${
                      isSpeedMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Speed Menu Dropdown */}
                {isSpeedMenuOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50">
                    {speedOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handleSpeedChange(option)
                        }}
                        className={`w-full px-6 py-3 text-left transition ${
                          speedMultiplier === option
                            ? 'bg-primary text-white font-bold'
                            : 'bg-background text-foreground hover:bg-primary/10'
                        }`}
                      >
                        {option}x
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
