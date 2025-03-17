import Section from "@/components/Section";
import About from "@/layouts/About";
import Contact from "@/layouts/Contact";
import Gallery from "@/layouts/Gallery";
import Hero from "@/layouts/Hero";
import Projects from "@/layouts/Projects";
import Skill from "@/layouts/Skill";

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>

      <Section>
        <Skill />
      </Section>

      <Section>
        <About />
      </Section>

      <Section>
        <Projects />
      </Section>

      <Section>
        <Contact />
      </Section>
    </>
  );
}
