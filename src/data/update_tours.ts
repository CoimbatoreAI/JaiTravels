import fs from 'fs';

const updatedContent = `export const SIGHTSEEING_TOURS: SightseeingTour[] = [
  {
    id: "tour-valley",
    title: "TOUR-1 (Valley Tour)",
    subtitle: "First Trip: 9.30 am to 2.30 pm",
    time: "9.30 am to 2.30 pm",
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
      { name: "Pine Forest", image: "/sightseeing/pineforest.jpeg", description: "Wander through a mesmerizing, dense woodland of towering pine trees that feels like stepping into a fairy tale." },
      { name: "Pillar Rocks", image: "/sightseeing/pillarrocks.jpeg", description: "Behold three gigantic, vertical granite boulders standing shoulder-to-shoulder, reaching heights of 400 feet." },
      { name: "Guna Cave", image: "/sightseeing/gunacave.jpeg", description: "Originally known as Devil's Kitchen, this deep, dark, and fascinating bat-infested cave system sits between three massive boulders." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-park",
    title: "TOUR-2 (Park Tour)",
    subtitle: "2.30 pm to 5.30 pm",
    time: "2.30 pm to 5.30 pm",
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
      { name: "Bryant Park", image: "/sightseeing/bryantpark.jpg", description: "This expansive botanical garden boasts hundreds of varieties of roses, ornamental plants, and ancient trees." },
      { name: "Lake Boating", image: "/sightseeing/kodailake.jpg", description: "Enjoy scenic boat rides on the calm waters of the iconic Kodaikanal Lake." }
    ],
    note: "Per Head By Group Rs. 400 / Guide Charges Extra"
  },
  {
    id: "tour-wildways",
    title: "TOUR-3 (Wild Ways)",
    subtitle: "9.30 am to 1.30 pm",
    time: "9.30 am to 1.30 pm",
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
      { name: "Berijam Lake", image: "/sightseeing/berijamlake.jpeg", description: "A highly protected, eco-sensitive freshwater reservoir located deep within the forest." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra / Forest Permission Must"
  },
  {
    id: "tour-picnic",
    title: "PICNIC TOUR NO. 4",
    subtitle: "Forest Cine Shooting (9.30 am to 3.30 pm)",
    time: "9.30 am to 3.30 pm",
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
      { name: "Dolphin Nose", image: "/sightseeing/dolphinnose.jpg", description: "A unique, naturally formed flat rock that juts out over a staggering 6,600-foot gorge, resembling the nose of a dolphin." },
      { name: "Mountain Beauty", image: "/sightseeing/mountainbeauty.webp", description: "A scenic trekking stretch that lets you immerse yourself in the raw, rugged, and untouched natural beauty." },
      { name: "Echo Rock", image: "/sightseeing/echopoint.jpg", description: "A fun and fascinating natural acoustic phenomenon situated at the edge of a steep valley drop." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-forest5",
    title: "FOREST TOUR NO. 5",
    subtitle: "Film Chakkar (9.30 am to 3.00 pm)",
    time: "9.30 am to 3.00 pm",
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
      { name: "Mahalakshmi Temple", image: "/sightseeing/mahalakshmitemple.jpeg", description: "A serene and spiritually uplifting temple nestled in the quiet surroundings of Poombarai village." },
      { name: "Kulanthai Vellappar Kovil", image: "/sightseeing/kulanthaivellapar.jpg", description: "An ancient and highly revered temple boasting rich historical significance and stunning Dravidian architecture." }
    ],
    note: "Per Head By Group Rs. 500 / Guide Charges Extra"
  },
  {
    id: "tour-forest6",
    title: "FOREST TOUR NO. 6",
    subtitle: "9.30 am to 3.00 pm",
    time: "9.30 am to 3.00 pm",
    places: [
      "Mannavanur Sheep Farm",
      "Mannavanur Lake",
      "Rabbit Farm"
    ],
    detailedPlaces: [
      { name: "Mannavanur Lake", image: "/sightseeing/manavanurlake.jpeg", description: "A pristine, hidden gem located away from the city crowd, featuring crystal-clear waters surrounded by vast, rolling green meadows." },
      { name: "Rabbit Farm", image: "/sightseeing/rabbitfarm.jpeg", description: "An incredibly fun and engaging stop for families and children, maintained by the agricultural department." }
    ],
    note: "Per Head By Group Rs. 600 / Guide Charges Extra"
  }
];`;

const companyDataPath = 'src/data/companyData.ts';
let content = fs.readFileSync(companyDataPath, 'utf8');
const startIndex = content.indexOf('export const SIGHTSEEING_TOURS: SightseeingTour[] = [');
const endIndex = content.indexOf('export const JEEP_SAFARI_TOURS: JeepSafariTour[] = [');

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + updatedContent + '\n\n' + content.substring(endIndex);
  fs.writeFileSync(companyDataPath, content);
  console.log("Updated SIGHTSEEING_TOURS successfully.");
} else {
  console.error("Could not find SIGHTSEEING_TOURS boundaries.");
}
