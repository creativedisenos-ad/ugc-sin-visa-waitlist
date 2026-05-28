"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CtaButton from "./CtaButton";
import TestimonialButton from "./TestimonialButton";

const faqs = [
  {
    q: "¿Necesito visa o salir de Venezuela?",
    a: "No. Todo el curso es 100% online y las marcas envían productos a Venezuela vía casilleros en Miami. El UGC se hace desde tu casa, con tu celular.",
  },
  {
    q: "¿Cuánto puedo ganar realmente como UGC creator?",
    a: "Las creadoras principiantes ganan entre $50 y $150 por video. Con experiencia y portafolio, pasas a $200-$500 por video. Algunas alumnas hacen $2.000-$5.000/mes trabajando part-time.",
  },
  {
    q: "¿Necesito tener miles de seguidores en mis redes?",
    a: "No. El UGC se publica en las cuentas de las marcas, no en la tuya. Por eso es perfecto para empezar sin audiencia. Solo necesitas saber grabar y editar Reels que vendan.",
  },
  {
    q: "¿Cómo me pagan en Venezuela?",
    a: "Las marcas internacionales pagan vía PayPal, Zelle, Wise, Payoneer o Binance (USDT). Te enseñamos a configurar cada método y recibir sin trabas.",
  },
  {
    q: "¿Cuándo es el lanzamiento del curso?",
    a: "Las inscripciones abren en pocas semanas. Las creadoras de la lista VIP tienen acceso 48 horas antes con precio fundadora del 20% de descuento.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-12 text-center">
          Preguntas <span className="text-ugc-champagne">Frecuentes</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`glass-card rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-white/20 bg-white/10' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-ugc-coral text-white' : 'bg-white/10 text-white/50'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton />
          <TestimonialButton />
        </div>
      </div>
    </section>
  );
}
