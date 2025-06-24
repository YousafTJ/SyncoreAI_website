import { AgentCard } from './AgentCard';

export function CoreServices() {
  const agents = [
    {
      name: "Leonardo",
      title: "Sales Agent",
      description: "Automatiserer HELE salgsrejsen, 24/7.",
      emoji: "🟦",
      avatarGradient: "avatar-gradient-blue",
      modules: [
        "Lead Hunt & Qualify – finder og sorterer leads, høj ICP-score",
        "AI Form-Responder – autosvar + møde­booking på indkomne formularer",
        "One-Click Mail Sender – skriv én sætning → personlig e-mail sendes",
        "Smart Website-Chat – svarer, kvalificerer, booker møder",
        "Sales Script Generator – pitch, pain-points & benefits klar til samtalen",
        "ROI & Deal Forecasting – vurderer CLV, forudsiger lukkesandsynlighed",
        "Performance Reporter – ugentlig rapport: leads, møder, salg, prognose",
        "Win-Back Engine – genaktiverer kolde eller tabte kunder"
      ]
    },
    {
      name: "Imran",
      title: "Accounting Agent",
      description: "Optimerer regnskab & rapportering, reducerer tastearbejde.",
      emoji: "🟪",
      avatarGradient: "avatar-gradient-purple",
      modules: [
        "Payroll Import – henter og validerer løndata automatisk",
        "Deadline Reminder – varsler moms, løn, årsrapport, bilagsmangler",
        "Monthly KPI Report – beregner 12+ nøgletal, forklarer i almindeligt sprog",
        "Accounting Chatbot – forklarer nøgletal, benchmarking, next steps",
        "Onboarding + KYC – indsamler data, opretter kunde, kontrakt-signering",
        "Annual Report Builder – klargør årsrapport klar til indsendelse"
      ]
    },
    {
      name: "Sophie",
      title: "HR Agent",
      description: "Digital HR-partner der dækker hele medarbejder-livscyklussen.",
      emoji: "🟩",
      avatarGradient: "avatar-gradient-green",
      modules: [
        "Talent Screener – scorer CV/ansøgning, fremhæver styrker & svagheder",
        "Interview Architect – job- & kandidat-specifikke spørgsmål i PDF",
        "Pre- & Onboarding FlowBot – invites, guides, status-dashboard",
        "HR Chat Assistant – svarer på ferie, lønsedler, policies m.m.",
        "Talent Sourcer – identificerer og kontakter relevante kandidater",
        "AutoDoc HR – kontrakter, advarsler, opsigelser genereres & arkiveres",
        "QuickMail HR – én linje input → professionel e-mail sendes",
        "Auto-Meeting Planner – finder mødetider på tværs af kalendere",
        "Deadline Nagger – påmindelser om MUS, evalueringer, kursusfrister"
      ]
    },
    {
      name: "Jordan",
      title: "Business Agent",
      description: "Marketing- & driftspartner, fra SEO til lager­optimering.",
      emoji: "🟥",
      avatarGradient: "avatar-gradient-red",
      modules: [
        "SEO Mastermind – løbende analyse, strategi, rapport & alerts",
        "SOME Creator + AutoPoster – AI-tekst + billede, auto-upload & planlægning",
        "UX Tracker & Conversion Strategist – analyserer adfærd, foreslår forbedringer",
        "Competitor Monitor Pro – ugentlig konkurrent-rapport med indsigter",
        "Smart Meeting Booker – finder & booker ledige tidsrum automatisk",
        "Intelligent Auto-Reply & Sentiment Filter – læser mails, svarer korrekt tone, flagger klager",
        "Inventory Optimizer – forudser genbestilling & foreslår leverandører",
        "Market Pulse Tracker – overvåger søgetrends, markedsdata, giver tidlige signaler"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core <span className="gradient-text">AI-Agents</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mød vores intelligente agenter, der hver især specialiserer sig i at automatisere 
            og optimere specifikke forretningsområder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <div key={agent.name} className="slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}