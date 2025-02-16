import ListSkill from "@/components/ListSkill"

const Skill = () => {
    return (
        <div className="w-full py-5 bg-slate-300">
            <header className="w-full p-10 text-center">
                <p className="text-3xl font-bold">My Skills</p>
            </header>
            <div className="w-full flex justify-evenly flex-wrap gap-10 lg:px-36">
                <ListSkill Icon="./skillLogos/html.png" SkillName={"HTML"}/>
                <ListSkill Icon="./skillLogos/css.png" SkillName={"CSS"}/>
                <ListSkill Icon="./skillLogos/js.png" SkillName={"JavaScript"}/>
                <ListSkill Icon="./skillLogos/tailwind.png" SkillName={"Tailwind"}/>
                <ListSkill Icon="./skillLogos/react.svg" SkillName={"React"}/>
                <ListSkill Icon="./skillLogos/express.png" SkillName={"Express JS"}/>
                <ListSkill Icon="./skillLogos/sql.png" SkillName={"Mysql"}/>
                <ListSkill Icon="./skillLogos/next.png" SkillName={"Next JS"}/>
            </div>
        </div>
    )
}

export default Skill