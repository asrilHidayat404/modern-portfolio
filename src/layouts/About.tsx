import ImageGrid from "@/components/ImagesGrid";

const About = () => {
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
            <ImageGrid Avatar="i/i1.jpg" />
            <ImageGrid Avatar="i/i2.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
            <ImageGrid Avatar="https://t4.ftcdn.net/jpg/06/27/42/89/360_F_627428995_O1Uw9skdtStLe8bMnor5HBqksnap0mXo.jpg" />
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
        <img
          src="./pexels-matheus-bertelli-573299.jpg"
          alt=""
          className="blur-sm hover:blur-none transition duration-700 rounded-md"
        />
      </div>
    </div>
  );
};

export default About;
