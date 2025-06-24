import { ArrowRight, Bot, Zap, Clock } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-purple-300 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">SyncoreAI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-agenter der arbejder for dig – døgnet rundt. Automatisér processer, øg salget og frigør værdifuld tid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <span>Kontakt Os</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">24/7 Automation</h3>
              <p className="text-gray-600">Dine AI-agenter arbejder døgnet rundt</p>
            </div>
            
            <div className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Øget Effektivitet</h3>
              <p className="text-gray-600">Automatisér manuelle processer</p>
            </div>
            
            <div className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Intelligente Agenter</h3>
              <p className="text-gray-600">AI der lærer og tilpasser sig</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}