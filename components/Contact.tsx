import React from 'react';
import { ShinyButton } from './ui/ShinyButton';

export const Contact = () => {
  return (
    <section className="py-32 px-4 relative z-10 border-t border-white/5">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">¿Listo para modernizarte?</h2>
        
        <form className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-400 ml-1">Nombre</label>
                <input 
                    type="text" 
                    placeholder="Ana" 
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                />
            </div>
            <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-400 ml-1">Apellidos</label>
                <input 
                    type="text" 
                    placeholder="García" 
                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                />
            </div>
          </div>
          
          <div className="space-y-1">
             <label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
             <input 
                type="email" 
                placeholder="ana@empresa.com" 
                className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
             />
          </div>

           <div className="space-y-1">
             <label className="text-xs font-medium text-neutral-400 ml-1">Mensaje</label>
             <textarea 
                rows={4}
                placeholder="Cuéntanos sobre tu equipo..." 
                className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none"
             />
          </div>

          <div className="pt-4">
            <ShinyButton className="w-full justify-center">
                Enviar Mensaje
            </ShinyButton>
          </div>
        </form>
      </div>
    </section>
  );
};