'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function Solution() {
  return (
    <section className="py-24 bg-tech-blue relative overflow-hidden px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-purple/20 rounded-full blur-[120px]" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-electric-yellow font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">
              The Big Reveal
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              21st Century Teaching & <br />
              <span className="text-neon-green">AI Integration Mastery</span>
            </h3>
            <p className="text-slate-300 text-xl mb-8 leading-relaxed">
              This isn&apos;t just another webinar. It&apos;s a career-defining upgrade designed to turn you into a future-ready educator who commands attention and delivers measurable results.
            </p>
            
            <ul className="space-y-4">
              {[
                "Master Digital Pedagogy",
                "Harness AI for Lesson Planning",
                "Increase Classroom Engagement",
                "Future-Proof Your Career"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-neon-green mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl relative group">
              <Image 
                src="https://storage.googleapis.com/test-platform-alpha-public/input_file_1.png" 
                alt="21st Century Teaching & AI Integration Mastery Workshop" 
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-blue via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <div className="text-electric-yellow font-bold text-lg mb-1">April 27th – 30th</div>
                <div className="text-white text-sm opacity-80">Online via WhatsApp & Google Meet</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon-green/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-electric-yellow/20 rounded-full blur-2xl animate-pulse delay-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
