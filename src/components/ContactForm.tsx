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
import { Link } from "react-router-dom";               // ← link til privacy-page

const WEBHOOK_URL =
    "https://hook.eu2.make.com/63q29k6kplybgtb76s6ndpjh1agsu76o";

export function ContactForm() {
    /* ---------------- state ---------------- */
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });
    const [accepted, setAccepted] = useState(false);    // ✔ privatpolitik-check
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    /* --------------- handlers --------------- */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!accepted) return;                            // sikkerheds-tjek
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

    /* ---------------- UI ---------------- */
    return (
        <section id="contact" className="section-padding bg-white">
            <div className="max-w-4xl mx-auto">
                {/* -------- Header -------- */}
                <div className="text-center mb-12 slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                        Lad os <span className="gradient-text">tale sammen</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Har du spørgsmål til vores AI-agenter eller automation? Udfyld
                        formularen – vi svarer hurtigst muligt.
                    </p>
                </div>

                {/* -------- Card -------- */}
                <div className="glass-card p-8 md:p-12 slide-up transition-all duration-300">
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
                                label="Virksomhed"
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
                            label="Spørgsmål / behov"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Beskriv dine ønsker til AI-løsning, automations-idéer …"
                        />

                        {/* PRIVACY-CHECKBOX */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={accepted}
                                onChange={() => setAccepted((v) => !v)}
                                className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                                required
                            />
                            <label htmlFor="privacy" className="text-sm text-gray-600">
                                Jeg har læst og accepterer&nbsp;
                                <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                    className="text-purple-600 underline hover:text-purple-700"
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
                                className="btn-primary flex items-center gap-2 px-12 py-4 text-lg disabled:opacity-60"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Sender…</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Besked</span>
                                        <Send size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* kontakt-info */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
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
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
                <Icon size={16} className="text-purple-600" />
                <span>{label}</span>
            </label>
            <input
                id={id}
                name={id}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                {...rest}
            />
        </div>
    );
}

function Textarea({
                      id,
                      label,
                      ...rest
                  }: {
    id: string;
    label: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={id}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
                <MessageSquare size={16} className="text-purple-600" />
                <span>{label}</span>
            </label>
            <textarea
                id={id}
                name={id}
                rows={6}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                {...rest}
            />
        </div>
    );
}

function Info({
                  icon: Icon,
                  title,
                  text,
              }: {
    icon: any;
    title: string;
    text: string;
}) {
    return (
        <div className="space-y-2">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                <Icon className="text-white" size={20} />
            </div>
            <h4 className="font-semibold text-gray-800">{title}</h4>
            <p className="text-gray-600">{text}</p>
        </div>
    );
}

function Banner({
                    type,
                    text,
                }: {
    type: "success" | "error";
    text: string;
}) {
    const Icon = type === "success" ? CheckCircle : XCircle;
    const colors =
        type === "success"
            ? "bg-green-50 text-green-700"
            : "bg-red-50 text-red-700";
    return (
        <div className={`mb-6 flex items-center gap-2 px-4 py-3 rounded-xl ${colors}`}>
            <Icon size={18} />
            {text}
        </div>
    );
}
