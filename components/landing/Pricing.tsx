'use client';

import { motion } from 'motion/react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { School, Users, Check, MessageCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const pricing = [
  { country: "Nigeria", flag: "🇳🇬", currency: "NGN", price: "₦5,000" },
  { country: "Ghana", flag: "🇬🇭", currency: "GHS", price: "70 GHC" },
  { country: "Kenya", flag: "🇰🇪", currency: "KES", price: "600 KES" },
  { country: "South Africa", flag: "🇿🇦", currency: "ZAR", price: "R100" }
];

export function Pricing() {
  return (
    <section className="py-24 bg-slate-950 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Investment in Your Future
          </h2>
          <p className="text-slate-400 text-lg">
            Affordable, high-impact training for educators across Africa.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden mb-12">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-slate-400 font-bold py-6 px-8">Country</TableHead>
                <TableHead className="text-slate-400 font-bold py-6">Currency</TableHead>
                <TableHead className="text-right text-slate-400 font-bold py-6 px-8">Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricing.map((item) => (
                <TableRow key={item.country} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <TableCell className="py-6 px-8 font-medium text-white flex items-center gap-3">
                    <span className="text-2xl">{item.flag}</span>
                    {item.country}
                  </TableCell>
                  <TableCell className="py-6 text-slate-300">{item.currency}</TableCell>
                  <TableCell className="py-6 px-8 text-right text-electric-yellow font-bold text-xl">
                    {item.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* School Owner Upsell */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neon-green/10 border border-neon-green/30 rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center shrink-0">
              <School className="w-8 h-8 text-neon-green" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-2">School Owners & Administrators</h4>
              <p className="text-slate-300 mb-6">
                Enroll your entire teaching staff and transform your school&apos;s digital culture. 
                <span className="text-neon-green font-bold ml-1">Bulk registrations attract significant discounts.</span>
              </p>
              <a 
                href="https://wa.me/2349125493006?text=Special%20School%20Offer" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants(),
                  "bg-neon-green text-tech-blue hover:bg-neon-green/90 font-bold rounded-full flex items-center gap-2 inline-flex"
                )}
              >
                <MessageCircle className="w-4 h-4" />
                Get Special School Offer
              </a>
            </div>
            <Badge className="bg-neon-green text-tech-blue px-6 py-2 text-sm font-bold rounded-full whitespace-nowrap">
              SPECIAL OFFER
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
