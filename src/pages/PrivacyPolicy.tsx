import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const PrivacyPolicy = () => {
  return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-32 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
              <span className="gradient-text">Privatlivspolitik</span>
            </h1>

            <div className="glass-card p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Indledning</h2>
                <p className="text-gray-600 leading-relaxed">
                  SyncoreAI respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger.
                  Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger,
                  når du bruger vores hjemmeside og tjenester.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Hvilke oplysninger indsamler vi?</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Personoplysninger</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vi indsamler kun oplysninger, som du frivilligt giver os via kontaktformularer eller chat, herunder:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                      <li>Navn</li>
                      <li>E-mailadresse</li>
                      <li>Beskedindhold</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-800">Ingen automatisk dataindsamling</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Vi indsamler ikke IP-adresser eller tekniske oplysninger automatisk. Alle oplysninger behandles alene
                      gennem de værktøjer, vi bruger til at levere vores service.
                    </p>
                  </div>
                </div>
              </section>


              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Hvordan bruger vi dine oplysninger?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Vi bruger dine personoplysninger til følgende formål:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>At besvare dine henvendelser og forespørgsler</li>
                  <li>At levere vores AI-agent tjenester</li>
                  <li>At forbedre vores hjemmeside og tjenester</li>
                  <li>At sende dig relevante opdateringer (kun med dit samtykke)</li>
                  <li>At overholde juridiske forpligtelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Deling af oplysninger</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vi deler ikke dine oplysninger med tredjeparter til markedsføring eller videresalg. De oplysninger, du indtaster,
                  deles kun med de tredjepartsværktøjer vi anvender til at levere vores tjenester – som nævnt i afsnit 9 – og udelukkende
                  med formål at besvare din forespørgsel eller levere en ønsket service.
                </p>
              </section>


              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Datasikkerhed</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vi implementerer passende sikkerhedsforanstaltninger for at beskytte dine
                  personoplysninger mod uautoriseret adgang, ændring, offentliggørelse eller ødelæggelse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Dine rettigheder</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I henhold til GDPR har du følgende rettigheder:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Ret til indsigt i dine personoplysninger</li>
                  <li>Ret til berigtigelse af unøjagtige oplysninger</li>
                  <li>Ret til sletning af dine oplysninger</li>
                  <li>Ret til begrænsning af behandling</li>
                  <li>Ret til dataportabilitet</li>
                  <li>Ret til at gøre indsigelse mod behandling</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Kontakt os</h2>
                <p className="text-gray-600 leading-relaxed">
                  Hvis du har spørgsmål om denne privatlivspolitik eller ønsker at udøve dine rettigheder,
                  kan du kontakte os på:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-800 font-medium">SyncoreAI</p>
                  <p className="text-gray-600">E-mail: info@syncore-ai.dk</p>
                  <p className="text-gray-600">Telefon: +45 31 46 95 38</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Ændringer til denne politik</h2>
                <p className="text-gray-600 leading-relaxed">
                  Vi kan opdatere denne privatlivspolitik fra tid til anden. Vi vil informere dig om
                  væsentlige ændringer ved at poste den nye privatlivspolitik på denne side.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>Sidst opdateret:</strong> Juni 2025
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Tredjepartsdatabehandlere og integrationer</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For at kunne levere vores ydelser og automatisere visse processer anvender vi tredjepartsværktøjer.
                  Når du f.eks. indsender en kontaktformular eller bruger vores chatbot, sendes dine oplysninger videre til vores automatiseringsplatforme og AI-værktøjer.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  Vi behandler kun data med det formål at besvare din forespørgsel, sende relevant information eller oprette aftaler – og aldrig til markedsføring uden samtykke.
                  Ingen af dine oplysninger videresælges.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">Vi bruger følgende værktøjer:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>n8n & Make.com:</strong> Automatisering af kontaktformularer, beskeder, notifikationer og flows</li>
                  <li><strong>OpenAI API:</strong> Bruges til at generere svar, forslag, opsummeringer og mødekommunikation</li>
                  <li><strong>Chatbase.co:</strong> Chatbot-løsning der kan indsamle e-mails og give personlige svar via AI</li>
                  <li><strong>Google Sheets:</strong> Bruges til at registrere kontaktoplysninger, samt sende påmindelser</li>
                  <li><strong>Tally:</strong> Formularværktøj som indsamler kundeoplysninger og automatisk videresender dem til revisoren</li>
                  <li><strong>Kalenderintegrationer (Google/Microsoft):</strong> Bruges til at oprette møder og sende bekræftelser</li>
                </ul>

                <p className="text-gray-600 leading-relaxed mt-4">
                  Hvis du skriver til os via formular eller chatbot, kan dine oplysninger midlertidigt blive gemt i Google Sheets for at sikre korrekt behandling og historik.
                  Det sker kun hvis nødvendigt og slettes regelmæssigt.
                </p>

                <p className="text-gray-600 leading-relaxed mt-4">
                  Alle vores partnere er enten placeret i EU eller arbejder under databehandleraftaler og overholder GDPR.
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default PrivacyPolicy;
