import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import React from "react";
import { Link } from "react-router-dom";

export default function Product() {
    // --- NY PALLETTE (mere harmonisk på mørk baggrund) ---
    const cards: { color: string; label: string }[] = [
        { color: "56, 189, 248", label: "Produktivitet" }, // sky-400
        { color: "45, 212, 191", label: "Frihed" }, // teal-400
        { color: "163, 230, 53", label: "Fritid" }, // lime-400
        { color: "99, 102, 241", label: "Effektivitet" }, // indigo-500
        { color: "139, 92, 246", label: "Smartere" }, // violet-500
        { color: "217, 70, 239", label: "Mindre stress" }, // fuchsia-500
        { color: "251, 191, 36", label: "Moderne" }, // amber-400
        { color: "244, 63, 94", label: "Fremtid" }, // rose-500
        { color: "0, 186, 255", label: "Besparelse" }, // cyan custom
    ];

    // Produktkort-indhold (dato fjernet, beskrivelser opdateret)
    const products = [
        {
            title: "AI chatbot",
            categories: ["AI", "Kundeservice"],
            author: "SyncoreAI",
            desc:
                "AI-drevet chatbot der svarer hurtigt og korrekt. Automatisér kundeservice, spar tid og skab en bedre kundeoplevelse, som øger salget.",
        },
        {
            title: "Mail agent",
            categories: ["Automation", "E-mail"],
            author: "SyncoreAI",
            desc:
                "Intelligent mailagent der håndterer og besvarer henvendelser. Giver hurtigere respons, mere struktur og frigør tid til det vigtige.",
        },
        {
            title: "Hjemmeside",
            categories: ["SEO", "Design"],
            author: "SyncoreAI",
            desc:
                "Skræddersyede hjemmesider bygget fra bunden. Flot design, fuld kontrol over detaljer og SEO-optimeret for at nå flere kunder.",
        },
    ];


    return (
        <>
            <Helmet>
                <title>Produkter – SyncoreAI</title>
                <meta name="description" content="Se vores AI-produkter og pakkeløsninger." />

                {/* Sora font til knappen */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&display=swap"
                    rel="stylesheet"
                />

                <style>
                    {`
/* ==========================================================
   Uiverse.io inspired – 3D Cards + Forbedret 3D Button
   Ændringer:
   - mere harmoniske farver
   - bedre kontrast på labels
   - ekstra luft i kort og tekst
   - stærkere, flottere kontakt-knap med pulserende glow
   - focus-visible states for a11y
   - respects prefers-reduced-motion
   ========================================================== */

/* --- Rotating card scene --- */
.uiverse-wrapper { width:100%; height:100%; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.uiverse-inner {
  --w: 120px; --h: 160px; --translateZ: calc((var(--w) + var(--h)) + 4px);
  --rotateX: -12deg; --perspective: 1000px;
  position: absolute; width: var(--w); height: var(--h); top: 25%;
  left: calc(50% - (var(--w) / 2) - 2.5px); z-index: 2;
  transform-style: preserve-3d; transform: perspective(var(--perspective));
  animation: uiverse-rotating 22s linear infinite;
}
@keyframes uiverse-rotating {
  from { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0); }
  to   { transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn); }
}
@media (prefers-reduced-motion: reduce) { .uiverse-inner { animation: none; } }
.uiverse-card {
  position: absolute; border: 2px solid rgba(var(--color-card), .8);
  border-radius: 18px; inset: 0;
  transform: rotateY(calc((360deg / var(--quantity)) * var(--index))) translateZ(var(--translateZ));
  display:flex; align-items:center; justify-content:center; text-align:center;
  box-shadow: 0 10px 30px rgba(0,0,0,.35), 0 0 24px rgba(var(--color-card), .25);
}
.uiverse-img {
  position:absolute; width:100%; height:100%; border-radius:18px;
  background:#0000 radial-gradient(circle,
    rgba(var(--color-card), 0.10) 0%,
    rgba(var(--color-card), 0.45) 75%,
    rgba(var(--color-card), 0.85) 100%);
}
.uiverse-label {
  position: relative; z-index:1; font-weight:800; font-size:1rem; letter-spacing:.4px;
  color:#f8fafc; /* næsten hvid for kontrast */
  text-shadow: 0 2px 10px rgba(0,0,0,.55);
  padding:8px 14px; border-radius:12px; background:rgba(15, 23, 42, 0.65);
  backdrop-filter:blur(3px);
}

/* --- Forbedret 3D Button (flottere + effekt) --- */
@keyframes pulse-glow { 0%, 100% { box-shadow: 0 20px 40px rgba(168, 85, 247, .35), 0 0 0 1px rgba(255,255,255,.08) inset, 0 0 40px rgba(168, 85, 247, .35);} 50% { box-shadow: 0 26px 56px rgba(168, 85, 247, .55), 0 0 0 1px rgba(255,255,255,.10) inset, 0 0 64px rgba(168, 85, 247, .55);} }
.btn3d {
  --color1: #a855f7; /* violet-500 */
  --color2: #7c3aed; /* violet-600 */
  --glow: 168, 85, 247; /* RGB til glow */
  perspective: 1000px;
  padding: 1.25rem 2.6rem;
  background: linear-gradient(180deg, var(--color1), var(--color2));
  border: none; outline: none;
  font-family: 'Sora', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  font-weight: 800; font-size: 22px; text-transform: uppercase; letter-spacing: 0.14em;
  color: #fff; text-shadow: 0 6px 12px #000;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform .35s ease, filter .2s ease, box-shadow .35s ease, background .35s ease;
  border-radius: 18px; position: relative;
  box-shadow: 0 20px 40px rgba(var(--glow), .35), 0 0 0 1px rgba(255,255,255,.08) inset,
              0 0 40px rgba(var(--glow), .35);
  animation: pulse-glow 3.2s ease-in-out infinite;
}
.btn3d::before { /* bundkant */
  content: ""; width: 100%; height: 16px; background-color: var(--color2);
  position: absolute; bottom: 0; right: 0; transform: rotateX(90deg); transform-origin: bottom;
  border-bottom-left-radius: 18px; border-bottom-right-radius: 18px;
}
.btn3d::after { /* højre kant */
  content: ""; width: 16px; height: 100%; background-color: var(--color1);
  position: absolute; top: 0; right: 0; transform: rotateY(-90deg); transform-origin: right;
  border-top-right-radius: 18px; border-bottom-right-radius: 18px;
}
.btn3d:hover { transform: translateY(-6px) scale(1.05); filter: brightness(1.1); }
.btn3d:active { transform: translateY(-1px) scale(0.99); filter: brightness(0.98); }
.btn3d:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(255,255,255,.18), 0 0 0 8px rgba(var(--glow), .55); }

/* Shine effekt */
.btn3d .shine { position:absolute; inset: 0; border-radius: 18px; overflow:hidden; pointer-events:none; }
.btn3d .shine::before {
  content:""; position:absolute; top:-120%; left:-30%; width:40%; height:240%; transform: rotate(25deg);
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.35) 50%, rgba(255,255,255,0) 100%);
  animation: shine-move 2.6s ease-in-out infinite;
}
@keyframes shine-move { 0% { left:-30%; } 50% { left:80%; } 100% { left:-30%; } }
@media (prefers-reduced-motion: reduce) { .btn3d, .btn3d .shine::before { animation: none; } }

/* --- Uiverse Card Style (til produktbokse) --- */
.card {
  width: 100%;
  height: 100%;
  min-height: 360px;
  padding: 32px; /* mere luft */
  color: white;
  background: linear-gradient(#151515, #151515) padding-box,
              linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* lodret luft mellem elementer */
  cursor: pointer;
  transition: transform 0.45s ease, box-shadow 0.45s ease;
  line-height: 1.75; /* mere læsbarhed */
  box-shadow: 0 14px 28px rgba(0,0,0,.35);
}
.card .main-content { flex: 1; }
.card .heading {
  font-size: 24px;
  margin: 8px 0 14px;
  font-weight: 800;
  color: #e5e7eb;
}
.card .desc {
  font-size: 16px;
  color: #d1d5db;
  margin-bottom: 22px; /* ekstra luft under teksten */
}
.card .categories { display: flex; gap: 10px; flex-wrap: wrap; }
.card .categories span {
  background-color: #e81cff;
  padding: 6px 12px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 999px;
}
.card .footer { font-weight: 600; color: #9ca3af; }
.card:hover { transform: translateY(-10px) scale(1.03); box-shadow: 0 20px 44px rgba(0,0,0,.45); }
                    `}
                </style>
            </Helmet>

            <div className="min-h-screen bg-black text-white">
                <Navigation />

                <main className="pt-24 pb-24">{/* lidt ekstra bund-luft */}
                    <section className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-violet-200 mb-5">
                            Produkter
                        </h1>
                        <p className="text-white/80 mb-14 max-w-2xl mx-auto">
                            Vælg den løsning der passer din virksomhed. Alle pakker kan tilpasses.
                        </p>

                        {/* 1) PRODUKTBOKSE (Uiverse-stil, mere luft) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-left">
                            {products.map((p, idx) => (
                                <div key={idx} className="card">
                                    <div className="main-content">
                                        <p className="heading">{p.title}</p>
                                        <p className="desc">{p.desc}</p>
                                        <div className="categories">
                                            {p.categories.map((c, i) => (
                                                <span key={i}>{c}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="footer">by {p.author}</div>
                                </div>
                            ))}
                        </div>

                        {/* 2) KNAP UNDER PRODUKTBOKSE – flottere med effekt */}
                        <div className="mt-2 mb-20">
                            <Link to={{ pathname: "/", hash: "#kontakt" }} aria-label="Gå til kontaktformular">
                                <button className="btn3d">
                                    <span className="relative z-10">Kontakt os</span>
                                    <span className="shine" aria-hidden />
                                </button>
                            </Link>
                        </div>

                        {/* 3) 9 KORT EFTER – roterende (beholdt) */}
                        <div className="relative h-[460px]">
                            <div className="uiverse-wrapper">
                                <div className="uiverse-inner" style={{ ["--quantity" as any]: cards.length }}>
                                    {cards.map((c, idx) => (
                                        <div key={idx} className="uiverse-card" style={{ ["--index" as any]: idx, ["--color-card" as any]: c.color }}>
                                            <div className="uiverse-img" />
                                            <span className="uiverse-label">{c.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
