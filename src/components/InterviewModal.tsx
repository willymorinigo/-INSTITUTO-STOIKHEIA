import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle, Send, Sparkles, Mail } from 'lucide-react';

interface InterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterviewModal: React.FC<InterviewModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    grade: '1',
    modality: 'presencial',
    preferredTime: 'manana',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const getInterviewFormattedText = () => {
    const modalityText = formData.modality === 'presencial' ? 'Presencial en el colegio' : 'Virtual / Videollamada';
    const timeText = formData.preferredTime === 'manana' ? 'Turno Mañana (08:30 a 12:00)' : 'Turno Tarde (13:30 a 17:00)';

    return [
      `🗓️ *Solicitud de Entrevista - Instituto Stoikheia*`,
      `• *Adulto responsable:* ${formData.parentName}`,
      `• *Teléfono de contacto:* ${formData.phone}`,
      formData.studentName ? `• *Alumno/a:* ${formData.studentName}` : '',
      `• *Grado:* ${formData.grade}° Grado de Primaria`,
      `• *Modalidad de preferencia:* ${modalityText}`,
      `• *Horario de preferencia:* ${timeText}`,
      formData.notes ? `• *Comentarios / Intereses:* ${formData.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const getWhatsAppInterviewUrl = () => {
    const text = encodeURIComponent(getInterviewFormattedText());
    return `https://wa.me/5492664037117?text=${text}`;
  };

  const getMailtoInterviewUrl = () => {
    const subject = encodeURIComponent(
      `Solicitud de Entrevista Escolar - ${formData.parentName} (${formData.grade}° Grado)`
    );
    const body = encodeURIComponent(getInterviewFormattedText());
    return `mailto:stoikheia.edu@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Automatically open WhatsApp with the formatted interview details
      window.open(getWhatsAppInterviewUrl(), '_blank');
    }, 400);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-t-[2rem] sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] sm:max-h-[90vh] flex flex-col my-0 sm:my-8 animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile handle indicator */}
        <div className="sm:hidden pt-3 pb-1 flex justify-center bg-[#1e5ca7]">
          <div className="w-10 h-1 bg-white/40 rounded-full" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e5ca7] to-[#164885] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.svg"
              alt="Stoikheia"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-full bg-white p-0.5 shadow-xs"
            />
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display leading-tight">
                Agendá una Entrevista
              </h3>
              <p className="text-[11px] sm:text-xs text-blue-100">
                Instituto Educativo Stoikheia · Primaria
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content with smooth overflow scroll */}
        <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-900">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Tu solicitud fue armada para coordinar con el equipo directivo. Podés enviarla directamente por WhatsApp o Email:
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppInterviewUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar a WhatsApp (2664037117)</span>
                </a>
                <a
                  href={getMailtoInterviewUrl()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Enviar por Email</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre del adulto responsable *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej: 2664037117"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nombre del alumno/a
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre y apellido"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Grado para el ciclo lectivo
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 bg-white"
                  >
                    <option value="1">1° Grado (Primaria)</option>
                    <option value="2">2° Grado (Primaria)</option>
                    <option value="3">3° Grado (Primaria)</option>
                    <option value="4">4° Grado (Primaria)</option>
                    <option value="5">5° Grado (Primaria)</option>
                    <option value="6">6° Grado (Primaria)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Modalidad preferida
                  </label>
                  <select
                    value={formData.modality}
                    onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 bg-white"
                  >
                    <option value="presencial">Presencial (en la escuela)</option>
                    <option value="virtual">Virtual (videollamada)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferencia horaria
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 bg-white"
                  >
                    <option value="manana">Turno Mañana (08:30 - 12:00)</option>
                    <option value="tarde">Turno Tarde (13:30 - 17:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Observaciones o comentarios adicionales (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contanos si querés consultar algo en particular sobre la propuesta pedagógica..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#1e5ca7] focus:ring-2 focus:ring-[#1e5ca7]/20 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#b21f2f] hover:bg-[#961927] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span>Procesando...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirmar y Enviar Solicitud</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Destino oficial: WhatsApp (2664037117) y stoikheia.edu@gmail.com
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
