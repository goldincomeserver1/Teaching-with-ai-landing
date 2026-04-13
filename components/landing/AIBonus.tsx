'use client';

import { motion } from 'motion/react';
import { Bot, Clock, FileText, Lightbulb, Zap } from 'lucide-react';

const aiFeatures = [
  { icon: Clock, text: "Create lesson plans in minutes, not hours" },
  { icon: FileText, text: "Generate worksheets and quizzes instantly" },
  { icon: Lightbulb, text: "Simplify difficult topics with AI explanations" },
  { icon: Zap, text: "Save 10+ hours per week on admin tasks" }
];

export function AIBonus() {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-electric-yellow to-yellow-400 p-1 rounded-[2.5rem] shadow-[0_0_50px_rgba(247,255,0,0.2)]"
        >
          <div className="bg-tech-blue rounded-[2.3rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-electric-yellow)_1px,_transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-electric-yellow text-tech-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                  <Bot className="w-4 h-4 mr-2" />
                  Exclusive Bonus
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  AI for Teachers: <br />
                  <span className="text-electric-yellow">Your New Superpower</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  Stop working harder. Start teaching smarter. We&apos;ll show you the exact AI tools that top educators are using to reclaim their time and sanity.
                </p>
              </div>

              <div className="space-y-6">
                {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 bg-electric-yellow/20 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-5 h-5 text-electric-yellow" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
