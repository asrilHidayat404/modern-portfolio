"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

interface Skills {
  Icon: string;
  SkillName: string;
}

const ListSkill = ({ Icon, SkillName }: Skills) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
    });
  }, []);
  return (
    <div
      data-aos="flip-left"
      className="w-36 h-36 bg-white transition duration-900 flex flex-col items-center justify-center rounded-2xl hover:bg-slate-950 hover:text-white shadow-md"
    >
      <Image
        src={`/${Icon}`}
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
