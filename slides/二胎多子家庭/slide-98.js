// slide-98.js - 结束语
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 98,
  title: '感谢参与'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Main title
  slide.addText("感谢参与", {
    x: 0.5, y: 0.8, w: 9, h: 1.0,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4, y: 1.9, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Closing messages
  const messages = [
    "育儿是终身的修行",
    "每个孩子都值得被看见",
    "改变从觉察开始"
  ];

  messages.forEach((msg, idx) => {
    const y = 2.4 + idx * 0.7;

    // Quote mark
    slide.addText(""", {
      x: 2.5, y: y - 0.1, w: 0.4, h: 0.5,
      fontSize: 28, fontFace: "Georgia",
      color: theme.accent, bold: true,
      align: "right", valign: "top"
    });

    // Message text
    slide.addText(msg, {
      x: 3.0, y: y, w: 5, h: 0.5,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "left", valign: "middle"
    });
  });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 3.8, w: 1.5, h: 1.5,
    fill: { color: theme.primary, transparency: 85 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.5, y: 4.3, w: 1.0, h: 1.0,
    fill: { color: theme.accent, transparency: 80 }
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "2b2d42",
    accent: "ef233c",
    light: "8d99ae",
    bg: "f8f9fa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-98-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
