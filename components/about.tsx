'use client'

export default function About() {
  const mission = "Inverse reimagines storytelling by fusing Kerala's rich cultural heritage with contemporary pop culture. We are a collective of writers and artists dedicated to creating comics that honor our traditions while speaking to modern audiences."

  const team = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Writer/Creator",
      bio: "Add your team member's background and passion here"
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Artist/Illustrator",
      bio: "Add your team member's background and passion here"
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Writer/Creator",
      bio: "Add your team member's background and passion here"
    }
  ]

  return (
    <section id="about" className="relative w-full py-20 px-4 md:px-8 lg:px-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Mission Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-8 text-foreground">
            Our Story
          </h2>
          
          <div className="bg-card p-8 md:p-12 rounded-lg border border-border shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              {mission}
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-base md:text-lg text-foreground/75">
                Through our characters—ancient deities in neon cities, mythological beings in cyber-worlds, ritualistic warriors in modern settings—we celebrate the timeless power of Kerala's narratives. We believe that by inverting expectations and blending the old with the new, we can create stories that inspire, challenge, and resonate.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Meet the Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.id}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h4>
                <p className="text-sm font-semibold text-accent mb-4">
                  {member.role}
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
            <p className="text-center text-foreground/80">
              <span className="font-semibold">Note:</span> Replace team member names, roles, and bios in the code to match your actual team. Each member card displays an avatar with initials.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
