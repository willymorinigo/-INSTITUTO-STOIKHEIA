import React from 'react';
import { HeartHandshake, Smile, BookOpen, Compass } from 'lucide-react';
import galeria02Image from '../assets/images/galeria_02.jpg';

interface PhilosophyProps {
  onOpenInterview: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onOpenInterview }) => {
  const pillars = [
    {
      title: 'Tiempo para cada chico',
      desc: 'Nos tomamos el tiempo real de explicar a cada ritmo, escuchar dudas y acompañar dificultades sin apuros ni frustración.',
    },
    {
      title: 'Vínculo de confianza',
      desc: 'Equipo directivo y docente presente en la cotidianeidad, generando un clima de aula donde los errores son oportunidades de aprender.',
    },
    {
      title: 'Clima emocional positivo',
      desc: 'El bienestar emocional es la base de todo aprendizaje genuino. Cuidamos la convivencia, la empatía y la autoestima escolar.',
    },
  ];

  return (
    <section id="enfoque" className="py-20 bg-slate-50/60 border-t border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Visual column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative box */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white aspect-[4/3]">
                <img
                  src={galeria02Image}
                  alt="Proceso pedagógico y acompañamiento en Instituto Stoikheia"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase font-semibold text-blue-200 tracking-wider">
                    Filosofía Pedagógica
                  </span>
                  <p className="text-sm font-medium text-white/95 mt-0.5">
                    "Acompañar los procesos, valorar a la persona."
                  </p>
                </div>
              </div>

              {/* Quote card */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "No formamos números en un listado: educamos niños con nombre, talentos únicos y emociones que merecen ser escuchadas cada día."
                </p>
                <p className="text-[11px] font-bold text-slate-800 mt-2">
                  — Equipo Directivo y Pedagógico Stoikheia
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e5ca7] tracking-wide uppercase">
                <Compass className="w-4 h-4" />
                <span>Nuestro Enfoque / Filosofía</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 tracking-tight">
                Aprender en un ambiente cuidado
              </h2>
            </div>

            {/* Core text as requested by user */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                En <strong className="text-slate-900 font-semibold">Stoikheia</strong> apostamos por una dinámica diferente a la de los colegios masivos. Creemos en los grupos reducidos y en el seguimiento detallado de los procesos de aprendizaje.
              </p>
              <p>
                Nuestro equipo directivo y docente trabaja día a día para construir un vínculo de confianza con los chicos, tomándose el tiempo para explicar, acompañar dificultades y fomentar un clima emocional positivo en el aula.
              </p>
            </div>

            {/* Pillar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-sm hover:border-[#1e5ca7]/40 transition-colors"
                >
                  <div className="text-xs font-bold text-[#b21f2f] mb-1 font-display">
                    0{idx + 1}.
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="pt-2">
              <button
                onClick={onOpenInterview}
                className="text-xs sm:text-sm font-semibold text-[#b21f2f] hover:text-[#961927] underline underline-offset-4 decoration-[#b21f2f]/40 hover:decoration-[#b21f2f] transition-all"
              >
                Conocé cómo trabajamos en persona → Solicitá una entrevista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
