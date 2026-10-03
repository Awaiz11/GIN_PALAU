import { ArrowUpRight, MapPin, Clock, Phone } from "lucide-react";
import { FadeUp, ImageReveal, MaskedLine, SectionLabel } from "./Reveal";

const VISIT_IMG =
  "https://images.pexels.com/photos/20723853/pexels-photo-20723853.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800";

const INFO = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Carrer de Mallorca 352", "08013 · Eixample, Barcelona"],
  },
  {
    icon: Clock,
    title: "Horario",
    lines: ["Mar — Dom · 18:00 — 02:30", "Lunes · Cerrado"],
  },
  {
    icon: Phone,
    title: "Contacto",
    lines: ["+34 934 60 23 07", "reservas@ginpalau.es"],
  },
];

export default function Visit() {
  return (
    <section id="visita" className="relative overflow-hidden bg-[#070707] px-6 py-28 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1700px] items-center gap-16 md:grid-cols-2 md:gap-24">
        {/* ——— Image with floating reservation card ——— */}
        <div className="relative">
          <ImageReveal
            src={VISIT_IMG}
            alt="Ambiente cálido de Gin Palau"
            className="aspect-[4/5] w-full"
          />
          <FadeUp
            delay={0.4}
            className="glass absolute -bottom-8 left-5 right-5 p-6 md:-right-14 md:left-auto md:w-[320px]"
          >
            <p className="text-[9px] uppercase tracking-[0.34em] text-white/50">
              Reservas
            </p>
            <p className="mt-3 font-serif text-2xl font-light italic text-[#EDEAE3]">
              Mesa para esta noche
            </p>
            <p className="mt-2 text-[11px] font-light leading-relaxed text-white/55">
              Grupo reducido o mesa en barra — respondemos en menos de una hora.
            </p>
          </FadeUp>
        </div>

        {/* ——— Details ——— */}
        <div>
          <SectionLabel index="04" title="Visítanos" className="mb-10" />
          <h2 className="font-serif text-4xl leading-[1.05] text-[#EDEAE3] md:text-[3.4vw]">
            <MaskedLine innerClassName="font-light">Te esperamos</MaskedLine>
            <MaskedLine delay={0.12} innerClassName="italic">
              en el Eixample.
            </MaskedLine>
          </h2>

          <FadeUp delay={0.25} className="mt-8 max-w-md text-sm font-light leading-[1.9] text-white/55">
            A cinco minutos de la Sagrada Família, detrás de una fachada
            discreta, espera una de las mejores cartas de ginebra de Europa.
            Ven con tiempo — las copas se beben despacio.
          </FadeUp>

          <div className="mt-12 space-y-8">
            {INFO.map((item, i) => (
              <FadeUp
                key={item.title}
                delay={0.12 * i}
                className="flex items-start gap-5 border-t border-white/10 pt-8"
              >
                <span className="mt-1 border border-white/15 p-2.5 text-white/60">
                  <item.icon size={15} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
                    {item.title}
                  </p>
                  {item.lines.map((line) => (
                    <p
                      key={line}
                      className="mt-1.5 text-sm font-light text-[#EDEAE3]/85"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-12 flex flex-wrap gap-5">
            <a
              href="#inicio"
              className="group inline-flex items-center gap-3 bg-[#EDEAE3] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-black transition-colors duration-500 hover:bg-white"
            >
              Reservar mesa
              <ArrowUpRight
                size={15}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#coleccion"
              className="border-b border-white/25 pb-1 text-[10px] uppercase tracking-[0.26em] text-white/60 transition-colors duration-500 hover:border-white hover:text-white"
            >
              Ver la colección
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
