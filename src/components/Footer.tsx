// src/components/Footer.tsx
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
      <footer className="border-t border-violet-500/20 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + tagline */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <img
                    src="/logo.png" // <-- dit lokale logo
                    alt="SyncoreAI Logo"
                    className="w-40 h-auto object-contain" // større logo uden runde hjørner
                />
              </div>

              <p className="text-violet-200/80 mb-4 max-w-md leading-relaxed">
                AI-agenter der arbejder for dig – døgnet rundt. Automatisér
                processer, øg salget og frigør værdifuld tid.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-violet-200/80">
                  <Mail size={16} className="text-violet-300" />
                  <span>info@syncore-ai.dk</span>
                </div>
                <div className="flex items-center gap-2 text-violet-200/80">
                  <Phone size={16} className="text-violet-300" />
                  <span>+45 31 46 95 38</span>
                </div>
                <div className="flex items-center gap-2 text-violet-200/80">
                  <span>CVR:</span>
                  <span>45608867</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-violet-100 font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link
                    to="/about"
                    className="block text-violet-300 hover:text-violet-100 transition-colors"
                >
                  Om os
                </Link>
                <Link
                    to="/product"
                    className="block text-violet-300 hover:text-violet-100 transition-colors"
                >
                  Produkt
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-violet-100 font-semibold mb-4">Juridisk</h3>
              <div className="space-y-2">
                <Link
                    to="/privacy-policy"
                    className="block text-violet-300 hover:text-violet-100 transition-colors"
                >
                  Privatlivspolitik
                </Link>
                <Link
                    to="/cookies"
                    className="block text-violet-300 hover:text-violet-100 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-violet-500/20 mt-8 pt-8 text-center">
            <p className="text-violet-200/70">
              © 2025 SyncoreAI. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
  );
}
