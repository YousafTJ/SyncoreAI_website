// src/pages/Cookies.tsx
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Cookies() {
  return (
      <div className="min-h-screen bg-white text-black">
        <Navigation />

        <main className="pt-28 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-violet-700">
              Cookiepolitik
            </h1>

            <div className="rounded-2xl bg-white border border-violet-200 p-8 md:p-12 space-y-10 shadow-lg">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  1. Hvad er cookies?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies er små tekstfiler, der gemmes på din enhed, når du
                  besøger en hjemmeside. De hjælper med at huske indstillinger og
                  forbedre din oplevelse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  2. Hvordan bruger vi cookies?
                </h2>
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-600">
                  Nødvendige cookies
                </h3>
                <ul className="list-disc pl-6 space-y-1 marker:text-violet-500 text-gray-700">
                  <li>Session-cookies</li>
                  <li>Sikkerhedscookies</li>
                  <li>Funktionalitetscookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  4. Sådan administrerer du cookies
                </h2>
                <p className="text-gray-700">
                  Du kan altid ændre dine cookie-indstillinger i din browser eller
                  via vores cookie-banner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  6. Kontakt
                </h2>
                <div className="mt-4 p-4 rounded-xl bg-violet-50 border border-violet-200">
                  <p className="font-medium text-black">SyncoreAI</p>
                  <p className="text-gray-700">E-mail: info@syncore-ai.dk</p>
                  <p className="text-gray-700">Telefon: +45 31 46 95 38</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-violet-600">
                  7. Ændringer
                </h2>
                <p className="text-gray-700">
                  Vi opdaterer politikken ved behov. <br />
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
