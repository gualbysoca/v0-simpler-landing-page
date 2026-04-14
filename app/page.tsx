import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { ServiceCards } from '@/components/service-cards'
import { ProductCards } from '@/components/product-cards'
import { Manifesto } from '@/components/manifesto'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroCarousel />
      <ServiceCards />
      <ProductCards />
      <Manifesto />
      <Footer />
    </main>
  )
}
