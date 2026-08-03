export type PageType = 'home' | 'about' | 'services' | 'sightseeing' | 'tour-details' | 'gallery' | 'contact';

export interface FleetVehicle {
  id: string;
  name: string;
  category: 'SUV' | 'Sedan' | 'Tempo Traveller' | 'Luxury Van';
  capacity: string;
  luggage: string;
  acType: string;
  image: string;
  features: string[];
  idealFor: string;
  rateEstimate?: string;
  tag?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  location: string;
  priceStart: string;
  image: string;
  highlights: string[];
  included: string[];
  popular?: boolean;
}

export interface SightseeingLocation {
  name: string;
  image?: string;
  description?: string;
}

export interface SightseeingTour {
  id: string;
  title: string;
  subtitle?: string;
  time: string;
  price?: string;
  places: string[]; // For brief display
  detailedPlaces?: SightseeingLocation[]; // For detailed page
  note?: string;
}

export interface JeepSafariTour {
  id: string;
  title: string;
  duration: string;
  places: string[];
}


export interface GalleryItem {
  id: string;
  title: string;
  category: 'customers' | 'fleet' | 'destinations';
  image: string;
  description: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  tripType: string;
  avatar?: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  serviceType: string;
  pickupLocation: string;
  destination: string;
  passengers: string;
  vehiclePreference: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'fleet' | 'payment' | 'travel';
}
