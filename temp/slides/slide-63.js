// slide-63.js - Chapter 9 Section Divider: 和家长谈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section-divider',
  index: 63,
  title: '和家长谈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background - light gray
  slide.background = { color: theme.bg };

  // Left accent block - deep red vertical bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 0,
    w: 0.35,
    h: 5.625,
    fill: { color: theme.primary }
  });

  // Chapter number badge - large prominent "第九章"
  slide.addText("第九章", {
    x: 0.8,
    y: 1.4,
    w: 8.5,
    h: 1.2,
    fontSize: 72,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true,
    align: "left",
    margin: 0
  });

  // Decorative line under chapter number
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8,
    y: 2.65,
    w: 2.5,
    h: 0.06,
    fill: { color: theme.accent }
  });

  // Main title - "和家长谈"
  slide.addText("和家长谈", {
    x: 0.8,
    y: 2.9,
    w: 8.5,
    h: 1.0,
    fontSize: 48,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    align: "left",
    margin: 0
  });

  // Subtitle - "不是说服，是摆信息差"
  slide.addText("不是说服，是摆信息差", {
    x: 0.8,
    y: 3.85,
    w: 8.5,
    h: 0.6,
    fontSize: 24,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    bold: false,
    align: "left",
    margin: 0
  });

  // Bottom accent shape - soft rounded rectangle
  slide.addShape(pres.ShapeType.rect, {
    x: 6.5,
    y: 4.8,
    w: 3.0,
    h: 0.5,
    fill: { color: theme.accent, transparency: 15 },
    rectRadius: 0.1
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("63", {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fontSize: 12,
    fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
