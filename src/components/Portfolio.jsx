export default function Portfolio() {
  const works = [
    {
      title: "Bridal Look",
      img: "/src/assets/portfolio1.jpg",
      description: "Elegant bridal makeup featuring soft glam and glowing skin.",
    },
    {
      title: "Editorial Shoot",
      img: "/src/assets/portfolio2.jpg",
      description: "High-fashion editorial look with bold colors and contouring.",
    },
    {
      title: "Special Event",
      img: "/src/assets/portfolio3.jpg",
      description: "Chic and refined style for a luxury event.",
    },
  ];

  return (
    <section className="min-h-screen bg-beige py-20 px-4">
      <h2 className="mb-12 text-center font-serif text-4xl text-cocoa">My Work</h2>
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 md:grid-cols-3">
        {works.map(({ title, img, description }) => (
          <div
            key={title}
            className="overflow-hidden rounded-xl shadow-md bg-white group transition hover:shadow-xl"
          >
            <img
              src={img}
              alt={title}
              className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-4 text-cocoa">
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-sm opacity-80">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
