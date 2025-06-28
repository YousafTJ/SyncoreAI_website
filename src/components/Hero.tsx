// Hero.tsx
import {
    ArrowRight,
    Bot,
    Zap,
    Clock,
    Users,
    TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

/* --------------- smarte Tailwind-helpers --------------- */
/* Hvis du bruger shadcn/ui’s <Button>, kan du bare erstatte <button> → <Button>. */

export function Hero() {
    /* smooth-scroll til #services (agent-sektionen)  */
    const scrollToAgents = () =>
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

    /* Calendly-link */
    const calendly = "https://calendly.com/syncore-ai-info/30min";

    return (
        <>
            {/* ---------- HERO 1 ---------- */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
                {/* dekorative blobs */}
                <DecorativeBlobs />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                        <span className="gradient-text drop-shadow-lg">SyncoreAI</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                        Digitale AI-medarbejdere der arbejder 24/7 – automatisér processer,
                        øg salget og frigør værdifuld tid.
                    </p>

                    <button
                        onClick={() => window.open(calendly, "_blank")}
                        className="btn-primary flex items-center gap-2 px-10 py-4 text-lg mx-auto mb-16 hover:-translate-y-0.5 transition"
                    >
                        <span>Book strategi-møde</span>
                        <ArrowRight size={20} />
                    </button>

                    {/* benefit-cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Benefit icon={Clock} title="24/7 Automation" text="Altid på arbejde" />
                        <Benefit icon={Zap} title="Øget Effektivitet" text="Fjern manuelle processer" />
                        <Benefit icon={Bot} title="Intelligente Agenter" text="AI der lærer & tilpasser sig" />
                    </div>
                </div>
            </section>

            {/* ---------- HERO 2 ---------- */}
            <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-white">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                    {/* -------- venstre tekst -------- */}
                    <div className="space-y-10 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                            Få digitale medarbejdere som <br />
                            <span className="gradient-text">arbejder døgnet rundt</span>
                        </h2>

                        <p className="text-xl text-gray-600 max-w-xl">
                            SyncoreAI leverer specialiserede AI-agenter, der automatiserer salg,
                            bogføring, HR – og meget mere – så I kan fokusere på kerneforretningen.
                        </p>

                        {/* CTA-knapper */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open(calendly, "_blank")}
                                className="btn-primary text-lg px-8 py-4 shadow-md hover:shadow-lg"
                            >
                                Book gratis møde
                            </button>

                            <button
                                onClick={scrollToAgents}
                                className="btn-secondary text-lg px-8 py-4 border border-indigo-500 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 transition"
                            >
                                Se vores agenter
                            </button>
                        </div>

                        {/* trust-metrics */}
                        <div className="flex items-center space-x-10 pt-8">
                            <Metric value="24/7" label="Automatisering" />
                            <Metric value="40%" label="Tidsbesparelse" />
                            <Metric value="100 %" label="Præcision" />
                        </div>
                    </div>

                    {/* -------- agent-kort -------- */}
                    <AgentShowcase />
                </div>
            </section>
        </>
    );
}

/* ---------------- helper-komponenter ---------------- */

function DecorativeBlobs() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <span className="absolute top-20 left-10 w-24 h-24 gradient-primary rounded-full opacity-20 blur-3xl animate-float" />
            <span
                className="absolute bottom-20 right-12 w-16 h-16 bg-purple-300/40 rounded-full blur-xl animate-float"
                style={{ animationDelay: "1.3s" }}
            />
            <span
                className="absolute top-1/3 right-24 w-12 h-12 bg-indigo-400/40 rounded-full blur-lg animate-float"
                style={{ animationDelay: "2s" }}
            />
        </div>
    );
}

function Benefit({
                     icon: Icon,
                     title,
                     text,
                 }: {
    icon: any;
    title: string;
    text: string;
}) {
    return (
        <div className="group glass-card p-6 text-center hover:shadow-xl transition">
            <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition">
                <Icon size={26} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
        </div>
    );
}

function Metric({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-extrabold gradient-text">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
        </div>
    );
}

function AgentMiniCard({
                           icon: Icon,
                           name,
                           role,
                           desc,
                       }: {
    icon: any;
    name: string;
    role: string;
    desc: string;
}) {
    return (
        <div className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg ring-1 ring-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-white/20 mb-3">
                <Icon className="text-white" size={24} />
            </div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-indigo-200 text-xs mb-1 tracking-wide">{role}</p>
            <p className="text-white/80 text-[11px] leading-snug">{desc}</p>
        </div>
    );
}

function AgentShowcase() {
    return (
        <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 p-10 shadow-2xl ring-1 ring-white/10">
                <span className="absolute inset-0 rounded-3xl bg-white/10 blur-xl" />

                {/* ⬇️  Her er ændringen: text-3xl som basis + sm:/md:/lg/…  */}
                <h3 className="relative z-10 text-white text-3xl sm:text-3xl md:text-4xl font-semibold mb-8 text-center">
                    Mød vores kerne-agenter
                </h3>

                <div className="relative z-10 grid grid-cols-2 gap-6">
                    <AgentMiniCard
                        icon={Bot}
                        name="Leonardo"
                        role="Sales Agent"
                        desc="Finder & kvalificerer leads, booker møder"
                    />
                    <AgentMiniCard
                        icon={Users}
                        name="Imran"
                        role="Accounting Agent"
                        desc="Automatisk bogføring, løn & rapporter"
                    />
                    <AgentMiniCard
                        icon={TrendingUp}
                        name="Jordan"
                        role="Business Agent"
                        desc="SEO, SOME & market-insights"
                    />
                    <AgentMiniCard
                        icon={Clock}
                        name="Andrew"
                        role="Premium Agent"
                        desc="All in one agent, som sælger, markedsfører, SEO-optimerer, laver konkurrentanalyser og markedsanalyser"
                    />
                </div>

                <span className="absolute -bottom-6 inset-x-10 h-16 bg-purple-500/20 blur-2xl rounded-full" />
            </div>
        </div>
    );
}

