'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";
import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Navigation');

  const languages = [
    { code: 'pt', label: 'Português' },
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' }
  ];

  const handleLanguageChange = (langCode) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${langCode}${currentPath}`);
    setIsLangMenuOpen(false);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    const navcontent = document.getElementById("nav-content");
    const menuPath = document.getElementById("menu-icon-path");
    
    navcontent.classList.add("opacity-0", "invisible", "translate-x-full");
    navcontent.classList.remove("opacity-100", "translate-x-0");
    
    if (window.scrollY <= 10) {
      setTransparentTheme();
    }
    menuPath.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z");
  };

  const handleContact = () => {
    closeMenu();
    router.push(`/${locale}/contact`);
  };
  
  const nos = () => {
    closeMenu();
    router.push("/#nos");
  };
  
  const exp = () => {
    closeMenu();
    router.push("/#exp");
  };
  
  const home = () => {
    closeMenu();
    router.push("/");
  };

  const setWhiteTheme = () => {
    const header = document.getElementById("header");
    const navaction = document.getElementById("navAction");
    const toToggle = document.querySelectorAll(".toggleColour");
    const menuIcon = document.getElementById("menu-icon");
    const navButtons = document.querySelectorAll(".nav-button");
    const globeIcon = document.querySelector(".globe-icon");
    const hoverElements = document.querySelectorAll(".hover-bg");
    
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("bg-blue-950");
    navaction.classList.remove("text-blue-950");
    toToggle.forEach((el) => {
      el.classList.add("text-blue-950");
      el.classList.remove("text-white");
    });
    navButtons.forEach((el) => {
      el.classList.add("text-blue-950");
      el.classList.remove("text-white");
    });
    if (globeIcon) {
      globeIcon.classList.add("text-blue-950");
      globeIcon.classList.remove("text-white");
    }
    hoverElements.forEach((el) => {
      el.classList.remove("hover:bg-white/10");
      el.classList.add("hover:bg-blue-700/10");
    });
    header.classList.add("shadow");
    menuIcon.classList.add("text-blue-950");
    menuIcon.classList.remove("text-white");
  };

  const setTransparentTheme = () => {
    const header = document.getElementById("header");
    const navaction = document.getElementById("navAction");
    const toToggle = document.querySelectorAll(".toggleColour");
    const menuIcon = document.getElementById("menu-icon");
    const navButtons = document.querySelectorAll(".nav-button");
    const globeIcon = document.querySelector(".globe-icon");
    const hoverElements = document.querySelectorAll(".hover-bg");
    
    header.classList.remove("bg-white");
    navaction.classList.add("bg-white");
    navaction.classList.remove("bg-blue-950");
    navaction.classList.add("text-blue-950");
    toToggle.forEach((el) => {
      el.classList.add("text-white");
      el.classList.remove("text-blue-950");
    });
    navButtons.forEach((el) => {
      el.classList.add("text-white");
      el.classList.remove("text-blue-950");
    });
    if (globeIcon) {
      globeIcon.classList.add("text-white");
      globeIcon.classList.remove("text-blue-950");
    }
    hoverElements.forEach((el) => {
      el.classList.remove("hover:bg-blue-700/10");
      el.classList.add("hover:bg-white/10");
    });
    header.classList.remove("shadow");
    menuIcon.classList.remove("text-blue-950");
    menuIcon.classList.add("text-white");
  };   

  useEffect(() => {
    const toggleMenu = () => {
      const isOpen = !isMenuOpen;
      setIsMenuOpen(isOpen);
      const navcontent = document.getElementById("nav-content");
      const menuPath = document.getElementById("menu-icon-path");

      if (isOpen) {
        navcontent.classList.remove("opacity-0", "invisible", "translate-x-full");
        navcontent.classList.add("opacity-100", "translate-x-0");
        setWhiteTheme();
        menuPath.setAttribute("d", "M4 4L16 16M4 16L16 4");
      } else {
        closeMenu();
      }
    };

    const onScroll = () => {
      if (window.scrollY > 10 || isMenuOpen) {
        setWhiteTheme();
      } else {
        setTransparentTheme();
      }
    };

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
        <div className="pl-4 flex items-center z-50">
          <button
          onClick={home}
          id="brandname" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            Dunya Idiomas
          </button>
        </div>



        <div className="block lg:hidden pr-4 z-50">
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
            <li>
                
                <div className="relative z-50 mx-4">
                  <button
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className="hover-bg flex items-center space-x-2 p-2 rounded-lg font-bold  hover:bg-white/10 transition-colors duration-300"
                  >
                    <Globe className="globe-icon w-5 h-5 transition-colors duration-300" />
                    <span className="toggleColour">{languages.find(l => l.code === locale)?.label}</span>
                  </button>
        
                  {isLangMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {lang.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                      </li>
              <li className="mr-0 lg:mr-3">
              <button 
              onClick={home}                
              className="hover-bg nav-button flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <span className="toggleColour">{t('home')}</span>
            </button>
              </li>
              <li className="mr-0 lg:mr-3">
              <button 
              onClick={nos}                
              className="hover-bg nav-button flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <span className="toggleColour">{t('about')}</span>
            </button>
              </li>
              <li className="mr-0 lg:mr-3">
              <button 
              onClick={exp}
              className="hover-bg nav-button flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <span className="toggleColour">{t('experience')}</span>
            </button>
              </li>

            </ul>
            <button
              onClick={handleContact}
              id="navAction"
              className="mx-auto lg:mx-0 hover:no-underline bg-white text-blue-950 font-bold rounded-full mt-8 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xl lg:text-base"
            >
              {t('contact')}
            </button>

            
          </div>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}