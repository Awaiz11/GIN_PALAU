import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { FadeUp } from "./Reveal";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.5 3h2.2c.2 1.6 1.4 2.9 3 3.1v2.2c-1.1 0-2.2-.3-3.1-.9v6.3a4.9 4.9 0 1 1-4.9-4.9c.2 0 .4 0 .6.1v2.3a2.6 2.6 0 1 0 1.9 2.5V3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D5B491]/10 bg-[#050505]">

      {/* ——— Main footer grid ——— */}
      <div className="relative z-10 mx-auto max-w-7xl px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <FadeUp y={30} className="md:col-span-4">
            <p className="font-serif text-2xl italic font-light text-[#EDEAE3] mb-4">
              Gin Palau
            </p>
            <p className="text-xs font-light leading-[1.9] text-gray-300 max-w-xs">
              Especialistas en Gin Tonic desde 2014. Una biblioteca líquida de
              más de 40 ginebras de autor en el corazón del Eixample, Barcelona.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { label: "Instagram", icon: <InstagramIcon />, href: "#" },
                { label: "TikTok", icon: <TiktokIcon />, href: "#" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="border border-white/25 p-3 text-white/70 hover:border-[#D5B491]/60 hover:text-[#D5B491] transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Navigation */}
          <FadeUp y={30} delay={0.1} className="md:col-span-3 md:col-start-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D5B491] mb-8">
              Explorar
            </p>
            <ul className="space-y-4">
              {[
                { label: "Historia", href: "/#historia" },
                { label: "La Colección", href: "/menu" },
                { label: "El Ritual", href: "/#ritual" },
                { label: "Visítanos", href: "/#visita" },
              ].map(({ label, href }) => (
                <li key={href}>
                  {href.startsWith("/menu") ? (
                    <Link
                      to={href}
                      className="text-sm font-light text-white/80 hover:text-[#D5B491] transition-colors duration-500"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="text-sm font-light text-white/80 hover:text-[#D5B491] transition-colors duration-500"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Contact */}
          <FadeUp y={30} delay={0.2} className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D5B491] mb-8">
              Contacto
            </p>
            <address className="not-italic space-y-4 text-sm font-light text-gray-300">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">Dirección</p>
                <a href="#" className="hover:text-[#D5B491] transition-colors">
                  Carrer de Mallorca 352
                  <br />
                  Eixample · Barcelona
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-1">Horarios</p>
                <p>Lun–Jue: 18:00–02:00</p>
                <p>Vie–Sáb: 18:00–03:00</p>
                <p>Dom: 17:00–01:00</p>
              </div>
              <div>
                <a href="mailto:hola@ginpalau.es" className="hover:text-[#D5B491] transition-colors">
                  hola@ginpalau.es
                </a>
              </div>
            </address>
          </FadeUp>
        </div>

        {/* ——— Bottom bar ——— */}
        <div className="mt-8 flex items-center justify-between border-t border-[#D5B491]/10 pt-6 pb-4 text-[9px] uppercase tracking-[0.3em] text-white/55">
          <span>© 2025 Gin Palau Barcelona</span>
          <span className="hidden md:block">
            Especialistas en Gin Tonic desde 2014
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            id="footer-back-to-top"
            className="group flex items-center gap-2 text-white/65 hover:text-[#D5B491] transition-colors duration-500"
          >
            Subir
            <ArrowUp
              size={13}
              className="transition-transform duration-500 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>

      {/* ——— Monumental wordmark (Absolute Background) ——— */}
      <div className="absolute bottom-0 left-0 w-full z-0 flex justify-center opacity-5 pointer-events-none select-none">
        <p className="text-outline text-center font-serif text-[13.5vw] leading-[0.82] tracking-[0.04em]">
          GIN PALAU
        </p>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>
    </footer>
  );
}
