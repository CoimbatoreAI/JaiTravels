import React from 'react';
import { Compass, Clock, MapPin, ChevronRight, ArrowLeft } from 'lucide-react';
import { SIGHTSEEING_TOURS } from '../data/companyData';
import { PageType, SightseeingTour } from '../types';

interface TourDetailsPageProps {
  tourId: string;
  onNavigate: (page: PageType) => void;
  onNavigateToTour: (tourId: string) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const TourDetailsPage: React.FC<TourDetailsPageProps> = ({ tourId, onNavigate, onNavigateToTour, onOpenBookingModal }) => {
  const tour = SIGHTSEEING_TOURS.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-royal-900 mb-4">Tour Not Found</h2>
          <button onClick={() => onNavigate('sightseeing')} className="text-sky-600 font-bold hover:underline">
            Go back to Sightseeing Packages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* Banner */}
      <section className="bg-royal-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <button 
            onClick={() => onNavigate('sightseeing')}
            className="absolute left-0 top-0 mt-2 flex items-center gap-1 text-sky-300 hover:text-white transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Tours
          </button>
          
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600 mt-6">
            Detailed Sightseeing Route
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
            {tour.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            {tour.price && (
              <div className="flex items-center gap-1.5 bg-emerald-900/50 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-700">
                <span>{tour.price}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 space-y-12">
        
        {/* Intro */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100">
            <h2 className="text-2xl font-black text-royal-900 mb-8 pb-4 border-b border-slate-100">
              Places Covered in this Package
            </h2>
            
            <div className="space-y-10">
              {tour.places.map((placeName, idx) => {
                const detail = tour.detailedPlaces?.find(p => p.name === placeName);
                const imageSrc = detail?.image || "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80";
                const description = detail?.description || `Explore the beautiful ${placeName} during this sightseeing tour in Kodaikanal.`;
                
                return (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                    <div className="w-full md:w-1/3 h-48 md:h-32 shrink-0 rounded-xl overflow-hidden bg-slate-200">
                      <img src={imageSrc} alt={placeName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-royal-900 flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                        {placeName}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed pl-7">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        {/* Note and Booking */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-sm">
          {tour.note && (
            <p className="text-sm font-semibold text-royal-900 bg-white inline-block px-4 py-2 rounded-lg shadow-sm">
              Note: {tour.note}
            </p>
          )}
          <h3 className="text-2xl font-bold text-royal-900 font-serif">
            Ready to explore these beautiful spots?
          </h3>
          <button
            onClick={() => onOpenBookingModal(tour.title)}
            className="bg-royal-900 hover:bg-blue-800 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-lg transition-transform hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>Book {tour.title} Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* Explore Other Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 pt-16 border-t border-slate-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-royal-900 font-serif">
            Explore Other Packages
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Check out our other exclusive sightseeing tours in Kodaikanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGHTSEEING_TOURS.filter(t => t.id !== tour.id).map((otherTour) => (
            <div key={otherTour.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow cursor-pointer" onClick={() => onNavigateToTour(otherTour.id)}>
              {/* Header */}
              <div className="bg-royal-900 text-white p-4 text-center relative">
                <h3 className="text-lg font-bold font-serif">{otherTour.title}</h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-600"></div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <ul className="space-y-2 mb-6">
                  {otherTour.places.slice(0, 4).map((place, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span className="truncate">{place}</span>
                    </li>
                  ))}
                  {otherTour.places.length > 4 && (
                    <li className="text-xs text-sky-600 font-bold pl-5">
                      + {otherTour.places.length - 4} more places...
                    </li>
                  )}
                </ul>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToTour(otherTour.id);
                  }}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-royal-900 border border-slate-200 font-bold py-2 rounded-xl text-xs shadow-sm transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
