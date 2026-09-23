import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Por qué Stoikheia elige trabajar con grupos reducidos?',
      a: 'Porque estamos convencidos de que la calidad pedagógica y el bienestar emocional de los chicos dependen del vínculo cercano. Con grupos a escala humana, el docente detecta oportunamente cualquier dificultad, estimula talentos particulares y garantiza que ningún alumno pase desapercibido.',
    },
    {
      q: '¿Cómo es la política de tareas escolares y evaluaciones?',
      a: 'Buscamos un equilibrio sano: pautamos tareas regulares y evaluaciones programadas con anticipación para crear disciplina y hábitos de estudio sólidos, sin que esto sobrecargue la dinámica ni el descanso de la vida familiar.',
    },
    {
      q: '¿Cómo es la comunicación entre la escuela y las familias?',
      a: 'Nuestra comunicación es directa, ágil y sin burocracia. Contamos con canales de diálogo constante con docentes y equipo directivo; nuestras puertas siempre están abiertas para coordinar reuniones y dar seguimiento conjunto a cada alumno.',
    },
    {
      q: '¿Cómo es el proceso de admisión y entrevista inicial?',
      a: 'Coordinamos una primera entrevista personalizada con la familia para conocer las expectativas mutuas, mostrar el proyecto educativo y las instalaciones, y luego una instancia de acercamiento con el alumno.',
    },
    {
      q: '¿Qué niveles educativos comprende el Instituto Stoikheia?',
      a: 'Nos especializamos con dedicación exclusiva en el nivel primario (de 1° a 6° año), garantizando una base académica fuerte y una contención afectiva adaptada a las etapas del crecimiento infantil.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/70 border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e5ca7] tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Transparencia total para que tomes la mejor decisión para la educación de tu hijo.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e5ca7]"
                >
                  <span className="text-base font-bold font-display text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-blue-50 text-[#1e5ca7] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-slate-100 animate-in fade-in duration-200">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
