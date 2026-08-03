import React, { useState } from 'react';
import { Camera, MapPin, X, ZoomIn, Heart, Users, Car, Compass } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'customers', label: 'Happy Customers' },
    { id: 'fleet', label: 'Our Fleet' },
    { id: 'destinations', label: 'Beautiful Destinations' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Banner */}
      <section className="bg-royal-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600">
            Jai Travel World Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-serif">
            Travel Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Take a glance at our happy travelers, luxury vehicle fleets, and the picturesque landscapes of Kodaikanal & Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Main Gallery Container */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm ${
                  selectedCategory === cat.id
                    ? 'bg-royal-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all cursor-pointer group relative"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/90 via-royal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white space-y-1">
                      <span className="bg-sky-500 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-sm font-serif">{item.title}</h4>
                      {item.location && (
                        <p className="text-[11px] text-sky-200 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-sky-400" />
                          <span>{item.location}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <h4 className="font-bold text-royal-900 text-sm line-clamp-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-royal-900 rounded-2xl overflow-hidden shadow-2xl border border-blue-800 text-white flex flex-col md:flex-row">
            
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="md:w-2/3 max-h-[60vh] md:max-h-[80vh] bg-black flex items-center justify-center">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:w-1/3 p-6 flex flex-col justify-between space-y-4 bg-royal-900">
              <div className="space-y-3">
                <span className="bg-sky-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                  {activeLightbox.category}
                </span>

                <h3 className="text-xl font-bold font-serif">{activeLightbox.title}</h3>

                {activeLightbox.location && (
                  <p className="text-xs text-sky-300 font-medium flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>{activeLightbox.location}</span>
                  </p>
                )}

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-blue-800">
                  {activeLightbox.description}
                </p>
              </div>

              <div className="pt-4 border-t border-blue-800">
                <p className="text-[11px] text-slate-400">Jai Travel World Kodaikanal • Serving since 1995</p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
