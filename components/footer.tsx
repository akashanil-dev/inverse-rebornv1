import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-wider mb-4">INVERSE</h3>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              Original comics blending pop culture with Kerala traditional characters. Crafted by passionate creators with authentic storytelling and art.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Navigate</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Comics
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground/90">Get in Touch</h4>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Want to collaborate or have questions? Reach out to us at{" "}
              <a href="mailto:hello@inversecreatives.com" className="text-accent-foreground underline underline-offset-4 hover:text-accent-foreground/80 transition-colors">
                hello@inversecreatives.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            {new Date().getFullYear()} Inverse Creatives. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Made with care in Kerala, India
          </p>
        </div>
      </div>
    </footer>
  )
}
