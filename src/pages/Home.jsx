// Importerar komponenter som används på "startsidan"
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
