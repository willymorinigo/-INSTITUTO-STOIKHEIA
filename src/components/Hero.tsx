import React from 'react';
import heroVideo from '../assets/videos/hero.mp4';

interface HeroProps {
  onOpenInterview?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-screen min-h-[100dvh] w-full flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Balanced cinematic gradient overlays */}
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-slate-950/50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md max-w-4xl mx-auto animate-hero-entrance"
          style={{ fontFamily: 'system-ui', lineHeight: '63px' }}
        >
          Transformando vidas, creando oportunidades, construyendo futuro...
        </h1>
      </div>
    </section>
  );
};
