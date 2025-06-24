import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">SyncoreAI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-agenter der arbejder for dig – døgnet rundt. 
              Automatisér processer, øg salget og frigør værdifuld tid.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>kontakt@syncoreai.dk</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+45 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>København, Danmark</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('vision')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Vision
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                AI Agents
              </button>
              <button 
                onClick={() => scrollToSection('automation')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Automation
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">AI Agents</h3>
            <div className="space-y-2">
              <div className="text-gray-400">Leonardo - Sales</div>
              <div className="text-gray-400">Imran - Accounting</div>
              <div className="text-gray-400">Sophie - HR</div>
              <div className="text-gray-400">Jordan - Business</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SyncoreAI. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}