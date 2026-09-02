// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '家庭教育中的科学育儿信息过载：如何筛选与决策';
pres.author = 'Course 20';

const theme = {
  primary: "264653",
  secondary: "2a9d8f",
  accent: "e9c46a",
  light: "f4a261",
  bg: "faf8f6"
};

const totalSlides = 98;
let successCount = 0;
let errorCount = 0;

for (let i = 1; i <= totalSlides; i++) {
  const num = String(i).padStart(2, '0');
  const slidePath = path.join(__dirname, `slide-${num}.js`);

  if (fs.existsSync(slidePath)) {
    try {
      const slideModule = require(slidePath);
      slideModule.createSlide(pres, theme);
      successCount++;
    } catch (err) {
      console.error(`Error slide ${num}:`, err.message);
      errorCount++;
    }
  } else {
    console.error(`Missing: slide-${num}.js`);
    errorCount++;
  }
}

const outputDir = path.join(__dirname, 'output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'Course20_科学育儿信息过载_完整版.pptx');
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\nSuccess: ${successCount} slides, Errors: ${errorCount}`);
    console.log(`PPTX saved to: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error saving PPTX:', err);
  });
