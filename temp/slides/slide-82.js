// slide-82.js - Q&A Section Divider: 关于干活
const pptxgen = require("pptxgenjs");
const slideConfig = { type: 'section-divider', index: 82, title: 'Q&A 关于干活' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large "Q&A" watermark
  slide.addText("Q&A", {
    x: -0.5, y: 0.8, w: 6, h: 3,
    fontSize: 140, fontFace: "Arial",
    color: theme.accent, bold: true,
    transparency: 70
  });

  // Decorative vertical line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 2.0, w: 0.08, h: 2.5,
    fill: { color: "FFFFFF", transparency: 30 }
  });

  // Section label
  slide.addText("Q&A", {
    x: 5.0, y: 1.8, w: 4.5, h: 0.6,
    fontSize: 24, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    charSpacing: 6
  });

  // Main title
  slide.addText("关于干活", {
    x: 5.0, y: 2.4, w: 4.5, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Subtitle
  slide.addText("临场问题处理", {
    x: 5.0, y: 3.4, w: 4.5, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Topics at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.8, w: 10, h: 0.825,
    fill: { color: "000000", transparency: 40 }
  });
  slide.addText("客户反悔 · 没把握时 · 不合理诉求 · 时间紧张", {
    x: 0.5, y: 4.9, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: `center`, valign: `middle`
  });

  // Page number badge (circle style, bottom-left per requirements)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("82", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: `center`, valign: `middle`
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-82-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
