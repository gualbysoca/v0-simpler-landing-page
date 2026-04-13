import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { ProductCards } from '@/components/product-cards'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroCarousel />
      <ProductCards />
      <Footer />
    </main>
  )
}
