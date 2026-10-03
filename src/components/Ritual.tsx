import { FadeUp, ImageReveal, MaskedLine, SectionLabel } from "./Reveal";

const STEPS = [
  {
    n: "( 01 )",
    title: "La copa",
    text: "Balón de 70 cl, siempre congelada. El cristal fino respeta la carbonatación y concentra el aroma en la primera narizada.",
  },
  {
    n: "( 02 )",
    title: "El hielo",
    text: "Esfera compacta y hielo fino recién hecho: enfriar sin diluir. El agua es parte de la receta — nunca su enemiga.",
  },
  {
    n: "( 03 )",
    title: "El verter",
    text: "Primero la ginebra; después, la tónica resbalando por el borde de una cuchara. Los cítricos se cortan al momento. Nada se agita: todo se susurra.",
  },
];

const RITUAL_IMG =
  "https://images.pexels.com/photos/29707919/pexels-photo-29707919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1000&w=800";

export default function Ritual() {
  return (
    <section id="ritual" className="relative bg-[#050505] px-6 py-28 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1700px] gap-16 md:grid-cols-2 md:gap-24">
        {/* ——— Sticky title + image ——— */}
        <div className="md:sticky md:top-28 md:self-start">
          <SectionLabel index="03" title="El ritual" className="mb-10" />
          <h2 className="font-serif text-4xl leading-[1.05] text-[#EDEAE3] md:text-[3.2vw]">
            <MaskedLine innerClassName="font-light">La técnica detrás</MaskedLine>
            <MaskedLine delay={0.12} innerClassName="italic">
              de la copa
            </MaskedLine>
            <MaskedLine delay={0.24} innerClassName="font-light">
              perfecta.
            </MaskedLine>
          </h2>
          <FadeUp delay={0.3} className="mt-8 max-w-md text-sm font-light leading-[1.9] text-white/55">
            Tres gestos, doce años de ensayo. Detrás de cada gin tonic hay una
            coreografía silenciosa que se repite cientos de veces cada noche.
          </FadeUp>

          <FadeUp delay={0.2} className="mt-12 hidden md:block">
            <ImageReveal
              src={RITUAL_IMG}
              alt="Cóctel clásico al detalle"
              className="aspect-[4/5] w-full"
            />
          </FadeUp>
        </div>

        {/* ——— Steps ——— */}
        <div className="md:pt-32">
          {STEPS.map((step, i) => (
            <FadeUp
              key={step.n}
              delay={0.1 * i}
              className="border-t border-white/10 py-12 first:border-t-0 md:first:border-t"
            >
              <span className="font-serif text-sm italic text-white/40">
                {step.n}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-light italic text-[#EDEAE3] md:text-4xl">
                {step.title}
              </h3>
              <p className="mt-5 max-w-md text-sm font-light leading-[1.9] text-white/55">
                {step.text}
              </p>
            </FadeUp>
          ))}

          <FadeUp delay={0.2} className="border-t border-white/10 pt-12 md:hidden">
            <ImageReveal
              src={RITUAL_IMG}
              alt="Cóctel clásico al detalle"
              className="aspect-[4/5] w-full"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
