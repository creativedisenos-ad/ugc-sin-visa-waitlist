"use client";

import { motion } from "framer-motion";
import { Camera, DollarSign, Package, Globe } from "lucide-react";
import CtaButton from "./CtaButton";
import TestimonialButton from "./TestimonialButton";

const problems = [
  {
    icon: <Globe className="w-8 h-8 text-ugc-coral" />,
    title: "El UGC es una industria global",
    text: "Marcas de USA, Europa y LATAM buscan creadoras como tú. La demanda crece 30% cada año.",
  },
  {
    icon: <Camera className="w-8 h-8 text-ugc-coral" />,
    title: "Tu cara ya es suficiente",
    text: "El UGC reemplazó al modelaje tradicional. Las marcas quieren autenticidad, no perfección de estudio.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-ugc-coral" />,
    title: "Pagos en USD a tu cuenta",
    text: "PayPal, Zelle, Binance, Wise. Recibes entre $100 y $500 por video según experiencia.",
  },
  {
    icon: <Package className="w-8 h-8 text-ugc-coral" />,
    title: "Productos GRATIS hasta tu puerta",
    text: "Sí, las marcas internacionales envían productos a Venezuela. Tu casillero en Miami hace el resto.",
  },
];

export default function ProblemCards() {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            ¿Por qué el UGC es <span className="text-ugc-coral">tu momento</span>?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Mientras esperas trabajo, miles de creadoras ya están facturando en dólares desde sus casas. El UGC es la profesión más subestimada del 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ugc-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10 border border-white/5">
                {problem.icon}
              </div>
              
              <h3 className="text-xl font-bold font-display leading-snug relative z-10 mb-2">
                {problem.title}
              </h3>
              
              <p className="text-white/70 relative z-10">
                {problem.text}
              </p>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-ugc-coral/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton />
          <TestimonialButton />
        </div>
      </div>
    </section>
  );
}
