import React from 'react';
import { Star, Quote, Heart, CheckCircle, Sparkles, MessageSquareHeart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Mariana R. & familia',
      role: 'Mamá de alumno de 3° grado',
      rating: 5,
      highlight: 'Acompañamiento y contención real',
      content:
        'Buscábamos un colegio donde nuestro hijo no fuera un número más y en Stoikheia encontramos exactamente eso. Los directivos y maestros conocen a cada nene por su nombre, detectan enseguida si tienen un mal día o si necesitan una mano extra con algún tema.',
      tag: 'Atención Personalizada',
    },
    {
      id: 2,
      author: 'Esteban M.',
      role: 'Papá de alumna de 5° grado',
      rating: 5,
      highlight: 'Comunicación fluida y sin burocracia',
      content:
        'Lo que más valoramos como familia es la cercanía. Ante cualquier inquietud podés hablar directamente con los docentes y directivos. No hay vueltas administrativas ni barreras, las puertas siempre están abiertas.',
      tag: 'Vínculo con Familias',
    },
    {
      id: 3,
      author: 'Carolina y Gustavo S.',
      role: 'Padres de alumno de 1° y 4° grado',
      rating: 5,
      highlight: 'Equilibrio entre exigencia y bienestar',
      content:
        'Tienen un nivel pedagógico muy sólido sin volver loca a la familia con tareas interminables. Los chicos aprenden hábitos de estudio con entusiasmo en un clima de mucho respeto y cordialidad entre compañeros.',
      tag: 'Calidad Pedagógica',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#b21f2f] tracking-wide uppercase">
            <MessageSquareHeart className="w-4 h-4" />
            <span>La Voz de Nuestra Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Experiencias y opiniones de las familias
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            La tranquilidad y confianza de quienes viven la experiencia Stoikheia día a día.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#1e5ca7]/40 transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top: Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1e5ca7] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {review.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900 mb-2.5">
                  "{review.highlight}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 text-[#b21f2f] font-bold text-xs flex items-center justify-center border border-slate-200">
                  {review.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{review.author}</p>
                  <p className="text-[11px] text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Badge */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                100% de compromiso con la comunidad educativa
              </p>
              <p className="text-xs text-slate-500">
                Familias y escuela trabajando en equipo por el desarrollo pleno de los chicos.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#b21f2f]">
            <Heart className="w-4 h-4 fill-[#b21f2f]" />
            <span>Comunidad Stoikheia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
