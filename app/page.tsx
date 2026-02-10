import Hero from '@/components/hero'
import Gallery from '@/components/gallery'
import About from '@/components/about'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Gallery />
      <About />
    </main>
  )
}
