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
                    content="Mød holdet bag Syncore AI – eksperter i AI-agenter og automatisering, der frigør tid, øger salg og skaber effektivitet for moderne virksomheder."
                />
            </Helmet>

            <div className="bg-white text-gray-900 min-h-screen">
                <Navigation />

                <main>
                    {/* HERO */}
                    <header className="pt-28 pb-14 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
                            Mød{" "}
                            <span className="text-violet-700">
                Syncore&nbsp;AI
              </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                            To digitale specialister med ét mål: at automatisere dine
                            processer og frigøre tid – via AI-agenter, der arbejder for dig
                            døgnet rundt.
                        </p>
                        <Button
                            className="px-8 py-4 text-lg rounded-xl font-semibold
                bg-violet-700 text-white
                shadow-md hover:bg-violet-800 transition-all"
                            onClick={() => navigate("/")}
                        >
                            Til forsiden
                        </Button>
                    </header>

                    {/* TILGANG */}
                    <section className="py-14">
                        <div className="max-w-5xl mx-auto px-6 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Vores tilgang
                            </h2>
                            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                                <strong>Dialog → Analyse → Løsning</strong>. Vi kortlægger jeres
                                arbejdsgange, bygger en AI-løsning og drifter den – så I sparer{" "}
                                <strong>20–30 timer hver måned</strong>.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 mt-14 max-w-5xl mx-auto px-6">
                            {/* Hvad vi gør */}
                            <article
                                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm
                hover:shadow-md transition"
                            >
                                <Users className="text-violet-700 w-10 h-10 mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold mb-4 text-center">
                                    Hvad vi gør
                                </h3>
                                <ul className="space-y-3 text-gray-700 text-left list-disc pl-5 leading-relaxed marker:text-violet-700">
                                    <li>
                                        Skaber en løsning som giver dig{" "}
                                        <strong>mere frihed og fritid</strong>
                                    </li>
                                    <li>
                                        Forbedrer kundeoplevelsen og{" "}
                                        <strong>besparer 20–30 timer</strong>
                                    </li>
                                    <li>Skaber <strong>bedre struktur</strong> og orden</li>
                                    <li>
                                        Giver <strong>hurtigere responstid</strong> – som konverterer
                                        flere kunder
                                    </li>
                                    <li>
                                        Transformer din forretning til en{" "}
                                        <strong>super-virksomhed</strong>
                                    </li>
                                </ul>
                            </article>

                            {/* Hvorfor vælge os */}
                            <article
                                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm
                hover:shadow-md transition"
                            >
                                <Rocket className="text-fuchsia-600 w-10 h-10 mb-4 mx-auto" />
                                <h3 className="text-xl font-semibold mb-4 text-center">
                                    Hvorfor vælge os?
                                </h3>
                                <ul className="space-y-3 text-gray-700 text-left list-disc pl-5 leading-relaxed marker:text-fuchsia-600">
                                    <li>Alt er skræddersyet – ingen one-size-fits-all</li>
                                    <li>Vi bygger, drifter <em>og</em> skalerer løsningen for jer</li>
                                    <li>Dokumenteret tidsbesparelse og klar ROI</li>
                                    <li>Klar, menneskelig kommunikation – nul buzzwords</li>
                                </ul>
                            </article>
                        </div>
                    </section>

                    {/* TEAM */}
                    <section className="py-14">
                        <div className="max-w-5xl mx-auto text-center px-6">
                            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                                Mini-team, maks impact
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                </main>

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
    const border =
        color === "violet"
            ? "border-violet-200 hover:border-violet-400"
            : "border-fuchsia-200 hover:border-fuchsia-400";
    const accent = color === "violet" ? "text-violet-700" : "text-fuchsia-600";

    return (
        <article
            className={`p-8 rounded-2xl bg-white border shadow-sm transition hover:shadow-md ${border}`}
        >
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className={`${accent} mb-5 font-medium`}>{role}</p>

            <ul className="space-y-3 text-left text-gray-700">
                {bulletItems.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Icon className={accent} size={18} />
                        <span>{text}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex items-center justify-center gap-2 text-gray-800 font-medium">
                <Phone size={18} className={accent} />
                <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="underline underline-offset-4 hover:text-gray-900"
                >
                    {phone}
                </a>
            </div>
        </article>
    );
}
