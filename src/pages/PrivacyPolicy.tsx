// src/pages/PrivacyPolicy.tsx
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
  return (
      <div className="min-h-screen bg-white text-black">
        <Navigation />

        <main className="pt-28 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-violet-700">
              Privatlivspolitik
            </h1>

            <div className="rounded-2xl bg-white border border-violet-200 p-8 md:p-12 space-y-10 shadow-lg">
              {/* Indledning */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  1. Indledning
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  SyncoreAI respekterer dit privatliv. Denne politik forklarer,
                  hvordan vi indsamler, bruger og beskytter personoplysninger, når
                  du benytter vores hjemmeside og tjenester.
                </p>
              </section>

              {/* Oplysninger */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  2. Hvilke oplysninger indsamler vi?
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-600">
                      Personoplysninger
                    </h3>
                    <p>Oplysninger du frivilligt sender via formularer eller chat:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 marker:text-violet-500">
                      <li>Navn</li>
                      <li>E-mailadresse</li>
                      <li>Beskedindhold</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-600">
                      Ingen automatisk dataindsamling
                    </h3>
                    <p>
                      Vi indsamler ikke IP-adresser eller tekniske oplysninger
                      automatisk. Behandling sker kun via de værktøjer, vi bruger
                      til at levere vores service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Brug af data */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  3. Hvad bruger vi oplysninger til?
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-violet-500">
                  <li>Besvare henvendelser og forespørgsler</li>
                  <li>Levere vores AI-agent ydelser</li>
                  <li>Forbedre hjemmeside og services</li>
                  <li>Sende opdateringer (kun med samtykke)</li>
                  <li>Overholde juridiske forpligtelser</li>
                </ul>
              </section>

              {/* Deling */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  4. Deling af oplysninger
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vi videresælger ikke dine oplysninger og deler dem ikke til
                  markedsføring. Oplysninger deles kun med nødvendige
                  databehandlere for at levere din ønskede service.
                </p>
              </section>

              {/* Sikkerhed */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  5. Datasikkerhed
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vi anvender passende tekniske og organisatoriske
                  sikkerhedsforanstaltninger mod uautoriseret adgang og misbrug af
                  personoplysninger.
                </p>
              </section>

              {/* Rettigheder */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  6. Dine rettigheder (GDPR)
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-violet-500">
                  <li>Indsigt, berigtigelse og sletning</li>
                  <li>Begrænsning af behandling</li>
                  <li>Dataportabilitet</li>
                  <li>Indsigelsesret</li>
                </ul>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  7. Kontakt
                </h2>
                <p className="text-gray-700 mb-3">
                  Spørgsmål eller ønsker om at udøve rettigheder?
                </p>
                <div className="mt-2 p-4 rounded-xl bg-violet-50 border border-violet-200">
                  <p className="font-medium text-black">SyncoreAI</p>
                  <p className="text-gray-700">E-mail: info@syncore-ai.dk</p>
                  <p className="text-gray-700">Telefon: +45 31 46 95 38</p>
                </div>
              </section>

              {/* Ændringer */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  8. Ændringer
                </h2>
                <p className="text-gray-700">
                  Vi kan opdatere politikken løbende. Væsentlige ændringer
                  offentliggøres her.
                </p>
                <p className="text-gray-500 mt-2">
                  <strong>Sidst opdateret:</strong> Juni 2025
                </p>
              </section>

              {/* Eksterne partnere */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  9. Databehandlere & integrationer
                </h2>
                <p className="text-gray-700 mb-3">
                  For at kunne levere vores tjenester deler vi data med eksterne
                  partnere, der fungerer som databehandlere:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 marker:text-violet-500">
                  <li>
                    <strong>n8n & Make.com:</strong> Automatisering af formularer,
                    notifikationer og workflows
                  </li>
                  <li>
                    <strong>OpenAI API:</strong> Behandling af tekst, generering af
                    svar og forslag
                  </li>
                  <li>
                    <strong>Chatbase.co:</strong> Chatbot-svar og evt.
                    e-mailopsamling
                  </li>
                  <li>
                    <strong>Google Sheets:</strong> Midlertidig registrering af
                    kontaktoplysninger
                  </li>
                  <li>
                    <strong>Google/Microsoft Kalender:</strong> Oprettelse af møder
                    og aftaler
                  </li>
                </ul>
                <p className="text-gray-700 mt-3">
                  Alle partnere arbejder under gyldige databehandleraftaler i
                  overensstemmelse med GDPR. Data opbevares kun, når det er
                  nødvendigt, og slettes regelmæssigt.
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
