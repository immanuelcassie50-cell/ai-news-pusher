// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
const path = require('path');

pres.layout = 'LAYOUT_16x9';
pres.title = '03_显价值';
pres.author = '降本增效基层实战营';

const theme = {
  primary: "2b2d42",    // dark gray-blue for titles
  secondary: "6b7280",  // neutral gray
  accent: "dc2626",     // pure red for emphasis
  light: "f3f4f6",      // light gray
  bg: "fafafa"          // very light background
};

// Total number of slides
const totalSlides = 38;

for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`Added slide ${num}: ${slideModule.slideConfig.title}`);
  } catch (err) {
    console.error(`Error loading slide-${num}.js:`, err.message);
  }
}

const outputPath = path.join(__dirname, "output", "03_显价值.pptx");
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log('\nPresentation created successfully!');
    console.log('Output: ' + outputPath);
    console.log(`Total slides: ${totalSlides}`);
  })
  .catch(err => {
    console.error('Error creating presentation:', err);
  });