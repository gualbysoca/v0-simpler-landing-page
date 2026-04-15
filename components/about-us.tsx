export function AboutUs() {
  return (
    <section id="nosotros" className="scroll-mt-24 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-background via-background to-background">
      <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
        <p className="text-sm font-medium text-secondary">Sobre Nosotros</p>
      </div>
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-4">
          Simpler es...
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl text-foreground/60 text-balance text-center max-w-2xl mx-auto mb-8">
          un ecosistema de "pequeños servicios financieros hipersimplificados" diseñados para solucionar necesidades específicas......
        </p>
      </div>
    </section>
  )
}
