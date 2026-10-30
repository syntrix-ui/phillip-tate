const sharp = require('sharp');
const path = require('path');

async function processImages() {
  const thwartedMeta = await sharp('public/71MI+d2FALL._SL1500_.jpg').metadata();
  console.log('Thwarted metadata:', thwartedMeta);

  // In a book wrap: spine is near the center (~48%-52%). Front cover is on the right (~52% to 100%).
  // Let's crop the front cover of Thwarted Enemy:
  // Thwarted full is width x height.
  const tFrontWidth = Math.round(thwartedMeta.width * 0.48);
  const tFrontLeft = thwartedMeta.width - tFrontWidth;

  await sharp('public/71MI+d2FALL._SL1500_.jpg')
    .extract({
      left: tFrontLeft,
      top: 0,
      width: tFrontWidth,
      height: thwartedMeta.height
    })
    .toFile('public/book-thwarted-enemy-front.jpg');

  console.log('Created public/book-thwarted-enemy-front.jpg');

  // Copy full to semantic name
  await sharp('public/71MI+d2FALL._SL1500_.jpg').toFile('public/book-thwarted-enemy-full.jpg');

  const rizzoesMeta = await sharp('public/91AwurmIQeL._SX445_.jpg').metadata();
  console.log('Rizzoes metadata:', rizzoesMeta);

  const rFrontWidth = Math.round(rizzoesMeta.width * 0.485);
  const rFrontLeft = rizzoesMeta.width - rFrontWidth;

  await sharp('public/91AwurmIQeL._SX445_.jpg')
    .extract({
      left: rFrontLeft,
      top: 0,
      width: rFrontWidth,
      height: rizzoesMeta.height
    })
    .toFile('public/book-rizzoes-landing-front.jpg');

  console.log('Created public/book-rizzoes-landing-front.jpg');

  await sharp('public/91AwurmIQeL._SX445_.jpg').toFile('public/book-rizzoes-landing-full.jpg');
}

processImages().catch(console.error);
