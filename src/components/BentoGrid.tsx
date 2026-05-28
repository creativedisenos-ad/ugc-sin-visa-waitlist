"use client";

import { motion } from "framer-motion";
import { Send, Camera, DollarSign, Award, Users, Globe } from "lucide-react";

const expectationModules = [
  {
    title: "Portales UGC internacionales",
    icon: <Globe className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Pitch que cierra marcas",
    icon: <Send className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Reels que convierten",
    icon: <Camera className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "Negociación en dólares sin under-charge",
    icon: <DollarSign className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Certificación UGC oficial",
    icon: <Award className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Comunidad de creadoras",
    icon: <Users className="w-8 h-8 text-ugc-champagne" />,
    colSpan: "md:col-span-1",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Lo que vas a <span className="text-ugc-champagne">dominar</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            6 módulos diseñados para que en 30 días estés enviando tu primer pitch a una marca internacional y recibiendo tu primer producto en casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] mb-8">
          {expectationModules.map((program, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              className={`glass-card p-8 rounded-2xl flex flex-col justify-between group cursor-default overflow-hidden relative z-10 hover:z-20 hover:shadow-[0_20px_40px_rgba(230,57,70,0.15)] hover:border-ugc-coral/30 ${program.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ugc-champagne/10 via-ugc-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-ugc-champagne/10 flex items-center justify-center relative z-10"
              >
                {program.icon}
              </motion.div>
              
              <h3 className="text-xl md:text-2xl font-bold font-display uppercase leading-tight relative z-10">
                {program.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
