// compile.js - Compile all slides into a single PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = '第五章：工具协同与格式';
pres.author = 'AI协作课程';

// Theme: Red Gray with Light Background
const theme = {
  primary: "C43C3C",    // Red #C43C3C
  secondary: "4A4A4A",  // Dark Gray #4A4A4A
  accent: "8B4545",     // Muted Red
  light: "D4A5A5",      // Light Red
  bg: "F5F5F5"          // Light gray background
};

// Load and create all slides
for (let i = 1; i <= 24; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`Loaded slide-${num}.js`);
  } catch (err) {
    console.error(`Error loading slide-${num}.js:`, err.message);
  }
}

// Write to output
pres.writeFile({ fileName: './output/05-工具协同与格式.pptx' })
  .then(() => {
    console.log('PPTX created successfully: ./output/05-工具协同与格式.pptx');
  })
  .catch(err => {
    console.error('Error writing PPTX:', err);
  });