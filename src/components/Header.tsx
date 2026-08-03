import React, { useState } from 'react';
import { Phone, Smartphone, MapPin, Menu, X, Calendar, Compass, ShieldCheck, ChevronRight } from 'lucide-react';
import { LandlineIcon } from './LandlineIcon';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services & Fleets' },
    { id: 'sightseeing', label: 'Sightseeing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg transition-all">
      {/* Top Info Bar */}
      <div className="bg-royal-900 text-slate-200 text-xs py-2 px-4 border-b border-blue-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-sky-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Serving Since 1995 ({COMPANY_INFO.experienceYears}+ Years of Trust)
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Kodaikanal, Tamil Nadu
            </span>
          </div>

          {/* Right contact shortcuts */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <a href={`tel:${COMPANY_INFO.mobiles[0]}`} className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Smartphone className="w-3.5 h-3.5 text-sky-400" />
              <span>+91 {COMPANY_INFO.mobiles[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${COMPANY_INFO.landline}`} 
              className="flex items-center gap-1 hover:text-sky-300 transition-colors font-semibold text-white"
            >
              <LandlineIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.landline}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Nav Bar */}
      <nav className="glass-nav text-white border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0 flex-1"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-white p-1 rounded-xl flex items-center justify-center overflow-hidden shadow-md">
              <img src="/logo.png" alt="Jai Travel World Logo" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-col justify-center min-w-0 pr-2">
              <span className="text-sm sm:text-2xl font-black tracking-tight text-white font-serif leading-tight truncate">
                JAI TRAVEL WORLD
              </span>
              <p className="text-[8px] sm:text-[11px] text-sky-300 font-medium tracking-wide uppercase truncate">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-[7.5px] sm:text-[9px] text-emerald-400 font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1 truncate">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                <span className="truncate">Authorised by Govt. of Tamilnadu</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-blue-600/80 shadow-inner'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-sky-500 text-white px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-bold shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2.5 rounded-lg bg-blue-800/80 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-royal-900 border-b border-blue-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-600 text-white font-bold'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}

            <div className="pt-3 border-t border-blue-800/60 mt-4 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-3 px-4 rounded-xl shadow text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Vehicle / Tour Now</span>
              </button>

              <div className="flex flex-col items-center gap-3 pt-2 text-xs text-slate-300">
                <a href={`tel:${COMPANY_INFO.mobiles[0]}`} className="flex items-center gap-2 text-sky-400 font-medium bg-blue-900/50 px-4 py-2 rounded-lg w-full justify-center">
                  <Smartphone className="w-4 h-4" /> Call: {COMPANY_INFO.mobiles[0]}
                </a>
                <a href={`tel:${COMPANY_INFO.landline}`} className="flex items-center gap-2 text-sky-400 font-medium bg-blue-900/50 px-4 py-2 rounded-lg w-full justify-center">
                  <LandlineIcon className="w-4 h-4" /> Landline: {COMPANY_INFO.landline}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
