import { FleetVehicle, TourPackage, GalleryItem, Testimonial, FAQItem, SightseeingTour, JeepSafariTour } from '../types';

import kodaikanalHeroImg from '../assets/images/kodaikanal_hero_1785151396526.jpg';
import tempoTravellerImg from '../assets/images/tempo_traveller_1785151408874.jpg';
import innovaCrystaImg from '../assets/images/innova_crysta_1785151423481.jpg';
import toyotaEtiosImg from '../assets/images/toyota_etios.jpg';
import mahindraXuvImg from '../assets/images/mahindra_xuv.jpg';
import honeymoonPackageImg from '../assets/images/honeymoon_package.jpg';

export const COMPANY_INFO = {
  name: "Jai Travel World",
  tagline: "Where Travel Dreams Become A Reality",
  establishedYear: 1995,
  experienceYears: 30, // 1995 to present (30+ years)
  mobiles: ["9994607460"],
  mobileFormatted: ["+91 9994607460"],
  landline: "04542 240007",
  email: "jaitravelworld@gmail.com",
  whatsappNumber: "919994607460",
  address: {
    doorNo: "142-B-6",
    street: "French Land, Turnerpuram 3rd Street",
    landmark: "RDO Office Back Side",
    town: "Kodaikanal",
    district: "Dindigul District",
    state: "Tamilnadu",
    pincode: "624101",
    full: "142-B-6, French Land, Turnerpuram 3rd Street, RDO Office Back Side, Kodaikanal, Dindigul District, Tamilnadu - 624101"
  },
  workingHours: "24 Hours / 7 Days a Week",
  mapCoordinates: {
    lat: 10.2381,
    lng: 77.4892,
  }
};

