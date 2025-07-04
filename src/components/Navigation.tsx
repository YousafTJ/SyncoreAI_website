// src/components/Navigation.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
      <>
        <nav
            className="
          fixed top-0 left-0 right-0 z-50
          bg-black
          border-b border-neutral-800
          shadow-md
        "
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Navbar height stays the same */}
            <div className="flex items-center justify-between h-28">
              {/* Logo → doubled in size */}
              <Link to="/" className="flex items-center group">
                <div className="h-52 md:h-56 flex items-center">
                  <img
                      src="/logo.png"
                      alt="Logo"
                      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-10">
                <Link
                    to="/about"
                    className="px-3 py-2 text-white/90 hover:text-violet-300 transition-colors font-medium"
                >
                  Om os
                </Link>

                <Link
                    to="/product"
                    className="px-3 py-2 text-white/90 hover:text-violet-300 transition-colors font-medium"
                >
                  Produkter
                </Link>

                <button
                    onClick={goContact}
                    className="
                  relative inline-flex items-center px-7 py-3 rounded-2xl
                  font-semibold text-white
                  bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
                  shadow-[0_6px_18px_rgba(124,58,237,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_28px_rgba(236,72,153,0.7)]
                  hover:scale-[1.05]
                  before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px]
                  before:bg-gradient-to-r before:from-violet-400 before:to-fuchsia-400
                  before:opacity-60 before:-z-10
                "
                >
                  Kontakt os
                </button>
              </div>

              {/* Mobile toggle */}
              <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    className="p-2 text-white/90 hover:text-violet-300 transition-colors"
                    aria-label="Menu"
                >
                  {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black border-t border-neutral-800 p-6 space-y-5 rounded-b-xl">
                  <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white/90 hover:text-violet-300 font-medium"
                  >
                    Om os
                  </Link>

                  <Link
                      to="/product"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white/90 hover:text-violet-300 font-medium"
                  >
                    Produkter
                  </Link>

                  <button
                      onClick={goContact}
                      className="
                  w-full mt-3 relative inline-flex justify-center items-center px-7 py-3 rounded-2xl
                  font-semibold text-white
                  bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600
                  shadow-[0_6px_18px_rgba(124,58,237,0.45)]
                  transition-all duration-300
                  hover:shadow-[0_0_28px_rgba(236,72,153,0.7)]
                  hover:scale-[1.05]
                  before:absolute before:inset-0 before:rounded-2xl before:p-[1.5px]
                  before:bg-gradient-to-r before:from-violet-400 before:to-fuchsia-400
                  before:opacity-60 before:-z-10
                "
                  >
                    Kontakt os
                  </button>
                </div>
            )}
          </div>
        </nav>

        {/* Spacer matches navbar height */}
        <div className="h-28" aria-hidden />
      </>
  );
}
