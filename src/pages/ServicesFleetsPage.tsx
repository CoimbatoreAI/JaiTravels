import React, { useState } from 'react';
import { 
  Car, Compass, MapPin, Users, CheckCircle2, ShieldCheck, 
  Navigation, Home as HomeIcon, Calculator, ChevronRight, Phone, Calendar, Clock 
} from 'lucide-react';
import { FLEETS, TOUR_PACKAGES, COMPANY_INFO, JEEP_SAFARI_TOURS } from '../data/companyData';
import { PageType } from '../types';

interface ServicesFleetsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const ServicesFleetsPage: React.FC<ServicesFleetsPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [selectedFleetCategory, setSelectedFleetCategory] = useState<string>('All');
  
  // Quick Fare Estimator state
  const [calcTripType, setCalcTripType] = useState('kodai_local');
  const [calcVehicle, setCalcVehicle] = useState('Innova');
  const [calcDays, setCalcDays] = useState(2);

  const categories = ['All', 'SUV', 'Tempo Traveller', 'Sedan'];

  const filteredFleets = selectedFleetCategory === 'All'
    ? FLEETS
    : FLEETS.filter(f => f.category === selectedFleetCategory);

  const calculateEstimate = () => {
    let basePerDay = 3500;
    if (calcVehicle === 'Tempo') basePerDay = 6500;
    if (calcVehicle === 'Etios') basePerDay = 2800;

    if (calcTripType === 'outstation') basePerDay += 1000;
    if (calcTripType === 'airport') return '₹2,800 - ₹4,500 (One Way Flat Pickup)';

    return `₹${(basePerDay * calcDays).toLocaleString('en-IN')} (Approx. All-Inclusive Estimate)`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Banner */}
      <section className="bg-royal-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600">
            Toyota Innova • Etios • 18-Seater Tempo Traveller
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-serif">
            Services & Vehicle Fleets
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Discover our well-maintained vehicles, custom tour itineraries, resort packages, and 24/7 all-over Tamil Nadu airport transfers.
          </p>
        </div>
      </section>

      {/* SECTION 1: VEHICLE FLEETS GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Our Fleet Standards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-royal-900 font-serif">
                Sanitized Luxury Cabs & Mini-Buses
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFleetCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedFleetCategory === cat
                      ? 'bg-royal-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Fleets' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFleets.map((fleet) => (
              <div key={fleet.id} className="bg-slate-50 rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col md:flex-row group">
                
                {/* Image */}
                <div className="md:w-1/2 relative bg-slate-200 min-h-[220px]">
                  <img
                    src={fleet.image}
                    alt={fleet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {fleet.tag && (
                    <span className="absolute top-3 left-3 bg-royal-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow">
                      {fleet.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-royal-900 font-serif">
                      {fleet.name}
                    </h3>

                    <div className="space-y-1 text-xs text-slate-600">
                      <p><span className="font-bold text-slate-900">Capacity:</span> {fleet.capacity}</p>
                      <p><span className="font-bold text-slate-900">Luggage:</span> {fleet.luggage}</p>
                      <p><span className="font-bold text-slate-900">Air Conditioning:</span> {fleet.acType}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Key Features:
                      </p>
                      <div className="grid grid-cols-1 gap-1 text-xs text-slate-600">
                        {fleet.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(fleet.name)}
                    className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Book {fleet.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: FARE ESTIMATOR CALCULATOR */}
      <section className="py-16 bg-royal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-royal-800 rounded-3xl p-6 sm:p-10 border border-blue-700/60 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Transparent Fare Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif">
                Quick Trip Cost Estimator
              </h3>
              <p className="text-xs text-slate-300">
                Select your parameters below to view instant transparent estimates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Trip Type
                </label>
                <select
                  value={calcTripType}
                  onChange={e => setCalcTripType(e.target.value)}
                  className="w-full px-3 py-2.5 bg-royal-900 text-white text-xs border border-blue-700 rounded-xl outline-none"
                >
                  <option value="kodai_local">Kodaikanal Local Sightseeing</option>
                  <option value="outstation">South India Outstation Tour</option>
                  <option value="airport">Airport Pickup / Drop</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Select Vehicle
                </label>
                <select
                  value={calcVehicle}
                  onChange={e => setCalcVehicle(e.target.value)}
                  className="w-full px-3 py-2.5 bg-royal-900 text-white text-xs border border-blue-700 rounded-xl outline-none"
                >
                  <option value="Innova">Toyota Innova (7 Seater)</option>
                  <option value="Etios">Toyota Etios Sedan (4 Seater)</option>
                  <option value="Tempo">18-Seater Tempo Traveller</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Duration (Days)
                </label>
                <input
                  type="number"
                  min={1}
                  max={15}
                  value={calcDays}
                  onChange={e => setCalcDays(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2.5 bg-royal-900 text-white text-xs border border-blue-700 rounded-xl outline-none"
                />
              </div>
            </div>

            <div className="bg-royal-900/90 p-5 rounded-2xl border border-sky-400/30 text-center space-y-2">
              <p className="text-xs text-sky-300 font-semibold uppercase">Estimated Trip Cost:</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                {calculateEstimate()}
              </p>
              <p className="text-[11px] text-slate-400">
                *Includes vehicle rent & driver batta. Tolls/parking extra as per actuals.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => onOpenBookingModal(`${calcVehicle} (${calcTripType})`)}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-xl text-sm shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Confirm Booking with Final Rate Quote
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* JEEP SAFARI SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Off-Road Adventure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Exclusive Jeep Safari Tours
            </h2>
            <p className="text-sm text-slate-600">
              Experience the rugged beauty of Kodaikanal's hidden waterfalls, deep valleys, and off-road trails. 
              <span className="block mt-1 font-bold text-emerald-600">* Rates and availability On Request Based</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JEEP_SAFARI_TOURS.map((safari) => (
              <div key={safari.id} className="bg-white rounded-2xl border-2 border-emerald-100 shadow-md p-6 hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-xl font-black text-royal-900 font-serif">{safari.title}</h3>
                      <p className="text-xs font-bold text-emerald-600 mt-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {safari.duration}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {safari.places.map((place, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{place}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => onOpenBookingModal(safari.title)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs shadow transition-colors"
                >
                  Request Booking for {safari.title}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: TOUR & ACCOMMODATION PACKAGES */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Curated Holidays
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Tour & Accommodation Packages
            </h2>
            <p className="text-sm text-slate-600">
              We partner with top resort properties and valley cottages in Kodaikanal to provide all-in-one stays with sight-seeing transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOUR_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative h-56 bg-slate-200">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-3 left-3 bg-royal-900 text-white text-xs font-bold px-3 py-1 rounded-md">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-royal-900 font-serif">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-sky-600 font-semibold">📍 {pkg.location}</p>

                    <div className="space-y-2">
                      <p className="text-xs font-bold text-slate-800">Key Tour Spot Highlights:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {pkg.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-xs shadow transition-colors"
                  >
                    Enquire Package Details & Accommodation
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: ALL-AREA PICKUP AND DROP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-royal-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Tamil Nadu Doorstep Coverage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif leading-tight">
                All-Area Airport & Railway Station Pickups & Drops
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Traveling to Kodaikanal via flight or train? Jai Travel World provides 24/7 direct cab transfers from all major airports and railway hubs directly to your hotel or resort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-200 pt-2">
                <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60">
                  <p className="font-bold text-sky-300 text-sm mb-1">✈️ Airports Covered:</p>
                  <p>• Madurai Airport (IXM - 130 km)</p>
                  <p>• Coimbatore Airport (CJB - 175 km)</p>
                  <p>• Trichy Airport (TRZ - 195 km)</p>
                  <p>• Chennai International Airport (MAA)</p>
                </div>

                <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60">
                  <p className="font-bold text-sky-300 text-sm mb-1">🚉 Railway Hubs:</p>
                  <p>• Kodai Road Railway Station (80 km)</p>
                  <p>• Dindigul Junction (90 km)</p>
                  <p>• Madurai Railway Station</p>
                  <p>• Coimbatore Junction</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBookingModal('Airport Pickup Drop')}
                  className="bg-sky-500 hover:bg-sky-400 text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow transition-all"
                >
                  Book Pickup / Drop Cab
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
