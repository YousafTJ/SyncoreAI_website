import { useState } from "react";
import {
    Send,
    User,
    Building,
    Mail,
    MessageSquare,
    Loader2,
    CheckCircle,
    XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const WEBHOOK_URL =
    "https://syncoreai.app.n8n.cloud/webhook-test/0acdf107-5778-4571-ab05-62b27db697b1";


export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [accepted, setAccepted] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!accepted) return;
        setStatus("loading");

        try {
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error(res.statusText);

            setStatus("success");
            setFormData({ name: "", company: "", email: "", message: "" });
            setAccepted(false);
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 6000);
        }
    };

    return (
        <section id="contact" className="section-padding bg-black">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                        Lad os <span className="text-violet-300">tale sammen</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                        Har du spørgsmål til vores AI-agenter eller automation? Udfyld
                        formularen – vi svarer hurtigst muligt.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl p-8 md:p-10 bg-[#0b0b11]/80 backdrop-blur-md border-2 border-violet-300/60 shadow-[0_24px_70px_rgba(0,0,0,.55)] ring-1 ring-violet-200/40">
                    {status === "success" && (
                        <Banner type="success" text="Besked sendt! Vi vender tilbage ASAP." />
                    )}
                    {status === "error" && (
                        <Banner type="error" text="Noget gik galt – prøv igen." />
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* navn + firma */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input
                                icon={User}
                                id="name"
                                label="Navn *"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Dit fulde navn"
                            />
                            <Input
                                icon={Building}
                                id="company"
                                label="Virksomhed *"
                                required
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Virksomhedsnavn"
                            />
                        </div>

                        {/* email */}
                        <Input
                            icon={Mail}
                            id="email"
                            type="email"
                            label="E-mail *"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="din@email.dk"
                        />

                        {/* besked */}
                        <Textarea
                            id="message"
                            label="Spørgsmål / behov *"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Beskriv dine ønsker til AI-løsning, automations-idéer …"
                            rows={4} // kortere for mindre højde
                        />

                        {/* PRIVACY */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={accepted}
                                onChange={() => setAccepted((v) => !v)}
                                className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-violet-300/80 bg-black/40 text-violet-500 focus:ring-violet-400 accent-violet-500"
                                required
                            />
                            <label htmlFor="privacy" className="text-sm text-white/90">
                                Jeg har læst og accepterer{" "}
                                <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                    className="text-violet-200 underline hover:text-white"
                                >
                                    privatpolitikken
                                </Link>
                            </label>
                        </div>

                        {/* knap */}
                        <div className="flex justify-center pt-2">
                            <button
                                type="submit"
                                disabled={status === "loading" || !accepted}
                                className="inline-flex items-center gap-2 px-10 py-3.5 text-lg font-semibold rounded-xl
                  bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500
                  text-white shadow-[0_12px_30px_rgba(124,58,237,.40)]
                  focus:outline-none focus:ring-2 focus:ring-white/70
                  disabled:opacity-60 transition"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sender…</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send besked</span>
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* kontakt-info */}
                    <div className="mt-10 pt-6 border-t-2 border-violet-300/50">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <Info icon={Mail} title="E-mail" text="info@syncore-ai.dk" />
                            <Info icon={MessageSquare} title="Responstid" text="Inden for 5 min" />
                            <Info icon={User} title="Gratis konsultation" text="30 min strategi-møde" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Genbrugskomponenter (kontrast + tydelig border) ---------- */
function Input({
                   icon: Icon,
                   id,
                   label,
                   ...rest
               }: {
    icon: any;
    id: string;
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="flex items-center gap-2 text-sm font-semibold text-white"
            >
                <Icon size={16} className="text-white" />
                <span>{label}</span>
            </label>
            <input
                id={id}
                name={id}
                className="w-full px-4 py-3 rounded-xl
          bg-[#0c0c12]/70 border-2 border-violet-300/70
          text-white placeholder-white/60
          focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-white
          transition"
                {...rest}
            />
        </div>
    );
}

function Textarea({
                      id,
                      label,
                      rows = 4,
                      ...rest
                  }: {
    id: string;
    label: string;
    rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="flex items-center gap-2 text-sm font-semibold text-white"
            >
                <MessageSquare size={16} className="text-white" />
                <span>{label}</span>
            </label>
            <textarea
                id={id}
                name={id}
                rows={rows}
                className="w-full px-4 py-3 rounded-xl
          bg-[#0c0c12]/70 border-2 border-violet-300/70
          text-white placeholder-white/60
          focus:outline-none focus:ring-2 focus:ring-white/70 focus:border-white
          transition resize-none"
                {...rest}
            />
        </div>
    );
}

function Info({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
    return (
        <div className="space-y-2">
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto
        bg-violet-700/30 border-2 border-violet-300/70"
            >
                <Icon className="text-white" size={20} />
            </div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-white/85">{text}</p>
        </div>
    );
}

function Banner({ type, text }: { type: "success" | "error"; text: string }) {
    const Icon = type === "success" ? CheckCircle : XCircle;
    const colors =
        type === "success"
            ? "bg-emerald-500/15 text-emerald-200 border-2 border-emerald-300/70"
            : "bg-rose-500/15 text-rose-200 border-2 border-rose-300/70";
    return (
        <div className={`mb-5 flex items-center gap-2 px-4 py-3 rounded-xl ${colors}`}>
            <Icon size={18} />
            {text}
        </div>
    );
}
