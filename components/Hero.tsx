import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShinyButton } from './ui/ShinyButton';
import { ArrowRight, Sparkles } from 'lucide-react';

const TextReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      y: "110%", // Start from below
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block relative">
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Typewriter = ({ words, delay = 2000 }: { words: string[], delay?: number }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === words[index].length ? 1000 : 80, parseInt((Math.random() * 50).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, delay]);

  return (
    <span className="inline-block relative">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`absolute -right-1 top-0 bottom-0 w-[2px] bg-emerald-500 ${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20">
      
      {/* Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm px-3 py-1 text-xs text-neutral-400 hover:border-neutral-700 transition-colors cursor-pointer"
      >
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        <span>Captura de Órdenes con IA</span>
        <Sparkles className="h-3 w-3 text-amber-500" />
      </motion.div>

      {/* Main Headline */}
      <div className="max-w-5xl text-center space-y-2">
        <div className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
          <TextReveal text="Transforma el caos" delay={0.1} />
        </div>
        <div className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-neutral-400 leading-[1.1] min-h-[1.1em]">
           <Typewriter 
             words={[
               "en beneficios reales.", 
               "en control absoluto.", 
               "en gestión perfecta."
             ]} 
           />
        </div>
      </div>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 max-w-xl text-center text-lg text-neutral-500 leading-relaxed"
      >
        Sube una foto de WhatsApp y deja que la IA cree la orden. Gestiona técnicos, controla el stock por furgoneta y automatiza la facturación en un solo sistema operativo.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <ShinyButton>
          Prueba Gratis <ArrowRight className="h-4 w-4" />
        </ShinyButton>
        <button className="px-8 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
          Ver Demo IA
        </button>
      </motion.div>

      {/* Dashboard Preview - Kanban Board */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 1.6, duration: 1, type: "spring" }}
        style={{ perspective: "1000px" }}
        className="mt-20 w-full max-w-6xl"
      >
         <div className="relative rounded-xl border border-neutral-800 bg-[#121212] backdrop-blur-md shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group">
            {/* Header */}
            <div className="absolute top-0 w-full h-12 border-b border-white/5 flex items-center px-6 justify-between bg-neutral-900/50">
               <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="h-4 w-32 rounded bg-white/10"></div>
               </div>
               <div className="flex gap-2">
                 <div className="h-8 w-24 rounded bg-white/5 border border-white/10"></div>
                 <div className="h-8 w-8 rounded bg-emerald-500 text-white flex items-center justify-center text-xs">+</div>
               </div>
            </div>
            
            {/* Kanban Columns */}
            <div className="p-6 mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 h-full text-left">
               {/* Column 1: Pendiente */}
               <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium text-neutral-400">Pendiente</span>
                     <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-500">2</span>
                  </div>
                  <div className="bg-neutral-800/20 border border-white/5 p-4 rounded-lg space-y-3 hover:border-white/10 transition-colors cursor-pointer">
                     <div className="flex justify-between items-start">
                        <div className="h-2 w-16 bg-blue-500/20 rounded"></div>
                        <div className="h-4 w-4 rounded-full bg-white/10"></div>
                     </div>
                     <div className="h-3 w-3/4 bg-white/10 rounded"></div>
                     <div className="h-3 w-1/2 bg-white/5 rounded"></div>
                     <div className="pt-2 flex items-center gap-2 border-t border-white/5">
                        <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                        <div className="h-2 w-20 bg-white/5 rounded"></div>
                     </div>
                  </div>
                  <div className="bg-neutral-800/20 border border-dashed border-white/5 p-4 rounded-lg flex items-center justify-center text-neutral-600 text-xs">
                     Arrastra trabajos aquí
                  </div>
               </div>

               {/* Column 2: Asignado */}
               <div className="flex flex-col gap-3 hidden md:flex">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium text-neutral-400">Asignado</span>
                     <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-500">1</span>
                  </div>
                   <div className="bg-neutral-800/20 border border-white/5 p-4 rounded-lg space-y-3 relative overflow-hidden group/card">
                     <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                     <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-emerald-400">15147522</span>
                        <div className="h-4 w-4 rounded-full bg-white/10"></div>
                     </div>
                     <p className="text-sm text-neutral-300">Instalación eléctrica/aparatos alumbrado...</p>
                     <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>📍 Sant Just Desvern</span>
                     </div>
                     <div className="pt-2 flex items-center justify-between border-t border-white/5 mt-2">
                        <span className="text-xs text-neutral-400">03 dic</span>
                        <div className="flex -space-x-2">
                           <div className="h-6 w-6 rounded-full bg-neutral-700 border border-black"></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Column 3: En Camino */}
               <div className="flex flex-col gap-3 hidden md:flex">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium text-neutral-400">En Camino</span>
                     <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-500">0</span>
                  </div>
                  <div className="h-32 bg-neutral-800/10 border border-white/5 rounded-lg flex items-center justify-center">
                      <div className="text-center opacity-30">
                         <div className="h-8 w-8 bg-white/20 rounded mx-auto mb-2"></div>
                         <span className="text-xs">No hay trabajos</span>
                      </div>
                  </div>
               </div>

               {/* Column 4: En Progreso */}
               <div className="flex flex-col gap-3 hidden md:flex">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-sm font-medium text-neutral-400">En Progreso</span>
                     <span className="text-xs bg-white/5 px-2 py-0.5 rounded text-neutral-500">1</span>
                  </div>
                  <div className="bg-neutral-800/20 border border-white/5 p-4 rounded-lg space-y-3">
                     <div className="flex justify-between items-start">
                        <span className="text-xs font-mono text-emerald-400">27915817</span>
                        <div className="h-4 w-4 rounded-full bg-white/10"></div>
                     </div>
                     <p className="text-sm text-neutral-300">Carmen Romero, mujer de titular, comunica...</p>
                     <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span>📍 Sant Feliu de Llobre</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Reflection Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
         </div>
      </motion.div>
    </section>
  );
};