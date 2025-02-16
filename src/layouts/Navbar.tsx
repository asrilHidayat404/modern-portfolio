"use client"

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const auth = localStorage.getItem("loggedIn")
//   console.log(auth)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (link: string) => {
    const aboutElement = document.getElementById(link);
    aboutElement?.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <header className="fixed m-auto inset-x-0 top-2 rounded-full w-1/2 bg-gray-800 opacity-90 border-b border-b-violet-50 z-10 text-[0.8rem]">
      <div className="container mx-auto flex md:flex-row flex-col lg:flex-row justify-around items-center">
        <div className="flex items-center justify-around ">
          <div className='overflow-hidden'>
            <img src="./Logo.png" alt='logo' className='hover:-hue-rotate-180 duration-500 transition-all cursor-pointer' width="80px"/>
          </div>
          <button className="text-white ml-4 lg:hidden md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
                className="h-6 w-6"
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
        </div>
        <nav className={`lg:flex lg:pb-0 md:flex items-center bg-red-500 gap-x-7 ${isOpen ? 'block md:pb-5 pb-10 items-center' : 'hidden'}`}>
          <Link
            href="/"
            className="text-white hover:text-gray-300 block md:inline-block lg:inline-block lg:mt-0 mt-4"
          >
            Home
          </Link>
          <Link
            href="/#about" 
            className="text-white hover:text-gray-300 block md:inline-block lg:inline-block lg:mt-0 mt-4"
            onClick={() => scrollTo("about")}
          >
            About
          </Link>
          <Link 
            href="/"
            className="text-white hover:text-gray-300 block md:inline-block lg:inline-block lg:mt-0 mt-4">My Projects</Link>
          <Link 
            href="/#gallery" 
            onClick={() => scrollTo("gallery")} 
            className="text-white hover:text-gray-300 block md:inline-block lg:inline-block lg:mt-0 mt-4">Gallery</Link>
          <Link 
            href="/#contact" 
            onClick={() => scrollTo("contact")} 
            className="text-white hover:text-gray-300 block md:inline-block lg:inline-block lg:mt-0 mt-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
