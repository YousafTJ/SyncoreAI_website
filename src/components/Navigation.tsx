import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="nav-fixed">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200 shadow-lg">
              <img 
                src="https://ellprnxjjzatijdxcogk.supabase.co/storage/v1/object/public/superdev-project-images/cf3dd1b7-57c8-41e3-8849-d51c11792ac9/h8lk3brxodcgb9vcfbum/1750793577119-SyncoreAILogo.jpg" 
                alt="SyncoreAI Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold gradient-text">SyncoreAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              AI Agents
            </button>
            <button 
              onClick={() => scrollToSection('automation')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Automation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Kontakt Os
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-2 hover:text-purple-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('vision')}
              className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              AI Agents
            </button>
            <button 
              onClick={() => scrollToSection('automation')}
              className="block text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
            >
              Automation
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary w-full"
            >
              Kontakt Os
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}