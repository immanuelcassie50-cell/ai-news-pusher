// compile.js - Compile all slides into final PPTX
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'AI辅助生成——话术与SOP';
pres.author = '招商证券';

const theme = {
  primary: "22223b",
  secondary: "c94134",
  accent: "c9ada7",
  light: "f5f5f5",
  bg: "fafafa"
};

// Slides 01-15 define theme internally (agent-a pattern)
// Slides 16-50 expect theme as parameter (agent-b/c pattern)
for (let i = 1; i <= 50; i++) {
  const num = String(i).padStart(2, '0');
  try {
    const slideModule = require(`./slide-${num}.js`);
    // Pass theme only if the function accepts it
    // Check if slide-16 expects theme by calling with 2 args
    if (slideModule.createSlide.length >= 2) {
      slideModule.createSlide(pres, theme);
    } else {
      slideModule.createSlide(pres);
    }
    console.log(`Slide ${num}: OK`);
  } catch (e) {
    console.log(`Slide ${num}: ERROR - ${e.message}`);
  }
}

pres.writeFile({ fileName: './output/part3-final.pptx' })
  .then(() => console.log('\nCompiled: D:/CC/temp/slides-part3/output/part3-final.pptx'))
  .catch(e => console.error('Write error:', e));