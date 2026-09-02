// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '高净值客户服务经验萃取工作坊 - 第二部分';
pres.author = '招商证券';
pres.subject = '访谈与素材萃取';

// Theme: Red & Gray (Light background)
const theme = {
  primary: "8B2942",    // Deep wine red
  secondary: "4A4A4A",  // Dark gray
  accent: "C75B5B",     // Warm red
  light: "E8D5D5",      // Light pink gray
  bg: "FAFAFA"          // Light gray white
};

// Load and create all 40 slides
for (let i = 1; i <= 40; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = path.join(__dirname, `slide-${num}.js`);

  if (fs.existsSync(slidePath)) {
    try {
      const slideModule = require(slidePath);
      slideModule.createSlide(pres, theme);
      console.log(`Loaded slide-${num}.js`);
    } catch (err) {
      console.error(`Error loading slide-${num}.js:`, err.message);
    }
  } else {
    console.warn(`Missing slide-${num}.js`);
  }
}

// Write final PPTX
const outputPath = path.join(__dirname, 'output', '02_访谈与素材萃取.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\nSuccess! Written to: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error writing file:', err);
  });