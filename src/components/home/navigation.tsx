import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/img/chow-logo.png";
import { FacebookIcon } from "@/assets/icons/facebook";
import { TwitterIcon } from "@/assets/icons/twitter";
import { InstagramIcon } from "@/assets/icons/instagram";
import { navLinks } from "@/data/sidebarNavigation";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-64 min-h-screen bg-white p-8 flex flex-col max-md:hidden md:flex">
        <div className="mb-12 ml-4 mt-8">
          <img src={Logo} alt="Chow logo" />
        </div>
        <div className="space-y-4">
          {navLinks.map((link, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className={`w-[3px] text-[1.125rem] h-6 ${location.pathname === link.to ? 'bg-[#D87023]' : ''}`} />
              <Link to={link.to} className={`text-[#353542] text-[1.125rem] font-medium transition-colors ${location.pathname === link.to ? 'text-[#D87023]' : ''} font-sofia-sans`}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 ml-4 flex space-x-2">
          <a
            href="#"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
          >
            <TwitterIcon className="w-4 h-4" />
          </a>
          <a
            href="#"
            target="_blank"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <nav className="fixed z-20 top-0 left-0 w-full bg-white p-4 flex justify-between items-center md:hidden">
        <img src={Logo} alt="Chow logo" className="h-auto w-[60px]" />
        <div className="flex items-center">
          <a
            href="#"
            target="_blank"
            className="px-4 py-2 mr-8 flex items-center justify-center rounded-full font-bold text-xs bg-[#D87023] text-[#E9EBEA] hover:bg-[#D87023] transition-colors"
          >
            JOIN WAITLIST
          </a>
          <button onClick={toggleMenu} className="text-[#000] hover:text-[#D87023] cursor-pointer">
            <Menu />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 w-64 min-h-screen bg-white p-8 flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-12 flex items-center w-full justify-between">
            <img src={Logo} alt="Chow logo" />

            <div onClick={toggleMenu}  className="hover:text-[#d87023] cursor-pointer"><X/></div>
          </div>
          <div className="space-y-4">
            {navLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className={`w-[3px] text-[1.125rem] h-6 ${location.pathname === link.to ? 'bg-[#D87023]' : ''}`} />
                <Link to={link.to} className={`text-[#353542] text-[1.125rem] font-medium transition-colors ${location.pathname === link.to ? 'text-[#D87023]' : ''} font-sofia-sans`}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 flex space-x-2">
            <a
              href="#"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              target="_blank"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-orange-50 text-[#D87023] hover:bg-orange-100 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}