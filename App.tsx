import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GridBackground } from './components/ui/GridBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-white/20">
      {/* Navbar Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-[#050505]/50 border-b border-white/5">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-md"></div>
            <span className="text-xl font-bold tracking-tight">Soluttia</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Producto</a>
            <a href="#" className="hover:text-white transition-colors">Soluciones</a>
            <a href="#" className="hover:text-white transition-colors">Precios</a>
        </div>
        <button className="text-sm font-medium text-white hover:text-neutral-300 transition-colors">
            Iniciar Sesión
        </button>
      </nav>

      {/* Global Background */}
      <GridBackground />

      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;