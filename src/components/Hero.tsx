import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { EASE } from "./Reveal";

const HERO_IMG =
  "https://images.pexels.com/photos/28617311/pexels-photo-28617311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1400&w=1000";

export default function Hero({ started }: { started: boolean }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
  };
  const line = {
    hidden: { y: "120%" },
    visible: { y: "0%", transition: { duration: 1.5, ease: EASE } },
  };
  const fade = {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: EASE },
    },
  };

  return (
    <section id="inicio" className="relative bg-[#050505]">
      <div className="grid min-h-screen md:grid-cols-2">
        {/* ————— Left — typography ————— */}
        <div className="relative flex flex-col justify-between px-6 pb-10 pt-32 md:px-12 md:pt-40 lg:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate={started ? "visible" : "hidden"}
          >
            <motion.div variants={fade} className="mb-10 flex items-center gap-5">
              <span className="h-px w-14 bg-white/40" />
              <span className="text-[10px] uppercase tracking-[0.42em] text-white/55 md:text-[11px]">
                Barcelona · Casa de ginebras
              </span>
            </motion.div>

            <h1 className="font-serif leading-[0.98] text-[#EDEAE3]">
              <span className="block overflow-hidden">
                <motion.span
                  variants={line}
                  className="block text-[15.5vw] font-light md:text-[7.4vw] lg:text-[6.6vw]"
                >
                  El arte del
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  variants={line}
                  className="block text-[15.5vw] italic md:text-[7.4vw] lg:text-[6.6vw]"
                >
                  Gin Tonic<span className="not-italic text-white/35">.</span>
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fade}
              className="mt-9 max-w-md text-sm font-light leading-relaxed text-white/55 md:text-[15px]"
            >
              Especialistas en Gin Tonic desde 2014. Más de cuarenta ginebras,
              hielo esférico y cítricos de mercado — servidos no como una
              bebida, sino como un ritual.
            </motion.p>

            <motion.div
              variants={fade}
              className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-5"
            >
              <a
                href="#coleccion"
                className="group inline-flex items-center gap-3 bg-[#EDEAE3] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-black transition-colors duration-500 hover:bg-white"
              >
                Descubrir la colección
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#historia"
                className="border-b border-white/25 pb-1 text-[10px] uppercase tracking-[0.26em] text-white/60 transition-colors duration-500 hover:border-white hover:text-white"
              >
                Nuestra historia
              </a>
            </motion.div>
          </motion.div>

          {/* bottom meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : {}}
            transition={{ delay: 2, duration: 1.4, ease: EASE }}
            className="mt-20 flex items-end justify-between text-[9px] uppercase tracking-[0.32em] text-white/40 md:text-[10px]"
          >
            <span>
              Carrer de Mallorca 352
              <br />
              Eixample · Barcelona
            </span>
            <span className="flex items-center gap-3">
              Desliza
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={13} strokeWidth={1.5} />
              </motion.span>
            </span>
          </motion.div>
        </div>

        {/* ————— Right — the image ————— */}
        <div className="relative h-[68vh] overflow-hidden md:h-auto md:min-h-screen">
          {/* intro settle */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.3 }}
            animate={started ? { scale: 1 } : {}}
            transition={{ duration: 2.8, ease: EASE }}
          >
            {/* perpetual slow Ken Burns zoom */}
            <motion.img
              src={HERO_IMG}
              alt="Gin Tonic de autor con humo y romero"
              className="h-full w-full object-cover"
              initial={{ scale: 1.12 }}
              animate={{ scale: [1.12, 1.02, 1.12] }}
              transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* blend gradients */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#050505] via-transparent to-transparent md:block" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505]/80 to-transparent" />

          {/* floating glass specimen card */}
          <motion.div
            initial={{ opacity: 0, y: 46 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 1.4, ease: EASE }}
            className="glass absolute bottom-8 left-6 max-w-[270px] px-6 py-5 md:bottom-12 md:left-10"
          >
            <p className="text-[9px] uppercase tracking-[0.34em] text-white/50">
              Nº 001 — La casa
            </p>
            <p className="mt-2.5 font-serif text-xl italic text-[#EDEAE3]">
              The Palau Serve
            </p>
            <p className="mt-1.5 text-[11px] font-light leading-relaxed text-white/50">
              Ginebra de enebro · tónica premium · limón de mercado y humo de
              romero
            </p>
          </motion.div>

          {/* vertical caption */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : {}}
            transition={{ delay: 2.4, duration: 1.2 }}
            className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] uppercase tracking-[0.5em] text-white/45 md:block"
          >
            Servicio de autor — 2014
          </motion.span>
        </div>
      </div>
    </section>
  );
}
