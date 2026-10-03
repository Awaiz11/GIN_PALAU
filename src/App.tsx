import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-[#EDEAE3]">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* cinematic film grain */}
      <div className="grain pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-overlay" />

      <Navbar started={!loading} />

      <Routes>
        <Route path="/" element={<HomePage started={!loading} />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}
