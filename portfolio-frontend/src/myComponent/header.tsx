import { Link } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";
import { useState } from "react";

type NavLink =
  | { label: "Resume"; href: string; isExternal: true }
  | { label: string; to: string; isExternal?: false };

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "Resume", href: "/Mubaraq-Resume-original.pdf", isExternal: true },
    { label: "Projects", to: "Projects" },
    { label: "Skills", to: "Skills" },
    { label: "Contact", to: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-emerald-950/95 border-emerald-700"
          : "bg-green-50/95 border-green-200"
      } border-b backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-bold font-mono tracking-tight transition-colors duration-300 ${
                isDark ? "text-green-300" : "text-green-900"
              }`}
            >
              Muby
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    download={link.label === "Resume"}
                    className={`relative text-sm font-medium transition-colors duration-300 group ${
                      isDark
                        ? "text-emerald-100 hover:text-emerald-300"
                        : "text-green-800 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isDark ? "bg-green-400" : "bg-green-600"
                      }`}
                    ></span>
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={700}
                    className={`relative text-sm font-medium transition-colors duration-300 group cursor-pointer ${
                      isDark
                        ? "text-slate-300 hover:text-green-400"
                        : "text-green-800 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isDark ? "bg-green-400" : "bg-green-600"
                      }`}
                    ></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Dark Mode Toggle + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                isDark
                  ? "bg-emerald-900 text-emerald-200 hover:bg-emerald-800"
                  : "bg-green-100 text-green-600 hover:bg-green-200"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-emerald-900 text-emerald-100 hover:bg-emerald-800"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isDark ? "bg-emerald-950" : "bg-green-100"
          } border-t ${isDark ? "border-emerald-700" : "border-green-200"}`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isExternal ? (
                  <a
                    href={link.href}
                    download={link.label === "Resume"}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors duration-300 ${
                      isDark
                        ? "text-emerald-100 hover:bg-emerald-900 hover:text-emerald-300"
                        : "text-green-800 hover:bg-green-200 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={700}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors duration-300 cursor-pointer ${
                      isDark
                        ? "text-slate-300 hover:bg-slate-700 hover:text-green-400"
                        : "text-green-800 hover:bg-green-200 hover:text-green-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
