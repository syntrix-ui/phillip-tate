const https = require('https');
const fs = require('fs');
const path = require('path');

const downloads = [
  {
    url: 'https://m.media-amazon.com/images/I/61O1guUDbgL._SL1491_.jpg',
    dest: 'public/silent-screams-amazon-hd.jpg'
  },
  {
    url: 'https://booksbychristajan.com/wp-content/uploads/2026/03/Front-Cover-1-683x1024-1.webp',
    dest: 'public/silent-screams-front-hd.webp'
  },
  {
    url: 'https://booksbychristajan.com/wp-content/uploads/2026/03/christajanbookmockup-1016x1024-1.webp',
    dest: 'public/silent-screams-double-mockup.webp'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(item.dest);
    https.get(item.url, res => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${item.url}: ${res.statusCode}`);
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.dest}`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error downloading ${item.url}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const item of downloads) {
    await download(item);
  }
  console.log('All downloads completed.');
})();
