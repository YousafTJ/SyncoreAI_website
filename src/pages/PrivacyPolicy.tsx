// src/pages/PrivacyPolicy.tsx
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
  return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <main className="pt-28 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
              Privatlivspolitik
            </span>
            </h1>

            <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-violet-500/30 backdrop-blur p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">1. Indledning</h2>
                <p className="text-white/80 leading-relaxed">
                  SyncoreAI respekterer dit privatliv. Denne politik forklarer, hvordan vi indsamler,
                  bruger og beskytter personoplysninger, når du benytter vores hjemmeside og tjenester.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">2. Hvilke oplysninger indsamler vi?</h2>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Personoplysninger</h3>
                    <p>
                      Oplysninger du frivilligt sender via formularer eller chat:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 marker:text-violet-300">
                      <li>Navn</li>
                      <li>E-mailadresse</li>
                      <li>Beskedindhold</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Ingen automatisk dataindsamling</h3>
                    <p>
                      Vi henter ikke IP-adresser eller tekniske oplysninger automatisk.
                      Behandling sker via de værktøjer, vi bruger til at levere service.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">3. Hvad bruger vi oplysninger til?</h2>
                <p className="text-white/80 leading-relaxed mb-3">
                  Vi behandler dine data for at:
                </p>
                <ul className="list-disc pl-5 text-white/80 space-y-2 marker:text-violet-300">
                  <li>Besvare henvendelser og forespørgsler</li>
                  <li>Levere vores AI-agent ydelser</li>
                  <li>Forbedre hjemmeside og services</li>
                  <li>Sende relevante opdateringer (kun med samtykke)</li>
                  <li>Overholde juridiske forpligtelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">4. Deling af oplysninger</h2>
                <p className="text-white/80 leading-relaxed">
                  Vi videresælger ikke dine oplysninger og deler dem ikke til markedsføring.
                  Oplysninger deles kun med nødvendige databehandlere for at levere din ønskede service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">5. Datasikkerhed</h2>
                <p className="text-white/80 leading-relaxed">
                  Vi anvender passende tekniske og organisatoriske foranstaltninger mod uautoriseret adgang
                  og misbrug af personoplysninger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">6. Dine rettigheder (GDPR)</h2>
                <ul className="list-disc pl-5 text-white/80 space-y-2 marker:text-violet-300">
                  <li>Indsigt, berigtigelse og sletning</li>
                  <li>Begrænsning af behandling</li>
                  <li>Dataportabilitet</li>
                  <li>Indsigelsesret</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">7. Kontakt</h2>
                <p className="text-white/80 leading-relaxed">
                  Spørgsmål eller ønsker om at udøve rettigheder?
                </p>
                <div className="mt-4 p-4 rounded-xl bg-neutral-800/70 ring-1 ring-violet-500/20">
                  <p className="text-white font-medium">SyncoreAI</p>
                  <p className="text-white/80">E-mail: info@syncore-ai.dk</p>
                  <p className="text-white/80">Telefon: +45 31 46 95 38</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">8. Ændringer</h2>
                <p className="text-white/80 leading-relaxed">
                  Vi kan opdatere politikken løbende. Væsentlige ændringer offentliggøres her.
                </p>
                <p className="text-white/60 leading-relaxed mt-2">
                  <strong>Sidst opdateret:</strong> Juni 2025
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">9. Databehandlere & integrationer</h2>
                <p className="text-white/80 leading-relaxed mb-3">
                  For at kunne levere ydelser anvender vi følgende værktøjer:
                </p>
                <ul className="list-disc pl-5 text-white/80 space-y-2 marker:text-violet-300">
                  <li><strong>n8n & Make.com:</strong> Automatisering af formularer, notifikationer og flows</li>
                  <li><strong>OpenAI API:</strong> Generering af svar, forslag og opsummeringer</li>
                  <li><strong>Chatbase.co:</strong> Chatbot svar og evt. e-mailopsamling</li>
                  <li><strong>Google Sheets:</strong> Midlertidig registrering af kontaktoplysninger</li>
                  <li><strong>Kalendere (Google/Microsoft):</strong> Oprettelse af møder</li>
                </ul>
                <p className="text-white/80 leading-relaxed mt-3">
                  Data opbevares kun, når nødvendigt, og slettes regelmæssigt. Partnere er EU-baserede
                  eller arbejder under gyldige databehandleraftaler i overensstemmelse med GDPR.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
