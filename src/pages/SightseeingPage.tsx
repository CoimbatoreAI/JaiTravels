import React from 'react';
import { Compass, Clock, MapPin, ChevronRight, AlertCircle } from 'lucide-react';
import { SIGHTSEEING_TOURS } from '../data/companyData';
import { PageType } from '../types';

interface SightseeingPageProps {
  onNavigate: (page: PageType) => void;
  onNavigateToTour: (tourId: string) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const SightseeingPage: React.FC<SightseeingPageProps> = ({ onNavigateToTour, onOpenBookingModal }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-royal-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600">
            A/C & Non A/C Luxury Coaches / Cars
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-serif">
            Local Sightseeing Tours
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Explore Kodaikanal's beauty with our curated local sightseeing packages. Where Ever You Go! We Follow You.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SIGHTSEEING_TOURS.map((tour) => (
              <div key={tour.id} className="bg-slate-50 rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="bg-royal-900 text-white p-5 text-center relative">
                  <h3 className="text-xl font-bold font-serif">{tour.title}</h3>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600"></div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-end text-xs font-bold text-royal-900 bg-blue-50 p-3 rounded-lg border border-blue-100">
                      {tour.price && (
                        <div className="text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                          {tour.price}
                        </div>
                      )}
                    </div>

                    <ul className="space-y-2.5">
                      {tour.places.map((place, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                          <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-200">
                    {tour.note && (
                      <p className="text-[11px] text-slate-500 flex items-start gap-1.5 bg-slate-100 p-2 rounded italic">
                        <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{tour.note}</span>
                      </p>
                    )}
                    
                    <button
                      onClick={() => onNavigateToTour(tour.id)}
                      className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs shadow transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Tour Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section from Image 1 */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-royal-900 mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-sky-600" />
                Daily Trips & Connectivity
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                We organize package tours across major destinations in South India.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kodai Road', 'Madurai', 'Rameswaram', 'Kanyakumari', 'Thirupathi', 'Coimbatore', 'Ooty', 'Mysore', 'Bangalore', 'Munnar', 'Cochin', 'Chennai'].map((dest, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-medium border border-slate-200">
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-royal-900 mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-sky-600" />
                Additional Services
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• <strong>Daily Bus Service:</strong> Kodaikanal - Chennai & Chennai - Kodaikanal</li>
                <li>• Honey Moon Package, Family Package & Educational Package</li>
                <li>• Trekking Tours, Dormitory & Hotel Bookings throughout India</li>
                <li>• Semi Sleeper Buses Volvo, Domestic & International Air Tickets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
