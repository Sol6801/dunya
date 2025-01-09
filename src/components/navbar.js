'use client';

import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContact = () => {
    router.push("/contact");
  };
  const nos = () => {
    router.push("/#nos");
  };
  const exp = () => {
    router.push("/#exp");
  };
  const home = () => {
    router.push("/");
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const navcontent = document.getElementById("nav-content");
    const navaction = document.getElementById("navAction");
    const toToggle = document.querySelectorAll(".toggleColour");
    const menuIcon = document.getElementById("menu-icon");
    const menuPath = document.getElementById("menu-icon-path");

    const setWhiteTheme = () => {
      header.classList.add("bg-white");
      navaction.classList.remove("bg-white");
      navaction.classList.add("bg-sky-400");
      navaction.classList.remove("text-blue-950");
      toToggle.forEach((el) => {
        el.classList.add("text-blue-950");
        el.classList.remove("text-white");
      });
      header.classList.add("shadow");
      menuIcon.classList.add("text-blue-950");
      menuIcon.classList.remove("text-white");
    };

    const setTransparentTheme = () => {
      header.classList.remove("bg-white");
      navaction.classList.add("bg-white");
      navaction.classList.remove("bg-sky-400");
      navaction.classList.add("text-blue-950");
      toToggle.forEach((el) => {
        el.classList.add("text-white");
        el.classList.remove("text-blue-950");
      });
      header.classList.remove("shadow");
      menuIcon.classList.remove("text-blue-950");
      menuIcon.classList.add("text-white");
    };

    const toggleMenu = () => {
      const isOpen = !isMenuOpen;
      setIsMenuOpen(isOpen);

      if (isOpen) {
        // Abrir menú
        navcontent.classList.remove("opacity-0", "invisible", "translate-x-full");
        navcontent.classList.add("opacity-100", "translate-x-0");
        setWhiteTheme();
        // Cambiar a ícono X
        menuPath.setAttribute("d", "M4 4L16 16M4 16L16 4");
      } else {
        // Cerrar menú
        navcontent.classList.add("opacity-0", "invisible", "translate-x-full");
        navcontent.classList.remove("opacity-100", "translate-x-0");
        if (window.scrollY <= 10) {
          setTransparentTheme();
        }
        // Volver a ícono hamburguesa
        menuPath.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z");
      }
    };

    const onScroll = () => {
      if (window.scrollY > 10 || isMenuOpen) {
        setWhiteTheme();
      } else {
        setTransparentTheme();
      }
    };

    // Aplicar tema inicial
    onScroll();

    document.addEventListener("scroll", onScroll);
    document.getElementById("nav-toggle").addEventListener("click", toggleMenu);

    return () => {
      document.removeEventListener("scroll", onScroll);
      document.getElementById("nav-toggle").removeEventListener("click", toggleMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav id="header" className="fixed w-screen z-30 top-0 text-white transition-colors duration-300">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-5 lg:py-0">
        <div className="pl-4 flex items-center">
          <button
          onClick={home}
          id="brandname" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            Dunya Idiomas
          </button>
        </div>
        <div className="block lg:hidden pr-4 z-20">
          <button 
            id="nav-toggle"
            className="flex items-center p-1 hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg 
              id="menu-icon"
              className="fill-current stroke-current h-6 w-6 text-white transition-colors duration-300" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="0.5"
              strokeLinecap="round"
            >
              <path id="menu-icon-path" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div 
          id="nav-content" 
          className="fixed top-0 right-0 h-screen w-full lg:w-auto lg:h-auto lg:relative lg:flex lg:items-center invisible opacity-0 translate-x-full lg:translate-x-0 lg:opacity-100 lg:visible bg-white lg:bg-transparent transition-all duration-300 ease-in-out transform"
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center lg:flex-row lg:justify-end lg:h-auto lg:py-5 py-8">
            <ul className="list-reset flex flex-col lg:flex-row justify-center flex-1 items-center space-y-8 lg:space-y-0">
              <li className="mr-0 lg:mr-3">
                <button 
                onClick={nos}                
                className="inline-block py-2 px-4 text-2xl lg:text-base font-bold no-underline text-blue-950 hover:text-blue-700">
                  Nosotros
                </button>
              </li>
              <li className="mr-0 lg:mr-3">
                <button 
                onClick={exp}
                className="inline-block no-underline text-2xl lg:text-base text-blue-950 hover:text-blue-700 py-2 px-4">
                  Experiencia
                </button>
              </li>
            </ul>
            <button
              onClick={handleContact}
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-blue-950 font-bold rounded-full mt-8 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xl lg:text-base"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
