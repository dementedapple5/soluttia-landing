import React from 'react';
import { Review } from '../types';

const reviews: Review[] = [
  { name: "Alex Rivera", role: "Propietario", company: "Rivera Fontanería", text: "Solíamos perder el 10% de los trabajos en WhatsApp. Con la captura IA de Soluttia, nada se pierde.", avatar: "https://picsum.photos/100/100?random=1" },
  { name: "Sarah Chen", role: "Gerente", company: "Chen Electricistas", text: "Saber exactamente qué stock hay en cada furgoneta nos ahorró miles en materiales perdidos el mes pasado.", avatar: "https://picsum.photos/100/100?random=2" },
  { name: "Marcus Johnson", role: "CEO", company: "BuildRight Repairs", text: "La generación automática de informes para aseguradoras cambia las reglas del juego. Horas de administración eliminadas.", avatar: "https://picsum.photos/100/100?random=3" },
  { name: "Emily Davis", role: "Administración", company: "FixIt Fast", text: "Por fin un CRM que mis técnicos realmente usan. La interfaz móvil es increíblemente simple.", avatar: "https://picsum.photos/100/100?random=4" },
  { name: "David Wilson", role: "Director", company: "Wilson HVAC", text: "La seguridad basada en roles significa que puedo dar acceso a contratistas sin exponer datos sensibles.", avatar: "https://picsum.photos/100/100?random=5" },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="flex w-[350px] flex-col gap-4 rounded-2xl border border-white/5 bg-neutral-900/40 p-6 mx-4 backdrop-blur-sm">
    <p className="text-neutral-300 leading-relaxed">"{review.text}"</p>
    <div className="flex items-center gap-3 mt-auto">
      <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full border border-white/10 grayscale" />
      <div>
        <p className="text-sm font-medium text-white">{review.name}</p>
        <p className="text-xs text-neutral-500">{review.role}, {review.company}</p>
      </div>
    </div>
  </div>
);

export const Reviews = () => {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-neutral-900/20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      
      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {/* First Loop */}
        <div className="flex">
          {reviews.map((review, i) => (
            <ReviewCard key={`1-${i}`} review={review} />
          ))}
        </div>
        {/* Second Loop for seamless scroll */}
        <div className="flex">
          {reviews.map((review, i) => (
            <ReviewCard key={`2-${i}`} review={review} />
          ))}
        </div>
        {/* Third Loop for extra width safety */}
        <div className="flex">
          {reviews.map((review, i) => (
            <ReviewCard key={`3-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};