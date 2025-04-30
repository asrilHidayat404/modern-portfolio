"use client";
import ImageGrid from "@/components/ImagesGrid";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
    });
  }, []);
  const images: string[] = [
    "i/i1.jpg",
    "i/i2.jpg",
    "i/i3.jpg",
    "i/i4.jpg",
    "i/i5.jpg",
    "https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg",
    "https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg",
    "https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg",
    "https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg",
  ];
  return (
    <div
      className="w-full flex dark:bg-gray-800 text-gray-800 bg-gray-200 dark:text-gray-200 lg:flex-row flex-col items-end relative lg:py-20 py-44 min-h-screen"
      id="about"
    >
      <div className="flex-1 p-8 flex gap-10 text-justify flex-col justify-start">
        <div className="w-full">
          <header className="font-bold text-xl font-sans">
            Reprehenderit consectetur incididunt aliqua consectetur Lorem
          </header>
        </div>
        <div className="flex lg-flex-row flex-col gap-10 lg:items-start items-center indent-10 ">
          <div
            data-aos="fade-right"
            className="flex h-[10rem] gap-2 w-full max-w-full "
          >
            {images.map((img, i: number) => {
              return <ImageGrid key={i} Avatar={img} />;
            })}
          </div>
          <p>
            Voluptate adipisicing voluptate adipisicing enim. Quis Lorem velit
            aliqua enim. Sunt aute eiusmod excepteur nisi minim. Non sit culpa
            in non qui do non voluptate labore anim ea. Eiusmod quis culpa
            laboris nisi ipsum nostrud commodo commodo ut commodo commodo
            excepteur. Pariatur fugiat ut aute nulla consequat Lorem tempor in
            labore ullamco dolore. Sit aliqua est do sunt officia.
          </p>
        </div>
      </div>
      <div className="flex-1 p-8 box-border">
        <Image
          src="/i/hero.jpg"
          alt=""
          width={1000}
          height={100}
          className="blur-sm hover:blur-none transition duration-700 rounded-md"
        />
      </div>
    </div>
  );
};

export default About;
