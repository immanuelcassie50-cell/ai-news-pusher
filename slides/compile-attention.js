// compile-attention.js - Compile Attention Management Trial Course PPT
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

// Theme: Luxury & Mysterious (方太文化研究院风格)
const theme = {
  primary: "22223b",    // dark purple-blue for titles
  secondary: "4a4e69",  // secondary text
  accent: "9a8c98",     // mid-tone accent
  light: "c9ada7",      // light accent
  bg: "f2e9e4"          // warm background
};

// Presentation metadata
pres.author = '方太文化研究院';
pres.title = '注意力管理 - 10分钟精华试听课';
pres.subject = '注意力管理 trial course';
pres.company = '方太文化研究院';

// Load and create all 8 slides
for (let i = 1; i <= 8; i++) {
  const num = String(i).padStart(2, '0');
  const slideModule = require(`./slide-${num}.js`);
  slideModule.createSlide(pres, theme);
  console.log(`Added slide ${num}: ${slideModule.slideConfig.title}`);
}

// Write final PPTX
pres.writeFile({ fileName: 'D:/CC/slides/output/TrialClass.pptx' })
  .then(() => {
    console.log('\nSuccess! Created: D:/CC/slides/output/TrialClass.pptx');
  })
  .catch(err => {
    console.error('Error writing file:', err);
  });
