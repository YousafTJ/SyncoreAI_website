// src/pages/Index.tsx
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Vision } from "../components/Vision";
// import { Mission } from "../components/Mission"; // fjernet/kommenteret ud
import { CoreServices } from "../components/CoreServices";
import { BespokeAutomation } from "../components/BespokeAutomation";
// import { CTABanner } from "../components/CTABanner"; // fjernet
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";

const Index = () => {
    const location = useLocation();

    // Scroll til hash (#kontakt) når route ændres
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const el = document.getElementById(id);
            if (el) {
                requestAnimationFrame(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                });
            }
        }
    }, [location]);

    return (
        <>
            <Helmet>
                <title>Syncore AI – Automatisering gjort simpelt</title>
                <meta
                    name="description"
                    content="Vi hjælper virksomheder med at spare tid og skalere med AI. Automatiser din forretning nemt og effektivt."
                />
                <meta
                    name="keywords"
                    content="AI, automatisering, systemer, effektivitet, Syncore AI, forretningsoptimering"
                />
                <meta name="author" content="Syncore AI" />

                {/* Open Graph */}
                <meta property="og:title" content="Syncore AI – Automatisering gjort simpelt" />
                <meta
                    property="og:description"
                    content="Vi hjælper virksomheder med at spare tid og skalere med AI. Automatiser din forretning nemt og effektivt."
                />
                <meta property="og:image" content="https://www.syncoreai.dk/og-image.png" />
                <meta property="og:url" content="https://www.syncoreai.dk" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Syncore AI – Automatisering gjort simpelt" />
                <meta
                    name="twitter:description"
                    content="Vi hjælper virksomheder med at spare tid og skalere med AI."
                />
                <meta name="twitter:image" content="https://www.syncoreai.dk/og-image.png" />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navigation />
                <Hero />
                <CoreServices />
                <BespokeAutomation />
                <Vision />
                {/* <Mission /> */}

                {/* Kontaktformularen med ID så /#kontakt virker */}
                <section id="kontakt">
                    <ContactForm />
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Index;
