import { motion } from "framer-motion";
import { FadeUp, ImageReveal, MaskedLine, Parallax, SectionLabel } from "./Reveal";

const BAR_IMG =
  "https://images.pexels.com/photos/9130342/pexels-photo-9130342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=850";
const SHELF_IMG =
  "https://images.pexels.com/photos/15945661/pexels-photo-15945661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const STATS = [
  { value: "40+", label: "Ginebras en carta" },
  { value: "12", label: "Años de oficio" },
  { value: "01", label: "Ritual incansable" },
];

export default function Heritage() {
  return (
    <section id="historia" className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-12 md:py-48">
      {/* giant parallax year, ghosted behind the spread */}
      <Parallax
        speed={-130}
        className="pointer-events-none absolute -right-8 top-16 select-none md:top-8"
      >
        <span className="text-outline font-serif text-[42vw] leading-none md:text-[26vw]">
          2014
        </span>
      </Parallax>

      <div className="relative mx-auto max-w-[1700px]">
        <SectionLabel index="01" title="Nuestra historia" className="mb-16 md:mb-28" />

        <div className="grid gap-20 md:grid-cols-12 md:gap-10">
          {/* ——— Tall image with floating glass caption ——— */}
          <div className="relative md:col-span-7">
            <Parallax speed={55}>
              <ImageReveal
                src={BAR_IMG}
                alt="Interior de la barra de Gin Palau"
                className="aspect-[4/5] w-full"
              />
            </Parallax>

            <FadeUp
              delay={0.35}
              className="glass absolute -bottom-12 right-0 z-10 max-w-[290px] p-7 md:-right-10 md:-bottom-16"
            >
              <p className="font-serif text-xl italic leading-snug text-[#EDEAE3]">
                “Un bar del Eixample convertido en templo del gin tonic.”
              </p>
              <p className="mt-4 text-[11px] font-light leading-relaxed text-white/50">
                Lo que empezó como una carta corta y una idea obsesiva — la
                copa perfecta — es hoy una de las bibliotecas de ginebra más
                respetadas de Barcelona.
              </p>
            </FadeUp>
          </div>

          {/* ——— Text column, generously offset ——— */}
          <div className="md:col-span-4 md:col-start-9 md:pt-44">
            <h2 className="font-serif text-4xl leading-[1.05] text-[#EDEAE3] md:text-[3.4vw]">
              <MaskedLine innerClassName="font-light">Nacimos del</MaskedLine>
              <MaskedLine delay={0.12} innerClassName="italic">
                amor al
              </MaskedLine>
              <MaskedLine delay={0.24} innerClassName="font-light">
                detalle.
              </MaskedLine>
            </h2>

            <FadeUp delay={0.3} className="mt-10 space-y-6 text-sm font-light leading-[1.9] text-white/55">
              <p>
                En 2014 abrimos las puertas con una convicción simple: el gin
                tonic merece el mismo respeto que un gran vino. Cada ginebra
                tiene su tónica, su copa, su cítrico. Nada queda al azar.
              </p>
              <p>
                Doce años después seguimos probando, destilando y discutiendo
                detrás de la barra. Porque la perfección no se alcanza — se
                sirve, noche tras noche.
              </p>
            </FadeUp>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {STATS.map((s, i) => (
                <FadeUp key={s.label} delay={0.15 * i} y={28}>
                  <p className="font-serif text-3xl font-light text-[#EDEAE3] md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-white/40">
                    {s.label}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>

        {/* ——— Floating editorial quote, overlapping the spread ——— */}
        <div className="relative z-10 mt-28 md:-mt-24 md:pl-[42%]">
          <Parallax speed={30}>
            <motion.blockquote
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="border-l border-white/20 pl-8 font-serif text-3xl font-light italic leading-[1.3] text-[#EDEAE3] md:text-[2.6vw]"
            >
              “No servimos ginebras.
              <br />
              Servimos momentos destilados.”
            </motion.blockquote>
          </Parallax>
          <FadeUp delay={0.3} className="mt-10 hidden md:block">
            <div className="overflow-hidden">
              <motion.img
                src={SHELF_IMG}
                alt="Estantería de la barra"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-[16/9] w-full object-cover opacity-80"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
