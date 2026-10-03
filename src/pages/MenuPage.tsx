import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowLeft, ArrowUpRight } from "lucide-react";
import { EASE, FadeUp, SectionLabel } from "../components/Reveal";
import Footer from "../components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────
type Gin = {
  n: string;
  name: string;
  origin: string;
  country: string;
  flag: string;
  abv: string;
  style: string;
  category: string[];
  botanicals: string[];
  notes: string;
  serve: string;
  price: string;
  img: string;
};

const GINS: Gin[] = [
  {
    n: "01",
    name: "Bombay Sapphire",
    origin: "Laverstoke Mill, Hampshire",
    country: "Inglaterra",
    flag: "🇬🇧",
    abv: "40% Vol",
    style: "London Dry · Infusión en vapor",
    category: ["Importadas", "Herbáceas"],
    botanicals: ["Enebro", "Limón", "Grano del Paraíso", "Coriandro", "Angélica"],
    notes: "Diez botánicos en infusión de vapor — enebro, limón y grano de paraíso. Clásico y equilibrado.",
    serve: "Tónica Fever-Tree Mediterranean · Lima · Menta fresca",
    price: "€13.50",
    img: "https://images.pexels.com/photos/29250244/pexels-photo-29250244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "02",
    name: "Hendrick's",
    origin: "Girvan, Escocia",
    country: "Escocia",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abv: "41.4% Vol",
    style: "Scottish Craft · Maceración dual",
    category: ["Importadas", "Florales"],
    botanicals: ["Pepino", "Rosa búlgara", "Enebro", "Flor de saúco", "Orris"],
    notes: "La célebre infusión de pepino y rosa que revolucionó el mundo del gin. Floral, suave y memorable.",
    serve: "Tónica Fever-Tree Elderflower · Pepino · Rosa",
    price: "€14.00",
    img: "https://images.pexels.com/photos/35667420/pexels-photo-35667420.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "03",
    name: "Monkey 47",
    origin: "Selva Negra, Alemania",
    country: "Alemania",
    flag: "🇩🇪",
    abv: "47% Vol",
    style: "Black Forest Dry · 47 botánicos",
    category: ["Importadas", "Herbáceas"],
    botanicals: ["47 botánicos únicos", "Arándano silvestre", "Picea", "Enebro"],
    notes: "La complejidad definitiva: 47 botánicos de la Selva Negra alemana. Un gin de experiencia.",
    serve: "Tónica Fever-Tree Light · Naranja sanguina · Pimienta rosa",
    price: "€18.00",
    img: "https://images.pexels.com/photos/15866882/pexels-photo-15866882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "04",
    name: "Gin Mare",
    origin: "L'Ampolla, Catalunya",
    country: "España",
    flag: "🇪🇸",
    abv: "42.7% Vol",
    style: "Mediterranean · Maceración oliva arbequina",
    category: ["Españolas", "Mediterráneas"],
    botanicals: ["Oliva Arbequina", "Romero", "Albahaca", "Tomillo", "Enebro"],
    notes: "El gin mediterráneo por excelencia. Oliva arbequina, romero y tomillo — la costa catalana en copa.",
    serve: "Tónica 1724 · Tomillo fresco · Oliva arbequina",
    price: "€15.50",
    img: "https://images.pexels.com/photos/35667422/pexels-photo-35667422.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "05",
    name: "Tanqueray No. Ten",
    origin: "Cameronbridge, Escocia",
    country: "Escocia",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abv: "47.3% Vol",
    style: "Premium London Dry · Destilación única",
    category: ["Importadas", "Cítricas"],
    botanicals: ["Pomelo fresco", "Naranja", "Lima", "Manzanilla", "Enebro"],
    notes: "Destilado con cítricos frescos —pomelo, naranja y lima— que aportan una frescura vibrante y mineral.",
    serve: "Tónica Fever-Tree Indian · Pomelo · Laurel",
    price: "€16.50",
    img: "https://images.pexels.com/photos/35667387/pexels-photo-35667387.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "06",
    name: "Puerto de Indias",
    origin: "Sevilla, Andalucía",
    country: "España",
    flag: "🇪🇸",
    abv: "37.5% Vol",
    style: "Strawberry Infused · Destilación suave",
    category: ["Españolas", "Florales"],
    botanicals: ["Fresa sevillana", "Cítricos", "Enebro", "Flor de azahar"],
    notes: "El icónico gin rosa de Sevilla. Fresa sevillana natural que aporta un dulzor elegante y floral.",
    serve: "Tónica Schweppes Tonica Agrum · Fresas · Menta",
    price: "€12.50",
    img: "https://images.pexels.com/photos/35667424/pexels-photo-35667424.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "07",
    name: "The Botanist",
    origin: "Islay, Escocia",
    country: "Escocia",
    flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    abv: "46% Vol",
    style: "Islay Dry · 31 botánicos de la isla",
    category: ["Importadas", "Herbáceas"],
    botanicals: ["31 plantas de Islay", "Manzanilla silvestre", "Melisa", "Tomillo", "Enebro"],
    notes: "31 botánicos recolectados a mano en la isla de Islay. Un viaje herbáceo de singular elegancia.",
    serve: "Tónica Fever-Tree Indian · Manzana verde · Enebro fresco",
    price: "€17.00",
    img: "https://images.pexels.com/photos/14151942/pexels-photo-14151942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "08",
    name: "Nordes",
    origin: "Galicia, España",
    country: "España",
    flag: "🇪🇸",
    abv: "40% Vol",
    style: "Atlantic Dry · Base de albariño",
    category: ["Españolas", "Florales"],
    botanicals: ["Uva albariño", "Eucalipto", "Rosa", "Té verde", "Enebro"],
    notes: "Destilado sobre uva albariño gallega con notas de rosa y eucalipto atlántico. Delicado y único.",
    serve: "Tónica Fever-Tree Light · Piel de limón · Hierba luisa",
    price: "€14.50",
    img: "https://images.pexels.com/photos/29250244/pexels-photo-29250244.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "09",
    name: "Citadelle",
    origin: "Cognac, Francia",
    country: "Francia",
    flag: "🇫🇷",
    abv: "44% Vol",
    style: "French Dry · 19 botánicos",
    category: ["Importadas", "Cítricas"],
    botanicals: ["19 botánicos franceses", "Violeta", "Cúrcuma", "Cardamomo", "Enebro"],
    notes: "Destilado en alambiques de cobre usados para el coñac. Elegancia francesa con cuerpo y complejidad.",
    serve: "Tónica Schweppes Premium · Piel de pomelo · Violeta",
    price: "€15.00",
    img: "https://images.pexels.com/photos/15866882/pexels-photo-15866882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    n: "10",
    name: "The Palau Serve",
    origin: "Servicio de la casa",
    country: "Selección",
    flag: "✦",
    abv: "Copa",
    style: "Firma de la casa · Servicio de autor",
    category: ["Especiales"],
    botanicals: ["Enebro", "Lima", "Romero ahumado", "Hielo esférico"],
    notes: "El gin tonic que define Gin Palau. Enebro, lima y romero ahumado sobre hielo esférico —nuestro clásico.",
    serve: "Selección de la casa · Hielo esférico · Lima de mercado · Romero ahumado",
    price: "€16.00",
    img: "https://images.pexels.com/photos/35667422/pexels-photo-35667422.png?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
];

const CATEGORIES = ["Todas", "Españolas", "Importadas", "Cítricas", "Florales", "Herbáceas", "Especiales"];

// ─── Gin Card ─────────────────────────────────────────────────────────────────
function GinCard({ gin, i }: { gin: Gin; i: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.05 * (i % 6) }}
      layout
      className="group relative cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      id={`gin-card-${gin.n}`}
    >
      <div
        className={`relative transition-all duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        style={{ minHeight: "520px" }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative border border-white/10 bg-white/[0.02] h-full hover:border-[#D5B491]/30 transition-colors duration-700">
            <div className="relative h-72 overflow-hidden">
              <img
                src={gin.img}
                alt={gin.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Museum badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-serif text-sm italic text-white/80">N°{gin.n}</span>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1">
                <span className="text-sm">{gin.flag}</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/70">{gin.country}</span>
              </div>

              {/* Category tags */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                {gin.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[8px] uppercase tracking-[0.2em] border border-[#D5B491]/40 text-[#D5B491] px-2 py-0.5"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-serif text-xl font-light text-[#EDEAE3] leading-tight">
                  {gin.name}
                </h3>
                <span className="shrink-0 font-serif text-lg text-[#D5B491]">
                  {gin.price}
                </span>
              </div>

              <p className="text-[10px] font-light uppercase tracking-[0.22em] text-white/75 mb-3">
                {gin.abv} · {gin.origin}
              </p>

              <p className="text-[11px] font-light text-white/75 italic mb-4">{gin.style}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {gin.botanicals.slice(0, 3).map((b) => (
                  <span
                    key={b}
                    className="text-[9px] uppercase tracking-[0.15em] bg-white/[0.06] border border-white/20 text-white/80 px-2 py-0.5"
                  >
                    {b}
                  </span>
                ))}
                {gin.botanicals.length > 3 && (
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/60 px-2 py-0.5">
                    +{gin.botanicals.length - 3} más
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D5B491]/90">
                  Ver Perfect Serve →
                </span>
                <ArrowUpRight size={14} className="text-[#D5B491]/80 group-hover:text-[#D5B491] transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full border border-[#D5B491]/30 bg-[#070707] p-8 flex flex-col justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#D5B491] mb-2">
                N°{gin.n} — Perfect Serve
              </p>
              <h3 className="font-serif text-2xl font-light text-[#EDEAE3] mb-1">
                {gin.name}
              </h3>
              <p className="text-[11px] text-white/70 italic mb-6">{gin.style}</p>

              <div className="w-12 h-px bg-[#D5B491]/40 mb-6" />

              <p className="text-sm font-light leading-[1.9] text-white/85 mb-8">
                {gin.notes}
              </p>

              <div className="border-l-2 border-[#D5B491]/40 pl-5 mb-8">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#D5B491] mb-2">
                  Servicio recomendado
                </p>
                <p className="text-sm font-light text-white/80 leading-relaxed">
                  {gin.serve}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {gin.botanicals.map((b) => (
                  <span
                    key={b}
                    className="text-[9px] uppercase tracking-[0.15em] bg-[#D5B491]/10 border border-[#D5B491]/30 text-[#D5B491]/90 px-2 py-0.5"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
              <span className="font-serif text-2xl text-[#D5B491]">{gin.price}</span>
              <a
                href="#visita"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 border border-[#D5B491] px-5 py-2.5 text-[9px] uppercase tracking-[0.25em] text-[#D5B491] hover:bg-[#D5B491] hover:text-[#050505] transition-all duration-300"
              >
                Pedir esta copa
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Menu Page ────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filtered = useMemo(() => {
    return GINS.filter((g) => {
      const matchSearch =
        search === "" ||
        g.name.toLowerCase().includes(search.toLowerCase()) ||
        g.origin.toLowerCase().includes(search.toLowerCase()) ||
        g.botanicals.some((b) => b.toLowerCase().includes(search.toLowerCase()));
      const matchCat =
        activeCategory === "Todas" || g.category.includes(activeCategory);
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Header spacer */}
      <div className="h-20" />

      {/* Page hero */}
      <section className="relative bg-[#050505] pt-20 pb-12 px-6 md:px-12 border-b border-[#D5B491]/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-72 w-[600px] rounded-full bg-[#D5B491]/6 blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-white/65 hover:text-[#D5B491] transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={12} />
            Inicio
          </Link>

          <SectionLabel index="02" title="La colección" className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#EDEAE3] leading-[1.02]">
                <span className="block font-light">Una biblioteca</span>
                <span className="block italic text-[#D5B491]">líquida.</span>
              </h1>
            </div>
            <FadeUp delay={0.2} className="max-w-md">
              <p className="text-sm font-light leading-[1.9] text-white/80">
                Más de cuarenta referencias de ginebra — de Londres a Kioto —
                cada una con su tónica, su copa y su cítrico asignados. Un museo
                que se sirve por copas.
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#D5B491]/90">
                Haz click en cada card para descubrir el Perfect Serve →
              </p>
            </FadeUp>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col gap-6">
            {/* Search bar */}
            <div className="relative max-w-md">
              <Search
                size={14}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/55"
              />
              <input
                type="text"
                id="gin-search"
                placeholder="Buscar ginebra, botánico o país..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/15 pl-10 pr-4 py-3.5 text-sm text-white/80 placeholder-white/25 outline-none focus:border-[#D5B491]/50 transition-colors duration-300"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  id={`filter-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-[#D5B491] text-[#050505] border-[#D5B491]"
                      : "border-white/20 text-white/70 hover:border-[#D5B491]/60 hover:text-[#D5B491]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#050505] py-16 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-10">
                {filtered.length} {filtered.length === 1 ? "referencia" : "referencias"} encontradas
              </p>
              <AnimatePresence mode="popLayout">
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {filtered.map((gin, i) => (
                    <GinCard key={gin.n} gin={gin} i={i} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <FadeUp className="flex flex-col items-center justify-center py-32 text-center">
              <p className="font-serif text-4xl italic text-white/50 mb-4">
                Sin resultados
              </p>
              <p className="text-sm text-white/70 mb-8">
                No se encontraron ginebras para esa búsqueda.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Todas");
                }}
                className="border border-[#D5B491]/40 text-[#D5B491] px-6 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-[#D5B491] hover:text-[#050505] transition-all duration-300"
              >
                Limpiar filtros
              </button>
            </FadeUp>
          )}
        </div>
      </section>

      {/* CTA strip — Le Rocher style editorial footer link */}
      <section className="bg-[#070707] border-t border-[#D5B491]/10">
        <Link
          to="/#visita"
          className="group w-full flex flex-col md:flex-row items-center justify-between px-10 py-8 md:px-16 md:py-10 gap-8 hover:bg-[#0A0A0A] transition-colors duration-500"
          id="cta-reservar-desde-menu"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#EDEAE3] group-hover:text-[#D5B491] transition-colors duration-500 text-center md:text-left">
            ¿Cuál será tu
            <br className="hidden md:block" />
            <span className="italic"> próxima copa?</span>
          </h2>
          <div className="shrink-0 border-2 border-[#D5B491] px-10 py-5 flex items-center gap-4 text-[#D5B491] group-hover:bg-[#D5B491] group-hover:text-[#050505] transition-all duration-500 text-sm font-bold uppercase tracking-[0.2em]">
            Reservar mesa
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </div>
        </Link>
      </section>

      <Footer />
    </>
  );
}
