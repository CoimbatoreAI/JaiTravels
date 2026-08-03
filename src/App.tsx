import React, { useState } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickBookingModal } from './components/QuickBookingModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesFleetsPage } from './pages/ServicesFleetsPage';
import { SightseeingPage } from './pages/SightseeingPage';
import { TourDetailsPage } from './pages/TourDetailsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenBookingModal = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService('Vehicle Rental');
    }
    setBookingModalOpen(true);
  };

  const handleNavigateToTour = (tourId: string) => {
    setSelectedTourId(tourId);
    setCurrentPage('tour-details' as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onOpenBookingModal={handleOpenBookingModal} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} onOpenBookingModal={handleOpenBookingModal} />;
      case 'services':
        return <ServicesFleetsPage onNavigate={handleNavigate} onOpenBookingModal={handleOpenBookingModal} />;
      case 'sightseeing':
        return <SightseeingPage onNavigate={handleNavigate} onNavigateToTour={handleNavigateToTour} onOpenBookingModal={handleOpenBookingModal} />;
      case 'tour-details':
        return <TourDetailsPage tourId={selectedTourId || ''} onNavigate={handleNavigate} onNavigateToTour={handleNavigateToTour} onOpenBookingModal={handleOpenBookingModal} />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} onOpenBookingModal={handleOpenBookingModal} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Page Body */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Quick Booking Enquiry Popup Modal */}
      <QuickBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={preselectedService}
      />
    </div>
  );
}
