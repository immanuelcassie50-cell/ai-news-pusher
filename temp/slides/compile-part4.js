// compile-part4.js - Compile slides 55-74 for Part 4
const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "B91C1C",    // deep red - titles
  secondary: "374151",  // dark gray - body text
  accent: "EF4444",     // bright red - emphasis
  light: "F3F4F6",      // light gray - cards
  bg: "FFFFFF"          // white background
};

// Import and create slides 55-74
for (let i = 55; i <= 74; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`✓ Slide ${num} added`);
  } catch (err) {
    console.error(`✗ Error loading slide-${num}: ${err.message}`);
  }
}

pres.writeFile({ fileName: './output/part4-preview.pptx' })
  .then(() => console.log('\n✓ Part4 preview saved to output/part4-preview.pptx'))
  .catch(err => console.error('Error writing file:', err));