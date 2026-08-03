import React from 'react';
import { Award, ShieldCheck, Heart, MapPin, Users, CheckCircle2, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PageType } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenBookingModal: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Banner Header */}
      <section className="bg-royal-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600">
            Established in 1995 • 30+ Years of Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-serif">
            About Jai Travel World
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Making travel dreams a reality in Kodaikanal and across Tamil Nadu for over three decades.
          </p>
        </div>
      </section>

      {/* Main Story & History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Our Heritage Since 1995</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif leading-tight">
                Three Decades of Unmatched Travel Hospitality in Kodaikanal
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                In <span className="font-bold text-slate-900">1995</span>, Jai Travel World was established at French Land, Turnerpuram 3rd Street (behind the RDO Office) in the misty hill town of Kodaikanal. What started as a dedicated taxi service with a commitment to driver punctuality has evolved into one of Dindigul district’s most trusted travel agencies.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Over the past 30 years, we have hosted over <span className="font-bold text-slate-900">50,000 satisfied tourists</span>, families, honeymoon couples, student groups, and corporate executives. Whether navigating steep mountain roads to Berijam Lake or coordinating seamless pickups from Madurai and Coimbatore airports, our promise remains unchanged: <span className="text-royal-900 font-bold italic">safety, comfort, and transparent pricing.</span>
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200">
                <div>
                  <p className="text-3xl font-black text-royal-900 font-serif">30+</p>
                  <p className="text-xs text-slate-600 font-medium">Years Serving Travelers</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-royal-900 font-serif">100%</p>
                  <p className="text-xs text-slate-600 font-medium">Verified Local Drivers</p>
                </div>
              </div>
            </div>

            {/* Visual Card */}
            <div className="bg-royal-900 text-white rounded-3xl p-8 shadow-2xl relative border-4 border-sky-400/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-blue-800 pb-4">
                  <h3 className="text-2xl font-bold font-serif">Jai Travel World</h3>
                  <Sparkles className="w-6 h-6 text-sky-400" />
                </div>

                <div className="space-y-4 text-xs text-slate-200">
                  <p className="leading-relaxed">
                    "Where Travel Dreams Become A Reality"
                  </p>

                  <div className="bg-royal-800 p-4 rounded-xl space-y-2 border border-blue-700/60">
                    <p className="font-bold text-sky-300 text-sm">📍 Office Address:</p>
                    <p className="text-slate-300 leading-relaxed">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <p className="text-slate-400 text-[11px]">Mobile Hotlines:</p>
                      <p className="font-bold text-white text-sm">{COMPANY_INFO.mobiles[0]}</p>
                      <p className="font-bold text-white text-sm">{COMPANY_INFO.mobiles[1]}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[11px]">Landline:</p>
                      <p className="font-bold text-white text-sm">{COMPANY_INFO.landline}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold py-3 rounded-xl shadow text-sm transition-all text-center"
                >
                  Contact Our Office Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Our Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-royal-900 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 font-serif">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                To transform every tour into a cherished lifelong memory by offering immaculate vehicles, courteous local drivers, and hassle-free travel arrangements across Tamil Nadu.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-royal-900 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 font-serif">Uncompromising Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Safety on mountain roads is paramount. All our Toyota Innova, Etios, and Tempo Travellers undergo stringent periodic mechanical checks, brake tests, and daily cabin sanitization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-royal-900 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 font-serif">Punctuality & Reliability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether it is a 4:00 AM airport pickup in Madurai or a sunrise trip to Coaker's Walk in Kodaikanal, our drivers arrive early with zero delays.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              The Jai Travel World Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-900 font-serif">
              Why Choose Us For Your Kodaikanal Trip?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-royal-900 text-sm">Local Kodaikanal Expertise</h4>
              <p className="text-xs text-slate-600">
                Deep knowledge of hidden viewpoints, seasonal weather, forest permits, and tourist spots.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-royal-900 text-sm">Flexible Vehicles</h4>
              <p className="text-xs text-slate-600">
                From compact 4-seater sedans to 7-seater Innova Crysta and 18-seater Tempo Travellers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-royal-900 text-sm">Transparent Pricing</h4>
              <p className="text-xs text-slate-600">
                Clear all-inclusive quotes with driver allowance, toll, and parking details upfront.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-royal-900 text-sm">All-Tamilnadu Pickup</h4>
              <p className="text-xs text-slate-600">
                Doorstep pickup from Madurai, Coimbatore, Trichy, Chennai, Dindigul, and Bangalore.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-royal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              30 Years Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Our Milestones Timeline
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-blue-700/60 hidden sm:block">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between gap-8">
              <div className="w-1/2 text-right pr-8 space-y-1">
                <span className="text-sky-400 font-extrabold text-lg">1995</span>
                <h4 className="font-bold text-white text-base">Inception in Kodaikanal</h4>
                <p className="text-xs text-slate-300">Started operations at Turnerpuram 3rd Street with local taxi service.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-sky-400 border-4 border-royal-900 z-10 shrink-0" />
              <div className="w-1/2" />
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between gap-8">
              <div className="w-1/2" />
              <div className="w-8 h-8 rounded-full bg-sky-400 border-4 border-royal-900 z-10 shrink-0" />
              <div className="w-1/2 text-left pl-8 space-y-1">
                <span className="text-sky-400 font-extrabold text-lg">2005</span>
                <h4 className="font-bold text-white text-base">Fleet Expansion</h4>
                <p className="text-xs text-slate-300">Added Toyota Innova SUVs to cater to luxury family vacations.</p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between gap-8">
              <div className="w-1/2 text-right pr-8 space-y-1">
                <span className="text-sky-400 font-extrabold text-lg">2015</span>
                <h4 className="font-bold text-white text-base">Group Travel & Tempo Travellers</h4>
                <p className="text-xs text-slate-300">Introduced 18-Seater Luxury Tempo Travellers and resort stay packages.</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-sky-400 border-4 border-royal-900 z-10 shrink-0" />
              <div className="w-1/2" />
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex items-center justify-between gap-8">
              <div className="w-1/2" />
              <div className="w-8 h-8 rounded-full bg-sky-400 border-4 border-royal-900 z-10 shrink-0" />
              <div className="w-1/2 text-left pl-8 space-y-1">
                <span className="text-sky-400 font-extrabold text-lg">2026</span>
                <h4 className="font-bold text-white text-base">30+ Years & Digital Booking</h4>
                <p className="text-xs text-slate-300">Serving 50,000+ tourists with seamless online enquiries and direct WhatsApp support.</p>
              </div>
            </div>

          </div>

          {/* Mobile Fallback Timeline */}
          <div className="space-y-6 sm:hidden">
            <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60 space-y-1">
              <span className="text-sky-400 font-bold text-sm">1995</span>
              <h4 className="font-bold text-white text-sm">Inception in Kodaikanal</h4>
              <p className="text-xs text-slate-300">Started operations at Turnerpuram 3rd Street with local taxi service.</p>
            </div>

            <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60 space-y-1">
              <span className="text-sky-400 font-bold text-sm">2005</span>
              <h4 className="font-bold text-white text-sm">Fleet Expansion</h4>
              <p className="text-xs text-slate-300">Added Toyota Innova SUVs to cater to luxury family vacations.</p>
            </div>

            <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60 space-y-1">
              <span className="text-sky-400 font-bold text-sm">2015</span>
              <h4 className="font-bold text-white text-sm">Group Travel & Tempo Travellers</h4>
              <p className="text-xs text-slate-300">Introduced 18-Seater Luxury Tempo Travellers and resort stay packages.</p>
            </div>

            <div className="bg-royal-800 p-4 rounded-xl border border-blue-700/60 space-y-1">
              <span className="text-sky-400 font-bold text-sm">2026</span>
              <h4 className="font-bold text-white text-sm">30+ Years & Digital Booking</h4>
              <p className="text-xs text-slate-300">Serving 50,000+ tourists with seamless online enquiries.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
