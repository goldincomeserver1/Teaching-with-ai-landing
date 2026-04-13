'use client';

import { motion } from 'motion/react';
import { Award, CheckCircle, ShieldCheck, Globe } from 'lucide-react';
import Image from 'next/image';

export function CPDAccreditation() {
  return (
    <section className="py-24 bg-slate-900 px-4 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-green/5 skew-x-12 transform translate-x-1/2" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-neon-green font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Global Standards
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Why Train With <br />
              <span className="text-electric-yellow">ImpartMind Solutions?</span>
            </h3>
            <p className="text-slate-300 text-xl mb-10 leading-relaxed">
              We don&apos;t just teach; we provide professional development that counts. As an <strong>Accredited CPD Provider</strong>, our training meets rigorous international standards for quality and impact.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Accredited Excellence",
                  desc: "Our curriculum is vetted by The CPD Group to ensure the highest pedagogical standards."
                },
                {
                  icon: Award,
                  title: "Professional Recognition",
                  desc: "Earn professional development credits that are recognized by schools and boards globally."
                },
                {
                  icon: Globe,
                  title: "Industry-Leading Expertise",
                  desc: "Join thousands of educators who have transformed their careers through our certified programs."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-electric-yellow/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-electric-yellow/20 rounded-[2.5rem] blur-2xl group-hover:bg-electric-yellow/30 transition-all duration-500" />
              
              <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10">
                <div className="relative w-full max-w-[500px] aspect-[1552/531] mx-auto">
                  <Image 
                    src="https://storage.googleapis.com/test-platform-alpha-public/input_file_2.png" 
                    alt="Accredited CPD Provider #785711" 
                    fill
                    unoptimized
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                  <div className="text-slate-500 font-medium mb-1">Provider Number</div>
                  <div className="text-3xl font-display font-bold text-slate-900">#785711</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    Verified @ thecpdregister.com
                  </div>
                </div>
              </div>
            </div>
            
            <p className="mt-10 text-slate-500 text-center text-sm italic max-w-sm">
              Your professional growth deserves the gold standard. Don&apos;t settle for unverified training.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
