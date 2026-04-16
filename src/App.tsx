import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { Technology } from './components/Technology';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <InteractiveBackground />
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}


