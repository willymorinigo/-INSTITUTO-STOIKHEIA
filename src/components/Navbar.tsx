import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInterview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInterview }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Enfoque', href: '#enfoque' },
    { name: '¿Por qué elegirnos?', href: '#puntos-fuertes' },
    { name: 'Comunidad', href: '#comunidad-ideal' },
    { name: 'Vida Escolar', href: '#vida-escolar' },
    { name: 'Ubicación & Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-1.5 sm:py-2'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-100/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Official Logo */}
          <a href="#" className="flex items-center group py-0.5" aria-label="Instituto Educativo Stoikheia">
            <img
              src="/logo.svg"
              alt="Instituto Educativo Stoikheia"
              className={`w-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-[1.02] ${
                isScrolled
                  ? 'h-11 sm:h-12 lg:h-14 max-w-[220px] sm:max-w-[280px]'
                  : 'h-14 sm:h-16 lg:h-20 max-w-[290px] sm:max-w-[380px]'
              }`}
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#1e5ca7] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#1e5ca7] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenInterview}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#b21f2f] hover:bg-[#961927] active:bg-[#7f131f] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendá una entrevista</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu with app-sheet styling */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/90 px-5 pt-3 pb-6 space-y-3 rounded-b-3xl animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#1e5ca7] active:bg-blue-50/70 hover:bg-slate-50 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterview();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#b21f2f] hover:bg-[#961927] active:scale-[0.98] rounded-xl shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendá una entrevista</span>
            </button>
            <a
              href="https://wa.me/5492664037117?text=Hola%20Instituto%20Stoikheia%2C%20quisiera%20consultar%20sobre%20vacantes%20y%20conocer%20la%20propuesta."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Contactar por WhatsApp (2664037117)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
