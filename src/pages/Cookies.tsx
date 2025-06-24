import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            <span className="gradient-text">Cookie Politik</span>
          </h1>
          
          <div className="glass-card p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Hvad er cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger 
                en hjemmeside. De hjælper hjemmesiden med at huske dine præferencer og forbedre din 
                brugeroplevelse ved fremtidige besøg.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Hvordan bruger vi cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SyncoreAI bruger cookies til følgende formål:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Nødvendige cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Disse cookies er essentielle for hjemmesidens grundlæggende funktioner og kan ikke 
                    deaktiveres. De inkluderer:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Session-cookies for at opretholde din forbindelse</li>
                    <li>Sikkerhedscookies for at beskytte mod svindel</li>
                    <li>Funktionalitetscookies for at huske dine præferencer</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Analytiske cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Vi bruger analytiske cookies til at forstå, hvordan besøgende interagerer med vores 
                    hjemmeside. Dette hjælper os med at forbedre brugeroplevelsen. Disse cookies indsamler 
                    anonyme oplysninger om:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Antal besøgende og sidevisninger</li>
                    <li>Hvor længe brugere opholder sig på siden</li>
                    <li>Hvilke sider der er mest populære</li>
                    <li>Trafikkilder og brugeradfærd</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Marketing cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Disse cookies bruges til at vise relevante annoncer og måle effektiviteten af vores 
                    marketingkampagner. De kan også bruges til at:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>Spore konverteringer fra annoncer</li>
                    <li>Personalisere indhold baseret på dine interesser</li>
                    <li>Forhindre, at du ser den samme annonce for mange gange</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Tredjepartscookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vi kan bruge tjenester fra tredjeparter, der sætter deres egne cookies. Disse inkluderer:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> For at analysere hjemmesidens trafik og brugeradfærd</li>
                <li><strong>Google Ads:</strong> For at spore konverteringer og optimere annoncer</li>
                <li><strong>Facebook Pixel:</strong> For at måle effektiviteten af Facebook-annoncer</li>
                <li><strong>LinkedIn Insight Tag:</strong> For at spore LinkedIn-kampagner</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Sådan administrerer du cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Browserindstillinger</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Du kan kontrollere og slette cookies gennem din browsers indstillinger. 
                    Bemærk, at deaktivering af cookies kan påvirke hjemmesidens funktionalitet.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Cookie-banner</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Når du første gang besøger vores hjemmeside, vil du se et cookie-banner, 
                    hvor du kan vælge, hvilke typer cookies du vil acceptere.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Opt-out links</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Du kan fravælge specifikke tredjepartstjenester ved at bruge følgende links:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics opt-out</a></li>
                    <li><a href="https://www.facebook.com/settings?tab=ads" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Facebook annonceindstillinger</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Cookie-varighed</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Session cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Disse cookies slettes automatisk, når du lukker din browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">Persistente cookies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Disse cookies forbliver på din enhed i en bestemt periode (typisk 1-24 måneder) 
                    eller indtil du sletter dem manuelt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Kontakt os</h2>
              <p className="text-gray-600 leading-relaxed">
                Hvis du har spørgsmål om vores brug af cookies, kan du kontakte os på:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-800 font-medium">SyncoreAI</p>
                <p className="text-gray-600">E-mail: kontakt@syncoreai.dk</p>
                <p className="text-gray-600">Telefon: +45 12 34 56 78</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Ændringer til denne politik</h2>
              <p className="text-gray-600 leading-relaxed">
                Vi kan opdatere denne cookie-politik fra tid til anden for at afspejle ændringer 
                i vores praksis eller af andre operationelle, juridiske eller regulatoriske årsager.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Sidst opdateret:</strong> Januar 2024
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;