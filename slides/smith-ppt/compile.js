// compile.js - Compile all 90 slides into final presentation
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

// Ensure output directory exists
const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '斯密思想的现代回响';
pres.author = 'Course Generator';

const theme = {
  primary: "780000",    // Deep red - titles
  secondary: "003049",  // Deep blue - body text
  accent: "c1121f",     // Bright red - highlights
  light: "669bbc",      // Light blue - accents
  bg: "fdf0d5"          // Cream - background
};

// Load and create all 90 slides
let loadedCount = 0;
let errorCount = 0;

for (let i = 1; i <= 90; i++) {
  const num = String(i).padStart(2, '0');

  // Try both naming conventions: slide-01.js and slide01.js
  let slidePath = path.join(__dirname, `slide-${num}.js`);
  let slideModule;

  try {
    if (fs.existsSync(slidePath)) {
      slideModule = require(slidePath);
    } else {
      // Try without hyphen
      slidePath = path.join(__dirname, `slide${num}.js`);
      if (fs.existsSync(slidePath)) {
        slideModule = require(slidePath);
      }
    }

    if (slideModule && slideModule.createSlide) {
      slideModule.createSlide(pres, theme);
      loadedCount++;
      console.log(`Loaded slide ${num}`);
    } else if (fs.existsSync(slidePath)) {
      console.error(`Error: slide ${num} does not export createSlide`);
      errorCount++;
    }
  } catch (err) {
    console.error(`Error loading slide ${num}:`, err.message);
    errorCount++;
  }
}

console.log(`\nTotal: ${loadedCount} slides loaded, ${errorCount} errors`);

// Write final presentation
const outputPath = path.join(outputDir, 'presentation.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\nPresentation saved to: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error writing file:', err);
  });
