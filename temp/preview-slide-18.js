// preview-slide-18.js - Quick preview for slide-18
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

const theme = {
  primary: "C41E3A",
  secondary: "2D2D2D",
  accent: "8A8A8A",
  light: "D4D4D4",
  bg: "FAFAFA"
};

const slideModule = require('D:/新课开发/大健康/10 新进医护人员规培与职业融入/授课PPT/slides/slide-18.js');
slideModule.createSlide(pres, theme);

pres.writeFile({ fileName: './output/slide-18-preview.pptx' })
  .then(() => {
    console.log('SUCCESS: slide-18 preview saved to ./output/slide-18-preview.pptx');
  })
  .catch(err => {
    console.error('Error writing file:', err);
  });
