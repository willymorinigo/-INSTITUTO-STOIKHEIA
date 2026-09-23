import React, { useState, useEffect } from 'react';
import { Home, Compass, Award, MapPin, Calendar } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenInterview: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenInterview }) => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'inicio', top: 0 },
        { id: 'enfoque', el: document.getElementById('enfoque') },
        { id: 'puntos-fuertes', el: document.getElementById('puntos-fuertes') },
        { id: 'vida-escolar', el: document.getElementById('vida-escolar') },
        { id: 'contacto', el: document.getElementById('contacto') },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const item = sections[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        } else if (item.id === 'inicio' && window.scrollY < 300) {
          setActiveSection('inicio');
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'inicio',
      label: 'Inicio',
      href: '#',
      icon: Home,
    },
    {
      id: 'enfoque',
      label: 'Enfoque',
      href: '#enfoque',
      icon: Compass,
    },
    {
      id: 'puntos-fuertes',
      label: 'Propuesta',
      href: '#puntos-fuertes',
      icon: Award,
    },
    {
      id: 'contacto',
      label: 'Contacto',
      href: '#contacto',
      icon: MapPin,
    },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-8px_25px_rgba(0,0,0,0.06)] px-3 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'text-[#1e5ca7] font-bold'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div
                className={`relative p-1 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-blue-50 text-[#1e5ca7]' : ''
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1e5ca7] rounded-full" />
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 leading-none">
                {item.label}
              </span>
            </a>
          );
        })}

        {/* Highlighted Interview Action Button */}
        <button
          onClick={onOpenInterview}
          className="flex flex-col items-center justify-center py-1 px-3 bg-gradient-to-r from-[#b21f2f] to-[#961927] text-white rounded-2xl shadow-md active:scale-95 transition-transform duration-200 ml-1"
          aria-label="Agendar Entrevista"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight leading-none whitespace-nowrap">
            Entrevista
          </span>
        </button>
      </div>
    </div>
  );
};
