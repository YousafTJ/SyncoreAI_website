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
          bg-gradient-to-r from-purple-700 via-purple-800 to-fuchsia-800
          border-b border-purple-900
          shadow-lg
        "
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Navbar height (lidt større) */}
            <div className="flex items-center justify-between h-28 relative">
              {/* Logo (endnu større, overlapper navbaren) */}
              <Link to="/" className="flex items-center group absolute -top-10">
                <div className="h-48 md:h-52 flex items-center">
                  <img
                      src="/logo.png"
                      alt="SyncoreAI logo"
                      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>

              {/* Spacer til at balancere layoutet */}
              <div className="flex-1" />

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-10">
                <Link
                    to="/about"
                    className="px-3 py-2 text-white/90 hover:text-pink-300 transition-colors font-medium text-lg"
                >
                  Om os
                </Link>

                <Link
                    to="/product"
                    className="px-3 py-2 text-white/90 hover:text-pink-300 transition-colors font-medium text-lg"
                >
                  Produkter
                </Link>

                <button
                    onClick={goContact}
                    className="
                  relative inline-flex items-center px-7 py-3 rounded-xl
                  font-semibold text-white text-lg
                  bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700
                  shadow-md
                  transition-all duration-300
                  hover:shadow-lg hover:scale-[1.05]
                  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-purple-900
                "
                >
                  Kontakt os
                </button>
              </div>

              {/* Mobile toggle */}
              <div className="md:hidden ml-auto">
                <button
                    onClick={() => setIsMobileMenuOpen((v) => !v)}
                    className="p-2 text-white/90 hover:text-pink-300 transition-colors"
                    aria-label="Menu"
                >
                  {isMobileMenuOpen ? <X size={34} /> : <Menu size={34} />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gradient-to-r from-purple-800 to-fuchsia-800 border-t border-purple-900 p-6 space-y-5 rounded-b-xl shadow-lg">
                  <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white/90 hover:text-pink-300 font-medium text-lg"
                  >
                    Om os
                  </Link>

                  <Link
                      to="/product"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-white/90 hover:text-pink-300 font-medium text-lg"
                  >
                    Produkter
                  </Link>

                  <button
                      onClick={goContact}
                      className="
                  w-full mt-3 relative inline-flex justify-center items-center px-7 py-3 rounded-xl
                  font-semibold text-white text-lg
                  bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-700
                  shadow-md
                  transition-all duration-300
                  hover:shadow-lg hover:scale-[1.05]
                  focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-purple-900
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
