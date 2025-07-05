import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock / unlock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ───── HEADER ───── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-beige/80 backdrop-blur-md shadow-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link
            to="/"
            className="font-serif text-xl font-semibold text-cocoa"
            onClick={() => setOpen(false)}
          >
            Prathiksha Parthiban
          </Link>

          {/* desktop links */}
          <ul className="hidden gap-8 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-2 py-1 text-cocoa transition hover:opacity-70"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* hamburger / close in header */}
          <button
            className="text-cocoa md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* ───── MOBILE PANEL ───── */}
      <AnimatePresence>
  {open && (
    <motion.div
      key="mobile-nav"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.25 }}
      /* 50 % height, beige backdrop */
      className="fixed inset-x-0 top-0 h-1/2 z-[60] bg-beige/90 backdrop-blur-md md:hidden"
    >
      {/* close icon inside panel */}
      <button
        aria-label="Close navigation menu"
        className="absolute right-4 top-4"
        onClick={() => setOpen(false)}
      >
        <X size={32} />
      </button>

      {/* nav links */}
      <ul className="flex h-full flex-col items-center justify-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-lg font-medium transition hover:opacity-70"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
