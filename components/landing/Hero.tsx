'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-tech-blue py-20 px-4">
      {/* Header/Logo Area */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
          <Image 
            src="https://storage.googleapis.com/test-platform-alpha-public/input_file_0.png" 
            alt="ImpartMind Solutions Logo" 
            fill
            className="object-contain p-1"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-white font-display font-bold text-xl tracking-tight">
          ImpartMind <span className="text-neon-green">Solutions</span>
        </span>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-yellow/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="container max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-1 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            Certified 21st Century & AI-Integrated Educator
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight mb-8"
        >
          Teaching at the <br />
          <span className="text-electric-yellow italic">Speed of AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Stop struggling with distracted learners. Master the digital pedagogy and AI tools that turn classrooms into high-engagement hubs of innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="bg-electric-yellow text-tech-blue hover:bg-electric-yellow/90 text-lg font-bold px-8 py-7 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(247,255,0,0.3)]">
            Secure Your Slot Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <div className="text-slate-400 text-sm font-medium">
            Starts April 27th • Limited Slots Available
          </div>
        </motion.div>
      </div>
    </section>
  );
}
