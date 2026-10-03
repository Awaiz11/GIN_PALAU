import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Signature easing — long, silky, Apple-like */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Text revealing from behind an invisible block (mask) */
export function MaskedLine({
  children,
  delay = 0,
  duration = 1.3,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className={`block will-change-transform ${innerClassName}`}
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Slow fade-up on scroll */
export function FadeUp({
  children,
  delay = 0,
  y = 48,
  duration = 1.3,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-driven parallax wrapper */
export function Parallax({
  children,
  speed = 60,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Editorial section label — hairline + small caps */
export function SectionLabel({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <FadeUp y={24} className={`flex items-center gap-5 ${className}`}>
      <span className="h-px w-14 bg-[#D5B491]/50" />
      <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/80 md:text-[11px]">
        {index} — {title}
      </span>
    </FadeUp>
  );
}

/** Image that unclips and settles from a slow zoom */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 2, ease: EASE }}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
