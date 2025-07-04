import Aurora from "./Aurora";
import TextType from "./TextType";

export function Hero() {
    const calendly = "https://calendly.com/syncore-ai-info/30min";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Aurora baggrund */}
            <Aurora
                className="aurora-absolute"
                colorStops={["#22C55E", "#A855F7", "#1E3A8A"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.8}
            />

            {/* Titel */}
            <h1 className="relative z-10 text-white font-extrabold text-6xl md:text-8xl tracking-tight drop-shadow-lg">
                SyncoreAI
            </h1>

            {/* Typing tekst */}
            <div className="relative z-10 mt-6 md:mt-8 text-center">
                <TextType
                    as="p"
                    className="text-lg md:text-2xl text-white/90 font-medium tracking-tight"
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
                    textColors={["#ffffff"]}
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
                        focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black
                    "
                >
                    Book møde
                </a>
            </div>
        </section>
    );
}
