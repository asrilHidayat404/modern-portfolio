import ListSkill from "@/components/ListSkill";

const Skill = () => {
  return (
    <div className="w-full min-h-screen py-10 bg-gray-200 dark:bg-gray-800">
      <header className="w-full p-10 text-center">
        <p className="text-3xl dark:text-gray-200 font-bold">My Skills</p>
      </header>
      <div className="w-full flex justify-evenly flex-wrap gap-10 lg:px-36">
        <ListSkill Icon="./skillLogos/html.png" SkillName={"HTML"} />
        <ListSkill Icon="./skillLogos/css.png" SkillName={"CSS"} />
        <ListSkill Icon="./skillLogos/js.png" SkillName={"JavaScript"} />
        <ListSkill Icon="./skillLogos/tailwind.png" SkillName={"Tailwind"} />
        <ListSkill Icon="./skillLogos/react.svg" SkillName={"React"} />
        <ListSkill Icon="./skillLogos/express.png" SkillName={"Express JS"} />
        <ListSkill Icon="./skillLogos/sql.png" SkillName={"Mysql"} />
        <ListSkill Icon="./skillLogos/next.png" SkillName={"Next JS"} />
        <ListSkill Icon="./skillLogos/laravel.png" SkillName={"Laravel"} />
        <ListSkill Icon="./skillLogos/inertia.png" SkillName={"Inertia"} />
      </div>
    </div>
  );
};

export default Skill;
