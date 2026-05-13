import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navigation/Navbar";
import useLenisScroll from "./hooks/useLenis";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

import CursorGlow from "./components/cursor/CursorGlow";
import Loader from "./components/loader/Loader";

import useMousePosition from "./hooks/useMousePosition";
import useSmoothCursor from "./hooks/useSmoothCursor";

import heroVideo from "./assets/videos/hero.mp4";

export default function App() {

  const [loading, setLoading] = useState(true);

  const mouse = useMousePosition();

  const smooth = useSmoothCursor(mouse);

  useLenisScroll();

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {/* LOADER */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* MAIN APP */}
      {!loading && (

        <main className="relative bg-black text-white overflow-hidden">

          {/* GLOBAL CINEMATIC BACKGROUND */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
            
            {/* GLOWS */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
          </div>


          {/* CURSOR */}
          <CursorGlow
            x={smooth.x}
            y={smooth.y}
          />

          {/* GRAIN */}
          <div className="grain-overlay" />

          {/* AMBIENT GLOW */}
          <div className="cinematic-glow top-[-200px] left-[-200px]" />

          {/* NAVBAR */}
          <Navbar />
          <div className="space-y-32 md:space-y-44">

            {/* HERO */}
            <Hero />

            {/* ABOUT */}
            <About />

            {/* PROJECTS */}
            <Projects />

            {/* CERTIFICATES */}
            <Certificates />

            {/* SPACER */}
            <div className="h-10 md:h-16" />

            {/* CONTACT */}
            <Contact />
          </div>

        </main>

      )}
    </>
  );
}
