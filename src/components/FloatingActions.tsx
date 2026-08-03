import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Jai Travel World, I want to inquire about vehicle rentals and tour packages.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-xs font-bold text-royal-900">Need Help?</p>
          <p className="text-[10px] text-slate-500">WhatsApp Us (9994607460)</p>
        </div>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${COMPANY_INFO.mobiles[0]}`}
        className="w-13 h-13 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group relative"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call Now ({COMPANY_INFO.mobiles[0]})
        </span>
      </a>
    </div>
  );
};
