import { useState } from 'react';
import { Send, User, Building, Mail, MessageSquare } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple-900/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lad os <span className="gradient-text">tale sammen</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Har du spørgsmål til vores AI-agenter eller automation? 
            Udfyld formularen nedenfor, så vender vi tilbage hurtigst muligt.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <User size={16} />
                  <span>Navn *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Dit fulde navn"
                />
              </div>

              {/* Company Field */}
              <div className="space-y-2">
                <label htmlFor="company" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <Building size={16} />
                  <span>Virksomhed</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Virksomhedsnavn"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                <Mail size={16} />
                <span>E-mail *</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="din@email.dk"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                <MessageSquare size={16} />
                <span>Spørgsmål til AI agents og automation</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Fortæl os om dine behov, hvilke processer du gerne vil automatisere, eller andre spørgsmål du måtte have til vores AI-agenter..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="btn-primary flex items-center space-x-2 px-12 py-4 text-lg"
              >
                <span>Send Besked</span>
                <Send size={20} />
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                  <Mail className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-white">E-mail</h4>
                <p className="text-gray-400">kontakt@syncoreai.dk</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-white">Responstid</h4>
                <p className="text-gray-400">Inden for 24 timer</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto">
                  <User className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-white">Gratis konsultation</h4>
                <p className="text-gray-400">30 min. strategimøde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}