import Line from "@/components/Line";
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
      <Section id={"home"}>
        <Hero />
      </Section>

      <Line />

      <Section id={"skill"}>
        <Skill />
      </Section>

      <Line />

      <Section id={"about"}>
        <About />
      </Section>

      <Line />

      <Section id={"my projects"}>
        <Projects />
      </Section>

      <Line />

      <Section id={"contact"}>
        <Contact />
      </Section>
    </>
  );
}
