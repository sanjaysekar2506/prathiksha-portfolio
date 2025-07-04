export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen">
      {/* responsive background image */}
      <picture>
        <source media="(max-width: 639px)" srcSet="/assets/hero-mobile.jpg" />
        <img
          src="/assets/hero-desktop.jpg"
          alt="Makeup artist working on a bride"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
      </picture>

      {/* dark overlay + content */}
      <div className="absolute inset-0 bg-black/30 grid place-items-center px-4 text-center">
        <div className="text-beige">
          <h1 className="font-serif text-4xl md:text-7xl">
            Unleash Your Inner Glow
          </h1>

          <p className="mt-4 text-base md:text-lg tracking-wide">
            Bridal • Special&nbsp;Events • Editorial
          </p>

          <a
            href="#booking"
            className="mt-8 inline-block rounded-full bg-beige px-8 py-3 font-semibold text-cocoa hover:opacity-90 transition"
          >
            Book&nbsp;Now
          </a>
        </div>
      </div>
    </section>
  );
}
