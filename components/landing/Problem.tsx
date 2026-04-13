'use client';

import { motion } from 'motion/react';
import { AlertCircle, XCircle, ZapOff } from 'lucide-react';

const painPoints = [
  {
    icon: ZapOff,
    title: "Distracted Learners",
    description: "Are your students more interested in their screens than your lesson? The gap between modern entertainment and traditional teaching is widening."
  },
  {
    icon: XCircle,
    title: "Outdated Methods",
    description: "Still using 'chalk and talk' in a world of instant information? Outdated strategies are the fastest way to lose classroom authority."
  },
  {
    icon: AlertCircle,
    title: "The AI Threat",
    description: "AI is changing everything. Educators who don't adapt won't just struggle—they'll become obsolete in the eyes of future-ready schools."
  }
];

export function Problem() {
  return (
    <section className="py-24 bg-slate-950 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-neon-green font-display font-bold text-sm uppercase tracking-[0.2em] mb-4">
            Attention Teachers & School Owners
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Truth is... Teaching Has Changed.
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The classroom of 2024 requires more than just subject knowledge. It requires a new kind of mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-neon-green/50 transition-colors group"
            >
              <point.icon className="w-12 h-12 text-neon-green mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-4">{point.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
