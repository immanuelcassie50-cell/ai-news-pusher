// slide-01.js - Cover Page: 注意力管理
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 1,
  title: '注意力管理'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Full-width dark header bar at top
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 1.4,
    fill: { color: theme.primary }
  });

  // Decorative accent line under header
  slide.addShape("rect", {
    x: 0, y: 1.4, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Decorative circles (top right area, behind header visually but in bg)
  slide.addShape("ellipse", {
    x: 7.5, y: -0.5, w: 3.5, h: 3.5,
    fill: { color: theme.secondary, transparency: 70 }
  });

  slide.addShape("ellipse", {
    x: 8.2, y: 0.8, w: 2.2, h: 2.2,
    fill: { color: theme.accent, transparency: 60 }
  });

  // Left decorative vertical bar
  slide.addShape("rect", {
    x: 0.4, y: 1.8, w: 0.08, h: 2.8,
    fill: { color: theme.light }
  });

  // Main title - large and bold
  slide.addText("注意力管理", {
    x: 0.7, y: 1.9, w: 7, h: 1.2,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("10分钟精华试听课", {
    x: 0.7, y: 3.1, w: 6, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Accent line under subtitle
  slide.addShape("rect", {
    x: 0.7, y: 3.8, w: 2.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Tagline
  slide.addText("专注力就是竞争力", {
    x: 0.7, y: 4.0, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "left", valign: "middle"
  });

  // Bottom info area
  slide.addShape("rect", {
    x: 0, y: 5.0, w: 10, h: 0.625,
    fill: { color: theme.primary, transparency: 90 }
  });

  // Instructor
  slide.addText("方太文化研究院", {
    x: 0.7, y: 5.15, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Date
  slide.addText("2026年", {
    x: 7.5, y: 5.15, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "right", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "4a4e69",
    accent: "9a8c98",
    light: "c9ada7",
    bg: "f2e9e4"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/slides/slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
