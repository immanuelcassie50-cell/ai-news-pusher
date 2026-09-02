// slide-53.js - MODULE 4 SECTION DIVIDER
const pptxgen = require('pptxgenjs');

const slideConfig = {
  type: 'section',
  index: 53,
  title: '薪酬对话场景实战'
};

const theme = {
  primary: "8B2635",
  secondary: "4A4A4A",
  accent: "C45C3E",
  light: "D4C5C5",
  bg: "FAF8F7"
};

/**
 * Creates a section divider slide for Module 4
 * @param {pptxgen} pres - PPTxGenJS instance
 * @param {Object} theme - Theme colors
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // ========== Right side geometric decoration ==========
  // Large deep red rectangle - top right
  slide.addShape(pres.ShapeType.rect, {
    x: 6.8,
    y: -0.3,
    w: 3.8,
    h: 2.8,
    fill: { color: theme.primary, transparency: 15 },
    rectRadius: 0.08
  });

  // Medium warm red rectangle - right middle
  slide.addShape(pres.ShapeType.rect, {
    x: 7.5,
    y: 2.6,
    w: 2.5,
    h: 1.8,
    fill: { color: theme.accent, transparency: 25 },
    rectRadius: 0.1
  });

  // Light pink gray rectangle - bottom right decoration
  slide.addShape(pres.ShapeType.rect, {
    x: 8.2,
    y: 4.5,
    w: 2.2,
    h: 1.5,
    fill: { color: theme.light, transparency: 30 },
    rectRadius: 0.12
  });

  // Small deep red square - accent
  slide.addShape(pres.ShapeType.rect, {
    x: 6.2,
    y: 3.8,
    w: 0.8,
    h: 0.8,
    fill: { color: theme.primary, transparency: 20 },
    rectRadius: 0.05
  });

  // ========== Left vertical accent bar ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 1.2,
    w: 0.08,
    h: 3.2,
    fill: { color: theme.accent }
  });

  // ========== Section number "04" ==========
  slide.addText('04', {
    x: 0.9,
    y: 1.0,
    w: 3,
    h: 1.5,
    fontSize: 96,
    fontFace: 'Arial',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== Section title ==========
  slide.addText('薪酬对话场景实战', {
    x: 0.9,
    y: 2.5,
    w: 6,
    h: 0.8,
    fontSize: 42,
    fontFace: 'Microsoft YaHei',
    color: theme.primary,
    bold: true,
    align: 'left',
    valign: 'middle'
  });

  // ========== Subtitle ==========
  slide.addText('五个真实场景的完整对话模板', {
    x: 0.9,
    y: 3.3,
    w: 6,
    h: 0.5,
    fontSize: 20,
    fontFace: 'Microsoft YaHei',
    color: theme.secondary,
    bold: false,
    align: 'left',
    valign: 'middle'
  });

  // ========== Decorative dots ==========
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.9,
    y: 4.0,
    w: 0.12,
    h: 0.12,
    fill: { color: theme.accent }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 1.1,
    y: 4.0,
    w: 0.12,
    h: 0.12,
    fill: { color: theme.accent, transparency: 40 }
  });

  slide.addShape(pres.ShapeType.ellipse, {
    x: 1.3,
    y: 4.0,
    w: 0.12,
    h: 0.12,
    fill: { color: theme.accent, transparency: 70 }
  });

  // ========== Bottom left decorative lines ==========
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 4.6,
    w: 1.5,
    h: 0.04,
    fill: { color: theme.light }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 4.75,
    w: 1.0,
    h: 0.03,
    fill: { color: theme.light, transparency: 50 }
  });

  return slide;
}

// Standalone preview mode
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';

  const theme = {
    primary: "8B2635",
    secondary: "4A4A4A",
    accent: "C45C3E",
    light: "D4C5C5",
    bg: "FAF8F7"
  };

  createSlide(pres, theme);

  pres.writeFile({ fileName: 'D:/CC/新课开发/HR/薪酬/07.管理者薪酬对话：怎么解释AI生成的调薪决策而不失去信任/08-PPT/slides/output/slide-53-preview.pptx' })
    .then(() => {
      console.log('Preview saved: slide-53-preview.pptx');
    })
    .catch(err => {
      console.error('Preview failed:', err.message);
    });
}

module.exports = { createSlide, slideConfig };
