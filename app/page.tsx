import Hero from '@/components/hero'
import Gallery from '@/components/gallery'
import About from '@/components/about'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </main>
  )
}
