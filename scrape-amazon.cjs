const https = require('https');
const http = require('http');
const fs = require('fs');

const urls = [
  { key: 'alcohol', url: 'https://www.amazon.com/Alcohol-How-Give-Glad-You-ebook/dp/B0058DW4DK/' },
  { key: 'china-naval', url: 'https://www.amazon.com/CHINAS-GLOBAL-NAVAL-AMBITIONS-Unstoppable-ebook/dp/B0G57Z73SN/' },
  { key: 'breach-trust', url: 'https://www.amazon.com/Breach-Trust-tale-Asheville-Civil-ebook/dp/B0DWK281L9/' },
  { key: 'singing-reels', url: 'https://www.amazon.com/Singing-Reels-Sunburn-PHILIP-TATE-ebook/dp/B0FV5DXBY1/' }
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
};

async function fetchPage(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers }, (res) => {
      let data = '';
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirecting ${item.key} to ${res.headers.location}`);
        https.get(res.headers.location, { headers }, (res2) => {
          res2.on('data', chunk => data += chunk);
          res2.on('end', () => resolve({ key: item.key, data, url: item.url }));
        }).on('error', () => resolve({ key: item.key, data: '', url: item.url }));
        return;
      }
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ key: item.key, data, url: item.url }));
    }).on('error', (err) => {
      console.error(`Error for ${item.key}:`, err.message);
      resolve({ key: item.key, data: '', url: item.url });
    });
  });
}

async function run() {
  for (const item of urls) {
    const res = await fetchPage(item);
    fs.writeFileSync(`scratch_${item.key}.html`, res.data);
    console.log(`Saved scratch_${item.key}.html (${res.data.length} bytes)`);
  }
}

run();

