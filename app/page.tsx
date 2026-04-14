import { Navbar } from '@/components/navbar'
import { AboutUs } from '@/components/about-us'
import { HeroCarousel } from '@/components/hero-carousel'
import { ProductCards } from '@/components/product-cards'
import { Manifesto } from '@/components/manifesto'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <AboutUs />
      <HeroCarousel />
      <ProductCards />
      <Manifesto />
      <Footer />
    </main>
  )
}
