// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// Theme: 商业讲师信任护城河
const theme = {
  primary: "8B0000",    // dark red
  secondary: "424242",  // dark gray
  accent: "C62828",     // red
  light: "FFCDD2",      // light pink
  bg: "FAFAFA"          // near white
};

// Compile all 20 slides
for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const slideModule = require(`./slide-${num}.js`);
  slideModule.createSlide(pres, theme);
  console.log(`Added slide ${num}: ${slideModule.slideConfig.title}`);
}

pres.writeFile({ fileName: "./output/23-学员手册-商业讲师信任护城河.pptx" })
  .then(() => {
    console.log("\nPPTX created successfully!");
    console.log("Output: ./output/23-学员手册-商业讲师信任护城河.pptx");
  })
  .catch(err => {
    console.error("Error creating PPTX:", err);
  });
