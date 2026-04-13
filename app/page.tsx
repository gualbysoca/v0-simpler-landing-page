import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { Manifesto } from '@/components/manifesto'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroCarousel />
      <Manifesto />
      <Footer />
    </main>
  )
}
