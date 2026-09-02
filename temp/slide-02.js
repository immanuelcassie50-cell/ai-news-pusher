// slide-02.js - Content: 什么是AI幻觉？
const pptxgen = require('pptxgenjs');

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText('什么是AI幻觉？', {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: 'Microsoft YaHei',
    color: 'FFFFFF', bold: true, margin: 0
  });

  slide.addShape(pres.shapes.roundRect, {
    x: 0.5, y: 1.15, w: 9, h: 0.9,
    fill: { color: theme.light },
    rectRadius: 0.08
  });

  slide.addText('AI模型生成看似合理但实际上是错误的信息', {
    x: 0.7, y: 1.3, w: 8.6, h: 0.6,
    fontSize: 18, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center', valign: 'middle'
  });

  const cardY = 2.3;
  const cardW = 4.2;
  const cardH = 2.8;

  // Left card - Truth
  slide.addShape(pres.shapes.roundRect, {
    x: 0.5, y: cardY, w: cardW, h: cardH,
    fill: { color: 'FFFFFF' },
    line: { color: theme.light, width: 1.5 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 2.1, y: cardY + 0.3, w: 0.8, h: 0.8,
    fill: { color: '2E7D32' }
  });

  slide.addText('✓', {
    x: 2.1, y: cardY + 0.3, w: 0.8, h: 0.8,
    fontSize: 32, fontFace: 'Arial',
    color: 'FFFFFF', align: 'center', valign: 'middle'
  });

  slide.addText('真实信息', {
    x: 0.7, y: cardY + 1.2, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: '2E7D32', bold: true, align: 'center'
  });

  slide.addText('基于事实、可验证
知识库中的正确内容', {
    x: 0.7, y: cardY + 1.7, w: 3.8, h: 0.9,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });

  // Right card - Falsehood
  slide.addShape(pres.shapes.roundRect, {
    x: 5.3, y: cardY, w: cardW, h: cardH,
    fill: { color: 'FFFFFF' },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 6.9, y: cardY + 0.3, w: 0.8, h: 0.8,
    fill: { color: theme.accent }
  });

  slide.addText('✗', {
    x: 6.9, y: cardY + 0.3, w: 0.8, h: 0.8,
    fontSize: 32, fontFace: 'Arial',
    color: 'FFFFFF', align: 'center', valign: 'middle'
  });

  slide.addText('幻觉信息', {
    x: 5.5, y: cardY + 1.2, w: 3.8, h: 0.5,
    fontSize: 20, fontFace: 'Microsoft YaHei',
    color: theme.accent, bold: true, align: 'center'
  });

  slide.addText('看似合理、实为错误
模型自信地编造答案', {
    x: 5.5, y: cardY + 1.7, w: 3.8, h: 0.9,
    fontSize: 13, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });

  // VS badge
  slide.addShape(pres.shapes.OVAL, {
    x: 4.55, y: cardY + 1.1, w: 0.9, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText('VS', {
    x: 4.55, y: cardY + 1.1, w: 0.9, h: 0.9,
    fontSize: 16, fontFace: 'Arial',
    color: 'FFFFFF', bold: true,
    align: 'center', valign: 'middle'
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.2, w: 9, h: 0.04,
    fill: { color: theme.light }
  });

  slide.addText('关键特征：模型会以流畅、专业的语气呈现这些错误信息，让人难以察觉', {
    x: 0.5, y: 5.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: 'Microsoft YaHei',
    color: theme.secondary, align: 'center'
  });
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
  pres.writeFile({ fileName: 'preview-slide-02.pptx' });
}

module.exports = { createSlide };
