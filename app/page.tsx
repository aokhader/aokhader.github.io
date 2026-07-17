import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import OffHours from "@/components/OffHours";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div id="top" className="overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <OffHours />
      <Contact />
    </div>
  );
}
