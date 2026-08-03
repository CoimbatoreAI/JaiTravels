import React, { useState } from 'react';
import { Phone, MapPin, Mail, Compass, ShieldCheck, ChevronRight, Clock, X, Globe } from 'lucide-react';
import { BankCards } from './BankCards';
import { LandlineIcon } from './LandlineIcon';
import { PageType } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-900 text-slate-300 pt-16 pb-8 border-t-4 border-sky-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="Jai Travel World Logo" className="w-full h-full object-contain p-1" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif tracking-tight">
                  JAI TRAVEL WORLD
                </h3>
                <p className="text-[10px] text-sky-300 tracking-wider uppercase font-semibold">
                  Established 1995
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              "{COMPANY_INFO.tagline}" - Serving travelers with trust, comfort, and safety across Kodaikanal and all of Tamil Nadu for over 30 years.
            </p>

            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 px-3 py-1.5 rounded-lg text-xs text-sky-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Verified Fleet & Expert Mountain Drivers</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-blue-800/80 pb-2 flex items-center justify-between">
              <span>Quick Navigation</span>
              <span className="w-8 h-0.5 bg-sky-400"></span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Journey (Since 1995)' },
                { id: 'services', label: 'Services & Vehicle Fleets' },
                { id: 'sightseeing', label: 'Local Sightseeing Tours' },
                { id: 'gallery', label: 'Tour Photo Gallery' },
                { id: 'contact', label: 'Contact Us & Office Location' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id as PageType)}
                    className="hover:text-sky-300 transition-colors flex items-center gap-2 group text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fleets & Coverage */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-blue-800/80 pb-2 flex items-center justify-between">
              <span>Our Fleet & Services</span>
              <span className="w-8 h-0.5 bg-sky-400"></span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span><span className="font-semibold text-white">Toyota Innova / Crysta / Ertiga</span> (7 Seater)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span><span className="font-semibold text-white">Toyota Etios Sedan / Swift Dzire / Creta</span> (4 Seater)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span><span className="font-semibold text-white">18-Seater / 14-Seater AC & Non AC Tempo Traveller</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span>Custom Kodaikanal Sightseeing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span>Airport Pick & Drop (Madurai / CBE / TRY)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                <span>Railway Station Pickup (Madurai, Kodai Road, Dindigul, CBE)</span>
              </li>
            </ul>

            <button
              onClick={() => onOpenBookingModal()}
              className="mt-2 w-full bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold py-2 px-3 rounded-lg border border-blue-500/40 transition-colors"
            >
              Request Custom Fare Quote
            </button>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-blue-800/80 pb-2 flex items-center justify-between">
              <span>Contact Us</span>
              <span className="w-8 h-0.5 bg-sky-400"></span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  {COMPANY_INFO.address.full}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <LandlineIcon className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">
                    <a href={`tel:${COMPANY_INFO.mobiles[0]}`} className="hover:text-sky-300">
                      {COMPANY_INFO.mobiles[0]}
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-400">Landline: {COMPANY_INFO.landline}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-sky-300">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="http://www.kodaikanaltravels.in" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
                  www.kodaikanaltravels.in
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-blue-800/60 mt-2">
                <span className="w-4 h-4 text-sky-400 shrink-0 flex items-center justify-center font-bold text-[10px] bg-sky-400/20 rounded mt-0.5">₹</span>
                <div className="text-slate-300 leading-tight">
                  <span className="font-semibold text-white block mb-1">Account details</span>
                  <button 
                    onClick={() => setIsBankModalOpen(true)}
                    className="text-[11px] text-sky-300 hover:text-sky-200 underline decoration-sky-300/30 underline-offset-2 transition-colors font-semibold"
                  >
                    Click to view Bank Accounts
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 1995 - {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <p className="text-slate-500">
            Kodaikanal, Dindigul District, Tamilnadu, India
          </p>
        </div>

      </div>

      {/* Bank Details Modal */}
      {isBankModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-slate-50 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 pointer-events-none">
              <button 
                onClick={() => setIsBankModalOpen(false)}
                className="w-10 h-10 bg-white shadow-md text-slate-500 hover:text-rose-500 rounded-full flex items-center justify-center hover:bg-rose-50 transition-colors pointer-events-auto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-8 pt-0 sm:pt-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-royal-900 mb-2">Our Bank Accounts</h2>
                <p className="text-slate-500">Securely transfer your payments to our official accounts</p>
              </div>
              <BankCards />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
