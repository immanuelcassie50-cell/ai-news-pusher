// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "2b2d42",
  secondary: "8d99ae",
  accent: "ef233c",
  light: "edf2f4",
  bg: "edf2f4"
};

// Load and create all slides
for (let i = 1; i <= 12; i++) {
  const num = String(i).padStart(2, '0');
  const slideModule = require(`./slide-${num}.js`);
  slideModule.createSlide(pres, theme);
}

// Save final presentation
pres.writeFile({ fileName: './output/presentation.pptx' })
  .then(() => console.log("PPT created: ./output/presentation.pptx"))
  .catch(err => console.error("Error:", err));
