import Hero from '@/components/hero'
import Gallery from '@/components/gallery'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Gallery />
    </main>
  )
}
