// slide-140.js - 感谢学习
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'ending',
  index: 140,
  title: '感谢学习'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative elements
  slide.addShape("ellipse", {
    x: -1.5, y: -1.5, w: 4, h: 4,
    fill: { color: theme.accent, transparency: 25 }
  });
  slide.addShape("ellipse", {
    x: 8, y: 3.5, w: 3.5, h: 3.5,
    fill: { color: theme.accent, transparency: 25 }
  });

  // Course number badge
  slide.addShape("ellipse", {
    x: 4.25, y: 0.6, w: 1.5, h: 1.5,
    fill: { color: theme.accent }
  });
  slide.addText("26", {
    x: 4.25, y: 0.6, w: 1.5, h: 1.5,
    fontSize: 40, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Main thank you message
  slide.addText("感谢学习", {
    x: 0.5, y: 2.2, w: 9, h: 1,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  // Course title
  slide.addText("合作与背叛——囚徒困境及其现实应用", {
    x: 0.5, y: 3.2, w: 9, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.light, align: "center", valign: "middle"
  });

  // Divider
  slide.addShape(pres.shapes.LINE, {
    x: 3.5, y: 4.0, w: 3, h: 0,
    line: { color: "ffffff", width: 1.5, transparency: 40 }
  });

  // Motivational closing
  slide.addText("愿你在每一次博弈中，都能找到合作的可能", {
    x: 0.5, y: 4.2, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "ffffff", align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("140", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };

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
  pres.writeFile({ fileName: "slide-140-preview.pptx" });
}
