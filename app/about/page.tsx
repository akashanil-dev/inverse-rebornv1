import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Palette, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Inverse - Our Story",
  description:
    "Learn about Inverse, the creative studio blending Kerala traditions with pop culture through original comics and authentic storytelling.",
}

const VALUES = [
  {
    icon: BookOpen,
    title: "Authentic Stories",
    description:
      "Every narrative is rooted in deep research into Kerala's mythology, rituals, and folklore — then re-imagined for modern audiences.",
  },
  {
    icon: Palette,
    title: "Original Art",
    description:
      "Hand-crafted illustrations that blend traditional Kerala visual motifs with contemporary comic art styles and bold color palettes.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We build for our readers. Every comic is shaped by feedback, cultural consultants, and the communities whose stories we tell.",
  },
  {
    icon: Sparkles,
    title: "Invert Expectations",
    description:
      "We take what you think you know — ancient gods, mythic heroes, ritual warriors — and place them in worlds you never imagined.",
  },
]

const TEAM = [
  {
    name: "Team Member 1",
    role: "Writer / Creator",
    bio: "Passionate about weaving Kerala folklore into compelling modern narratives that challenge conventions.",
  },
  {
    name: "Team Member 2",
    role: "Artist / Illustrator",
    bio: "Brings traditional art forms to life with a contemporary comic aesthetic and meticulous detail.",
  },
  {
    name: "Team Member 3",
    role: "Writer / Creator",
    bio: "Explores the intersections of mythology and technology, crafting stories that bridge past and future.",
  },
]

const MILESTONES = [
  { year: "2023", event: "Inverse studio founded in Kerala, India" },
  { year: "2023", event: "First titles launched: Theyyam Protocol & Spice Route Chronicles" },
  { year: "2024", event: "Expanded lineup with Yaksha Nexus, Kathakali Avengers & Monsoon Guardians" },
  { year: "2025", event: "Growing community of readers across India and beyond" },
]

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Kathakali performer blending tradition with modern neon aesthetics"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-foreground">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-primary-foreground text-balance max-w-3xl">
            Where Tradition Meets Tomorrow
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Inverse is a comic studio born in Kerala, India. We fuse the rich
            tapestry of Kerala&apos;s cultural heritage with the boundless energy
            of contemporary pop culture to create stories that resonate across
            generations.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-card py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Reimagining Storytelling From the Heart of Kerala
              </h2>
              <div className="h-1 w-16 bg-accent rounded-full" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-foreground/80">
                Inverse was created by a collective of writers and artists who
                saw an untapped universe in Kerala&apos;s traditions. Ancient deities
                in neon cities. Mythological beings navigating cyber-worlds.
                Ritualistic warriors facing modern dilemmas.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                We believe that by inverting expectations and blending the old
                with the new, we can create comics that inspire, challenge, and
                build lasting connections with readers everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            What Drives Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 text-balance">
            Our Creative Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-card py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            The Creators
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 text-balance">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-navy-blue">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-accent mb-4">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14 text-balance">
            Milestones
          </h2>
          <div className="relative border-l-2 border-border pl-8 flex flex-col gap-10">
            {MILESTONES.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-accent border-4 border-background" />
                <p className="text-sm font-bold text-accent mb-1">{item.year}</p>
                <p className="text-lg text-foreground/80">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Explore Our Universe?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
            Dive into our comics where ancient Kerala traditions collide with
            modern pop culture in ways you&apos;ve never seen before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#gallery"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Browse Comics
            </Link>
            <a
              href="mailto:hello@inversecreatives.com"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
