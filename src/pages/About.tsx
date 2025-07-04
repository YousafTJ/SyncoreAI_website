// src/pages/About.tsx
import { Helmet } from "react-helmet";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Users, Rocket, Phone, Briefcase, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const kemal = {
        name: "Kemal Comert",
        role: "Salg & markedsføring · Teknisk overvågning",
        phone: "+45 31 46 95 38",
    };

    const yousaf = {
        name: "Yousaf Tahir Javaid",
        role: "Teknisk / AI specialist · Kundemøder",
        phone: "+45 42 75 56 45",
    };

    return (
        <>
            <Helmet>
                <title>Om os | Syncore AI</title>
                <meta
                    name="description"
                    content="Mød holdet bag Syncore AI – vi frigør virksomheder fra manuelle opgaver med skræddersyet AI og automatisering."
                />
            </Helmet>

            <div className="bg-black text-white min-h-screen">
                <Navigation />

                {/* HERO */}
                <section className="pt-28 pb-14 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
                        Mød{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
              Syncore&nbsp;AI
            </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8">
                        To digitale specialister med ét mål: at automatisere dine processer
                        og frigøre tid – via AI-agenter, der arbejder for dig døgnet rundt.
                    </p>
                    <Button
                        className="px-8 py-4 text-lg rounded-xl font-semibold
             bg-gradient-to-r from-violet-600 to-fuchsia-600
             shadow-[0_10px_30px_rgba(124,58,237,0.35)]
             hover:shadow-[0_14px_40px_rgba(124,58,237,0.5)] transition-all"
                        onClick={() => navigate("/")}
                    >
                        Til forsiden
                    </Button>
                </section>

                {/* TILGANG */}
                <section className="py-14">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Vores tilgang</h2>
                        <p className="text-white/80 text-lg max-w-3xl mx-auto">
                            Dialog → Analyse → Løsning. Vi kortlægger jeres arbejdsgange,
                            bygger en AI-løsning, og drifter den – så I sparer{" "}
                            <strong className="text-white">20–30&nbsp;timer</strong> hver måned.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 mt-14 max-w-5xl mx-auto px-6">
                        {/* Hvad vi gør */}
                        <div
                            className="p-8 rounded-2xl bg-neutral-900/70
               ring-1 ring-violet-500/30 backdrop-blur
               hover:ring-violet-400/50 hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)]
               transition overflow-hidden"
                        >
                            <Users className="text-violet-300 w-10 h-10 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-4 text-center">Hvad vi gør</h3>

                            <ul
                                className="space-y-3 text-white/85 text-left list-disc pl-5 md:pl-6
                 break-words hyphens-auto leading-[1.65] text-[15.5px] md:text-base marker:text-violet-300"
                            >
                                <li>
                                    Skaber en løsning som giver dig <strong>mere frihed og fritid</strong>
                                </li>
                                <li>
                                    Forbedrer kundeoplevelsen og{" "}
                                    <strong>besparer 20–30 timer</strong>
                                </li>
                                <li>Skaber <strong>bedre struktur</strong> og orden</li>
                                <li>
                                    Giver <strong>hurtigere responstid</strong> – som konverterer flere kunder
                                </li>
                                <li>
                                    Transformer din forretning til en{" "}
                                    <strong>super-virksomhed</strong>
                                </li>
                            </ul>
                        </div>

                        {/* Hvorfor vælge os */}
                        <div
                            className="p-8 rounded-2xl bg-neutral-900/70
               ring-1 ring-fuchsia-500/30 backdrop-blur
               hover:ring-fuchsia-400/50 hover:shadow-[0_20px_60px_rgba(217,70,239,0.22)]
               transition"
                        >
                            <Rocket className="text-fuchsia-300 w-10 h-10 mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                Hvorfor vælge os?
                            </h3>
                            <ul className="space-y-3 text-white/85 text-left list-disc pl-5 md:pl-6 leading-[1.65] text-[15.5px] md:text-base marker:text-fuchsia-300">
                                <li>Alt er skræddersyet – ingen one-size-fits-all</li>
                                <li>
                                    Vi bygger, drifter <em>og</em> skalerer løsningen for jer
                                </li>
                                <li>Dokumenteret tidsbesparelse og klar ROI</li>
                                <li>Klar, menneskelig kommunikation – nul buzzwords</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* TEAM */}
                <section className="py-14">
                    <div className="max-w-5xl mx-auto text-center px-6">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10">
                            Mini-team, maks impact
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Yousaf */}
                            <TeamCard
                                name={yousaf.name}
                                role={yousaf.role}
                                phone={yousaf.phone}
                                color="violet"
                                bulletItems={[
                                    { icon: Cpu, text: "Design & udvikling af AI-agenter" },
                                    { icon: Briefcase, text: "Teknisk sparring & kundemøder" },
                                ]}
                            />

                            {/* Kemal */}
                            <TeamCard
                                name={kemal.name}
                                role={kemal.role}
                                phone={kemal.phone}
                                color="fuchsia"
                                bulletItems={[
                                    { icon: Briefcase, text: "Salg, markedsføring & GTM" },
                                    { icon: Cpu, text: "Teknisk overvågning & drift" },
                                ]}
                            />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

/* --- Hjælpekomponent til teamkort --- */
function TeamCard({
                      name,
                      role,
                      phone,
                      color = "violet",
                      bulletItems,
                  }: {
    name: string;
    role: string;
    phone: string;
    color?: "violet" | "fuchsia";
    bulletItems: { icon: any; text: string }[];
}) {
    const ring =
        color === "violet"
            ? "ring-violet-500/30 hover:ring-violet-400/50"
            : "ring-fuchsia-500/30 hover:ring-fuchsia-400/50";
    const badge = color === "violet" ? "text-violet-300" : "text-fuchsia-300";

    return (
        <div
            className={`p-8 rounded-2xl bg-neutral-900/70 ring-1 backdrop-blur transition
        hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)] ${ring}`}
        >
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className={`${badge} mb-5`}>{role}</p>

            <ul className="space-y-3 text-left text-white/80">
                {bulletItems.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Icon className={`${badge}`} size={18} />
                        <span>{text}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
                <Phone size={18} className={badge} />
                <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="underline decoration-1 underline-offset-4 hover:text-white"
                >
                    {phone}
                </a>
            </div>
        </div>
    );
}
