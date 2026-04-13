import { Hero } from '@/components/landing/Hero';
import { Problem } from '@/components/landing/Problem';
import { Solution } from '@/components/landing/Solution';
import { ValueProps } from '@/components/landing/ValueProps';
import { AIBonus } from '@/components/landing/AIBonus';
import { Pricing } from '@/components/landing/Pricing';
import { Registration } from '@/components/landing/Registration';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-tech-blue selection:bg-neon-green selection:text-tech-blue">
      <Hero />
      <Problem />
      <Solution />
      <ValueProps />
      <AIBonus />
      <Pricing />
      <Registration />
      <Footer />
    </main>
  );
}
