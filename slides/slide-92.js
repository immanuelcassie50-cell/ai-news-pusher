// slide-92.js - 常见问题解答第2页
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 92,
  title: '常见问题'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("常见问题", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Q&A Card
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 9, h: 3.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });

  // Q label
  slide.addShape("ellipse", {
    x: 0.8, y: 1.6, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("Q", {
    x: 0.8, y: 1.6, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Question
  slide.addText("老人干预比较孩子怎么办？", {
    x: 1.6, y: 1.6, w: 7.5, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // A label
  slide.addShape("ellipse", {
    x: 0.8, y: 2.5, w: 0.6, h: 0.6,
    fill: { color: theme.primary }
  });
  slide.addText("A", {
    x: 0.8, y: 2.5, w: 0.6, h: 0.6,
    fontSize: 20, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Answer
  slide.addText("与老人沟通，明确教育边界", {
    x: 1.6, y: 2.5, w: 7.5, h: 0.6,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Additional tips
  slide.addShape("roundRect", {
    x: 0.8, y: 3.4, w: 8.4, h: 1.2,
    fill: { color: theme.light, transparency: 70 },
    rectRadius: 0.1
  });

  slide.addText([
    { text: "建议：", options: { bold: true } },
    { text: "私下沟通而非当面纠正；感谢老人的关心；提供具体替代话语", options: { bold: false } }
  ], {
    x: 1.0, y: 3.4, w: 8, h: 1.2,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "middle"
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
  pres.writeFile({ fileName: "slide-92-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
