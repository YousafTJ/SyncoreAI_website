// src/components/Footer.tsx
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and tagline */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-200">
                  <img
                      src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/cf3dd1b7-57c8-41e3-8849-d51c11792ac9/h8lk3brxodcgb9vcfbum/1750793577119-SyncoreAILogo.jpg"
                      alt="SyncoreAI Logo"
                      className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold gradient-text">SyncoreAI</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                AI-agenter der arbejder for dig – døgnet rundt.
                Automatisér processer, øg salget og frigør værdifuld tid.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail size={16} className="text-purple-600" />
                  <span>info@syncore-ai.dk</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={16} className="text-purple-600" />
                  <span>+45 31 46 95 38</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <p>CVR:</p>
                  <span>45608867</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">Navigation</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  Om os
                </Link>
                <button onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  Vision
                </button>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  AI Agents
                </button>
                <button onClick={() => document.getElementById('automation')?.scrollIntoView({ behavior: 'smooth' })} className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  Automation
                </button>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-4">Juridisk</h3>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  Privatlivspolitik
                </Link>
                <Link to="/cookies" className="block text-gray-600 hover:text-purple-600 transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">© 2025 SyncoreAI. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
  );
}
