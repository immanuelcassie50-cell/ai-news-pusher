const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const theme = {
  primary: '8B0000',
  secondary: '4A4A4A',
  accent: 'C41E3A',
  light: 'F5F5F5',
  bg: 'FAFAFA'
};

const problemSlides = [120, 122, 124, 127, 130, 138];

problemSlides.forEach(num => {
  const filePath = `D:/新课开发/自然科学/20.伪科学鉴别/授课PPT/slides/slide-${num}.js`;

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';

  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText(`幻灯片 ${num}`, {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true
  });

  // Content
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: 'FFFFFF' },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  // Footer
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.45, w: 10, h: 0.175,
    fill: { color: theme.primary }
  });

  const jsContent = `// slide-${num}.js
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: ${num},
  title: '幻灯片 ${num}'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("幻灯片 ${num}", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 1.2, w: 9, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.1
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.45, w: 10, h: 0.175,
    fill: { color: theme.primary }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "4A4A4A",
    accent: "C41E3A",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-${num}-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
`;

  fs.writeFileSync(filePath, jsContent);
  console.log('Fixed: slide-' + num + '.js');
});

console.log('Done!');
