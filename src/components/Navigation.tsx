import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-white">SyncoreAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              AI Agents
            </button>
            <button 
              onClick={() => scrollToSection('automation')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Automation
            </button>
            <button className="btn-primary">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card mt-2 p-4 space-y-4">
            <button 
              onClick={() => scrollToSection('vision')}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              AI Agents
            </button>
            <button 
              onClick={() => scrollToSection('automation')}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Automation
            </button>
            <button className="btn-primary w-full">
              Book Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}