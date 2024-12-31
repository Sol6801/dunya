'use client';

import { useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Navbar() {
  
  const router = useRouter();
  const handleContact = () => {
    router.push("/contact");
  };
  useEffect(() => {
    const header = document.getElementById("header");
    const navcontent = document.getElementById("nav-content");
    const navaction = document.getElementById("navAction");
    const toToggle = document.querySelectorAll(".toggleColour");

    const onScroll = () => {
      const scrollpos = window.scrollY;

      if (scrollpos > 10) {
        header.classList.add("bg-white");
        navaction.classList.remove("bg-white");
        navaction.classList.add("gradient");
        navaction.classList.remove("text-gray-800");
        navaction.classList.add("bg-sky-400");
        toToggle.forEach((el) => {
          el.classList.add("text-gray-800");
          el.classList.remove("text-white");
        });
        header.classList.add("shadow");
        navcontent.classList.remove("bg-gray-100");
        navcontent.classList.add("bg-white");
      } else {
        header.classList.remove("bg-white");
        navaction.classList.remove("gradient");
        navaction.classList.add("bg-white");
        navaction.classList.remove("bg-sky-400");
        navaction.classList.add("text-gray-800");
        toToggle.forEach((el) => {
          el.classList.add("text-white");
          el.classList.remove("text-gray-800");
        });
        header.classList.remove("shadow");
        navcontent.classList.remove("bg-white");
        navcontent.classList.add("bg-gray-100");
      }
    };

    const checkParent = (t, elm) => {
      while (t.parentNode) {
        if (t === elm) return true;
        t = t.parentNode;
      }
      return false;
    };

    const check = (e) => {
      const target = e.target;
      const navMenuDiv = document.getElementById("nav-content");
      const navMenu = document.getElementById("nav-toggle");

      if (!checkParent(target, navMenuDiv)) {
        if (checkParent(target, navMenu)) {
          navMenuDiv.classList.toggle("hidden");
        } else {
          navMenuDiv.classList.add("hidden");
        }
      }
    };

    document.addEventListener("scroll", onScroll);
    document.addEventListener("click", check);

    return () => {
      document.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", check);
    };
  }, []);

  const scrollToFooter = () => {
    const element = document.getElementById("footer");
    element.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <nav id="header" className="fixed w-screen z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between bg-mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a id="brandname" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Dunya Idiomas
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button 
            id="nav-toggle"
            className="flex items-center p-1 hover:text-gray-200 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-inherit lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 font-bold no-underline hover:text-gray-200" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="mr-3">
              <a className="inline-block no-underline hover:text-gray-200 py-2 px-4" href="#testimonios">
                Testimonios
              </a>
            </li>
          </ul>
          <button
            onClick={handleContact}
            id="navAction"
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
