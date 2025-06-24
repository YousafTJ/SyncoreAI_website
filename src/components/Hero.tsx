import { ArrowRight, Bot, Zap, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-500/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Supercharge your business with{' '}
            <span className="gradient-text">AI agents</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-agenter der arbejder for dig – døgnet rundt. Automatisér processer, øg salget og frigør værdifuld tid.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary flex items-center justify-center space-x-2">
              <span>Book Demo</span>
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              Se Use-Cases
            </button>
          </div>

          {/* Key benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Automation</h3>
              <p className="text-gray-400">Dine AI-agenter arbejder døgnet rundt</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Øget Effektivitet</h3>
              <p className="text-gray-400">Automatisér manuelle processer</p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Intelligente Agenter</h3>
              <p className="text-gray-400">AI der lærer og tilpasser sig</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}