// slide-31.js - Module 3 section divider: "指标体系——如何判断战略倾向"
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'section',
  index: 31,
  title: '模块三：指标体系'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Large section number
  slide.addText("03", {
    x: 0.5, y: 0.8, w: 3.0, h: 2.0,
    fontSize: 120, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Module label
  slide.addShape("rect", {
    x: 0.5, y: 3.0, w: 2.5, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("MODULE 3", {
    x: 0.5, y: 3.0, w: 2.5, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Main title
  slide.addText("指标体系", {
    x: 0.5, y: 3.6, w: 9.0, h: 0.8,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("如何判断战略倾向", {
    x: 0.5, y: 4.4, w: 9.0, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Decorative line
  slide.addShape("rect", {
    x: 0.5, y: 5.15, w: 3.0, h: 0.05,
    fill: { color: theme.accent }
  });

  // Page number badge (lighter version)
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("31", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "2b2d42",
    secondary: "8d99ae",
    accent: "ef233c",
    light: "edf2f4",
    bg: "ffffff"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-31-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
