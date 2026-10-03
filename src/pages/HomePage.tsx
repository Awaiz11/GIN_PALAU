import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EASE, FadeUp, MaskedLine, SectionLabel, ImageReveal } from "../components/Reveal";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

// ─── Hero ────────────────────────────────────────────────────────────────────
function HeroSection({ started }: { started: boolean }) {
  return (
    <section
      id="inicio"
      aria-label="Gin Palau"
      className="relative isolate flex h-[100svh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background image with parallax-like effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.15 }}
        animate={started ? { scale: 1 } : {}}
        transition={{ duration: 3.2, ease: EASE }}
      >
        <motion.img
          src="/hero-bg.jpg"
          alt="Gin tonic de autor en el bar de Gin Palau"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.02, 1.08] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Multi-layer overlays for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/45" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050505]/85 via-black/15 to-black/30" />

      {/* Centered content */}
      <div className="relative flex flex-col items-center px-6 text-center z-10">
        {/* Brand name — Le Rocher style large centered logo area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}
          className="mb-4"
        >
          <p className="text-[10px] uppercase tracking-[0.55em] text-[#D5B491] mb-8">
            Barcelona · Eixample · Desde 2014
          </p>
        </motion.div>

        <h1 className="font-serif leading-none text-[#EDEAE3] mb-6">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8.5vw] font-light"
              initial={{ y: "120%" }}
              animate={started ? { y: "0%" } : {}}
              transition={{ duration: 1.6, ease: EASE, delay: 0.8 }}
            >
              GIN PALAU
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.3, ease: EASE, delay: 1.4 }}
          className="mb-12 max-w-lg text-sm sm:text-base font-light leading-relaxed text-white/90"
        >
          Especialistas en Gin Tonic desde 2014. Una biblioteca líquida de más
          de 40 ginebras de autor en el corazón del Eixample.
        </motion.p>

        {/* CTA buttons — Le Rocher style: outlined gold buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: 1.7 }}
          className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <Link
            to="/menu"
            id="cta-ver-carta"
            className="group flex w-full sm:w-auto items-center justify-center border-2 border-[#D5B491] bg-[#D5B491]/15 backdrop-blur-sm px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase text-white shadow-lg shadow-black/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#D5B491] hover:text-[#050505] hover:shadow-xl"
          >
            VER CARTA
          </Link>
          <a
            href="#visita"
            id="cta-reservar"
            className="group flex w-full sm:w-auto items-center justify-center border-2 border-[#D5B491] bg-[#D5B491]/15 backdrop-blur-sm px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase text-white shadow-lg shadow-black/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#D5B491] hover:text-[#050505] hover:shadow-xl"
          >
            RESERVAR MESA
          </a>
        </motion.div>

        {/* Quick value badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-2"
        >
          {["+40 Ginebras Seleccionadas", "100% Artesanal", "Eixample · BCN"].map((badge) => (
            <span
              key={badge}
              className="text-[9px] uppercase tracking-[0.4em] text-white/70"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={18} strokeWidth={1} className="text-[#D5B491]/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Upcoming Events / Highlights ────────────────────────────────────────────
const EVENTS = [
  {
    id: "e1",
    month: "OCT",
    day: "10",
    weekday: "Viernes",
    title: "Noche de Cata — Ginebras Españolas",
    type: "Masterclass · Cata Maridada",
    price: "€35 p.p.",
  },
  {
    id: "e2",
    month: "OCT",
    day: "18",
    weekday: "Sábado",
    title: "The Palau Gin Experience",
    type: "Experiencia Privada · Grupos de 6–12",
    price: "€50 p.p.",
  },
  {
    id: "e3",
    month: "NOV",
    day: "01",
    weekday: "Sábado",
    title: "Speakeasy Night — Edición Halloween",
    type: "Fiesta de Barra · Acceso Limitado",
    price: "€20 p.p.",
  },
];

function EventRow({
  ev,
  i,
}: {
  ev: (typeof EVENTS)[0];
  i: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.1 * i }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between bg-white/5 border border-white/10 rounded-xl py-8 px-6 md:px-10 hover:bg-white/[0.08] hover:border-[#c69c6d]/30 transition-all duration-500 overflow-hidden"
    >
      {/* Left accent bar on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#c69c6d] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out rounded-l-xl" />

      <div className="flex flex-col md:flex-row md:items-center flex-1 gap-4 md:gap-10 mb-6 md:mb-0">
        {/* Date column */}
        <div className="flex flex-row md:flex-col items-baseline md:items-center gap-3 md:gap-0 w-auto md:w-24 shrink-0">
          <span className="text-xs tracking-[0.2em] text-[#D5B491] uppercase">
            {ev.month}
          </span>
          <span className="text-4xl md:text-5xl font-light text-[#EDEAE3] md:text-[#D5B491] my-0 md:my-1">
            {ev.day}
          </span>
          <span className="text-xs text-white/75 tracking-wider">
            {ev.weekday}
          </span>
        </div>

        {/* Event info */}
        <div className="flex-1 transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
          <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-[#EDEAE3] group-hover:text-[#c69c6d] transition-colors duration-300">
            {ev.title}
          </h3>
          <p className="mt-2 text-[10px] tracking-[0.2em] uppercase text-[#D5B491]">
            {ev.type}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
        <span className="hidden md:flex items-center justify-center px-4 py-2 text-xs tracking-widest text-gray-300 border border-white/15 rounded uppercase">
          {ev.price}
        </span>
        <a
          href="#visita"
          id={`reserve-${ev.id}`}
          className="flex w-full sm:w-36 justify-center items-center gap-2 px-6 py-3 border border-[#c69c6d] text-[#c69c6d] hover:bg-[#c69c6d]/10 transition-all duration-300 text-xs tracking-[0.2em] font-semibold uppercase rounded"
        >
          Reservar
        </a>
      </div>
    </motion.article>
  );
}

