// slide-01.js - Section Divider: 04 幻觉与边界
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'section-divider',
  index: 1,
  section: '04',
  title: '幻觉与边界'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  slide.addText('04', {
    x: 0.6, y: 0.8, w: 4, h: 2.5,
    fontSize: 160, fontFace: 'Arial',
    color: theme.accent, bold: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.3, w: 2.5, h: 0.08,
    fill: { color: theme.accent }
  });

  slide.addText('幻觉与边界', {
    x: 0.6, y: 3.6, w: 8, h: 1.0,
    fontSize: 52, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true
  });

  slide.addText('大模型的"知"与"不知"', {
    x: 0.6, y: 4.6, w: 8, h: 0.6,
    fontSize: 22, fontFace: 'Microsoft YaHei',
    color: theme.light
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 9.4, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  for (let i = 0; i < 5; i++) {
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6 + i * 0.25, y: 5.2, w: 0.12, h: 0.12,
      fill: { color: i === 0 ? theme.accent : theme.light, transparency: i === 0 ? 0 : 60 }
    });
  }

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: '1A1A1A',
    secondary: '2D2D2D',
    accent: 'B81025',
    light: 'E8E4DF',
    bg: 'F6F3EF'
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: 'slide-01-preview.pptx' });
}

module.exports = { createSlide, slideConfig };
