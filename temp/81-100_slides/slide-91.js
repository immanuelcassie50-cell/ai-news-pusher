// slide-91.js - 感谢参与
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'cover',
  index: 91,
  title: '感谢参与'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Large decorative shape - left side
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 4, h: 5.625,
    fill: { color: theme.primary }
  });

  // Decorative accent strip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.accent }
  });

  // Thank you text on left
  slide.addText("感谢参与", {
    x: 0.3, y: 1.8, w: 3.5, h: 1,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  slide.addText("THANK YOU", {
    x: 0.3, y: 2.8, w: 3.5, h: 0.5,
    fontSize: 18, fontFace: "Arial",
    color: theme.light, margin: 0
  });

  // Main content on right
  slide.addText("成为卓越内训师", {
    x: 4.5, y: 1.8, w: 5, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addText("从今天开始", {
    x: 4.5, y: 2.6, w: 5, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });

  // Motivational quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.5, y: 3.5, w: 5, h: 1.2,
    fill: { color: theme.light }
  });
  slide.addText("\"培训师的价值，不在于你自己有多厉害，\n而在于你能帮助多少人变得更厉害。\"", {
    x: 4.7, y: 3.6, w: 4.6, h: 1,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true, valign: "middle", margin: 0
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("91", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-91-preview.pptx" });
}

module.exports = { createSlide, slideConfig };