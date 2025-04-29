import TypeEffect from "@/utils/TypeEffect";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen gap-10 p-3 lg:p-6 lg:flex-row lg:gap-0 dark:bg-gray-800 bg-gray-200"
      id="hero"
    >
      <div className="flex flex-col items-center flex-1 px-20 mt-32 lg:items-start lg:mt-0 z-[99]">
        <img
          src="./hero04.png"
          alt=""
          width="250px"
          className="rounded-full bayang"
        />
        <h1 className="mt-2 mb-2 dark:text-gray-200 text-xl lg:text-5xl owner animate__animated animate__fadeInLeft">
          Hi, I'm Asril Hidayat
        </h1>
        <p className="h-5 mb-2 dark:text-slate-400  text-slate-500 animate__animated animate__fadeInLeft">
          {/* <Typewriter text="Programmer | Collegent" delay={200} infinite /> */}
          Programmer | Collegent
        </p>
        <p className="text-center dark:text-gray-200  lg:text-left animate__animated animate__fadeInLeft">
          I'm great at torturing chatgpt to code my projects
        </p>
        <button className="px-5 py-2 mt-5 text-white rounded-full dark:bg-gray-200 dark:text-gray-800 bg-gray-800 text-gray-200 dark:hover:bg-gray-300 hover:bg-slate-600">
          Contact Me
        </button>
      </div>
      <div className="flex-1 px-10 text-center lg:text-left dark:text-gray-200">
        <q className="inline-block text-2xl text-center lg:text-4xl text-shadow-lg quotes lg:text-left lg:h-32 h-20">
          <TypeEffect
            text="It is not who I am underneath, but what I do that defines me."
            delay={150}
            infinite
          />
        </q>
        <p>—Bruce Wayne—</p>
      </div>
    </div>
  );
};

export default Hero;
