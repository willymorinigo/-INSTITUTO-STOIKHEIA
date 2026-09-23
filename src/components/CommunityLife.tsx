import React from 'react';
import {
  Instagram,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import galeria01Image from '../assets/images/galeria_01.jpg';

export const CommunityLife: React.FC = () => {
  const activities = [
    {
      id: 1,
      category: 'proyectos',
      categoryLabel: 'Proyectos de Aula',
      title: 'Feria de Ciencias & Exploración Activa',
      desc: 'Maquetas de ecosistemas y experimentos donde los alumnos explican con sus palabras los conceptos aprendidos.',
    },
    {
      id: 2,
      category: 'celebraciones',
      categoryLabel: 'Celebraciones',
      title: 'Día de la Convivencia y Respeto Mutuo',
      desc: 'Juegos cooperativos y dinámicas grupales para fortalecer la empatía, el compañerismo y la amistad escolar.',
    },
    {
      id: 3,
      category: 'arte',
      categoryLabel: 'Arte y Expresión',
      title: 'Muestra Artística de Primer Ciclo',
      desc: 'Exploración plástica con técnicas mixtas, acuarelas y modelado, estimulando la creatividad de cada niño.',
    },
  ];

  return (
    <section id="vida-escolar" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#b21f2f] tracking-wide uppercase">
            <Instagram className="w-3.5 h-3.5" />
            <span>Comunidad y Vida Escolar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Viví el día a día con nosotros
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Te invitamos a ser parte de nuestra cotidianidad. A través de nuestra comunidad (podés seguirnos en nuestro Instagram), compartimos proyectos de aula, celebraciones y los trabajos de nuestros alumnos, reflejando el clima de convivencia cordial y el respeto mutuo que fomentamos todos los días.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="mb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-96 relative overflow-hidden">
              <img
                src={galeria01Image}
                alt="Vida escolar y proyectos en Instituto Stoikheia"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Right Community Invitation Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-blue-200 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#1e5ca7]" />
                <span>Nuestra Cultura Escolar</span>
              </div>

              <h3 className="text-2xl font-bold font-display leading-tight">
                Espacios de protagonismo para cada alumno
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Cada evento escolar, clase abierta y cartelera es una oportunidad para que los chicos ganen confianza, compartan sus logros y descubran el gusto por aprender juntos.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1e5ca7] to-[#174883] hover:opacity-95 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Seguinos en Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-[#1e5ca7]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-[#1e5ca7]">
                    {act.categoryLabel}
                  </span>
                  <span className="text-slate-400">Ciclo Lectivo</span>
                </div>

                <h4 className="text-base font-bold font-display text-slate-900 mb-2">
                  {act.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
