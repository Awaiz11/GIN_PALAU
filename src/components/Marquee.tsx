const WORDS = [
  "Gin Tonic",
  "Desde 2014",
  "Botánicos",
  "Barcelona",
  "Eixample",
  "Hielo Esférico",
  "Cítricos de Mercado",
  "Colección Selecta",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-serif text-2xl md:px-12 md:text-4xl ${
              i % 2 === 0
                ? "font-light text-[#EDEAE3]"
                : "font-light italic text-[#D5B491]/50"
            }`}
          >
            {w}
          </span>
          <span className="h-1.5 w-1.5 rotate-45 bg-[#D5B491]/30" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-x-hidden border-y border-[#D5B491]/10 bg-[#070707] py-4">
      <div className="animate-marquee flex w-max">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
