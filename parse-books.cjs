const fs = require('fs');
const https = require('https');
const path = require('path');

const books = ['alcohol', 'china-naval', 'breach-trust', 'singing-reels'];

function extractData(html) {
  // Title
  let title = '';
  const titleMatch = html.match(/<span id="productTitle"[^>]*>([\s\S]*?)<\/span>/i) ||
                     html.match(/<meta property="og:title" content="([^"]+)"/i) ||
                     html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].replace(/<[^>]+>/g, '').replace(/:\s*A Novel.*|:\s*ebook.*/i, '').trim();
  }

  // Cover Image
  let imageUrl = '';
  const dynamicMatch = html.match(/data-a-dynamic-image="([^"]+)"/i);
  if (dynamicMatch) {
    try {
      const decoded = dynamicMatch[1].replace(/&quot;/g, '"');
      const obj = JSON.parse(decoded);
      const keys = Object.keys(obj);
      if (keys.length > 0) {
        imageUrl = keys[0];
      }
    } catch(e) {}
  }
  if (!imageUrl) {
    const ogImg = html.match(/<meta property="og:image" content="([^"]+)"/i) ||
                  html.match(/id="landingImage"[^>]*src="([^"]+)"/i) ||
                  html.match(/id="ebooksImgBlkFront"[^>]*src="([^"]+)"/i);
    if (ogImg) imageUrl = ogImg[1];
  }

  // Description
  let description = '';
  const descMatch = html.match(/data-a-expander-name="book_description_expander"[\s\S]*?>([\s\S]*?)<\/div>/i) ||
                    html.match(/id="bookDescription_feature_div"[\s\S]*?>([\s\S]*?)<\/div>/i);
  if (descMatch) {
    description = descMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  }

  return { title, imageUrl, description };
}

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    if (!url) return resolve();
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded image to ${dest}`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`Error downloading image: ${err.message}`);
      resolve();
    });
  });
}

async function run() {
  const results = {};
  for (const b of books) {
    const html = fs.readFileSync(`scratch_${b}.html`, 'utf-8');
    const data = extractData(html);
    results[b] = data;
    console.log(`\n=== Book: ${b} ===`);
    console.log(`Title: ${data.title}`);
    console.log(`Image: ${data.imageUrl}`);
    console.log(`Description preview: ${data.description.substring(0, 150)}...`);

    if (data.imageUrl) {
      await downloadImage(data.imageUrl, `public/book-${b}.jpg`);
    }
  }

  fs.writeFileSync('extracted_books.json', JSON.stringify(results, null, 2));
}

run();

