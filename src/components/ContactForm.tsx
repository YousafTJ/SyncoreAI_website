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

// 🚨 Production webhook
const WEBHOOK_URL =
    "https://syncoreai.app.n8n.cloud/webhook/0acdf107-5778-4571-ab05-62b27db697b1";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [accepted, setAccepted] = useState(false);
    const [status, setStatus] = useState<Status>("idle");

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

            if (!res.ok) throw new Error(await res.text());

            setStatus("success");
            setFormData({ name: "", company: "", email: "", message: "" });
            setAccepted(false);
        } catch (err) {
            console.error("Webhook fejl:", err);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 6000);
        }
    };

    return (
        <section
            id="contact"
            className="section-padding bg-gradient-to-b from-white to-violet-50 py-20"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                        Lad os <span className="text-violet-600">tale sammen</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Har du spørgsmål til vores AI-agenter eller automation? Udfyld
                        formularen – vi svarer hurtigst muligt.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl p-8 md:p-10 bg-white border border-violet-200 shadow-xl">
                    {status === "success" && (
                        <Banner type="success" text="Besked sendt! Vi vender tilbage ASAP." />
                    )}
                    {status === "error" && (
                        <Banner type="error" text="Noget gik galt – prøv igen." />
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* navn + firma */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            rows={4}
                        />

                        {/* PRIVACY */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={accepted}
                                onChange={() => setAccepted((v) => !v)}
                                className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-violet-400 bg-white text-violet-600 focus:ring-violet-500 accent-violet-600"
                                required
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-700">
                                Jeg har læst og accepterer{" "}
                                <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                    className="text-violet-600 underline hover:text-violet-800"
                                >
                                    privatpolitikken
                                </Link>
                            </label>
                        </div>

                        {/* knap */}
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                disabled={status === "loading" || !accepted}
                                className="inline-flex items-center gap-2 px-10 py-3.5 text-lg font-semibold rounded-xl
                bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500
                text-white shadow-lg shadow-violet-300/40
                focus:outline-none focus:ring-2 focus:ring-violet-400
                disabled:opacity-60 transition-transform hover:scale-[1.02]"
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
                    <div className="mt-10 pt-6 border-t border-violet-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <Info icon={Mail} title="E-mail" text="info@syncore-ai.dk" />
                            <Info icon={MessageSquare} title="Responstid" text="Inden for 5 min" />
                            <Info
                                icon={User}
                                title="Gratis konsultation"
                                text="30 min strategi-møde"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Genbrugskomponenter ---------- */
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
                className="flex items-center gap-2 text-sm font-semibold text-gray-800"
            >
                <Icon size={16} className="text-violet-600" />
                <span>{label}</span>
            </label>
            <input
                id={id}
                name={id}
                className="w-full px-4 py-3 rounded-xl
        bg-white border-2 border-violet-200
        text-gray-800 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400
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
                className="flex items-center gap-2 text-sm font-semibold text-gray-800"
            >
                <MessageSquare size={16} className="text-violet-600" />
                <span>{label}</span>
            </label>
            <textarea
                id={id}
                name={id}
                rows={rows}
                className="w-full px-4 py-3 rounded-xl
        bg-white border-2 border-violet-200
        text-gray-800 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400
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
        bg-violet-100 border-2 border-violet-200"
            >
                <Icon className="text-violet-600" size={20} />
            </div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600">{text}</p>
        </div>
    );
}

function Banner({ type, text }: { type: "success" | "error"; text: string }) {
    const Icon = type === "success" ? CheckCircle : XCircle;
    const colors =
        type === "success"
            ? "bg-emerald-50 text-emerald-700 border border-emerald-300"
            : "bg-rose-50 text-rose-700 border border-rose-300";
    return (
        <div
            className={`mb-5 flex items-center gap-2 px-4 py-3 rounded-xl ${colors}`}
        >
            <Icon size={18} />
            {text}
        </div>
    );
}