export const FLEETS: FleetVehicle[] = [
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta / Innova",
    category: "SUV",
    capacity: "6 - 7 Passengers",
    luggage: "3 Large Bags",
    acType: "Dual Zone Climate Control AC",
    image: innovaCrystaImg,
    features: [
      "Reclining Leather Seats",
      "Experienced Hill Driver",
      "Power Sockets & USB Chargers",
      "Pioneer Audio & Bluetooth",
      "Ample Legroom & Luggage Space",
      "First Aid Box & Sanitized"
    ],
    idealFor: "Family trips, Kodaikanal hill sightseeing, airport transfers to Madurai/Coimbatore.",
    rateEstimate: "Best Competitive Per-KM & Package Rates",
    tag: "Most Popular Family Choice"
  },
  {
    id: "tempo-traveller-18",
    name: "Luxury Tempo Traveller (18-Seater)",
    category: "Tempo Traveller",
    capacity: "18 Passengers + Driver",
    luggage: "Spacious Rear & Overhead Racks",
    acType: "High-Capacity Dual AC",
    image: tempoTravellerImg,
    features: [
      "Executive Pushback 2x1 Seats",
      "Wide LED TV & Music System",
      "Ample Overhead & Boot Luggage",
      "Ambient LED Roof Lighting",
      "Expert Mountain Highway Drivers",
      "First Aid & Emergency Safety Gear"
    ],
    idealFor: "Corporate outings, extended group tours, marriage parties, educational trips across Tamil Nadu.",
    rateEstimate: "Budget Group Travel Rates",
    tag: "Best for Large Groups"
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios / Dzire Sedan",
    category: "Sedan",
    capacity: "4 Passengers",
    luggage: "2 Medium Suitcases",
    acType: "Chilling Air Conditioner",
    image: toyotaEtiosImg,
    features: [
      "Smooth Comfort Ride",
      "Spacious Boot Space",
      "Clean & Sanitized Cabin",
      "Experienced Polite Driver",
      "Fuel Efficient & Economical",
      "Music System with Bluetooth"
    ],
    idealFor: "Couples, small families, business travel, point-to-point drop & pickup.",
    rateEstimate: "Most Economical Fare",
    tag: "Budget Friendly Sedan"
  },
  {
    id: "luxury-suv-4x4",
    name: "Executive Mahindra XUV / Fortuner",
    category: "Luxury Van",
    capacity: "6 Passengers",
    luggage: "4 Bags",
    acType: "Automatic Climate Control",
    image: mahindraXuvImg,
    features: [
      "Premium Leather Seats",
      "Panoramic Sunroof View",
      "Superior Hill Climb Traction",
      "Premium Surround Sound",
      "VIP Airport Pickup Service"
    ],
    idealFor: "VIP delegates, honeymoon couples wanting luxury, rugged off-beat Kodaikanal trails.",
    rateEstimate: "Premium VIP Comfort",
    tag: "Luxury Comfort"
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "regular-package-valley",
    title: "Regular Package (Valley Tour)",
    duration: "1 Day Local Special",
    location: "Kodaikanal Local",
    priceStart: "Custom Quote",
    image: kodaikanalHeroImg,
    highlights: [
      "Coaker's Walk & Upper Lake View",
      "Pine Forest & Guna Caves",
      "Pillar Rocks & Green Valley View",
      "Accommodation starts at ₹1500",
      "Can be modified to 2, 3, 4, 5 star rooms based on request"
    ],
    included: [
      "Private Chauffeur-driven Vehicle",
      "Local Sightseeing Itinerary",
      "Hotel Transfers"
    ],
    popular: true
  },
  {
    id: "1-day-package",
    title: "1 Day Kodaikanal Package",
    duration: "1 Day Sightseeing",
    location: "Kodaikanal Local",
    priceStart: "Custom Quote",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Choose any 1 major sightseeing route",
      "Flexible pickup from Bus stand / Hotel",
      "Complete day local tour"
    ],
    included: [
      "Private AC/Non-AC Vehicle",
      "Driver Batta & Parking"
    ]
  },
  {
    id: "2-days-3-nights",
    title: "2 Nights / 3 Days Package",
    duration: "3 Days / 2 Nights",
    location: "Kodaikanal Hill Station",
    priceStart: "Considered Price / On Request",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Day 1: Valley Tour & City Points",
      "Day 2: Picnic Tour / Forest Shooting Spots",
      "Day 3: Lake activities & Shopping",
      "Comfortable resort stay included"
    ],
    included: [
      "Dedicated Vehicle for 3 days",
      "2 Nights Hotel Accommodation",
      "All Sightseeing Transfers"
    ],
    popular: true
  },
  {
    id: "3-days-4-nights",
    title: "3 Nights / 4 Days Package",
    duration: "4 Days / 3 Nights",
    location: "Kodaikanal & Surroundings",
    priceStart: "Considered Price / On Request",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Extensive coverage of all Kodaikanal routes",
      "Forest village tours (Mannavanur/Poombarai)",
      "Leisure days for trekking or relaxation",
      "Premium resort accommodation"
    ],
    included: [
      "Dedicated Vehicle for 4 days",
      "3 Nights Premium Accommodation",
      "Airport/Railway station transfers"
    ]
  },
  {
    id: "students-package",
    title: "Students Package",
    duration: "Custom Duration",
    location: "Kodaikanal",
    priceStart: "Budget Friendly Rates",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Dormitory or Budget Group Accommodation",
      "Trekking & Educational Tours",
      "Campfire & Group Activities",
      "18-Seater Tempo Traveller transport"
    ],
    included: [
      "Group Transport (Tempo Traveller)",
      "Dormitory Stay",
      "Sightseeing Permit Assistance"
    ]
  },
  {
    id: "honeymoon-package",
    title: "Honeymoon Package",
    duration: "Custom Duration",
    location: "Kodaikanal, Tamil Nadu",
    priceStart: "Exclusive Couple Rates",
    image: honeymoonPackageImg,
    highlights: [
      "Resort with Scenic Valley View",
      "Candlelight Dinner & Flower Bed Decoration",
      "Private Luxury Sedan/SUV Sightseeing",
      "Privacy & Leisure focus"
    ],
    included: [
      "Private Luxury Vehicle",
      "Resort Accommodation with Breakfast",
      "Special Honeymoon Amenities"
    ],
    popular: true
  },
  {
    id: "corporate-package",
    title: "Corporate Group Package",
    duration: "Custom Duration",
    location: "Kodaikanal",
    priceStart: "Custom Quote",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "End-to-end event & travel management",
      "Team-building activities & campfire",
      "Large premium resorts with conference halls",
      "Transport via 18-Seater Luxury Tempo Travellers"
    ],
    included: [
      "Group Accommodation",
      "All meals & Gala dinner",
      "Local transport & transfers"
    ]
  },
  {
    id: "out-of-station",
    title: "Out of Station Packages",
    duration: "Flexible",
    location: "Rameswaram, Velankanni, Ooty, etc.",
    priceStart: "Contact Owner",
    image: tempoTravellerImg,
    highlights: [
      "Custom South India temple circuits",
      "Rameswaram, Velankanni, Madurai tours",
      "Ooty & Munnar hill station connects",
      "Please contact the owner directly to arrange out of station packages"
    ],
    included: [
      "Intercity Travel",
      "Multi-day expert driver"
    ]
  }
];

