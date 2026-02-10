export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-accent/20 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        {/* Main heading with gradient effect */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
            INVERSE
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary mx-auto mb-8" />
        </div>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl font-light text-white/90 mb-8 leading-relaxed">
          Pop Culture Meets Kerala Tradition
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Original comics crafted by passionate creators blending contemporary pop culture with the rich heritage of Kerala traditions. Every story, every illustration—authentically ours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Explore Comics
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
            Our Story
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
