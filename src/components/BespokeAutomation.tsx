import {
  ArrowRight,
  Cog,
  Lightbulb,
  Target,
  MessageCircle,
  FileText,
  BarChart2,
  Radar,
  Sparkles,
} from "lucide-react";

export function BespokeAutomation() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const autos = [
    {
      icon: <MessageCircle size={26} />,
      title: "Auto-kundeservice",
      desc:
          "AI-assistent besvarer henvendelser døgnet rundt – hjemmeside, Instagram, WhatsApp, Messenger & mail.",
      extra: "Guidet produktvalg, ordreservice og branche-support.",
    },
    {
      icon: <FileText size={26} />,
      title: "Automatisk Fakturering",
      desc:
          "Fakturaer oprettes & sendes automatisk, når opgaver afsluttes, bookinger bekræftes eller aftaler gennemføres.",
      extra: "Integrerer med e-conomic, Billy eller eget system.",
    },
    {
      icon: <BarChart2 size={26} />,
      title: "Månedsrapportering",
      desc:
          "Generér og udsend SEO-, salgs- og økonomirapporter helt automatisk – til dig selv eller dine kunder.",
      extra: "Lever professionel indsigt uden manuelt arbejde.",
    },
    {
      icon: <Radar size={26} />,
      title: "AI Leadgenerering",
      desc:
          "Finder og kvalificerer leads via LinkedIn & Google Maps – præcist efter dine kriterier.",
      extra: "Fyld pipeline automatisk uden timevis af research.",
    },
  ];

  return (
      <section id="automation" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* top: bespoke workflow */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              <span className="gradient-text">Skræddersyet</span> Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Har du en unik proces? Vi designer et custom AI-workflow præcis til
              din forretning.
            </p>
          </div>

          <div className="glass-card p-8 md:p-12 hover:shadow-xl transition-all duration-300">
            {/* 3-trins-proces */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Lightbulb, title: "Analyse" },
                { icon: Cog, title: "Design" },
                { icon: Target, title: "Implementering" },
              ].map(({ icon: Icon, title }) => (
                  <div key={title} className="text-center">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {title}
                    </h3>
                    <p className="text-gray-600">
                      {title === "Analyse" &&
                          "Vi kortlægger dine processer og spotter automationsmuligheder"}
                      {title === "Design" &&
                          "Vi udvikler AI-workflows nøjagtigt til dine behov"}
                      {title === "Implementering" &&
                          "Vi ruller løsningen ud og optimerer for maksimal effekt"}
                    </p>
                  </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mb-16">
              <button
                  onClick={() => window.open("https://calendly.com/syncore-ai-info/30min", "_blank")}
                  className="btn-primary flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Book Strategi-Møde</span>
                <ArrowRight size={20} />
              </button>
            </div>


            {/* mini-automationer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {autos.map(({ icon, title, desc, extra }) => (
                  <div
                      key={title}
                      className="p-6 rounded-2xl border border-indigo-500/40 bg-gray-900/80 text-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-indigo-500/30"
                  >
                    <div className="flex items-center gap-3 mb-3 text-indigo-400">
                      {icon}
                      <h4 className="text-lg font-semibold">{title}</h4>
                    </div>
                    <p className="text-sm mb-2">{desc}</p>
                    <p className="text-sm text-indigo-200">{extra}</p>
                  </div>
              ))}
            </div>

            {/* ekstra: helt skræddersyet */}
            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Sparkles size={36} className="flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">
                    Har du brug for noget helt andet?
                  </h3>
                  <p className="text-indigo-100">
                    Vi bygger også skræddersyede automationer fra bunden – lige
                    efter dine ønsker.
                  </p>
                </div>
              </div>
              <button
                  onClick={scrollToContact}
                  className="btn-primary bg-white text-indigo-600 hover:bg-indigo-100"
              >
                Tal med os
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}
