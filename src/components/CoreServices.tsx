// src/components/CoreServices.tsx
import React from "react";
import RotatingText from "./RotatingText";

export function CoreServices() {
  const aiServices = [
    {
      title: "AI Kundeservice",
      description: "AI-drevet kundeservice til virksomheder – altid tilgængelig.",
      price: "299 DKK ekskl. moms",
    },
    {
      title: "Mail Agent",
      description: "AI-mailassistent til hurtig, struktureret og korrekt mailhåndtering.",
      price: "379 DKK ekskl. moms",
      badge: "Premium",
    },
    {
      title: "Kombineret AI + Mail Agent",
      description: "Den ultimative løsning – kombinerer AI kundeservice og mail-agent.",
      price: "499 DKK ekskl. moms",
      badge: "Vi anbefaler",
    },
    {
      title: "AI Kursus Møde (4 timer)",
      description: "Intensivt AI-kursus med fokus på praktisk brug i din virksomhed.",
      price: "3999 DKK ekskl. moms",
    },
  ];

  const webServices = [
    {
      title: "Standard Hjemmeside",
      description: "Enkel, moderne og responsiv hjemmeside – perfekt til små virksomheder.",
      price: "2499 DKK ekskl. moms",
    },
    {
      title: "SEO-venlig & Flersidet Hjemmeside",
      description: "SEO-optimeret hjemmeside med flere sider til vækst og synlighed.",
      price: "4999 DKK ekskl. moms",
      badge: "Fleste køber",
    },
    {
      title: "Fuldt skræddersyet + Copywriting",
      description: "Komplet skræddersyet hjemmeside med professionel tekst og SEO-indhold.",
      price: "7999 DKK ekskl. moms",
      badge: "Mest for pengene",
    },
  ];

  return (
      <section id="services" className="relative bg-white text-gray-900 py-28">
        {/* Lokale styles */}
        <style>{`
        .card {
          --card-bg: #ffffff;
          --card-accent: #7c3aed;
          --card-text: #1e293b;
          --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);

          width: 100%;
          min-height: 340px; /* ens størrelse */
          background: var(--card-bg);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
          box-shadow: var(--card-shadow);
          border: 1px solid rgba(124, 58, 237, 0.15);
          padding-top: 2.5rem; /* giver plads til badge */
        }
        .card__content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        .card__badge {
          position: absolute;
          top: 0.75rem;
          left: 1rem;
          background: #7c3aed;
          color: #fff;
          padding: 0.35em 0.75em;
          border-radius: 999px;
          font-size: 0.8em;
          font-weight: 700;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .card__image {
          width: 100%;
          height: 120px;
          background: linear-gradient(45deg, #a78bfa, #8b5cf6);
          border-radius: 12px;
        }
        .card__title {
          color: var(--card-text);
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0.5rem 0 0;
        }
        .card__description {
          color: #475569;
          font-size: 0.95rem;
          margin: 0.25rem 0 0.75rem;
          flex-grow: 1;
        }
        .card__footer {
          margin-top: auto;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .card__price {
          color: var(--card-text);
          font-weight: 700;
          font-size: 1rem;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1),
                      0 10px 10px -5px rgba(0,0,0,0.04);
          border-color: rgba(124,58,237,0.3);
        }
      `}</style>

        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Vi tilbyder{" "}
              </h2>
              <RotatingText
                  texts={["AI mail agent", "Webudvikling", "AI chatbots"]}
                  mainClassName="px-3 md:px-4 py-1 md:py-1.5 rounded-lg bg-purple-100 text-purple-700 font-extrabold tracking-tight"
                  splitLevelClassName="overflow-hidden pb-0.5"
                  staggerFrom="last"
                  rotationInterval={2200}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.03}
              />
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Skræddersyede AI-løsninger og SEO-optimerede hjemmesider, der skaber vækst og effektivitet.
            </p>
          </div>

          {/* AI Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-28">
            {aiServices.map((s, i) => (
                <article key={`ai-${i}`} className="card">
                  {s.badge && <span className="card__badge">{s.badge}</span>}
                  <div className="card__content">
                    <div className="card__image" />
                    <h3 className="card__title">{s.title}</h3>
                    <p className="card__description">{s.description}</p>
                    <div className="card__footer">
                      <span className="card__price">{s.price}</span>
                    </div>
                  </div>
                </article>
            ))}
          </div>

          {/* Web Services */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Hjemmeside-pakker
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {webServices.map((s, i) => (
                <article key={`web-${i}`} className="card">
                  {s.badge && <span className="card__badge">{s.badge}</span>}
                  <div className="card__content">
                    <div className="card__image" />
                    <h3 className="card__title">{s.title}</h3>
                    <p className="card__description">{s.description}</p>
                    <div className="card__footer">
                      <span className="card__price">{s.price}</span>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}

export default CoreServices;
