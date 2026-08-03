import fs from 'fs';

const path = 'src/data/companyData.ts';
let content = fs.readFileSync(path, 'utf8');

// The file exports SIGHTSEEING_TOURS as a constant.
// Modifying it via regex might be tricky if it's deeply nested, but let's just do it with a simple TS node script by evaluating it or parsing it.
// Since it's a TS file with other exports, I'll use a regex replacement strategy or just write a script to evaluate and rewrite.
// Let's use a simpler string manipulation approach: I will extract the SIGHTSEEING_TOURS array, modify it, and write it back.

// Actually, evaluating the TS file to get the object, modifying it, and re-stringifying it is hard because it contains React icons and stuff.
// Let's look at the actual structure. It's better to just add a UI-side fallback in SightseeingDetails.tsx or TourDetailsPage.tsx!

// The user asked "in sighseeing details page add all the places in details pages too and upload the respected images from this site http://google.com/".
// Let's just modify TourDetailsPage.tsx to merge `places` and `detailedPlaces`!
