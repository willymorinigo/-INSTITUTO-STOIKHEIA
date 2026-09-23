import React, { useState } from 'react';
import {
  UserCheck,
  MessagesSquare,
  GraduationCap,
  Scale,
  Building2,
  CheckCircle,
  Award,
  ArrowRight,
} from 'lucide-react';

interface StrengthsProps {
  onOpenInterview: () => void;
}

export const Strengths: React.FC<StrengthsProps> = ({ onOpenInterview }) => {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const strengthsList = [
    {
      id: 1,
      title: 'Atención 100% Personalizada',
      short: 'Grupos reducidos que nos permiten conocer la historia personal de cada alumno y adaptar el acompañamiento.',
      details:
        'Cada docente conoce las fortalezas, el ritmo y las inquietudes particulares de cada alumno. Nadie queda atrás ni desapercibido en el aula.',
      icon: UserCheck,
      badgeColor: 'bg-blue-50 text-[#1e5ca7] border-blue-200/60',
      iconColor: 'text-[#1e5ca7]',
    },
    {
      id: 2,
      title: 'Comunicación Directa',
      short: 'Canales ágiles y cercanos con las familias, sin burocracia ni intermediarios. ¡Las puertas siempre están abiertas!',
      details:
        'Diálogo fluido entre directivos, docentes y familias. Las inquietudes se resuelven a tiempo, de manera humana y con respuesta oportuna.',
      icon: MessagesSquare,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
      iconColor: 'text-amber-600',
    },
    {
      id: 3,
      title: 'Calidad Pedagógica y Humana',
      short: 'Docentes comprometidos que no solo exigen a nivel académico, sino que brindan una fuerte contención emocional.',
      details:
        'Un equipo docente con vocación genuina que estimula el pensamiento crítico y el amor por el conocimiento en un marco de respeto y cariño.',
      icon: GraduationCap,
      badgeColor: 'bg-rose-50 text-[#b21f2f] border-rose-200/60',
      iconColor: 'text-[#b21f2f]',
    },
    {
      id: 4,
      title: 'Equilibrio Ideal',
      short: 'Tareas regulares y evaluaciones pautadas para crear hábitos de estudio, sin sobrecargar la vida familiar.',
      details:
        'Promovemos la responsabilidad y la autonomía de estudio sin que las tardes familiares se conviertan en momentos de estrés o sobreexigencia.',
      icon: Scale,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
      iconColor: 'text-indigo-600',
    },
    {
      id: 5,
      title: 'Entorno Seguro y Funcional',
      short: 'Un edificio cuidado, ordenado y optimizado para la escala de nuestra comunidad.',
      details:
        'Espacios a escala de los niños donde todos se conocen, minimizando riesgos de extravío o dispersión y priorizando la tranquilidad de los padres.',
      icon: Building2,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="puntos-fuertes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#b21f2f] tracking-wide uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Puntos Fuertes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            ¿Por qué elegir Instituto Stoikheia?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Una propuesta pedagógica sólida diseñada para familias que priorizan la cercanía, la seguridad y el seguimiento real de sus hijos.
          </p>
        </div>

        {/* Bento / Asymmetric Grid for 5 Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthsList.map((item, index) => {
            const IconComponent = item.icon;
            const isMarquee = index === 0 || index === 2; // Highlighting first and quality pedagogical cards

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveHighlight(item.id)}
                onMouseLeave={() => setActiveHighlight(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 border flex flex-col justify-between ${
                  index === 0
                    ? 'lg:col-span-2 bg-gradient-to-br from-blue-50/50 via-white to-white border-blue-200/70 shadow-sm hover:shadow-md'
                    : 'bg-white border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Bar: Icon and Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.badgeColor} transition-transform group-hover:scale-105 duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-display">
                      0{item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 mb-2.5 group-hover:text-[#1e5ca7] transition-colors">
                    {item.title}
                  </h3>

                  {/* Short text required */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
                    {item.short}
                  </p>

                  {/* Details expansion */}
                  <p className="text-xs text-slate-500 leading-normal border-t border-slate-100 pt-3">
                    {item.details}
                  </p>
                </div>

                {/* Bottom marker */}
                <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#1e5ca7] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Compromiso Stoikheia</span>
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick CTA card in the grid spanning the full width */}
          <div className="md:col-span-2 lg:col-span-3 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-md border border-slate-800">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#1e5ca7] tracking-wider uppercase backdrop-blur-xs mb-2">
                <span>Admisiones Abiertas</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2">
                Vení a conocer nuestra institución
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Coordinamos reuniones individuales y personalizadas para que conozcas nuestras instalaciones, al equipo directivo y la propuesta pedagógica integral de Stoikheia.
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenInterview}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#b21f2f] hover:bg-[#961927] rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span>Solicitar entrevista presencial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
