// add Link import
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        {/* brand → go HOME */}
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
            <li key={href} className="px-2 py-1">
              <a href={href} className="text-cocoa hover:opacity-70 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger menu button */}
        <button
          className="md:hidden text-cocoa"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-white/80 backdrop-blur text-cocoa"
          >
            <ul className="flex flex-col items-center gap-6 py-6 px-4">
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
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
