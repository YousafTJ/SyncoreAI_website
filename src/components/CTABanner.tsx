import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="gradient-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute top-1/2 right-8 w-12 h-12 border border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Klar til AI-agenter på holdet?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start din rejse mod fuld automatisering i dag. Book et gratis møde 
              og se hvordan vores AI-agenter kan transformere din forretning.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Book Møde Nu</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}