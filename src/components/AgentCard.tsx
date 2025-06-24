import { CheckCircle } from 'lucide-react';

interface AgentCardProps {
  name: string;
  title: string;
  description: string;
  modules: string[];
  avatarGradient: string;
  emoji: string;
}

export function AgentCard({ name, title, description, modules, avatarGradient, emoji }: AgentCardProps) {
  return (
    <div className="glass-card p-6 h-full">
      {/* Agent Avatar */}
      <div className="flex items-center mb-6">
        <div className={`w-24 h-24 ${avatarGradient} rounded-full flex items-center justify-center text-3xl mr-4`}>
          {emoji}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-lg gradient-text font-semibold">{title}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-lg">{description}</p>

      {/* Modules */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white mb-4">Moduler:</h4>
        {modules.map((module, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={16} />
            <span className="text-gray-300 text-sm leading-relaxed">{module}</span>
          </div>
        ))}
      </div>
    </div>
  );
}