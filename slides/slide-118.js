// slide-118.js - Closing Slide
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'closing',
  index: 118,
  title: '谢谢'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large thank you text
  slide.addText("谢谢", {
    x: 0.5, y: 1.5, w: 9, h: 1.5,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape("rect", {
    x: 4.0, y: 3.1, w: 2.0, h: 0.04,
    fill: { color: theme.accent }
  });

  // Course info
  slide.addText("合作与背叛——囚徒困境及其现实应用", {
    x: 0.5, y: 3.4, w: 9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Decorative circles
  slide.addShape("ellipse", {
    x: 0.5, y: 4.0, w: 1.0, h: 1.0,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addShape("ellipse", {
    x: 1.2, y: 4.3, w: 0.6, h: 0.6,
    fill: { color: theme.light, transparency: 85 }
  });

  slide.addShape("ellipse", {
    x: 8.5, y: 4.0, w: 1.0, h: 1.0,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addShape("ellipse", {
    x: 8.2, y: 4.3, w: 0.6, h: 0.6,
    fill: { color: theme.light, transparency: 85 }
  });

  // Contact/follow-up info
  slide.addText("期待与您进一步交流", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("118", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "1a365d",
    secondary: "2c5282",
    accent: "d69e2e",
    light: "bee3f8",
    bg: "f7fafc"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-118-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
