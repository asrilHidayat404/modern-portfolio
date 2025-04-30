"use client";
import {
  Briefcase,
  House,
  Image as Img,
  Phone,
  User,
} from "@phosphor-icons/react";

import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
type NavLink = {
  label: string;
  icon: React.ElementType;
};
const scrollTo = (link: string) => {
  const aboutElement = document.getElementById(link);
  aboutElement?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLink: NavLink[] = [
    { label: "home", icon: House },
    { label: "about", icon: User },
    { label: "my projects", icon: Briefcase },
    { label: "gallery", icon: Img },
    { label: "contact", icon: Phone },
  ];
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed m-auto inset-x-0 top-2 lg:rounded-full rounded-lg w-1/2 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 opacity-90 shadow dark:shadow-violet-50 shadow-black z-[999] text-[0.8rem]">
      <div className="container flex items-center justify-evenly mx-auto md:flex-row lg:flex-row relstive">
        <div className="overflow-hidden">
          <Image
            src="/Logo.png"
            alt="logo"
            className="transition-all duration-500 cursor-pointer hover:-hue-rotate-180"
            width={70}
            height={70}
          />
        </div>
        <button
          className="ml-4 dark:text-gray-200 lg:hidden "
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <nav
          className={`lg:flex md:hidden lg:pb-0 md:flex items-center justify-center text-center gap-x-7 duration-300 transition `}
        >
          {navLink.map((nav, i: number) => {
            return (
              <Link
                key={i}
                href={`#${nav.label}`}
                onClick={() => scrollTo(nav.label)}
                className="lg:flex hidden mt-4 uppercase dark:text-white text-black dark:hover:text-gray-400 hover:text-gray-500 md:inline-block lg:inline-block lg:mt-0"
              >
                {nav.label}
              </Link>
            );
          })}
        </nav>
        <MobileNav navLink={navLink} active={isOpen} scrollTo={scrollTo} />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

const MobileNav = ({
  navLink,
  active,
  scrollTo,
}: {
  navLink: NavLink[];
  active: boolean;
  scrollTo: (id: string) => void;
}) => {
  return (
    <nav
      className={`w-full lg:hidden absolute top-16 inset-x-0 lg:rounded-full rounded-lg w-1/2 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 opacity-90 shadow dark:shadow-violet-50 shadow-black z-[999] text-[0.8rem] p-4 ${
        active ? "flex" : "hidden"
      } flex-col gap-4 `}
    >
      {navLink.map((nav: NavLink, i: number) => {
        const Icon = nav.icon;
        return (
          <div className="flex item-center gap-4 w-fit justify-center" key={i}>
            <Icon size={19} />
            <Link
              href={`#${nav.label}`}
              onClick={() => scrollTo(nav.label)}
              className="uppercase"
            >
              {nav.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
