import React from 'react';
import { Heart, Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Wordmark & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="Stoikheia Logo"
                className="w-9 h-9 object-contain rounded-full bg-white p-0.5 shadow-xs"
              />
              <span className="text-lg font-bold font-display text-white tracking-tight">
                Instituto Educativo Stoikheia
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Educación primaria boutique con cercanía y atención personalizada. Un espacio donde cada alumno es conocido por su nombre, equilibrando exigencia académica con contención emocional.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#1e5ca7] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Instagram Stoikheia"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5492664037117?text=Hola%20Instituto%20Stoikheia%2C%20quisiera%20hacer%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="WhatsApp Stoikheia"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:stoikheia.edu@gmail.com"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#b21f2f] hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Correo Stoikheia"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              Secciones
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#enfoque" className="hover:text-white transition-colors">
                  Nuestro Enfoque & Filosofía
                </a>
              </li>
              <li>
                <a href="#puntos-fuertes" className="hover:text-white transition-colors">
                  Puntos Fuertes
                </a>
              </li>
              <li>
                <a href="#comunidad-ideal" className="hover:text-white transition-colors">
                  Comunidad a tu Medida
                </a>
              </li>
              <li>
                <a href="#vida-escolar" className="hover:text-white transition-colors">
                  Vida Escolar & Proyectos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition-colors">
                  Opiniones de Familias
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Ubicación & Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location details */}
          <div className="space-y-3">
            <p className="font-bold text-white uppercase tracking-wider text-[11px]">
              Canales Oficiales
            </p>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b21f2f] shrink-0 mt-0.5" />
                <span>Colón 1067 (esq. Lavalle), San Luis</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/5492664037117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium text-emerald-300"
                >
                  WhatsApp: 2664037117
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1e5ca7] shrink-0" />
                <a
                  href="mailto:stoikheia.edu@gmail.com"
                  className="hover:text-white transition-colors text-slate-300"
                >
                  stoikheia.edu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#1e5ca7] font-semibold">Nivel:</span>
                <span>Primaria (1° a 6° grado)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Instituto Educativo Stoikheia · San Luis, Argentina. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Educación primaria con calidez humana y excelencia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
