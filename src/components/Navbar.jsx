import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (!prev && y > 60) return true;
            if (prev && y < 30) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = ["About", "Services", "Testimonials"];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-250 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 cursor-pointer flex-shrink-0"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-primary flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg leading-none">
                  R
                </span>
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}
              >
                Rio Corporate
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? "text-gray-600 hover:text-brand-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="px-5 py-2 text-sm font-semibold rounded-full bg-brand-primary text-white hover:bg-brand-primaryHover shadow-md hover:shadow-brand-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  scrolled || isMobileMenuOpen
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X size={26} strokeWidth={2} />
                ) : (
                  <Menu size={26} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Glassmorphism */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center md:hidden transition-all duration-200 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          borderTop: isMobileMenuOpen
            ? "1px solid rgba(255,255,255,0.4)"
            : "none",
        }}
      >
        <div
          className={`flex flex-col items-center gap-8 w-full px-8 transition-all duration-400 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-gray-800 hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="w-12 h-px bg-gray-200 my-2" />

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-xs text-center px-8 py-4 text-base font-bold rounded-full bg-brand-primary text-white hover:bg-brand-primaryHover shadow-lg transition-all active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
