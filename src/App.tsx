/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Philosophy } from './components/Philosophy.tsx';
import { Strengths } from './components/Strengths.tsx';
import { IdealFamily } from './components/IdealFamily.tsx';
import { CommunityLife } from './components/CommunityLife.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { InterviewModal } from './components/InterviewModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { MobileBottomNav } from './components/MobileBottomNav.tsx';

export default function App() {
  const [interviewModalOpen, setInterviewModalOpen] = useState(false);

  const handleOpenInterview = () => {
    setInterviewModalOpen(true);
  };

  const handleCloseInterview = () => {
    setInterviewModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-[#1e5ca7]/20 selection:text-[#b21f2f] pb-14 sm:pb-0">
      {/* Navigation */}
      <Navbar onOpenInterview={handleOpenInterview} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Sección 1: Encabezado / Hero */}
        <Hero onOpenInterview={handleOpenInterview} />

        {/* Sección 2: Nuestro Enfoque / Filosofía */}
        <Philosophy onOpenInterview={handleOpenInterview} />

        {/* Sección 3: ¿Por qué elegirnos? / Puntos Fuertes */}
        <Strengths onOpenInterview={handleOpenInterview} />

        {/* Sección 4: ¿Es Stoikheia el colegio ideal para tu familia? / Una comunidad a tu medida */}
        <IdealFamily onOpenInterview={handleOpenInterview} />

        {/* Sección 5: Comunidad y Vida Escolar */}
        <CommunityLife />

        {/* Reseñas y Experiencias de las Familias */}
        <TestimonialsSection />

        {/* Preguntas Frecuentes / Transparencia */}
        <FAQSection />

        {/* Sección 6: Cierre, Mapa y Contacto */}
        <ContactSection onOpenInterview={handleOpenInterview} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Interview Scheduling */}
      <InterviewModal
        isOpen={interviewModalOpen}
        onClose={handleCloseInterview}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Mobile App Bottom Navigation Bar */}
      <MobileBottomNav onOpenInterview={handleOpenInterview} />
    </div>
  );
}
