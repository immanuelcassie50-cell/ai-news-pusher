// slides/compile.js
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "B5401F",    // dark red
  secondary: "5A5A5A",  // gray
  accent: "C4501A",     // lighter red
  light: "8A8A8A",      // light gray
  bg: "FAFAF8"          // near white background
};

// Load all 139 slides
for (let i = 1; i <= 139; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
  } catch(e) {
    console.error(`Error loading slide-${num}: ${e.message}`);
  }
}

pres.writeFile({ fileName: './output/presentation.pptx' })
  .then(() => console.log('PPTX created: ./output/presentation.pptx'))
  .catch(err => console.error('Error:', err));