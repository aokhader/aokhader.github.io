import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div id="top" className="overflow-x-clip">
      <Nav />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Footer />
      </div>
    </div>
  );
}
