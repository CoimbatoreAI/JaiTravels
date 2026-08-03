import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, CheckCircle2, User, Mail, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BookingFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Tours & Vehicle Rental'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    travelDate: new Date().toISOString().split('T')[0],
    serviceType: initialService,
    pickupLocation: 'Kodaikanal (or Airport/Station)',
    destination: 'Kodaikanal Sightseeing / Tamilnadu Tour',
    passengers: '4 Passengers',
    vehiclePreference: 'Toyota Innova (7 Seater)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppRedirect();
    const randomId = 'JWT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomId);
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Jai Travel World! I would like to book/enquire:\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Travel Date:* ${formData.travelDate}\n` +
      `*Service:* ${formData.serviceType}\n` +
      `*Vehicle:* ${formData.vehiclePreference}\n` +
      `*Passengers:* ${formData.passengers}\n` +
      `*Pickup:* ${formData.pickupLocation}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Message:* ${formData.message || 'Please provide rates and details.'}`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-royal-900 text-white p-5 flex items-center justify-between border-b border-blue-800">
          <div>
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
              Serving since 1995
            </span>
            <h3 className="text-xl font-bold font-serif">Quick Booking Enquiry</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-blue-800/60 text-slate-300 hover:text-white hover:bg-blue-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <div className="space-y-1">
                <h4 className="text-2xl font-bold text-slate-900 font-serif">Enquiry Submitted!</h4>
                <p className="text-sm text-slate-600">
                  Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your enquiry reference ID is:
                </p>
                <div className="inline-block bg-slate-100 border border-slate-300 font-mono font-bold text-royal-900 text-lg px-4 py-1.5 rounded-lg my-2">
                  {bookingRef}
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Our team at Jai Travel World (Kodaikanal) will review your requirements and call you at <span className="font-semibold">{formData.phone}</span> shortly with exact competitive fare quotes.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Send via WhatsApp Now</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold"
                >
                  Close Modal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9994607460"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                  >
                    {!['Vehicle Rental', 'Kodaikanal Sightseeing Tour', 'Tamilnadu Tour Package', 'Accommodation & Cottage Stay', 'Airport / Station Pickup Drop'].includes(formData.serviceType) && (
                      <option value={formData.serviceType}>{formData.serviceType}</option>
                    )}
                    <option value="Vehicle Rental">Vehicle Rental Only</option>
                    <option value="Kodaikanal Sightseeing Tour">Kodaikanal Sightseeing Tour</option>
                    <option value="Tamilnadu Tour Package">Tamilnadu Tour Package (Madurai / Rameshwaram)</option>
                    <option value="Accommodation & Cottage Stay">Accommodation & Resort Stay</option>
                    <option value="Airport / Station Pickup Drop">All-Area Pickup & Drop</option>
                  </select>
                </div>

                {/* Vehicle Preference */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Fleet
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={e => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                  >
                    <option value="Toyota Innova (7 Seater)">Toyota Innova / Crysta (7 Seater)</option>
                    <option value="18 Seater Tempo Traveller">18-Seater Luxury Tempo Traveller</option>
                    <option value="Toyota Etios Sedan">Toyota Etios / Dzire (4 Seater)</option>
                    <option value="Luxury SUV Fortuner">Luxury SUV (Fortuner / XUV)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Travel Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Travel Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      required
                      value={formData.travelDate}
                      onChange={e => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    No. of Travelers
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={e => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                  >
                    <option value="1 - 3 Passengers">1 - 3 Passengers</option>
                    <option value="4 - 7 Passengers">4 - 7 Passengers</option>
                    <option value="8 - 12 Passengers">8 - 12 Passengers</option>
                    <option value="13 - 18 Passengers">13 - 18 Passengers (Tempo Traveller)</option>
                    <option value="18+ Passengers">18+ Large Group</option>
                  </select>
                </div>
              </div>

              {/* Pickup & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Madurai Airport / Kodai Hotel"
                      value={formData.pickupLocation}
                      onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Destination / Route
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kodaikanal Sightseeing / Ooty"
                    value={formData.destination}
                    onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Note / Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Notes / Specific Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any special needs (e.g. luggage size, child seat, resort preferences)..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-700 to-royal-900 hover:from-blue-800 hover:to-black text-white font-bold py-3 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Booking Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>WhatsApp Directly</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 mt-1">
                ⚡ Direct phone booking available 24/7 at <span className="font-bold text-slate-800">9994607460</span>
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
