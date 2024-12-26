'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const scrollToFooter = (e) => {
    e.preventDefault();
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    const content = document.getElementById('nav-content');
    if (content) {
      content.classList.toggle('hidden');
    }
  };

  return (
    <nav id="header" className="fixed w-screen z-30 top-0 text-white bg-gradient-to-r from-[#000ec4] via-[#3c99d9] to-[#4eaec2]">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Dunya Idiomas
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button 
            onClick={toggleMenu}
            className="flex items-center p-1 text-white hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-200" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-white no-underline hover:text-gray-200 py-2 px-4" href="#testimonios">
                Testimonios
              </a>
            </li>
          </ul>
          <button
            onClick={scrollToFooter}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Contacto
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}