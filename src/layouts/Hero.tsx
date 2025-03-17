import TypeEffect from "@/utils/TypeEffect";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen gap-10 p-3 lg:p-6 lg:flex-row lg:gap-0"
      id="hero"
    >
      <div className="flex flex-col items-center flex-1 px-20 mt-32 lg:items-start lg:mt-0">
        <img
          src="./hero04.png"
          alt=""
          width="250px"
          className="rounded-full bayang"
        />
        <h1 className="mt-2 mb-2 text-3xl lg:text-5xl owner animate__animated animate__fadeInLeft">
          Asril Hidayat
        </h1>
        <p className="h-5 mb-2 text-slate-500 animate__animated animate__fadeInLeft">
          {/* <Typewriter text="Programmer | Collegent" delay={200} infinite /> */}
          Programmer | Collegent
        </p>
        <p className="text-center lg:text-left animate__animated animate__fadeInLeft">
          Fugiat sunt dolore consequat elit non tempor culpa elit.
        </p>
        <button className="px-5 py-2 mt-5 text-white rounded-full bg-slate-950 hover:bg-slate-600">
          Contact Me
        </button>
      </div>
      <div className="flex-1 px-10 text-center lg:text-left">
        <q className="inline-block text-2xl text-center lg:text-4xl text-shadow-lg quotes lg:text-left lg:h-32">
          <TypeEffect
            text="It is not who I am underneath, but what I do that defines me."
            delay={150}
            infinite
          />
        </q>
        <p>—Bruce Wayne—</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full -z-10"
      >
        <path
          fill="#CBD5E0"
          fillOpacity="1"
          d="M0,256L60,256C120,256,240,256,360,218.7C480,181,600,107,720,117.3C840,128,960,224,1080,224C1200,224,1320,128,1380,80L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
