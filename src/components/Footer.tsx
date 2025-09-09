// src/components/Footer.tsx
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
      <footer className="bg-violet-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo + tagline */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <img
                    src="/logo.png"
                    alt="SyncoreAI Logo"
                    className="w-48 h-auto object-contain"
                />
              </div>

              <p className="text-white/90 mb-4 max-w-md leading-relaxed">
                AI-agenter der arbejder for dig – døgnet rundt. Automatisér
                processer, øg salget og frigør værdifuld tid.
              </p>

              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-white" />
                  <span>info@syncore-ai.dk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-white" />
                  <span>+45 31 46 95 38</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>CVR:</span>
                  <span>45608867</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link
                    to="/about"
                    className="block text-white/90 hover:text-white underline-offset-2 hover:underline"
                >
                  Om os
                </Link>
                <Link
                    to="/product"
                    className="block text-white/90 hover:text-white underline-offset-2 hover:underline"
                >
                  Produkt
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Juridisk</h3>
              <div className="space-y-2">
                <Link
                    to="/privacy-policy"
                    className="block text-white/90 hover:text-white underline-offset-2 hover:underline"
                >
                  Privatlivspolitik
                </Link>
                <Link
                    to="/cookies"
                    className="block text-white/90 hover:text-white underline-offset-2 hover:underline"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © 2025 SyncoreAI. Alle rettigheder forbeholdes.
            </p>
          </div>
        </div>
      </footer>
  );
}
