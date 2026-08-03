import React, { useState } from 'react';
import { 
  Phone, Smartphone, Mail, MapPin, Clock, Send, Globe,
  CheckCircle2, ChevronDown, ChevronUp, Compass, ShieldCheck 
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { LandlineIcon } from '../components/LandlineIcon';
import { COMPANY_INFO, FAQS } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Vehicle Rental',
    date: new Date().toISOString().split('T')[0],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Jai Travel World! I would like to inquire:\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service:* ${formData.service}\n` +
      `*Travel Date:* ${formData.date}\n` +
      `*Message:* ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    
    setSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Banner */}
      <section className="bg-royal-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-block bg-blue-800/80 text-sky-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-600">
            24/7 Travel Customer Assistance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-serif">
            Contact Jai Travel World
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            We are based in Turnerpuram, Kodaikanal. Reach out to us for vehicle bookings, fare quotes, or tour itineraries.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Contact Details Card */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-royal-900 text-white p-8 rounded-3xl shadow-xl border-4 border-sky-400/20 space-y-6">
                <div>
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    Serving Since 1995
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white mt-1">
                    Jai Travel World
                  </h3>
                  <p className="text-xs text-sky-200 italic mt-0.5">
                    "{COMPANY_INFO.tagline}"
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-200">
                  
                  {/* Address */}
                  <div className="flex items-start gap-3 bg-royal-800/80 p-4 rounded-xl border border-blue-700/60">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Office Address:</p>
                      <p className="leading-relaxed text-slate-300">
                        {COMPANY_INFO.address.full}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Contacts */}
                  <div className="flex items-start gap-3 bg-royal-800/80 p-4 rounded-xl border border-blue-700/60">
                    <Smartphone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Mobile Hotlines:</p>
                        <div className="space-y-1">
                          <p className="font-semibold text-white">
                            <a href={`tel:${COMPANY_INFO.mobiles[0]}`} className="hover:text-sky-300">
                              +91 {COMPANY_INFO.mobiles[0]}
                            </a>
                          </p>
                        </div>
                    </div>
                  </div>

                  {/* Landline */}
                  <div className="flex items-start gap-3 bg-royal-800/80 p-4 rounded-xl border border-blue-700/60">
                    <LandlineIcon className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white text-sm mb-1">Landline Phone:</p>
                      <p className="font-semibold text-white">{COMPANY_INFO.landline}</p>
                    </div>
                  </div>

                  {/* Email & Hours */}
                  <div className="flex items-center gap-3 bg-royal-800/80 p-4 rounded-xl border border-blue-700/60">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white text-sm">Email Address:</p>
                      <p className="text-slate-300">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-center gap-3 bg-royal-800/80 p-4 rounded-xl border border-blue-700/60">
                    <Globe className="w-5 h-5 text-sky-400 shrink-0" />
                    <div>
                      <p className="font-bold text-white text-sm">Website:</p>
                      <a href="http://www.kodaikanaltravels.in" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-300 transition-colors">
                        www.kodaikanaltravels.in
                      </a>
                    </div>
                  </div>

                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.mobiles[0]}`}
                    className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 text-center rounded-xl text-xs shadow transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-center rounded-xl text-xs shadow transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>

              </div>

            </div>

            {/* Right 7 Cols: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
              
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Get In Touch
                </span>
                <h3 className="text-2xl font-bold text-royal-900 font-serif">
                  Send Us A Message
                </h3>
                <p className="text-xs text-slate-600">
                  Fill out the form below for vehicle rental quotes or tour customization. We reply within 15 minutes!
                </p>
              </div>

              {submitted ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-royal-900 font-serif">Message Received!</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      Thank you <span className="font-bold text-slate-900">{formData.name}</span>. We have received your request.
                    </p>
                    <p className="text-xs text-slate-500">
                      Our office team will call you at <span className="font-bold">{formData.phone}</span> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-royal-900 text-white text-xs font-bold px-6 py-2.5 rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9994607460"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                      >
                        <option value="Vehicle Rental">Vehicle Rental (Innova / Etios / Tempo)</option>
                        <option value="Kodaikanal Tour">Kodaikanal Sightseeing Tour</option>
                        <option value="South India Package">Tamilnadu / South India Tour Package</option>
                        <option value="Resort Stay">Accommodation & Resort Stay</option>
                        <option value="Airport Drop">Airport / Station Pickup & Drop</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your group size, pickup location, or preferred itinerary..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-royal-900 hover:bg-blue-800 text-white font-bold py-3 rounded-xl text-xs shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* EMBEDDED GOOGLE MAP PLACEHOLDER */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-royal-900 font-serif flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-600" />
                Office Location Map
              </h3>
              <p className="text-xs text-slate-600">
                142-B-6, French Land, Turnerpuram 3rd Street, RDO Office Back Side, Kodaikanal.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Kodaikanal+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-royal-900 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-300 shadow-inner relative bg-slate-200">
            {/* Custom Stylized Embedded Map Container */}
            <iframe
              title="Jai Travel World Kodaikanal Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.83733221226!2d77.485!3d10.238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07666270e5159b%3A0x6b49e37bc6416180!2sKodaikanal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Need Help?
            </span>
            <h2 className="text-3xl font-extrabold text-royal-900 font-serif">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-royal-900 text-sm hover:bg-slate-100 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
