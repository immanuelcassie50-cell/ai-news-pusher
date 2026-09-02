// Compile slides 26-39 for preview
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "2b2d42",
  secondary: "8d99ae",
  accent: "d90429",
  light: "ef233c",
  bg: "edf2f4"
};

const slideNumbers = [
  '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'
];

slideNumbers.forEach(num => {
  try {
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
    console.log(`Added slide ${num}: ${slideModule.slideConfig.title}`);
  } catch (err) {
    console.error(`Error loading slide-${num}.js:`, err.message);
  }
});

pres.writeFile({ fileName: './output/slides-26-39-preview.pptx' })
  .then(() => console.log('Created slides-26-39-preview.pptx'))
  .catch(err => console.error('Error:', err));
