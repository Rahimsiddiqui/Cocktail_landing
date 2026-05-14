"use client";

import { useEffect, useState } from "react";

// Plugins
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <Navbar />
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />
        <Contact />
      </main>
    </>
  );
}
