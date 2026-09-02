// slide-94.js - Section Divider: 第五模块
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 94,
  title: '从个人到组织'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText("05", {
    x: 0.5, y: 1.0, w: 3, h: 1.8,
    fontSize: 96, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Vertical accent line
  slide.addShape("rect", {
    x: 3.3, y: 1.2, w: 0.04, h: 2.2,
    fill: { color: theme.accent }
  });

  // Section title
  slide.addText("从个人到组织", {
    x: 3.6, y: 1.3, w: 6, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("博弈思维与实践应用", {
    x: 3.6, y: 2.1, w: 6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Decorative circles
  slide.addShape("ellipse", {
    x: 7.5, y: 3.5, w: 2.2, h: 2.2,
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addShape("ellipse", {
    x: 8.2, y: 3.8, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 80 }
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("94", {
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
  pres.writeFile({ fileName: "slide-94-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