export const SIGHTSEEING_TOURS: SightseeingTour[] = [
  {
    id: "tour-valley",
    title: "TOUR-1 (Valley Tour)",
    places: [
      "Coaker's Walk",
      "Upper Lake View",
      "Moir Point",
      "Pine Forest (Cine Shooting Place)",
      "Devil's Kitchen (Guna Cave)",
      "Pillar Rocks",
      "Green Valley View",
      "Golf Course",
      "Shopping & Lunch Break"
    ],
    detailedPlaces: [
      { name: "Coaker's Walk", image: "/sightseeing/coakerswalk.jpeg", description: "A beautifully paved 1-kilometer pedestrian path offering breathtaking views of the plains, valleys, and distant mountains." },
      { name: "Upper Lake View", image: "/sightseeing/upperlakeview.jpeg", description: "Provides a spectacular panoramic vantage point to admire the iconic star-shaped Kodaikanal Lake from above." },
      { name: "Moir Point", image: "/sightseeing/moirpoint.jpeg", description: "A historical monument offering splendid views of the valley and the surrounding villages." },
      { name: "Pine Forest (Cine Shooting Place)", image: "/sightseeing/pineforest.jpeg", description: "Wander through a mesmerizing, dense woodland of towering pine trees that feels like stepping into a fairy tale." },
      { name: "Devil's Kitchen (Guna Cave)", image: "/sightseeing/gunacave.jpeg", description: "Originally known as Devil's Kitchen, this deep, dark, and fascinating bat-infested cave system sits between three massive boulders." },
      { name: "Pillar Rocks", image: "/sightseeing/pillarrocks.jpeg", description: "Behold three gigantic, vertical granite boulders standing shoulder-to-shoulder, reaching heights of 400 feet." },
      { name: "Green Valley View", image: "/sightseeing/greenvalleyview.jpeg", description: "A thrilling viewpoint with a steep drop of 5000 feet, offering a bird's-eye view of the plains." },
      { name: "Golf Course", image: "/sightseeing/golfcourse.jpeg", description: "A picturesque 18-hole golf course located at an elevation of over 7000 feet." },
      { name: "Shopping & Lunch Break", image: "/sightseeing/shoppingg.jpeg", description: "Explore the local markets for homemade chocolates, eucalyptus oil, and spices." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-park",
    title: "TOUR-2 (Park Tour)",
    places: [
      "Jain Temple",
      "Kurinji Andavar Temple",
      "Chettiar Park",
      "Palani View",
      "Kodai City View",
      "Bryant Park",
      "Horse Riding",
      "Lake Boating"
    ],
    detailedPlaces: [
      { name: "Jain Temple", image: "/sightseeing/jaintemple.jpeg", description: "A beautifully crafted marble temple that stands as a symbol of peace, purity, and intricate architectural brilliance." },
      { name: "Kurinji Andavar Temple", image: "/sightseeing/kurinjiaandavar.jpeg", description: "A famous shrine dedicated to Lord Murugan, globally renowned for the rare Kurinji flower." },
      { name: "Chettiar Park", image: "/sightseeing/chettiarpark.jpg", description: "A small, well-maintained and peaceful park nestled quietly away from the city hustle." },
      { name: "Palani View", image: "/sightseeing/palaniview.avif", description: "A scenic viewpoint that offers a distant, magnificent view of the Palani hills and temple." },
      { name: "Kodai City View", image: "/sightseeing/kodaicityview.jpeg", description: "A spectacular viewpoint providing a complete panoramic view of Kodaikanal town." },
      { name: "Bryant Park", image: "/sightseeing/bryantpark.jpg", description: "This expansive botanical garden boasts hundreds of varieties of roses, ornamental plants, and ancient trees." },
      { name: "Horse Riding", image: "/sightseeing/horseriding.jpg", description: "Experience a fun and gentle horse ride around the serene banks of the Kodai Lake." },
      { name: "Lake Boating", image: "/sightseeing/lakeboating.jpeg", description: "Enjoy scenic boat rides on the calm waters of the iconic Kodaikanal Lake." }
    ],
    note: "Per Head By Group Rs. 400 / Guide Charges Extra"
  },
  {
    id: "tour-wildways",
    title: "TOUR-3 (Wild Ways)",
    places: [
      "Silent Valley View",
      "Fire Tower",
      "Berijam Lake View",
      "Cap's Fly Valley",
      "Berijam Lake",
      "Shopping",
      "Lake Boating"
    ],
    detailedPlaces: [
      { name: "Silent Valley View", image: "/sightseeing/silentvalleyview.jpg", description: "A spectacular viewpoint offering a jaw-dropping look into a deep, densely forested valley." },
      { name: "Fire Tower", image: "/sightseeing/firetower.jpeg", description: "An old, towering observation structure historically used by forest rangers to spot and prevent wildfires." },
      { name: "Berijam Lake View", image: "/sightseeing/berijamlake.jpeg", description: "From this high-altitude vantage point, you can gaze down at the pristine, sparkling blue waters of Berijam Lake." },
      { name: "Cap's Fly Valley", image: "/sightseeing/capsfly.jpeg", description: "An incredibly fun and windy viewpoint famous for its unique aerodynamic currents rising from the valley floor." },
      { name: "Berijam Lake", image: "/sightseeing/berijamlake.jpeg", description: "A highly protected, eco-sensitive freshwater reservoir located deep within the forest." },
      { name: "Shopping", image: "/sightseeing/shoppingg.jpeg", description: "Explore the local markets for homemade chocolates, eucalyptus oil, and spices." },
      { name: "Lake Boating", image: "/sightseeing/lakeboating.jpeg", description: "Enjoy scenic boat rides on the calm waters of the iconic Kodaikanal Lake." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra / Forest Permission Must"
  },
  {
    id: "tour-picnic",
    title: "PICNIC TOUR NO. 4",
    places: [
      "La Saleth Church",
      "Vattakanal Falls",
      "Pambar Falls",
      "Mountain Beauty",
      "Dolphin's Nose",
      "Echo Rock",
      "500 year old Tree",
      "Shopping",
      "Lake Boating"
    ],
    detailedPlaces: [
      { name: "La Saleth Church", image: "/sightseeing/lasalethchruch.jpg", description: "A historic, beautiful 150-year-old shrine perched peacefully on a cliff edge." },
      { name: "Vattakanal Falls", image: "/sightseeing/vattakanalfalls.jpeg", description: "A rich biodiversity spot surrounded by lush greenery and cascading waterfalls." },
      { name: "Pambar Falls", image: "/sightseeing/pambarfalls.jpeg", description: "Also known as the 'Grand Cascade', offering a spectacular sight as waters rush down step-like rock formations." },
      { name: "Mountain Beauty", image: "/sightseeing/mountainbeauty.webp", description: "A scenic trekking stretch that lets you immerse yourself in the raw, rugged, and untouched natural beauty." },
      { name: "Dolphin's Nose", image: "/sightseeing/dolphinnose.jpeg", description: "A unique, naturally formed flat rock that juts out over a staggering 6,600-foot gorge, resembling the nose of a dolphin." },
      { name: "Echo Rock", image: "/sightseeing/echopoint.jpg", description: "A fun and fascinating natural acoustic phenomenon situated at the edge of a steep valley drop." },
      { name: "500 year old Tree", image: "/sightseeing/500yearoldtree.jpg", description: "A majestic, ancient Jamun tree standing tall and carrying centuries of history." },
      { name: "Shopping", image: "/sightseeing/shoppingg.jpeg", description: "Explore the local markets for homemade chocolates, eucalyptus oil, and spices." },
      { name: "Lake Boating", image: "/sightseeing/lakeboating.jpeg", description: "Enjoy scenic boat rides on the calm waters of the iconic Kodaikanal Lake." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-forest5",
    title: "FOREST TOUR NO. 5",
    places: [
      "Observatory Pine Forest (Shooting Point)",
      "Rose Garden",
      "Poombarai Village View",
      "Poombarai Village",
      "Mahalashmi Temple",
      "Kulanthai Vellappar Temple",
      "Palani View"
    ],
    detailedPlaces: [
      { name: "Observatory Pine Forest (Shooting Point)", image: "/sightseeing/ObservatoryPineForest.jpeg", description: "A picturesque, towering pine forest often featured in movies, perfect for photography." },
      { name: "Rose Garden", image: "/sightseeing/rosegarden.jpeg", description: "A colorful, vibrant garden featuring thousands of different blooming rose varieties." },
      { name: "Poombarai Village View", image: "/sightseeing/PoombaraiVillageView.jpg", description: "A mesmerizing viewpoint overlooking the colorful, terraced Poombarai village tucked in the valley." },
      { name: "Poombarai Village", image: "/sightseeing/poombaraivillage.jpeg", description: "A serene, ancient village known for its garlic cultivation and picturesque terrace farming." },
      { name: "Mahalashmi Temple", image: "/sightseeing/mahalakshmitemple.jpeg", description: "A serene and spiritually uplifting temple nestled in the quiet surroundings of Poombarai village." },
      { name: "Kulanthai Vellappar Temple", image: "/sightseeing/KulanthaiVellapparTemple.jpg", description: "An ancient and highly revered temple boasting rich historical significance and stunning Dravidian architecture." },
      { name: "Palani View", image: "/sightseeing/palaniview.avif", description: "A scenic viewpoint that offers a distant, magnificent view of the Palani hills and temple." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-forest6",
    title: "FOREST TOUR NO. 6",
    places: [
      "Mannavanur Sheep Farm",
      "Mannavanur Lake",
      "Rabbit Farm"
    ],
    detailedPlaces: [
      { name: "Mannavanur Sheep Farm", image: "/sightseeing/MannavanurSheepFarm.jpeg", description: "Vast, rolling green meadows hosting flocks of sheep, maintained by the Central Sheep and Wool Research Institute." },
      { name: "Mannavanur Lake", image: "/sightseeing/manavanurlake.jpeg", description: "A pristine, hidden gem located away from the city crowd, featuring crystal-clear waters surrounded by vast, rolling green meadows." },
      { name: "Rabbit Farm", image: "/sightseeing/rabbitfarm.jpeg", description: "An incredibly fun and engaging stop for families and children, maintained by the agricultural department." }
    ],
    note: "Per Head By Group Rs. 600 / Guide Charges Extra"
  }
];

export const JEEP_SAFARI_TOURS: JeepSafariTour[] = [
  {
    id: "safari-1",
    title: "TOUR - 1 JEEP SAFARI",
    duration: "5 Hours (5.00 am to 10.00 am)",
    places: [
      "Sunrise View Point with Jewel Box View",
      "Mountain View",
      "Off Road Ride",
      "Peper Water Fall's",
      "Sliding Water Falls",
      "Vattaparai 360°",
      "Shooting Spot Cafe Mountain View"
    ]
  },
  {
    id: "safari-2",
    title: "TOUR - 2 JEEP SAFARI",
    duration: "6 Hours (5.00 am to 10.00 am)",
    places: [
      "Vilpatti Village View",
      "Off Road Ride",
      "Pepper Falls",
      "Sliding Falls",
      "Private Waterfalls View",
      "Vattaparai 360° Mountain View Point",
      "Mehandi Circle View Point",
      "Shooting Spot Cafe"
    ]
  },
  {
    id: "safari-3",
    title: "TOUR - 3 JEEP SAFARI",
    duration: "8 Hours (5.00 am to 10.00 am)",
    places: [
      "100% Full of Road",
      "Pepper Waterfalls",
      "Sliding Waterfalls",
      "River Cross",
      "Kombai River Waterfalls",
      "35 waterfalls",
      "Mehandi Circle View Point",
      "Vattaparai 360° Mountain View Point",
      "Shooting Spot Cafe",
      "VilPatti Village View"
    ]
  },
  {
    id: "safari-4",
    title: "TOUR - 4 JEEP SAFARI",
    duration: "5 Hours (5.00 am to 10.00 am)",
    places: [
      "Natural Science Museum",
      "Vaigai Dam View",
      "Kodai Full City View",
      "Silver Cascade Water Falls",
      "River Water Falls",
      "Elephant Valley View",
      "Puliyur 360° Mountain View",
      "Anju Veedu Village View"
    ]
  }
];



export const SERVICES_SUMMARY = [
  {
    id: "tours-travels",
    title: "Tours & Travels",
    description: "Curated hill station sightseeing, pilgrimage circuits, and custom holiday itineraries tailored to your schedule.",
    iconName: "Compass"
  },
  {
    id: "vehicle-rentals",
    title: "Vehicle Rentals & Fleets",
    description: "Spotless Toyota Innova, Etios, and 18-Seater Tempo Travellers with polite, hill-expert drivers.",
    iconName: "Car"
  },
  {
    id: "custom-packages",
    title: "Custom Tour Packages",
    description: "Tailor-made itineraries for honeymooners, families, student groups, and corporate retreats.",
    iconName: "MapPin"
  },
  {
    id: "accommodation",
    title: "Accommodation Packages",
    description: "Handpicked luxury resorts, serene valley cottages, budget hotels, and cozy homestays in Kodaikanal.",
    iconName: "Home"
  },
  {
    id: "pickup-drop",
    title: "All-Area Pickup and Drop",
    description: "Punctual, seamless pickups from airports (Madurai, Coimbatore, Trichy, Chennai) and railway stations across Tamil Nadu.",
    iconName: "Navigation"
  },
  {
    id: "corporate-services",
    title: "Corporate Services & Events",
    description: "End-to-end transport management for corporate retreats, meetings, and team-building outings in Kodaikanal.",
    iconName: "Users"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Our 18-Seater Luxury Tempo Traveller in Kodaikanal",
    category: "fleet",
    image: tempoTravellerImg,
    description: "Ready for a corporate retreat group trip in the misty Kodaikanal pine forests.",
    location: "Kodaikanal Pine Forest"
  },
  {
    id: "g2",
    title: "Toyota Innova Crysta Fleet",
    category: "fleet",
    image: innovaCrystaImg,
    description: "Spacious, comfortable, and maintained to the highest safety standards.",
    location: "Turnerpuram, Kodaikanal"
  },
  {
    id: "g3",
    title: "Happy Family Group Tour at Pillar Rocks",
    category: "customers",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
    description: "Delighted travelers enjoying the breathtaking view of Kodaikanal Pillar Rocks.",
    location: "Pillar Rocks, Kodaikanal"
  },
  {
    id: "g4",
    title: "Misty Pine Forest Trail",
    category: "destinations",
    image: kodaikanalHeroImg,
    description: "The enchanting tall pine trees of Kodaikanal, a famous movie shooting location.",
    location: "Pine Forest, Kodaikanal"
  },
  {
    id: "g5",
    title: "Kodai Lake Serene Evening Boating",
    category: "destinations",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Iconic star-shaped man-made lake at the heart of Kodaikanal hill town.",
    location: "Kodai Lake"
  },
  {
    id: "g6",
    title: "Corporate Delegates Group Trip",
    category: "customers",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    description: "25+ member corporate team hosted with dual Tempo Travellers for 3 days.",
    location: "Dolphin's Nose Viewpoint"
  },
  {
    id: "g7",
    title: "Meenakshi Amman Temple - Madurai Tour",
    category: "destinations",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    description: "Historic temple circuit trip arranged with pickup from Madurai Airport.",
    location: "Madurai, Tamil Nadu"
  },
  {
    id: "g8",
    title: "Sedan Fleet for Honeymoon Couples",
    category: "fleet",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    description: "Clean Toyota Etios sedan equipped with plush seating and music for couples.",
    location: "Coaker's Walk, Kodaikanal"
  },
  {
    id: "g9",
    title: "Smiling Tourists at Silver Cascade Waterfalls",
    category: "customers",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    description: "Group photo welcomed at the entrance waterfall of Kodaikanal.",
    location: "Silver Cascade Waterfalls"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ramesh Krishnan",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    comment: "We booked an 18-seater Tempo Traveller with Jai Travel World for our family reunion in Kodaikanal. The vehicle was spotlessly clean, AC was excellent, and driver Mr. Selvam drove smoothly even on sharp hairpin bends. Serving since 1995 truly shows in their professionalism!",
    date: "June 2026",
    tripType: "Family Vacation (18 Pax)"
  },
  {
    id: "t2",
    name: "Priya & Anand Subramanian",
    location: "Bengaluru, Karnataka",
    rating: 5,
    comment: "Awesome honeymoon trip package! Picked us up directly from Madurai airport in an Innova Crysta. They recommended the best quiet resorts and arranged personalized sightseeing in Kodaikanal without any rush. Highly recommended!",
    date: "May 2026",
    tripType: "Honeymoon Package"
  },
  {
    id: "t3",
    name: "Dr. K. Venkatesh",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    comment: "Jai Travel World has been our go-to cab service for over 10 years whenever we visit Kodaikanal or need airport drops. Always on time, fixed transparent pricing, and zero hidden charges. Best travel agency in Turnerpuram!",
    date: "April 2026",
    tripType: "Regular Customer / Airport Drop"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "booking",
    question: "How can I book a vehicle or tour package?",
    answer: "You can book directly by calling our number 9994607460, sending a WhatsApp message, or submitting the online booking enquiry form on our Contact Us page. Our team responds instantly with fare quotes and vehicle availability."
  },
  {
    category: "fleet",
    question: "What vehicles do you offer in your fleet?",
    answer: "We offer Toyota Innova / Innova Crysta (6-7 seater), Toyota Etios / Swift Dzire Sedans (4 seater), and Executive 18-Seater Tempo Travellers with pushback seats and dual AC. All vehicles are sanitised and equipped with audio systems."
  },
  {
    category: "travel",
    question: "Do you provide pickup and drop from airports and railway stations outside Kodaikanal?",
    answer: "Yes! We provide 24/7 doorstep pickup and drop covering all over Tamil Nadu, including Madurai Airport/Railway Station, Coimbatore Airport, Trichy Airport, Chennai, Dindigul, Kodai Road station, and Bangalore."
  },
  {
    category: "payment",
    question: "Are driver allowances, toll charges, and parking included in the quotes?",
    answer: "Yes, we provide transparent all-inclusive or per-KM quotes upfront so you have no surprise hidden costs during your journey."
  },
  {
    category: "travel",
    question: "Can you assist with resort/hotel accommodations in Kodaikanal?",
    answer: "Absolutely. We have tied up with top luxury resorts, scenic valley-view cottages, and budget-friendly homestays in Kodaikanal to offer complete combined tour & stay packages."
  }
];
