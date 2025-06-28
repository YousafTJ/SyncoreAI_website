import { CheckCircle } from "lucide-react";

interface AgentCardProps {
    name: string;
    title: string;
    pitch: string;
    image: string;
    features: string[];
    isPremium?: boolean;
}

export function AgentCard({
                              name,
                              title,
                              pitch,
                              image,
                              features,
                              isPremium = false,
                          }: AgentCardProps) {
    const cardStyle = isPremium
        ? "bg-gray-900/80 text-white border-yellow-400 shadow-yellow-500/10"
        : "bg-white/70 text-gray-800 border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.06)]";

    const avatarRing = isPremium
        ? "bg-yellow-500"
        : "bg-gradient-to-tr from-indigo-400 to-purple-500";

    const titleColor = isPremium ? "text-yellow-300" : "text-indigo-500";
    const iconColor = isPremium ? "text-yellow-400" : "text-green-500";

    return (
        <div className="relative group h-full">
            {/* Premium badge */}
            {isPremium && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-yellow-300 bg-yellow-500/10 border border-yellow-400 rounded-full">
                    Premium
                </div>
            )}

            {/* hover blobs */}
            <span className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-500 opacity-30 blur-2xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:opacity-40" />
            <span className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-400 to-fuchsia-500 opacity-25 blur-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-35" />

            {/* kortet selv */}
            <div
                className={`relative backdrop-blur-md border rounded-3xl 
                px-6 sm:px-8 pt-8 pb-4 sm:pb-8
                flex flex-col h-full transition-all duration-300 
                group-hover:-translate-y-1 group-hover:scale-[1.02] ${cardStyle}`}
            >
                {/* top */}
                <div className="flex items-center mb-6">
                    <div className={`p-[3px] rounded-full ${avatarRing} animate-pulse-slow`}>
                        <img
                            src={image}
                            alt={`${name} avatar`}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <p className={`text-lg font-semibold ${titleColor}`}>{title}</p>
                    </div>
                </div>

                {/* pitch */}
                <p className={`mb-6 ${isPremium ? "text-gray-200" : "text-gray-700"}`}>
                    {pitch}
                </p>

                {/* features */}
                <ul className="space-y-3">
                    {features.map((feat, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle
                                size={18}
                                className={`mt-0.5 flex-shrink-0 mr-2 ${iconColor}`}
                            />
                            <span
                                className={`leading-relaxed ${
                                    isPremium ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                {feat}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
