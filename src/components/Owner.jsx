export default function Owner() {
  return (
    <section id="owner" className="bg-beige py-24">
      <h2 className="text-center font-serif text-4xl">Meet the Owner</h2>
      <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-10 md:flex-row px-4">
        <img src="/src/assets/owner.jpg" alt="Natalie Chung" className="h-80 w-64 rounded-2xl object-cover" />
        <div className="space-y-6 leading-relaxed">
          <h3 className="font-serif text-2xl">Prathiksha Parthiban</h3>
          <p className="mt-8 text-cocoa/90 text-lg leading-relaxed">
  My work includes everything from elegant bridal glam to bold editorial shoots. I believe in enhancing natural features with a touch of creativity and precision. I’m deeply passionate about customizing each look to reflect your personal style and event needs.
</p>

<p className="mt-6 text-cocoa/90 text-lg leading-relaxed">
  Outside of my professional life, I’m a fitness lover, bookworm, and music enthusiast. Whether I'm lifting weights, lost in a good book, or vibing to my favorite playlist, I believe balance in life fuels creativity in my art.
</p>

        </div>
      </div>
    </section>
  );
}
