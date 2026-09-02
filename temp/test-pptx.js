// test-pptx.js - Simple test
const pptxgen = require('pptxgenjs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';

console.log('pres.shapes:', pres.shapes);
console.log('ShapeType:', pres.ShapeType);
console.log('rect:', pres.shapes ? pres.shapes.rect : 'undefined');

const slide = pres.addSlide();
slide.background = { color: "FAFAFA" };

// Test addShape
slide.addShape(pres.shapes.rect, {
  x: 0, y: 0, w: 10, h: 0.08,
  fill: { color: "C41E3A" }
});

console.log('Success!');
pres.writeFile({ fileName: './output/test.pptx' })
  .then(() => console.log('File written'))
  .catch(err => console.error('Error:', err));
