"use client";
import { useEffect } from "react";

interface Skills {
  Icon: string;
  SkillName: string;
}

const ListSkill = ({ Icon, SkillName }: Skills) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({ duration: 1000 });
    }
  }, []);

  return (
    <div
      data-aos="flip-left"
      className="w-36 h-36 bg-white transition duration-900 flex flex-col items-center justify-center rounded-2xl hover:bg-slate-950 hover:text-white shadow-md"
    >
      <img
        src={Icon}
        alt={SkillName}
        width={60}
        height={60}
        className="object-contain mb-2 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-sm font-semibold text-center">{SkillName}</span>
    </div>
  );
};

export default ListSkill;
