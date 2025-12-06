import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import { ShinyButton } from './ui/ShinyButton';

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "49€",
    description: "Para pequeños equipos de reparación.",
    features: ["3 Técnicos", "100 Capturas IA/mes", "Kanban Básico", "Facturación Simple"],
    highlight: false,
  },
  {
    name: "Business",
    price: "129€",
    description: "Control total para empresas en crecimiento.",
    features: ["10 Técnicos", "Capturas IA Ilimitadas", "Control de Stock en Furgoneta", "Informes para Aseguradoras", "Seguridad por Roles"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    description: "Para redes de servicio nacionales.",
    features: ["Usuarios ilimitados", "Acceso API", "Modelos IA Personalizados", "Gestor de Cuenta Dedicado", "SLA"],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-32 px-4 relative z-10" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-white">Precios simples y transparentes</h2>
          <p className="text-neutral-400 text-lg">Invierte en eficiencia. Ahorra en inventario perdido y horas de administración.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative flex flex-col p-8 rounded-3xl border ${tier.highlight ? 'border-neutral-700 bg-neutral-900' : 'border-white/5 bg-neutral-900/20'} backdrop-blur-sm`}
            >
              {tier.highlight && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Más Popular
                 </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "A medida" && <span className="text-neutral-500">/mes</span>}
                </div>
                <p className="text-neutral-400 mt-4 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <ShinyButton className={`w-full ${!tier.highlight && 'bg-transparent border-neutral-800 hover:bg-neutral-800'}`}>
                {tier.price === "A medida" ? "Contactar Ventas" : "Empezar Prueba Gratis"}
              </ShinyButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};