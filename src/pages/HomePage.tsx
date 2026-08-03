import React, { useState } from 'react';
import { 
  Car, Compass, MapPin, Calendar, Award, ShieldCheck, 
  Users, CheckCircle2, ArrowRight, Phone, 
  Sparkles, Star, ChevronRight, Navigation, Home as HomeIcon, Heart
} from 'lucide-react';
import { BankCards } from '../components/BankCards';
import { COMPANY_INFO, FLEETS, TOUR_PACKAGES, SERVICES_SUMMARY, TESTIMONIALS } from '../data/companyData';
import { PageType } from '../types';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

import kodaiLakeHero from '../assets/images/kodai_lake_hero.jpg';
import kodaiGolfClubHero from '../assets/images/kodai_golf_club_hero.jpg';
import kodaiValleyHero from '../assets/images/kodai_valley_hero.jpg';
import heroRoseGarden from '../assets/images/hero_rose_garden.jpg';
import heroPillarRocks from '../assets/images/hero_pillar_rocks.jpg';
import heroMannavanurLake from '../assets/images/hero_mannavanur_lake.jpg';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBookingModal }) => {
  const [quickSearch, setQuickSearch] = useState({
    pickup: '',
    destination: 'Kodaikanal',
    date: new Date().toISOString().split('T')[0],
    vehicle: 'Toyota Innova (7 Seater)'
  });

  const heroImages = [
    kodaiLakeHero, 
    kodaiGolfClubHero, 
    heroRoseGarden,
    kodaiValleyHero,
    heroPillarRocks,
    heroMannavanurLake
  ];
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIdx(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal(quickSearch.vehicle);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-royal-900 text-white overflow-hidden py-16">
        {/* Background Image Overlay with Dark Gradient */}
        <div className="absolute inset-0 z-0 bg-royal-900">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Kodaikanal Background ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center brightness-[0.5] scale-105 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroIdx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-royal-900/60 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left pt-6 pb-12">
          
          <div className="max-w-3xl space-y-6">
            
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md text-sky-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-sky-400/30 shadow-lg">
              <Sparkles className="w-4 h-4 text-sky-300" />
              <span>Serving Travelers Since 1995 • 30+ Years Experience</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-serif text-white leading-tight tracking-tight drop-shadow-md">
              Where Travel Dreams Become A <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">Reality</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Premier tour packages, luxury vehicle rentals (<span className="text-sky-300 font-semibold">Innova, Etios, 18-Seater Tempo Traveller</span>), and doorstep pickup across all over Tamil Nadu.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold px-7 py-3.5 rounded-2xl shadow-xl shadow-sky-500/20 transition-all transform hover:-translate-y-1 flex items-center gap-2 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Vehicle / Tour Now</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-2xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 text-base"
              >
                <span>Explore Fleet & Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">30+ Years</p>
                  <p className="text-slate-300">In Business Since 1995</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">100% Reliable</p>
                  <p className="text-slate-300">Sanitized Mountain Fleet</p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">50,000+ Happy</p>
                  <p className="text-slate-300">Tourists Served</p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Search Overlay Card */}
          <div className="mt-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl text-slate-800 border border-slate-200">
            <p className="text-xs font-bold text-royal-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-sky-600" />
              <span>Quick Fare Enquiry & Cab Booking</span>
            </p>

            <form onSubmit={handleQuickSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Madurai Airport / Kodai Hotel"
                    value={quickSearch.pickup}
                    onChange={e => setQuickSearch({ ...quickSearch, pickup: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kodaikanal Sightseeing"
                  value={quickSearch.destination}
                  onChange={e => setQuickSearch({ ...quickSearch, destination: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={quickSearch.date}
                  onChange={e => setQuickSearch({ ...quickSearch, date: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">
                  Preferred Fleet
                </label>
                <select
                  value={quickSearch.vehicle}
                  onChange={e => setQuickSearch({ ...quickSearch, vehicle: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-white font-medium"
                >
                  <option value="Toyota Innova (7 Seater)">Toyota Innova (7-Seater)</option>
                  <option value="18-Seater Tempo Traveller">18-Seater Tempo Traveller</option>
                  <option value="Toyota Etios Sedan">Toyota Etios Sedan (4-Seater)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Get Fare Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* 2. ABOUT US SNIPPET (Since 1995) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Stack */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
                <img
                  src={FLEETS[1].image || "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80"}
                  alt="Jai Travel World Fleet"
                  className="w-full h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-royal-900 text-white p-5 rounded-2xl shadow-xl border-2 border-sky-400 max-w-xs">
                <p className="text-3xl font-black font-serif text-sky-400">1995 - 2026</p>
                <p className="text-xs font-semibold text-slate-200 mt-1">
                  30+ Years of Excellence in Kodaikanal Hospitality & Transport
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>About Jai Travel World</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif leading-tight">
                Your Trusted Travel Companion in Kodaikanal Since 1995
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded in 1995 in Kodaikanal, <span className="font-bold text-slate-900">Jai Travel World</span> has grown from a local cab operator into one of Tamil Nadu's most reputable tour and travel agencies. We are dedicated to making every journey comfortable, safe, and memorable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-royal-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    Experienced Hill Drivers
                  </h4>
                  <p className="text-xs text-slate-600">
                    Polite drivers seasoned in navigating Kodaikanal's mountain roads and Western Ghats hairpin bends.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-royal-900 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    Clean & Sanitized Fleet
                  </h4>
                  <p className="text-xs text-slate-600">
                    Toyota Innova, Etios, and 18-Seater Tempo Travellers maintained to pristine luxury standards.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-royal-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md flex items-center gap-2"
                >
                  <span>Read Full History</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.mobiles[0]}`}
                  className="flex items-center gap-2 text-sm font-bold text-royal-900 hover:text-sky-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Us: {COMPANY_INFO.mobiles[0]}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES OFFERED OVERVIEW */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Comprehensive Travel Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Our Premium Services
            </h2>
            <p className="text-sm text-slate-600">
              From individual luxury cab rentals to large corporate group tours and resort stays, we handle every detail with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1: Tours & Travels */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-royal-900 flex items-center justify-center mb-4 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">Tours & Travels</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Explore Kodaikanal's iconic lakes, pine forests, pillar rocks, and South India temple circuits with custom curated travel itineraries.
              </p>
              <button
                onClick={() => onOpenBookingModal('Tours & Travels')}
                className="text-xs font-bold text-sky-600 hover:text-royal-900 flex items-center gap-1"
              >
                <span>Book Tour Package</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: Vehicle Rentals & Fleets */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-royal-900 flex items-center justify-center mb-4 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">Vehicle Rentals & Fleets</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Chauffeur-driven Toyota Innova, Etios, and 18-Seater Tempo Travellers equipped with AC and comfortable push-back seats.
              </p>
              <button
                onClick={() => onOpenBookingModal('Vehicle Rentals')}
                className="text-xs font-bold text-sky-600 hover:text-royal-900 flex items-center gap-1"
              >
                <span>Select Vehicle</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Custom Tour Packages */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-royal-900 flex items-center justify-center mb-4 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">Custom Tour Packages</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Specialized honeymoon escapes, family vacations, student educational trips, and corporate retreats built around your budget.
              </p>
              <button
                onClick={() => onOpenBookingModal('Custom Tour Packages')}
                className="text-xs font-bold text-sky-600 hover:text-royal-900 flex items-center gap-1"
              >
                <span>Customize Tour</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Accommodation Packages */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-royal-900 flex items-center justify-center mb-4 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">Accommodation Packages</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Combined room & travel packages featuring top-rated Kodaikanal resorts, scenic valley-view cottages, and budget homestays.
              </p>
              <button
                onClick={() => onOpenBookingModal('Accommodation Packages')}
                className="text-xs font-bold text-sky-600 hover:text-royal-900 flex items-center gap-1"
              >
                <span>View Stay Options</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 5: All-area Pickup and Drop */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-200 group md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-royal-900 flex items-center justify-center mb-4 group-hover:bg-royal-900 group-hover:text-white transition-colors">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">All-Area Pickup & Drop (All Over Tamil Nadu)</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                24/7 airport and railway station pickup/drop service connecting Kodaikanal with Madurai Airport (IXM), Coimbatore (CJB), Trichy (TRZ), Chennai (MAA), Dindigul, and Kodai Road railway stations.
              </p>
              <button
                onClick={() => onOpenBookingModal('Airport Pickup Drop')}
                className="text-xs font-bold text-sky-600 hover:text-royal-900 flex items-center gap-1"
              >
                <span>Book Pickup / Drop</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. POPULAR FLEETS SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Well-Maintained Vehicles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
                Our Popular Vehicle Fleets
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-bold text-royal-900 hover:text-sky-600 flex items-center gap-1.5"
            >
              <span>View All Vehicles & Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEETS.slice(0, 3).map((vehicle) => (
              <div key={vehicle.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all group flex flex-col">
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {vehicle.tag && (
                    <span className="absolute top-3 left-3 bg-royal-900/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {vehicle.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-royal-900 font-serif mb-2">
                      {vehicle.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-3 bg-white p-2.5 rounded-lg border border-slate-200">
                      <div>
                        <span className="font-semibold text-slate-900">Capacity:</span> {vehicle.capacity}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">AC:</span> {vehicle.acType}
                      </div>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 mb-2">
                      {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onOpenBookingModal(vehicle.name)}
                    className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs shadow transition-colors"
                  >
                    Book {vehicle.name}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. POPULAR TOUR PACKAGES PREVIEW */}
      <section className="py-20 bg-royal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Handcrafted Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Popular Tour Packages
            </h2>
            <p className="text-sm text-slate-300">
              Discover the finest tourist spots in Kodaikanal and South India with experienced drivers and cozy resort accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="bg-royal-800 rounded-2xl overflow-hidden border border-blue-700/60 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="relative h-48 bg-slate-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-sky-500 text-white text-xs font-extrabold px-3 py-1 rounded-md">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white font-serif">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-sky-300 font-medium">
                      📍 {pkg.location}
                    </p>

                    <div className="space-y-1 pt-2">
                      <p className="text-xs font-bold text-slate-300">Package Highlights:</p>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {pkg.highlights.slice(0, 3).map((hl, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-2.5 rounded-xl text-xs shadow transition-all"
                  >
                    Enquire for {pkg.title}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Customer Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Testimonials
            </h2>
            <p className="text-sm text-slate-600">
              Trusted by thousands of families, corporate groups, and travelers since 1995.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-royal-900 text-xs">{review.name}</h4>
                    <p className="text-[11px] text-slate-500">{review.location}</p>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-sky-700 px-2 py-0.5 rounded font-semibold">
                    {review.tripType}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. MONEY WORTH TRAVELS (Refund Policy) */}
      <section className="py-16 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-2 shadow-sm border border-blue-200">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
            Money Worth Travels
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 mt-4 text-left">
            <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
              Cancellation & Refund Policy
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Once you have booked our travels for service, we ensure complete transparency in cancellations. If you wish to claim a refund:
            </p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-base">Before 7 Days:</span>
                  <p className="text-sm text-slate-600 mt-0.5">Full amount will be refunded.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-700 p-1.5 rounded-lg shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-800 text-base">Before 3 Days:</span>
                  <p className="text-sm text-slate-600 mt-0.5">50% of the amount will be refunded.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-royal-900 via-blue-900 to-royal-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
            Planning Your Kodaikanal Trip?
          </h2>
          <p className="text-sm sm:text-base text-sky-200 max-w-2xl mx-auto">
            Call our team directly or send a message on WhatsApp for instant rate quotes, vehicle bookings, and hotel recommendations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_INFO.mobiles[0]}`}
              className="bg-sky-500 hover:bg-sky-400 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-sm transition-transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.mobiles[0]}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Jai Travel World, I would like to inquire about booking a vehicle.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-sm transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>

          <p className="text-xs text-slate-300">
            📍 Office Address: {COMPANY_INFO.address.street}, {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.town}
          </p>
        </div>
      </section>

      {/* 8. BANK ACCOUNT DETAILS */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Secure Payments
            </span>
            <h2 className="text-3xl font-extrabold text-royal-900 font-serif">
              Our Bank Account Details
            </h2>
            <p className="text-sm text-slate-600">
              For advance booking and direct bank transfers, please use the following official account details.
            </p>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            <BankCards />
          </div>
        </div>
      </section>

    </div>
  );
};
