'use client';

import { motion } from 'motion/react';
import { 
  CreditCard, 
  UserPlus, 
  ChevronRight,
  MessageCircle
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Click the button below to message us and start your registration."
  },
  {
    icon: CreditCard,
    title: "Request Payment Info",
    description: "Request payment information from our team and make your payment."
  },
  {
    icon: UserPlus,
    title: "Join the Group",
    description: "You will be added to the exclusive paid group for the live training."
  }
];

export function Registration() {
  return (
    <section className="py-24 bg-tech-blue px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-green font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">
            How to Join
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Simple 3-Step Registration
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl text-center relative z-10 h-full">
                <div className="w-16 h-16 bg-neon-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-neon-green" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {index + 1}. {step.title}
                </h4>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                  <ChevronRight className="w-8 h-8 text-slate-700" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/2349125493006" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-neon-green text-tech-blue hover:bg-neon-green/90 font-bold px-10 py-8 rounded-full text-xl shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all hover:scale-105 flex items-center gap-3 inline-flex"
            )}
          >
            <MessageCircle className="w-6 h-6" />
            Click to WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
