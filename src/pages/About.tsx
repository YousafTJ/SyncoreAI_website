// src/pages/About.tsx
import { Helmet } from "react-helmet";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Om os | Syncore AI</title>
                <meta
                    name="description"
                    content="Mød holdet bag Syncore AI – to unge digitale eksperter, som frigør virksomheder fra manuelle opgaver med skræddersyet automatisering."
                />
            </Helmet>

            <div className="bg-white">
                <Navigation />

                {/* ---------------- HERO ---------------- */}
                <section className="section-padding bg-white text-center slide-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
                        Mød <span className="gradient-text">Syncore&nbsp;AI</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        To digitale specialister med ét mål: at automatisere dine processer og frigøre tid –
                        gennem AI‑agenter, der arbejder for dig døgnet rundt.
                    </p>
                    {/* Lilla outline‑knap */}
                    <Button
                        variant="secondary"
                        className="border-2 border-indigo-600 text-indigo-600 bg-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:bg-indigo-50 hover:shadow-md"
                        onClick={() => navigate("/")}
                    >
                        Til forsiden
                    </Button>
                </section>

                {/* ---------------- TILGANG ---------------- */}
                <section className="bg-gray-50 section-padding">
                    <div className="max-w-5xl mx-auto px-6 text-center slide-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Vores tilgang
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Dialog → Analyse → Løsning. Vi kortlægger dine arbejdsgange, bygger en AI‑løsning der
                            passer til jeres behov og drifter det hele for jer – så I sparer <strong>20–30&nbsp;timer</strong> hver måned.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 mt-16 max-w-5xl mx-auto px-6">
                        {/* Hvad vi automatiserer */}
                        <div className="glass-card p-8 hover:shadow-xl transition slide-up">
                            <Users className="text-purple-500 w-10 h-10 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hvad vi automatiserer</h3>
                            <ul className="text-gray-600 space-y-2 text-left list-disc list-inside">
                                <li>
                                    <strong>Leonardo – Sales&nbsp;& outreach:</strong> Lead‑sourcing, automatiske intro‑mails,
                                    LinkedIn‑outreach og mødebooking.
                                </li>
                                <li>
                                    <strong>Imran – Accounting:</strong> Henter bilag, bogfører, laver nøgletals‑rapporter og sender
                                    deadline‑påmindelser.
                                </li>
                                <li>
                                    <strong>Jordan – Marketing & SEO:</strong> SEO‑analyse, AI‑content til sociale medier,
                                    konkurrentovervågning og market insights.
                                </li>
                                <li>
                                    <strong>Andrew – Full‑stack automation:</strong> Kombinerer salg, kundeservice, SEO og rapportering
                                    i én alt‑i‑én agent.
                                </li>
                                <li>
                                    <strong>Kundeservice 24/7:</strong> AI‑chat & mail på web, IG, Messenger og WhatsApp – inkl.
                                    ordresporing og produktanbefalinger.
                                </li>
                            </ul>
                        </div>

                        {/* Hvorfor vælge os */}
                        <div className="glass-card p-8 hover:shadow-xl transition slide-up delay-100">
                            <Rocket className="text-cyan-500 w-10 h-10 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hvorfor vælge os?</h3>
                            <ul className="text-gray-600 space-y-2 text-left list-disc list-inside">
                                <li>Alt er skræddersyet – ingen one‑size‑fits‑all</li>
                                <li>Vi bygger, drifter <em>og</em> skalerer løsningen for jer</li>
                                <li>Dokumenteret tidsbesparelse og ROI hos eksisterende kunder</li>
                                <li>Klar, menneskelig kommunikation – nul buzzwords</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ---------------- TEAM ---------------- */}
                <section className="section-padding bg-white">
                    <div className="max-w-4xl mx-auto text-center slide-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                            Mini‑team, maks impact
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {["Yousaf Javaid", "Kemal Comert"].map((name) => (
                                <div
                                    key={name}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 ring-1 ring-purple-100 hover:shadow-xl transition text-center"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
                                    <p className="text-purple-600 mb-4">Co‑founder / AI‑udvikler</p>
                                    <p className="text-gray-600">
                                        Kombinationen af softwareengineering og kommerciel forståelse sikrer, at vores løsninger både
                                        virker teknisk og skaber forretningsværdi.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
