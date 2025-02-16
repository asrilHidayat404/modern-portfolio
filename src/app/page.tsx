import Footer from "@/components/Footer";
import About from "@/layouts/About";
import Contact from "@/layouts/Contact";
import Gallery from "@/layouts/Gallery";
import Hero from "@/layouts/Hero";
import Header from "@/layouts/Navbar";
import Skill from "@/layouts/Skill";

export default function Home() {
  return (
    <div className='w-full'>
    <Header />
    <Hero />
    <Skill />
    <About />
    {/* <Gallery /> */}
    <Contact />
    <Footer />
  </div>
  );
}
