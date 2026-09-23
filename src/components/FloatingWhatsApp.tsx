import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/5492664037117?text=Hola%20Instituto%20Educativo%20Stoikheia!%20Quisiera%20consultar%20por%20vacantes%20e%20inscripciones."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Consultá por WhatsApp
        </span>
      </a>
    </div>
  );
};
