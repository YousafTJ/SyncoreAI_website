import React from "react";
import RotatingText from "./RotatingText";

// CoreServices – samme struktur, nye bokse (Uiverse.io design af MuhammadHasann tilpasset)
// - Header med RotatingText
// - Række 1: AI services (4 bokse)
// - Underoverskrift
// - Række 2: Web services (3 bokse)

export function CoreServices() {
  const aiServices = [
    {
      title: "AI Kundeservice",
      features: ["24/7 AI-drevet kundeservice", "Svarer korrekt med ordentlig tone og sprog"],
      price: "299 DKK ekskl. moms",
    },
    {
      title: "Mail Agent",
      features: [
        "Svarer 24/7 på mail",
        "Svarer korrekt ud fra informationer vi giver den",
        "Svarer med det samme hvis den har de rette data → bedre kundeoplevelse",
        "Sætter labels ved emner og skaber struktur",
        "Hurtigere respons → højere sandsynlighed for konvertering",
      ],
      price: "379 DKK ekskl. moms",
    },
    {
      title: "Kombineret AI + Mail Agent",
      features: [
        "Indeholder både AI Kundeservice og Mail Agent i én samlet løsning",
        "Maksimerer support og kommunikation på tværs af kanaler",
      ],
      price: "499 DKK ekskl. moms",
    },
    {
      title: "AI Kursus Møde (4 timer)",
      features: [
        "Intensivt 4 timers møde",
        "Fokus på effektiv brug af AI",
        "Skab automationer og AI-agenter",
        "Forbedr effektivitet med prompt engineering",
        "Hands-on gennemgang af værktøjer",
      ],
      price: "3999 DKK ekskl. moms",
    },
  ];

  const webServices = [
    { title: "Standard Hjemmeside", features: ["Enkel, moderne hjemmeside", "Op til 3 sider", "Responsivt design"], price: "2499 DKK ekskl. moms" },
    { title: "SEO-venlig & flersidet hjemmeside", features: ["Udvidet hjemmeside med flere sider", "Optimeret til SEO", "Tilpasset dit brand og behov"], price: "4999 DKK ekskl. moms" },
    { title: "Fuldt skræddersyet + copywriting", features: ["Komplet skræddersyet design", "Flersidet struktur", "Professionel copywriting og SEO-indhold"], price: "7999 DKK ekskl. moms" },
  ];

  const CheckIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="check_svg">
        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd"></path>
      </svg>
  );

  return (
      <section id="services" className="relative bg-black text-white py-28">
        {/* Lokale styles (isolerede klasse-navne: uicard-*) */}
        <style>{`
        .uicard {
          --white: hsl(0, 0%, 100%);
          --black: hsl(240, 15%, 9%);
          --paragraph: hsl(0, 0%, 83%);
          --line: hsl(240, 9%, 17%);
          --primary: hsl(266, 92%, 58%);
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          padding: 1.1rem;
          width: 100%; /* responsiv */
          background-color: hsla(240, 15%, 9%, 1);
          background-image:
            radial-gradient( at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient( at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient( at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
            radial-gradient( at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
            radial-gradient( at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
            radial-gradient( at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%);
          border-radius: 1rem;
          box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset,
                      0 10px 30px rgba(0,0,0,.35);
          transition: transform .3s ease, box-shadow .3s ease;
        }
        .uicard:hover { transform: translateY(-4px); box-shadow: 0 16px 42px rgba(0,0,0,.45); }
        .uicard .card__border {
          overflow: hidden; pointer-events: none; position: absolute; z-index: -10;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: calc(100% + 2px); height: calc(100% + 2px);
          background-image: linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%);
          border-radius: 1rem;
        }
        .uicard .card__border::before {
          content: ""; pointer-events: none; position: fixed; z-index: 200; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 200%; height: 10rem;
          background-image: linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(277, 95%, 60%) 40%, hsl(277, 95%, 60%) 60%, hsla(0, 0%, 40%, 0) 100%);
          animation: uicard-rotate 8s linear infinite;
        }
        @keyframes uicard-rotate { to { transform: translate(-50%, -50%) rotate(360deg); } }
        .uicard .card_title__container .card_title { font-size: 1.05rem; color: var(--white); font-weight: 800; }
        .uicard .card_title__container .card_paragraph { margin-top: 0.35rem; width: 100%; font-size: .9rem; color: var(--paragraph); }
        .uicard .line { width: 100%; height: 0.1rem; background-color: var(--line); border: none; }
        .uicard .card__list { display: flex; flex-direction: column; gap: 0.5rem; }
        .uicard .card__list_item { display: flex; align-items: center; gap: 0.5rem; }
        .uicard .check { display:flex; justify-content:center; align-items:center; width: 1rem; height: 1rem; background-color: var(--primary); border-radius: 9999px; }
        .uicard .check_svg { width: .75rem; height: .75rem; fill: var(--black); }
        .uicard .list_text { font-size: .95rem; color: var(--white); text-align: left; }
        .uicard .button { cursor: pointer; padding: .6rem .9rem; width: 100%; background-image: linear-gradient(0deg, rgba(94,58,238,1) 0%, rgba(197,107,240,1) 100%); font-size: .9rem; color: var(--white); border: 0; border-radius: 9999px; box-shadow: inset 0 -2px 25px -4px var(--white); font-weight: 700; }
      `}</style>

        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-16 xl:px-28">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Vi tilbyder</h2>
              <RotatingText
                  texts={["Fritid", "Smartere arbejde", "Mere effektivitet"]}
                  mainClassName="px-3 md:px-4 py-1 md:py-1.5 rounded-lg bg-purple-500/10 text-fuchsia-300 font-extrabold tracking-tight"
                  splitLevelClassName="overflow-hidden pb-0.5"
                  elementLevelClassName=""
                  staggerFrom="last"
                  rotationInterval={2200}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  staggerDuration={0.03}
              />
            </div>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AI-løsninger og hjemmesider, der skaber resultater – hurtigt og skalerbart.
            </p>
          </div>

          {/* ROW 1 – AI services (4 bokse) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 mb-28">
            {aiServices.map((s, i) => (
                <article key={`ai-${i}`} className="uicard">
                  <div className="card__border" aria-hidden />
                  <div className="card_title__container text-left">
                    <span className="card_title">{s.title}</span>
                    <p className="card_paragraph">{s.price}</p>
                  </div>
                  <hr className="line" />
                  <ul className="card__list">
                    {s.features.map((f, idx) => (
                        <li key={idx} className="card__list_item">
                          <span className="check"><CheckIcon /></span>
                          <span className="list_text">{f}</span>
                        </li>
                    ))}
                  </ul>
                  <button className="button mt-2">Vælg pakke</button>
                </article>
            ))}
          </div>

          {/* Underoverskrift række 2 */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Hjemmeside-pakker</h3>
          </div>

          {/* ROW 2 – Web services (3 bokse) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {webServices.map((s, i) => (
                <article key={`web-${i}`} className="uicard">
                  <div className="card__border" aria-hidden />
                  <div className="card_title__container text-left">
                    <span className="card_title">{s.title}</span>
                    <p className="card_paragraph">{s.price}</p>
                  </div>
                  <hr className="line" />
                  <ul className="card__list">
                    {s.features.map((f, idx) => (
                        <li key={idx} className="card__list_item">
                          <span className="check"><CheckIcon /></span>
                          <span className="list_text">{f}</span>
                        </li>
                    ))}
                  </ul>
                  <button className="button mt-2">Vælg pakke</button>
                </article>
            ))}
          </div>
        </div>
      </section>
  );
}

export default CoreServices;
