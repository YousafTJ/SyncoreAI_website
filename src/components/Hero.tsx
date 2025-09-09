// src/components/Hero.jsx

import TextType from "./TextType";

export function Hero() {
    const calendly = "https://calendly.com/syncore-ai-info/30min";

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center bg-white text-center px-6"
            aria-labelledby="hero-title"
        >
            {/* Titel */}
            <h1
                id="hero-title"
                className="text-purple-700 font-extrabold text-6xl md:text-8xl tracking-tight"
            >
                SyncoreAI
            </h1>

            {/* Typing tekst */}
            <div className="relative z-10 mt-6 md:mt-8 text-center">
                <TextType
                    as="p"
                    className="text-lg md:text-2xl text-gray-800 font-medium tracking-tight"
                    text={[
                        "Mere end AI, vi transformerer virksomheder",
                        "Vi sælger ikke bare AI, vi giver mere tid",
                        "Vi motiverer iværksættere der ønsker at være selvstændige og frie",
                    ]}
                    typingSpeed={65}
                    deletingSpeed={20}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    textColors={["#4C1D95"]}
                    variableSpeed={{ min: 55, max: 75 }}
                />
            </div>

            {/* Book møde knap */}
            <div className="relative z-10 mt-10">
                <a
                    href={calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-block px-8 py-4 rounded-xl font-semibold text-lg text-white
                        bg-gradient-to-r from-purple-600 to-fuchsia-600
                        shadow-lg shadow-purple-800/30
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-purple-500/50 hover:from-fuchsia-600 hover:to-purple-700
                        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-white
                    "
                >
                    Book møde
                </a>
            </div>
        </section>
    );
}
