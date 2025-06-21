import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { COMPANY_CONFIG, DESIGN_CONFIG } from "@/config/app";
import LogoDisplay from "./LogoDisplay";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    if (isHomepage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomepage]);

  const getNavClasses = () => {
    if (!isHomepage) {
      return "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800";
    }

    if (scrolled) {
      return "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800";
    }

    return "bg-transparent border-b border-transparent";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm ${getNavClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <LogoDisplay size="md" />
            </a>
          </div>

          {/* Navigation links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-16 flex items-baseline space-x-8">
              <a
                href="/proprietati"
                className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Proprietăți
              </a>
              <a
                href="/echipa"
                className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Echipa
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Phone number - Extended across the page */}
          <div className="flex items-center ml-12 flex-1 justify-end">
            {/* Phone number - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 text-white mr-4">
              <Phone className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">
                {COMPANY_CONFIG.contact.phone}
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/98 border-t border-slate-800">
          <a
            href="/proprietati"
            className="text-gray-300 hover:text-red-400 block px-3 py-3 text-base font-medium rounded-md hover:bg-slate-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proprietăți
          </a>
          <a
            href="/echipa"
            className="text-gray-300 hover:text-red-400 block px-3 py-3 text-base font-medium rounded-md hover:bg-slate-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Echipa
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-red-400 block px-3 py-3 text-base font-medium rounded-md hover:bg-slate-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>

          {/* Phone number in mobile menu */}
          <div className="px-3 py-3 border-t border-slate-700 mt-2">
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-4 w-4 text-green-500" />
              <span className="text-base font-medium">
                {COMPANY_CONFIG.contact.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
