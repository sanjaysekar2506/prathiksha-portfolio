export default function Hero() {
  return (
    <section id="hero" className="relative h-screen sm:h-screen">
      {/* responsive background image */}
      <picture className="absolute inset-0 -z-10 h-full w-full">
        <source
          media="(max-width: 639px)"
          srcSet="/assets/hero-mobile.jpg"
        />
        <img
          src="/assets/hero-desktop.jpg"
          alt="Makeup artist working on a bride"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* dark overlay + content */}
      <div className="absolute inset-0 bg-black/30 grid place-items-center px-4 text-center">
        <div className="text-beige max-w-md sm:max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl leading-tight">
            Unleash Your Inner Glow
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg tracking-wide">
            Bridal • Special Events • Editorial
          </p>
          <a
            href="#booking"
            className="mt-6 inline-block rounded-full bg-beige px-6 py-2 sm:px-8 sm:py-3 font-semibold text-cocoa hover:opacity-90 transition"
          >
            Book&nbsp;Now
          </a>
        </div>
      </div>
    </section>
  );
}
