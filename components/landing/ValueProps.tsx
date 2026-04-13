'use client';

import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Zap, 
  Monitor, 
  Bot, 
  Sparkles, 
  TrendingUp, 
  ClipboardCheck, 
  School 
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: "Decode Modern Learners",
    description: "Understand exactly how today's digital-native students think and what triggers their focus."
  },
  {
    icon: Target,
    title: "Engagement Mastery",
    description: "Learn high-impact strategies that capture and sustain attention from start to finish."
  },
  {
    icon: Zap,
    title: "Instant Attention",
    description: "Capturing focus is an art. We give you the science-backed tools to make it happen every time."
  },
  {
    icon: Monitor,
    title: "Beyond Chalk & Talk",
    description: "Master digital pedagogy to teach effectively in any environment—physical or virtual."
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Practical, hands-on training on using AI to supercharge your teaching efficiency."
  },
  {
    icon: Sparkles,
    title: "Impactful Lessons",
    description: "Create interactive, fun, and memorable lessons that students actually look forward to."
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    description: "Shift to intentional teaching where every action leads to a clear, measurable learning result."
  },
  {
    icon: ClipboardCheck,
    title: "Smart Assessment",
    description: "Stop drowning in grading. Use smart feedback strategies that save time and improve results."
  },
  {
    icon: School,
    title: "Future-Ready Classroom",
    description: "Build a classroom environment that prepares students for the challenges of the 21st century."
  }
];

export function ValueProps() {
  return (
    <section className="py-24 bg-slate-950 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            What You Will Master
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed for the modern educator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-all group cursor-default"
            >
              <div className="w-12 h-12 bg-neon-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-neon-green" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
