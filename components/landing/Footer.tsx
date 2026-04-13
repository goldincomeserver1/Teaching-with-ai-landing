'use client';

import { motion } from 'motion/react';
import { buttonVariants } from '@/components/ui/button';
import { AlertTriangle, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Scarcity Banner */}
      <div className="container max-w-6xl mx-auto mb-20">
        <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-[2rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse" />
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-3xl font-display font-bold text-white mb-4">⚠️ LIMITED SLOTS AVAILABLE!</h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Don&apos;t be left behind in this digital teaching era. The world is moving fast—ensure you&apos;re the one leading the way.
          </p>
          <a 
            href="https://wa.me/2349125493006" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-electric-yellow text-tech-blue hover:bg-electric-yellow/90 font-bold px-10 py-7 rounded-full text-lg shadow-[0_0_30px_rgba(247,255,0,0.2)] flex items-center gap-2 inline-flex"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Register Before They&apos;re Gone
          </a>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-white/20">
                <Image 
                  src="https://storage.googleapis.com/test-platform-alpha-public/input_file_0.png" 
                  alt="ImpartMind Solutions Logo" 
                  fill
                  unoptimized
                  className="object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-display font-bold text-white">
                ImpartMind <span className="text-neon-green">Solutions</span>
              </h4>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              Empowering teachers across Africa with the digital pedagogy and AI skills needed to thrive in the 21st-century classroom.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:border-neon-green transition-colors cursor-pointer">
                <Calendar className="w-5 h-5 text-slate-400" />
              </div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 hover:border-neon-green transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-slate-400" />
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Quick Info</h5>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neon-green" />
                27th – 30th April
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-green" />
                Online (WhatsApp & Meet)
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Target Audience</h5>
            <ul className="space-y-4 text-slate-400">
              <li>Early Years Teachers</li>
              <li>Primary & Secondary</li>
              <li>School Owners</li>
              <li>Administrators</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-sm">
            © 2024 ImpartMind Solutions. All rights reserved. <br />
            Upgrade your teaching. Transform your classroom. Stay relevant.
          </p>
        </div>
      </div>
    </footer>
  );
}
