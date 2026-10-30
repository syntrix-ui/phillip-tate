const https = require('https');
const fs = require('fs');

https.get('https://booksbychristajan.com/', (res) => {
  let html = '';
  res.on('data', d => html += d);
  res.on('end', () => {
    const urls = html.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
    const unique = [...new Set(urls)];
    fs.writeFileSync('images_found.json', JSON.stringify(unique, null, 2));
    console.log(`Found ${unique.length} images`);
  });
}).on('error', err => {
  console.error(err.message);
});
