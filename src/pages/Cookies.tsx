// src/pages/Cookies.tsx
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Cookies() {
  return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <main className="pt-28 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
              Cookiepolitik
            </span>
            </h1>

            <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-violet-500/30 backdrop-blur p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">1. Hvad er cookies?</h2>
                <p className="text-white/80 leading-relaxed">
                  Cookies er små tekstfiler, der gemmes på din enhed, når du besøger en hjemmeside.
                  De hjælper med at huske indstillinger og forbedre din oplevelse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-violet-200">2. Hvordan bruger vi cookies?</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  SyncoreAI bruger cookies til følgende formål:
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-fuchsia-200">Nødvendige cookies</h3>
                    <p className="text-white/80 leading-relaxed">
                      Essentielle for grundlæggende funktioner og kan ikke deaktiveres.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-white/80 space-y-1 marker:text-violet-300">
                      <li>Session-cookies</li>
                      <li>Sikkerhedscookies</li>
                      <li>Funktionalitetscookies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-fuchsia-200">Analytiske cookies</h3>
                    <p className="text-white/80 leading-relaxed">
                      Hjælper os med at forstå brug og forbedre siden.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-white/80 space-y-1 marker:text-violet-300">
                      <li>Besøg og sidevisninger</li>
                      <li>Opholdstid og navigation</li>
                      <li>Mest populære sider</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-fuchsia-200">Marketing cookies</h3>
                    <p className="text-white/80 leading-relaxed">
                      Viser relevante annoncer og måler kampagner.
                    </p>
                    <ul className="list-disc pl-5 mt-2 text-white/80 space-y-1 marker:text-violet-300">
                      <li>Konverteringssporing</li>
                      <li>Relevans & frekvensstyring</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">3. Tredjepartscookies</h2>
                <p className="text-white/80 leading-relaxed mb-3">
                  Vi kan benytte følgende tjenester, som sætter egne cookies:
                </p>
                <ul className="list-disc pl-5 text-white/80 space-y-2 marker:text-violet-300">
                  <li><strong>Google Analytics:</strong> Trafik & adfærdsanalyse</li>
                  <li><strong>Google Ads:</strong> Konverteringssporing</li>
                  <li><strong>Facebook Pixel:</strong> Kampagnemåling</li>
                  <li><strong>LinkedIn Insight Tag:</strong> B2B-kampagner</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">4. Sådan administrerer du cookies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Browserindstillinger</h3>
                    <p className="text-white/80 leading-relaxed">
                      Du kan slette eller blokere cookies i din browser. Bemærk, at visse funktioner kan påvirkes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Cookie-banner</h3>
                    <p className="text-white/80 leading-relaxed">
                      Ved første besøg kan du vælge, hvilke typer cookies du accepterer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Opt-out links</h3>
                    <p className="text-white/80 leading-relaxed mb-2">
                      Fravælg udvalgte tjenester her:
                    </p>
                    <ul className="list-disc pl-5 text-white/80 space-y-1 marker:text-violet-300">
                      <li>
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            className="text-violet-300 hover:text-violet-200 underline"
                            target="_blank" rel="noreferrer"
                        >
                          Google Analytics opt-out
                        </a>
                      </li>
                      <li>
                        <a
                            href="https://www.facebook.com/settings?tab=ads"
                            className="text-violet-300 hover:text-violet-200 underline"
                            target="_blank" rel="noreferrer"
                        >
                          Facebook annonceindstillinger
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">5. Cookie-varighed</h2>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Session-cookies</h3>
                    <p>Slettes, når du lukker browseren.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-fuchsia-200">Persistente cookies</h3>
                    <p>Ligger i en afmålt periode (typisk 1–24 mdr.) eller til manuelt slet.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">6. Kontakt</h2>
                <p className="text-white/80 leading-relaxed">
                  Spørgsmål om cookies? Kontakt os:
                </p>
                <div className="mt-4 p-4 rounded-xl bg-neutral-800/70 ring-1 ring-violet-500/20">
                  <p className="text-white font-medium">SyncoreAI</p>
                  <p className="text-white/80">E-mail: info@syncore-ai.dk</p>
                  <p className="text-white/80">Telefon: +45 31 46 95 38</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-200">7. Ændringer</h2>
                <p className="text-white/80 leading-relaxed">
                  Vi opdaterer politikken ved behov.
                </p>
                <p className="text-white/60 leading-relaxed mt-2">
                  <strong>Sidst opdateret:</strong> Juni 2025
                </p>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}
