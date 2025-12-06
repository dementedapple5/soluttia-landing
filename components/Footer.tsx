import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-neutral-950 text-neutral-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
           <div className="w-5 h-5 bg-white rounded-sm"></div>
           <span className="font-medium text-white">Soluttia</span>
        </div>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Privacidad</a>
           <a href="#" className="hover:text-white transition-colors">Términos</a>
           <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        <div>
           &copy; {new Date().getFullYear()} Soluttia Inc.
        </div>
      </div>
    </footer>
  );
};