export default function Footer() {
  return (
    <footer id="contact" className="bg-cocoa py-12 text-beige">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:flex-row md:justify-between px-4">
        <h2 className="text-xl font-semibold">Contact Me</h2>
        <div className="space-x-4">
          <a
            href="mailto:hello@nataliechungbeauty.com"
            className="underline hover:opacity-80"
          >
            prathiksha97@gmail.com
          </a>
          <a
            href="https://www.instagram.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            +919677968065
          </a>
        </div>
      </div>
     <p className="mt-6 text-center text-sm opacity-80">
  &copy; {new Date().getFullYear()} Developed by{' Sanjay '}
  <a
    href="https://sanportfolioo.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-cocoa transition"
  >
    myportfolio
  </a>
  . All rights reserved.
</p>

    </footer>
  );
}
