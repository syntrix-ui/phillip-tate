const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Admin/.gemini/antigravity/brain/be309300-e612-4578-9890-d149e3c3f5e2/.system_generated/logs/transcript.jsonl')
});

rl.on('line', line => {
  if (line.includes('BookSpotlight') && line.includes('unsplash.com')) {
    const urls = line.match(/https:\/\/images\.unsplash\.com\/[^\s\"'\\]+/g);
    if (urls) {
      console.log('Found:', urls);
    }
  }
});

