// CoreServices.tsx
import { AgentCard } from "./AgentCard";

export function CoreServices() {
  const agents = [
    // ─────────  LEONARDO  ─────────
    {
      name: "Leonardo",
      title: "Sales Agent",
      image: "/sales.png",
      pitch:
          "Automatiserer hele salgsrejsen – fra første lead til loyal kunde – og arbejder døgnet rundt for at fylde din pipeline.",
      features: [
        "Finder og kvalificerer friske leads - gennem google maps",
        "LinkedIn‑outreach til relevante beslutningstagere",
        "Sender personlige intro-mails til henvendelse gennem formular",
        "Live chat der svarer, kvalificerer og opsætter demo-calls, både over hjemmeside og mail (instagram, messenger og whatsapp kan tilføjes)",
        "Genererer skræddersyede salgsscripts klar til mødet",
        "Sender professionel mail bare ved at du skriver et par ord",
        "Virtuel kundeservice - kunder kan opdatere oplysninger, se ordre, økonomisk status eller andet og meget mere",
      ],
    },

    // ─────────  IMRAN  ─────────
    {
      name: "Imran",
      title: "Accounting Agent",
      image: "/accounting.png",
      pitch:
          "Din digitale revisorassistent, der henter data, laver nøgletals-analyser og holder kunderne i loop – helt automatisk.",
      features: [
        "Henter og validerer løndata – klar til import på få sekunder",
        "Sender automatiske påmindelser om vigtige deadlines",
        "Leverer månedlige rapporter til kunder",
        "Chatbot der besvarer på kunders spørgsmål om deres økonomi - 24/7",
        "Onboarder nye klienter inkl. KYC & kontrakt-signatur",
        "Klargør årsrapporten, så du kun skal godkende",
      ],
    },

    // ─────────  JORDAN  ─────────
    {
      name: "Jordan",
      title: "Business Agent",
      image: "/business.png",
      pitch:
          "Din AI-drevne vækstpartner: løfter SEO, content, UX, lager og markeds­indsigt – så du kan fokusere på forretningen.",
      features: [
        "Skræddersyet SEO-strategi og løbende placering-rapporter",
        "AI-content og grafik – publiceret automatisk på sociale medier",
        "Holder øje med konkurrenter og leverer ugentlige indsigter",
        "Booker møder, så din kalender altid er optimeret",
        "Optimerer lager og indkøb – ingen udsolgte varer eller overkøb",
        "Market Pulse: varsler trends, lovændringer og nye muligheder",
      ],
    },

    // ─────────  ANDREW (PREMIUM)  ─────────
    {
      name: "Andrew",
      title: "Premium Agent",
      image: "/Tristan.png",
      isPremium: true,
      pitch:
          "En alt‑i‑én agent til salg, kundeservice, SEO, SOME, lead‑gen og markeds­indsigt – perfekt til brands, der vil ligge et skridt foran.",
      features: [
        "Virtuel sælger aktiv 24/7 via hjemmesiden",
        "Auto‑besvarer kontaktformularer øjeblikkeligt - øger konverteringsraten med 396%",
        "Auto‑besvarer spørgsmål på web, mail, IG, Messenger & WhatsApp",
        "Guidet produkt­anbefaling tilpasset kundens behov - nemmere beslutningsproces for kunden - mere salg",
        "Månedlige SEO‑rapporter med handlingsklare anbefalinger",
        "Market Pulse: spotter trends og lovændringer før konkurrenterne",
        "Konkurrentovervågning med ugentlige, handlingsklare indsigter",
        "Auto‑booking af møder direkte fra chat og mail",
        "Sender automatiske påmindelser til at fastholde engagement",
        "LinkedIn‑outreach til relevante beslutningstagere",
        "Quick Mail: skriv stikord – Andrew sender professionel mail",
      ],
    },
  ];

  return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Titel og beskrivelse */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Vores <span className="text-indigo-500">AI-Agents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hver agent er specialiseret i at automatisere og optimere et
              forretningsområde, så du kan skalere uden at ansætte flere hænder.
            </p>
          </div>

          {/* Grid med kortene */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 auto-rows-fr">
            {agents.map((agent) => (
                <AgentCard key={agent.name} {...agent} />
            ))}
          </div>
        </div>
      </section>
  );
}
