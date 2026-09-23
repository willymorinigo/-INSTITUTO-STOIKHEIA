import React, { useState } from 'react';
import {
  MessageCircle,
  Calendar,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Navigation,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenInterview: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInterview }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    grade: '1',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const getWhatsAppMessageText = () => {
    return [
      `👋 *Nueva Consulta de Inscripción - Stoikheia*`,
      `• *Responsable:* ${formData.parentName || 'Familia interesada'}`,
      formData.studentName ? `• *Alumno/a:* ${formData.studentName}` : '',
      `• *Grado de interés:* ${formData.grade}° Grado Primaria`,
      `• *Teléfono:* ${formData.phone || 'No especificado'}`,
      formData.email ? `• *Email:* ${formData.email}` : '',
      formData.message ? `• *Mensaje / Consulta:* ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(getWhatsAppMessageText());
    return `https://wa.me/5492664037117?text=${text}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Consulta de Vacante Primaria - ${formData.parentName || 'Familia'} (${formData.grade}° Grado)`
    );
    const body = encodeURIComponent(getWhatsAppMessageText());
    return `mailto:stoikheia.edu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Automatically open WhatsApp with the formatted form data
      window.open(getWhatsAppUrl(), '_blank');
    }, 400);
  };

  const mapAddressQuery = encodeURIComponent('Colón 1067, San Luis, Argentina');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddressQuery}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=-33.299019,-66.335192&hl=es&z=16&output=embed`;

  return (
    <section id="contacto" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-50/70 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -mr-20 w-80 h-80 rounded-full bg-rose-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Callout Card */}
        <div className="bg-gradient-to-br from-[#b21f2f] via-[#991927] to-[#7f131f] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl mb-16 relative overflow-hidden">
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-rose-100 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ciclo Lectivo · Vacantes Limitadas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-[1.15] tracking-tight">
              ¿Buscás una escuela donde tu hijo sea el protagonista?
            </h2>

            <p className="text-lg sm:text-xl text-rose-100 font-normal leading-relaxed">
              Construyamos juntos su futuro en un ambiente de confianza.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="https://wa.me/5492664037117?text=Hola%20Instituto%20Stoikheia%2C%20quisiera%20recibir%20informaci%C3%B3n%20e%20inscribirme%20para%20el%20ciclo%20lectivo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-[#b21f2f] hover:bg-rose-50 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
                <span>Contactanos por WhatsApp</span>
              </a>

              <button
                onClick={onOpenInterview}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1e5ca7] hover:bg-[#174883] text-white font-bold text-sm sm:text-base shadow-md transition-all border border-white/20"
              >
                <Calendar className="w-5 h-5" />
                <span>Inscribite para el ciclo lectivo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form & Location Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-2">
              Agendá una visita o solicitá información
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Completá tus datos y envialos directamente a nuestro WhatsApp oficial o por correo electrónico.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950 font-display">
                  ¡Mensaje preparado, {formData.parentName}!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto">
                  Tu consulta fue formateada. Si la ventana de WhatsApp no se abrió automáticamente, podés enviarla usando los botones a continuación:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar a WhatsApp (2664037117)</span>
                  </a>
                  <a
                    href={getMailtoUrl()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar por Email</span>
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 underline hover:text-slate-700"
                  >
                    Editar formulario o enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre del padre / madre / tutor *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Laura Gómez"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nombre y apellido del alumno/a
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Mateo Gómez"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Grado de interés *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all bg-white"
                    >
                      <option value="1">1° Grado (Primaria)</option>
                      <option value="2">2° Grado (Primaria)</option>
                      <option value="3">3° Grado (Primaria)</option>
                      <option value="4">4° Grado (Primaria)</option>
                      <option value="5">5° Grado (Primaria)</option>
                      <option value="6">6° Grado (Primaria)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teléfono / WhatsApp de contacto *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: 2664037117"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="contacto@familia.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Consulta o comentario (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos sobre tu hijo, sus intereses o dudas específicas sobre el colegio..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <p className="text-xs text-slate-500">
                    * El formulario se envía directamente a WhatsApp y Email institucional.
                  </p>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#b21f2f] hover:bg-[#961927] text-white font-bold text-sm shadow-sm hover:shadow transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Preparando consulta...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar a WhatsApp Oficial</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Location & Map column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Container */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-[#b21f2f] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">
                      Nuestra Ubicación
                    </h4>
                    <p className="text-xs text-slate-500">
                      Colón 1067 (esq. Lavalle), San Luis, Argentina
                    </p>
                  </div>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1e5ca7] hover:text-blue-700 bg-white border border-slate-200 rounded-lg hover:border-[#1e5ca7] shadow-2xs transition-all"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Cómo llegar</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Google Map */}
              <div className="relative w-full h-64 sm:h-72 bg-slate-100">
                <iframe
                  title="Mapa de ubicación Instituto Educativo Stoikheia"
                  src={googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location details card footer */}
              <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 bg-white border-t border-slate-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b21f2f] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Dirección</p>
                    <p className="text-slate-600">Colón 1067 (esq. Lavalle)</p>
                    <p className="text-slate-500">D5700 San Luis, Capital</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#1e5ca7] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">WhatsApp / Teléfono</p>
                    <a
                      href="https://wa.me/5492664037117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-[#1e5ca7] transition-colors font-semibold"
                    >
                      +54 9 266 403-7117
                    </a>
                    <p className="text-slate-500">2664037117</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Institutional Information Card */}
            <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#b21f2f] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Canales de Contacto Oficial</span>
                </div>
                <span className="text-[11px] font-semibold text-[#1e5ca7] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  Respuesta Inmediata
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="mailto:stoikheia.edu@gmail.com"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-[#1e5ca7] hover:shadow-xs transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#b21f2f] group-hover:text-[#1e5ca7]" />
                  <div className="truncate">
                    <p className="font-bold text-slate-900">Correo Oficial</p>
                    <p className="text-slate-600 truncate">stoikheia.edu@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5492664037117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">WhatsApp Institucional</p>
                    <p className="text-slate-600">2664037117</p>
                  </div>
                </a>
              </div>

              <div className="pt-1 flex items-center justify-between border-t border-slate-200/60 text-xs text-slate-500">
                <span>Atención a familias: Lunes a Viernes</span>
                <span className="font-semibold text-slate-700">Turno Mañana y Tarde</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
