import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "../components/Reveal";

const NAV_LINKS = [
  { label: "Historia", href: "/#historia" },
  { label: "Colección", href: "/menu" },
  { label: "El Ritual", href: "/#ritual" },
  { label: "Visítanos", href: "/#visita" },
];

export default function Navbar({ started }: { started: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={started ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE, delay: 0.55 }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border] duration-700 ${scrolled
          ? "border-b border-[#D5B491]/10 bg-[#050505]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20 md:px-12">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="font-serif text-base tracking-[0.28em] text-[#EDEAE3] md:text-lg hover:text-[#D5B491] transition-colors duration-500"
          >
            GIN&nbsp;PALAU
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="group relative text-[10px] uppercase tracking-[0.32em] text-gray-300 transition-colors duration-500 hover:text-white"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#D5B491] transition-all duration-500 ease-out group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/#visita"
              className="hidden items-center gap-2 border border-[#c69c6d] px-5 py-2.5 text-[10px] uppercase tracking-[0.28em] text-[#c69c6d] transition-all duration-300 hover:bg-[#c69c6d]/10 md:inline-flex"
            >
              Reservar
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              className="text-[#EDEAE3] md:hidden"
              id="mobile-menu-toggle"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-[#050505]/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            id="mobile-menu"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-serif text-base tracking-[0.28em] text-[#EDEAE3]">
                GIN&nbsp;PALAU
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="text-[#EDEAE3]"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center w-full h-full text-center gap-8 px-8">
              {NAV_LINKS.map((l, i) => (
                <span key={l.href} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.08 * i }}
                  >
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-serif text-4xl font-light text-white/80 hover:text-white transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.div
              className="px-8 pb-12 text-[10px] uppercase tracking-[0.35em] text-white/65 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Barcelona — Desde 2014
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
