import fs from 'fs';

const path = 'src/data/companyData.ts';
let content = fs.readFileSync(path, 'utf8');

// The best way is to regex or string replace.
// Let's replace 'subtitle: ".*",' with ''
content = content.replace(/subtitle: ".*",\n/g, '');
content = content.replace(/time: ".*",\n/g, '');

fs.writeFileSync(path, content);
console.log('Removed subtitles and times');
