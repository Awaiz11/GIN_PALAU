import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { EASE, FadeUp, MaskedLine, SectionLabel } from "./Reveal";

type Gin = {
  n: string;
  name: string;
  origin: string;
  abv: string;
  style: string;
  notes: string;
  img: string;
};

const GINS: Gin[] = [
  {
    n: "01",
    name: "Bombay Sapphire",
    origin: "Inglaterra",
    abv: "40% Vol",
    style: "London Dry · infusión en vapor",
    notes: "Diez botánicos en infusión de vapor — enebro, limón y grano de paraíso.",
    img: "https://images.pexels.com/photos/29250244/pexels-photo-29250244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "02",
    name: "Enak",
    origin: "Sudeste Asiático",
    abv: "41% Vol",
    style: "Asian Craft · destilación doble",
    notes: "Cúrcuma, jengibre y cítricos asiáticos sobre una base sedosa y especiada.",
    img: "https://images.pexels.com/photos/35667420/pexels-photo-35667420.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "03",
    name: "Anae",
    origin: "España",
    abv: "43% Vol",
    style: "Mediterránea · maceración en frío",
    notes: "Tomillo, cítricos frescos y un final balsámico que evoca la costa.",
    img: "https://images.pexels.com/photos/15866882/pexels-photo-15866882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "04",
    name: "Savis",
    origin: "Indonesia",
    abv: "40% Vol",
    style: "Contemporary · seda cítrica",
    notes: "Lima kaffir y azahar sobre textura de seda — pura elegancia tropical.",
    img: "https://images.pexels.com/photos/35667422/pexels-photo-35667422.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "05",
    name: "Edición Dorada",
    origin: "Selección de la casa",
    abv: "44% Vol",
    style: "Reserva · trilogía privada",
    notes: "Tres destilados de reserva elegidos y afinados por nuestro equipo de barra.",
    img: "https://images.pexels.com/photos/35667387/pexels-photo-35667387.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "06",
    name: "El Servicio Nº 7",
    origin: "Servicio de autor",
    abv: "Copa",
    style: "The Palau Serve · firma de la casa",
    notes: "Enebro, lima y romero ahumado sobre hielo esférico — nuestro clásico.",
    img: "https://images.pexels.com/photos/14151942/pexels-photo-14151942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "07",
    name: "Serie Cítrica",
    origin: "Rotación de temporada",
    abv: "42% Vol",
    style: "Summer Edition · edición limitada",
    notes: "Naranja sanguina, lima y pomelo rosa — el verano embotellado.",
    img: "https://images.pexels.com/photos/35667424/pexels-photo-35667424.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

function GinCard({ gin }: { gin: Gin }) {
  return (
    <article className="group relative w-[76vw] shrink-0 sm:w-[52vw] md:w-[30vw] lg:w-[23vw] xl:w-[21vw]">
      <div className="relative border border-white/10 bg-white/[0.02] transition-colors duration-700 group-hover:border-white/25">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={gin.img}
            alt={gin.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
          />
        </div>

        {/* dim veil */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/30" />

        {/* museum plaque */}
        <span className="absolute left-5 top-5 font-serif text-sm italic text-white/85">
          N°{gin.n}
        </span>
        <span className="absolute right-5 top-5 text-[9px] uppercase tracking-[0.24em] text-white/75">
          {gin.abv}
        </span>

        {/* frosted glass notes panel */}
        <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
          <div className="glass p-5">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/55">
              Botánicos
            </p>
            <p className="mt-2 text-xs font-light leading-relaxed text-white/85">
              {gin.notes}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-xl font-light text-[#EDEAE3] md:text-2xl">
          {gin.name}
        </h3>
        <span className="shrink-0 text-[9px] uppercase tracking-[0.26em] text-white/45">
          {gin.origin}
        </span>
      </div>
      <p className="mt-1.5 text-[11px] font-light text-white/40">{gin.style}</p>
    </article>
  );
}

function IntroPanel() {
  return (
    <div className="flex w-[80vw] shrink-0 flex-col justify-center pr-6 sm:w-[56vw] md:w-[38vw] lg:w-[32vw]">
      <SectionLabel index="02" title="La colección" className="mb-10" />
      <h2 className="font-serif text-[11vw] leading-[1.02] text-[#EDEAE3] sm:text-[7vw] md:text-[4.2vw] lg:text-[3.6vw]">
        <MaskedLine innerClassName="font-light">Una biblioteca</MaskedLine>
        <MaskedLine delay={0.12} innerClassName="italic">
          líquida.
        </MaskedLine>
      </h2>
      <FadeUp delay={0.3} className="mt-8 max-w-sm text-sm font-light leading-[1.9] text-white/55">
        Más de cuarenta referencias de ginebra — de Londres a Kioto — cada una
        con su tónica, su copa y su cítrico asignados. Un museo que se sirve
        por copas.
      </FadeUp>
      <FadeUp delay={0.45} className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
        Sigue deslizando
        <motion.span
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MoveRight size={16} strokeWidth={1.5} />
        </motion.span>
      </FadeUp>
    </div>
  );
}

function EndPanel() {
  return (
    <a
      href="#visita"
      className="glass group flex w-[70vw] shrink-0 flex-col justify-between p-8 transition-colors duration-700 hover:border-white/30 sm:w-[44vw] md:w-[24vw] lg:w-[20vw]"
    >
      <span className="font-serif text-sm italic text-white/60">N°08</span>
      <div>
        <p className="font-serif text-2xl font-light italic leading-snug text-[#EDEAE3] md:text-[1.8vw]">
          ¿Cuál será tu próxima copa?
        </p>
        <span className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 transition-colors duration-500 group-hover:text-white">
          Reservar mesa
          <ArrowRight
            size={15}
            className="transition-transform duration-500 group-hover:translate-x-1.5"
          />
        </span>
      </div>
    </a>
  );
}

export default function Collection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0.5%", "-57%"]);
  const smoothX = useSpring(x, { stiffness: 120, damping: 30, mass: 0.5 });

  return (
    <>
      {/* ————— Desktop: immersive horizontal scroll ————— */}
      <section id="coleccion" className="relative hidden bg-[#070707] md:block">
        <div ref={targetRef} className="relative h-[430vh]">
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden border-y border-white/[0.06]">
            <motion.div
              style={{ x: smoothX }}
              className="flex items-center gap-8 pl-12 pr-[14vw] lg:pl-16"
            >
              <IntroPanel />
              {GINS.map((gin) => (
                <GinCard key={gin.n} gin={gin} />
              ))}
              <EndPanel />
            </motion.div>

            {/* progress hairline */}
            <div className="absolute inset-x-12 bottom-10 h-px bg-white/10 lg:inset-x-16">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full origin-left bg-[#EDEAE3]/70"
              />
            </div>
            <div className="absolute bottom-6 right-12 text-[9px] uppercase tracking-[0.35em] text-white/35 lg:right-16">
              Scroll → Colección
            </div>
          </div>
        </div>
      </section>

      {/* ————— Mobile: vertical museum stack ————— */}
      <section className="bg-[#070707] px-6 py-24 md:hidden">
        <div className="mb-14">
          <SectionLabel index="02" title="La colección" className="mb-10" />
          <h2 className="font-serif text-[12vw] leading-[1.02] text-[#EDEAE3]">
            <MaskedLine innerClassName="font-light">Una biblioteca</MaskedLine>
            <MaskedLine delay={0.12} innerClassName="italic">
              líquida.
            </MaskedLine>
          </h2>
          <FadeUp delay={0.3} className="mt-6 text-sm font-light leading-[1.9] text-white/55">
            Más de cuarenta referencias — cada una con su tónica, su copa y su
            cítrico asignados. Un museo que se sirve por copas.
          </FadeUp>
        </div>

        <div className="flex flex-col gap-14">
          {GINS.map((gin, i) => (
            <motion.div
              key={gin.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.05 * i }}
            >
              <GinCard gin={gin} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <EndPanel />
          </motion.div>
        </div>
      </section>
    </>
  );
}
