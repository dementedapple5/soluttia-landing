import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera,
  Kanban, 
  PackageSearch, 
  FileText, 
  ShieldCheck, 
  Receipt 
} from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Captura por IA",
    description: "Haz una foto de la incidencia o captura de WhatsApp. Nuestra IA extrae automáticamente ID, dirección, cliente y descripción.",
    icon: <Camera className="h-6 w-6" />,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Flujo Kanban",
    description: "Visualiza trabajos de 'Pendiente' a 'Completado'. Filtra por técnico, zona o urgencia.",
    icon: <Kanban className="h-6 w-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Inventario Inteligente",
    description: "Controla el stock en el almacén central y en cada furgoneta. Recibe alertas de stock bajo.",
    icon: <PackageSearch className="h-6 w-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Informes Automáticos",
    description: "Genera resúmenes profesionales en Markdown para aseguradoras al instante con datos del trabajo.",
    icon: <FileText className="h-6 w-6" />,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Roles y Seguridad",
    description: "Permisos granulares para Administradores, Gerentes y Técnicos con Supabase RLS.",
    icon: <ShieldCheck className="h-6 w-6" />,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Listo para Facturar",
    description: "Facturación agilizada adaptada a flujos de aseguradoras y normativas VERIFACTU.",
    icon: <Receipt className="h-6 w-6" />,
    className: "md:col-span-1 md:row-span-1",
  },
];

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/30 p-8 hover:bg-neutral-900/50 transition-colors ${feature.className}`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
          {feature.icon}
        </div>
        <div>
          <h3 className="mb-2 text-xl font-medium text-white">{feature.title}</h3>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">{feature.description}</p>
        </div>
      </div>
      
      {/* Hover Gradient Effect */}
      <div 
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl group-hover:bg-white/10 transition-colors duration-500" 
      />
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section className="py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Todo lo que necesitas. <br/>
            <span className="text-neutral-500 font-serif italic">De la foto a la factura.</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Deja de perder información en hilos de WhatsApp. Centraliza todo tu negocio de reparaciones en un sistema operativo seguro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};