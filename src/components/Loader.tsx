import { motion } from "framer-motion";
import { EASE } from "./Reveal";

const WORD = "GIN PALAU";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
      exit={{ y: "-100%" }}
      transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Frosted-glass veil that swallows the wordmark */}
      <motion.div
        className="absolute inset-0 bg-white/[0.05] backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7, ease: "easeInOut" }}
      />

      {/* Corner marks */}
      <motion.span
        className="absolute left-6 top-8 text-[10px] uppercase tracking-[0.4em] text-white/35 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Est. — MMXIV
      </motion.span>
      <motion.span
        className="absolute bottom-8 right-6 text-[10px] uppercase tracking-[0.4em] text-white/35 md:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        Barcelona
      </motion.span>

      {/* Wordmark — slow masked reveal */}
      <motion.div
        className="relative px-6 text-center"
        initial={{ filter: "blur(0px)", opacity: 1 }}
        animate={{ filter: "blur(20px)", opacity: 0, scale: 1.05 }}
        transition={{ delay: 1.7, duration: 0.75, ease: "easeInOut" }}
      >
        <div className="flex justify-center overflow-hidden font-serif leading-[1.02]">
          {WORD.split("").map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span
                className="inline-block text-[13vw] tracking-[0.05em] text-[#EDEAE3] md:text-[8.5vw]"
                initial={{ y: "118%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.2,
                  ease: EASE,
                  delay: 0.18 + i * 0.052,
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.p
          className="mt-7 text-[9px] uppercase tracking-[0.55em] text-white/50 md:text-[11px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.05 }}
        >
          Especialistas en Gin Tonic
        </motion.p>
      </motion.div>

      {/* Loading hairline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/25"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.1, ease: "easeInOut", delay: 0.25 }}
      />
    </motion.div>
  );
}
