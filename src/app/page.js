"use client";

import About from "@/components/home/About/About";
import Contact from "@/components/home/Contact/Contect";
import Projects from "@/components/home/project/Projects";
import Skills from "@/components/home/Skills/Skills";

export default function Home() {
  return (
    <main>
     <About />
     <Projects />
     <Skills />
     <Contact />
    </main>
  )
}
