// slide-43.js - Module 4 section divider: Case Analysis
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'divider',
  index: 43,
  title: '模块四：案例分析'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large decorative shape
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.primary }
  });

  // Accent stripe
  slide.addShape("rect", {
    x: 0, y: 2.2, w: 10, h: 0.12,
    fill: { color: theme.accent }
  });

  // Module number
  slide.addText("MODULE 04", {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "left", valign: "middle",
    charSpacing: 8
  });

  // Main title
  slide.addText("案例分析", {
    x: 0.5, y: 2.5, w: 9, h: 1.2,
    fontSize: 52, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("海权与陆权的现实博弈", {
    x: 0.5, y: 3.7, w: 9, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "left", valign: "middle"
  });

  // Case preview
  slide.addShape("roundRect", {
    x: 0.5, y: 4.5, w: 3.5, h: 0.6,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });
  slide.addText("南海争端 | 中美博弈", {
    x: 0.5, y: 4.5, w: 3.5, h: 0.6,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("43", {
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
  pres.writeFile({ fileName: "slide-43-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
