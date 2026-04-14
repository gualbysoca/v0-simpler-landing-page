export function AboutUs() {
  return (
    <section id="nosotros" className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-background via-background to-background">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-foreground mb-4">
          Simpler es...
        </h1>
        <p className="text-base sm:text-lg text-foreground/60 text-balance max-w-2xl mx-auto mb-8">
          un ecosistema de "pequeños servicios financieros hipersimplificados" diseñados para solucionar necesidades específicas...
        </p>
        <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full">
          <p className="text-sm font-medium text-secondary">Nueva plataforma fintech</p>
        </div>
      </div>
    </section>
  )
}
