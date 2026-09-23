import React, { useState } from 'react';
import {
  Check,
  HelpCircle,
  Sparkles,
  Heart,
  ShieldCheck,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react';
import galeria03Image from '../assets/images/galeria_03.jpg';

interface IdealFamilyProps {
  onOpenInterview: () => void;
}

export const IdealFamily: React.FC<IdealFamilyProps> = ({ onOpenInterview }) => {
  const [selectedPriorities, setSelectedPriorities] = useState<number[]>([1, 2, 3]);

  const affinityOptions = [
    {
      id: 1,
      label: 'Buscás que directivos y maestros conozcan a tu hijo por su nombre y sepan qué necesita.',
    },
    {
      id: 2,
      label: 'Preferís un colegio de escala humana donde prime la seguridad y la tranquilidad.',
    },
    {
      id: 3,
      label: 'Valorás canales de comunicación ágiles y abiertos, sin rodeos burocráticos.',
    },
    {
      id: 4,
      label: 'Querés una sólida formación pedagógica elemental sin sobrecargar el tiempo familiar.',
    },
    {
      id: 5,
      label: 'Huís de la masividad donde los niños suelen ser tratados como un número más.',
    },
  ];

  const togglePriority = (id: number) => {
    if (selectedPriorities.includes(id)) {
      setSelectedPriorities(selectedPriorities.filter((item) => item !== id));
    } else {
      setSelectedPriorities([...selectedPriorities, id]);
    }
  };

  const affinityPercent = Math.min(
    100,
    Math.round((selectedPriorities.length / affinityOptions.length) * 100)
  );

  return (
    <section id="comunidad-ideal" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1e5ca7] tracking-wide uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>¿Es Stoikheia el colegio ideal para tu familia?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Una comunidad a tu medida
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Sabemos que cada familia busca algo diferente. Stoikheia es la opción ideal si tu prioridad es el trato humano, el acompañamiento cercano y un entorno cálido.
          </p>
        </div>

        {/* 2 Column Layout: Transparent Identity Presentation & Interactive Affinity Test */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Transparent Identity & Boutique Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#b21f2f] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Nuestra Identidad Boutique</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-snug">
                Priorizamos lo esencial: calidad vincular y solidez académica
              </h3>

              <div className="text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Al ser una institución de <strong className="text-slate-900 font-semibold">tamaño medio</strong>, nuestro enfoque está puesto 100% en la calidad del vínculo y la formación básica sólida, priorizando la seguridad y la cercanía por encima de infraestructuras masivas o extensas grillas extracurriculares.
                </p>
                <p>
                  Somos una comunidad pequeña, activa y en constante crecimiento, orientada a que los chicos se sientan <strong className="text-slate-900 font-semibold">escuchados y valorados</strong> en cada etapa de su escolaridad primaria.
                </p>
              </div>

              {/* Identity comparison highlights */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                  <p className="font-bold text-slate-900 mb-1">Escala Controlada</p>
                  <p className="text-slate-500">Un edificio cuidado, ordenado y pensado para la tranquilidad de los chicos.</p>
                </div>
                <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
                  <p className="font-bold text-[#1e5ca7] mb-1">Cero Masividad</p>
                  <p className="text-slate-600">Aulas donde cada alumno tiene voz, participación activa y contención real.</p>
                </div>
              </div>
            </div>

            {/* Photo showcasing the safe environment */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100 aspect-[16/9]">
              <img
                src={galeria03Image}
                alt="Instalaciones y vida escolar en Instituto Stoikheia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-xs font-medium text-slate-200">
                  Instalaciones funcionales pensadas para el desarrollo integral en primaria.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Family Affinity Assessment */}
          <div className="lg:col-span-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#1e5ca7] uppercase tracking-wider">
                  Test de Compatibilidad Familiar
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Marcá lo que más valorás
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 mb-4">
                ¿Qué buscás para la escuela primaria de tus hijos?
              </h3>

              <div className="space-y-3 mb-6">
                {affinityOptions.map((opt) => {
                  const isChecked = selectedPriorities.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => togglePriority(opt.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-50/80 border-[#1e5ca7] text-slate-900 font-medium shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isChecked
                            ? 'bg-[#1e5ca7] border-[#1e5ca7] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="leading-snug">{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic affinity result block */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300 font-medium">
                    Afinidad con la propuesta Stoikheia:
                  </span>
                  <span className="text-base font-bold font-display text-[#1e5ca7]">
                    {selectedPriorities.length >= 3 ? 'Afinidad Ideal' : 'Buena compatibilidad'} ({affinityPercent}%)
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#1e5ca7] to-[#b21f2f] transition-all duration-500"
                    style={{ width: `${affinityPercent}%` }}
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedPriorities.length >= 3
                    ? 'Nuestra propuesta pedagógica boutique está especialmente pensada para familias como la tuya, donde el cuidado individual y la calidez humana son primordiales.'
                    : 'Te invitamos a conversar con nuestro equipo para contarte cómo acompañamos a cada alumno según sus necesidades.'}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenInterview}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#b21f2f] hover:bg-[#961927] rounded-lg shadow transition-all"
                  >
                    <span>Quiero conocer más sobre las vacantes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
