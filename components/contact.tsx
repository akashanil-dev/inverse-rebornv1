'use client'

export default function Contact() {
  const whatsappLink = 'https://chat.whatsapp.com/YOUR_COMMUNITY_LINK'

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Join Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow fans, get exclusive updates, and be part of the Inverse journey
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-6 text-lg font-semibold text-secondary bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.947 1.347l-.355.203-.368-.077-1.214-.278.286 1.494A6.02 6.02 0 001.93 10.487c1.234 1.933 3.582 3.853 6.521 3.853 1.827 0 3.53-.628 4.818-1.696l.289-.237.384.01c1.267-.015 2.506-.352 3.563-1.001l1.205-.788-.46-1.453-1.238.417c.747 1.054 1.155 2.355 1.181 3.681-.073 1.808-.852 3.528-2.129 4.828-.783.734-1.793 1.281-2.875 1.58z" />
            </svg>
            Join WhatsApp Community
          </a>

          <div className="text-center max-w-2xl">
            <p className="text-muted-foreground mb-4">
              Stay updated with exclusive comic releases, behind-the-scenes content, creator stories, and community discussions.
            </p>
            <p className="text-sm text-muted-foreground">
              We respect your privacy. Share and enjoy with the Inverse community!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-semibold mb-2">Exclusive Drops</h3>
            <p className="text-sm text-muted-foreground">First access to new comic releases and special content</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-semibold mb-2">Community Chat</h3>
            <p className="text-sm text-muted-foreground">Connect with fellow fans and share your thoughts</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="font-semibold mb-2">Behind-the-Scenes</h3>
            <p className="text-sm text-muted-foreground">Creator insights and creative process stories</p>
          </div>
        </div>
      </div>
    </section>
  )
}
