// slide-135.js - 最后的思考
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 135,
  title: '最后的思考'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Decorative top line
  slide.addShape("rect", {
    x: 3.5, y: 1.2, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Quote text (centered, dramatic)
  slide.addText("The best way to predict", {
    x: 0.5, y: 1.5, w: 9, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });
  slide.addText("your future is to create it.", {
    x: 0.5, y: 2.1, w: 9, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Decorative bottom line
  slide.addShape("rect", {
    x: 3.5, y: 2.95, w: 3, h: 0.04,
    fill: { color: theme.accent }
  });

  // Attribution
  slide.addText("- Peter Drucker", {
    x: 0.5, y: 3.15, w: 9, h: 0.45,
    fontSize: 14, fontFace: "Arial",
    color: theme.light, bold: false,
    align: "center", valign: "middle"
  });

  // Reflection points
  const reflections = [
    "每一次合作都是一次创造未来的机会",
    "你选择的策略，决定了将到来的世界"
  ];

  reflections.forEach((r, i) => {
    const y = 3.85 + i * 0.5;
    slide.addText("> " + r, {
      x: 2, y: y, w: 6, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light, bold: false,
      align: "center", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("135", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
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
  pres.writeFile({ fileName: "slide-135-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
