import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Vision } from '../components/Vision';
import { Mission } from '../components/Mission';
import { CoreServices } from '../components/CoreServices';
import { BespokeAutomation } from '../components/BespokeAutomation';
import { CTABanner } from '../components/CTABanner';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Vision />
      <Mission />
      <CoreServices />
      <BespokeAutomation />
      <CTABanner />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;