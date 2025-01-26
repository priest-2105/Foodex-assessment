import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "@/assets/img/chow-logo.png";
import { FacebookIcon } from "@/assets/icons/facebook"
import { TwitterIcon } from "@/assets/icons/twitter"
import { InstagramIcon } from "@/assets/icons/instagram"
import { navLinks } from "@/data/sidebarNavigation";

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-64 min-h-screen bg-white p-8 flex flex-col">
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
  );
}