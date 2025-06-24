import { ArrowRight, Cog, Lightbulb, Target } from 'lucide-react';

export function BespokeAutomation() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="automation" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skræddersyet</span> Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Har du en unik proces? Vi designer en custom AI-workflow, 
            der passer præcis til din forretning.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyse</h3>
              <p className="text-gray-400">
                Vi analyserer dine nuværende processer og identificerer automatiseringsmuligheder
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cog className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design</h3>
              <p className="text-gray-400">
                Vi designer og udvikler skræddersyede AI-workflows til dine specifikke behov
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementering</h3>
              <p className="text-gray-400">
                Vi implementerer og optimerer løsningen for maksimal effekt i din virksomhed
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Book Strategi-Call</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}