function EventsSection() {
  return (
    <section id="eventos" className="w-full bg-black py-16 flex flex-col items-center justify-start">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 w-full max-w-5xl px-6">
        <div className="w-8 h-[1px] bg-white/20"></div>
        <span className="text-white/60 text-sm tracking-[0.2em] uppercase">01 — Próximos Eventos</span>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-5xl px-6 flex flex-col gap-4">
        {EVENTS.map((ev, i) => (
          <EventRow key={ev.id} ev={ev} i={i} />
        ))}
      </div>
    </section>
  );
}

// ─── About / Narrative ────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="historia"
      className="bg-[#050505] py-24 px-6 md:px-16 lg:px-24 border-t border-[#D5B491]/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* Image */}
        <div>
          <ImageReveal
            src="https://images.pexels.com/photos/28617311/pexels-photo-28617311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=600"
            alt="Elaboración artesanal de gin tonic en Gin Palau"
            className="relative w-full h-[420px] md:h-[520px] border border-[#D5B491]/20"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center space-y-8">
          <SectionLabel index="02" title="Nuestra historia" />

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#EDEAE3] leading-[1.05]">
            <MaskedLine innerClassName="font-light">Nacimos del</MaskedLine>
            <MaskedLine delay={0.1} innerClassName="italic">amor al detalle.</MaskedLine>
          </h2>

          <FadeUp delay={0.2} className="space-y-5">
            <p className="text-sm md:text-base font-light leading-relaxed text-white/85">
              Desde 2014, Gin Palau es el destino de referencia para los amantes
              del gin tonic en Barcelona. Más de diez años de pasión, precisión y
              un equipo de barra que trata cada copa como una obra de autor.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed text-white/85">
              Un ambiente moderno, elegante y cercano pensado para disfrutar sin
              prisas y hacer de cada visita un momento especial. Tu biblioteca
              líquida en el Eixample.
            </p>
          </FadeUp>

          {/* Stats row */}
          <FadeUp delay={0.3} className="grid grid-cols-3 gap-6 pt-4 border-t border-[#D5B491]/15">
            {[
              { value: "10+", label: "Años de historia" },
              { value: "40+", label: "Ginebras de autor" },
              { value: "4.9★", label: "Valoración media" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-serif text-3xl md:text-4xl font-light text-[#D5B491]">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </FadeUp>

          <FadeUp delay={0.4}>
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 border border-[#D5B491] text-[#D5B491] px-7 py-3.5 text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#D5B491] hover:text-[#050505] w-fit"
            >
              Explorar la Carta
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Ritual Section ────────────────────────────────────────────────────────────
function RitualSection() {
  const steps = [
    {
      n: "01",
      title: "La Copa",
      desc: "Copa globo de cristal fino, enfriada con hielo sólido antes del servicio.",
    },
    {
      n: "02",
      title: "El Hielo",
      desc: "Bloque esférico de hielo ultra-puro, tallado a mano. Dilución mínima.",
    },
    {
      n: "03",
      title: "La Ginebra",
      desc: "Seleccionada de nuestra biblioteca según el perfil del cliente — nunca al azar.",
    },
    {
      n: "04",
      title: "La Tónica",
      desc: "Tónica premium elegida por su mineralidad y burbuja fina. Vertida en espiral.",
    },
    {
      n: "05",
      title: "El Botánico",
      desc: "El toque final: cítrico de mercado, hierba fresca o especial de temporada.",
    },
  ];

  return (
    <section id="ritual" className="w-full bg-black py-16 flex flex-col items-center justify-start border-t border-[#D5B491]/10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4 w-full max-w-6xl px-6">
        <div className="w-8 h-[1px] bg-white/20"></div>
        <span className="text-white/60 text-sm tracking-[0.2em] uppercase">03 — El Ritual</span>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl px-6 mb-10">
        <p className="text-white/70 max-w-xl text-sm leading-relaxed">
          Cada gin tonic en Palau sigue un protocolo de cinco pasos que hemos perfeccionado durante una década. El resultado: una copa reproducible y perfecta, cada vez.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 * i }}
            className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/[0.08] hover:border-[#c69c6d]/30 transition-all duration-500 cursor-default"
          >
            <span className="font-serif text-sm italic text-[#D5B491]/90">
              N°{step.n}
            </span>
            <h3 className="mt-4 font-serif text-xl text-[#EDEAE3] group-hover:text-[#D5B491] transition-colors duration-300">
              {step.title}
            </h3>
            <div className="mt-3 w-8 h-px bg-[#D5B491]/40 group-hover:w-12 transition-all duration-500" />
            <p className="mt-4 text-[11px] font-light leading-[1.9] text-white/80">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── Visit / Reservation Section ─────────────────────────────────────────────
function VisitSection() {
  return (
    <section
      id="visita"
      className="bg-[#050505] py-24 px-6 md:px-16 lg:px-24 border-t border-[#D5B491]/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div>
          <SectionLabel index="04" title="Visítanos" className="mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#EDEAE3] leading-[1.05] mb-10">
            <MaskedLine innerClassName="font-light">Te esperamos</MaskedLine>
            <MaskedLine delay={0.1} innerClassName="italic">en el Eixample.</MaskedLine>
          </h2>

          <FadeUp delay={0.2} className="space-y-8">
            <div className="border-l-2 border-[#D5B491]/40 pl-6 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D5B491]">
                Dirección
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-light text-white/90 hover:text-[#D5B491] transition-colors"
              >
                Carrer de Mallorca 352, Eixample, Barcelona
              </a>
            </div>

            <div className="border-l-2 border-[#D5B491]/40 pl-6 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D5B491]">
                Horarios
              </p>
              <div className="space-y-1">
                {[
                  { day: "De Lunes a Jueves", hours: "18:00 – 02:00" },
                  { day: "Viernes y Sábado", hours: "18:00 – 03:00" },
                  { day: "Domingo", hours: "17:00 – 01:00" },
                ].map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-sm font-light text-white/85 border-b border-white/10 pb-2"
                  >
                    <span>{h.day}</span>
                    <span className="text-[#D5B491]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-l-2 border-[#D5B491]/40 pl-6 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#D5B491]">
                Contacto
              </p>
              <a
                href="tel:+34931234567"
                className="block text-sm font-light text-white/85 hover:text-[#D5B491] transition-colors"
              >
                +34 931 234 567
              </a>
              <a
                href="mailto:hola@ginpalau.es"
                className="block text-sm font-light text-white/85 hover:text-[#D5B491] transition-colors"
              >
                hola@ginpalau.es
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Reservation form */}
        <FadeUp delay={0.3}>
          <div className="border border-[#D5B491]/20 p-8 md:p-10 bg-white/[0.02]">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D5B491] mb-6">
              Solicitar reserva
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light text-[#EDEAE3] mb-8">
              Reserva tu mesa
            </h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="reservation-name"
                    placeholder="Tu nombre"
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white/80 placeholder-white/25 outline-none focus:border-[#D5B491]/60 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                    Personas
                  </label>
                  <select
                    id="reservation-guests"
                    className="w-full bg-[#050505] border border-white/15 px-4 py-3 text-sm text-white/80 outline-none focus:border-[#D5B491]/60 transition-colors duration-300"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "persona" : "personas"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="reservation-date"
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white/80 outline-none focus:border-[#D5B491]/60 transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                    Hora
                  </label>
                  <input
                    type="time"
                    id="reservation-time"
                    className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white/80 outline-none focus:border-[#D5B491]/60 transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="reservation-phone"
                  placeholder="+34 6xx xxx xxx"
                  className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white/80 placeholder-white/25 outline-none focus:border-[#D5B491]/60 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-white/75 mb-2">
                  Nota especial
                </label>
                <textarea
                  id="reservation-notes"
                  rows={3}
                  placeholder="Alergias, ocasión especial..."
                  className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm text-white/80 placeholder-white/25 outline-none focus:border-[#D5B491]/60 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                id="reservation-submit"
                className="w-full bg-[#D5B491] text-[#050505] py-4 text-[10px] font-bold tracking-[0.35em] uppercase transition-all duration-300 hover:bg-[#EDEAE3] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D5B491]/20"
              >
                Confirmar Reserva
              </button>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Main Home Page ────────────────────────────────────────────────────────────
export default function HomePage({ started }: { started: boolean }) {
  return (
    <>
      <HeroSection started={started} />
      <Marquee />
      <EventsSection />
      <AboutSection />
      <RitualSection />
      <VisitSection />
      <Footer />
    </>
  );
}
