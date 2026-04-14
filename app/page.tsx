import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { ProductCards } from '@/components/product-cards'
import { Manifesto } from '@/components/manifesto'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroCarousel />
      <ProductCards />
      <Manifesto />
      <Footer />
    </main>
  )
}
