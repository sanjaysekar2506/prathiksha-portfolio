export default function Services() {
  const services = [
    { title: "Bridal Makeup", img: "/src/assets/bridal.jpg" },
    { title: "Special Event Makeup", img: "/src/assets/event.jpg" },
    { title: "Editorial / Photoshoots", img: "/src/assets/editorial.jpg" },
  ];

  /** Desktop layout */
  const ServicesDesktop = () => (
    <div className="mx-auto hidden max-w-5xl gap-10 px-4 md:grid md:grid-cols-3">
      {services.map(({ img, title }) => (
        <figure key={title} className="group">
          <div className="overflow-hidden rounded-b-[50%]">
            <img
              src={img}
              alt={title}
              className="h-[30rem] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-4 text-center font-medium">{title}</figcaption>
        </figure>
      ))}
    </div>
  );

  /** Mobile layout */
  const ServicesMobile = () => (
    <div className="mx-auto space-y-10 px-4 md:hidden">
      {services.map(({ img, title }) => (
        <figure key={title} className="group">
          <div className="overflow-hidden rounded-b-[50%]">
            <img
              src={img}
              alt={title}
              className="h-[24rem] w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-4 text-center font-medium">{title}</figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <section id="services" className="bg-beige py-20">
      <h2 className="mb-12 text-center font-serif text-4xl">Our Services</h2>
      {/* Desktop & Mobile */}
      <ServicesDesktop />
      <ServicesMobile />
    </section>
  );
}
