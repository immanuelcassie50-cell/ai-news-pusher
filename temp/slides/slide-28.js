// slide-28.js - Information Presentation Principle: 信息呈现原则
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 28,
  title: '信息呈现原则'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape("rect", {
    x: 0.4, y: 0.35, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("信息呈现原则", {
    x: 0.6, y: 0.35, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });

  // Core principle card
  slide.addShape("roundRect", {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1.5 },
    rectRadius: 0.08
  });
  slide.addText("保留一定的复杂度，不简化成斩钉截铁的结论", {
    x: 0.7, y: 1.0, w: 8.6, h: 1.0,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Two-column comparison
  // Left: Don't do this
  slide.addShape("roundRect", {
    x: 0.5, y: 2.2, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 },
    rectRadius: 0.1
  });

  slide.addShape("rect", {
    x: 0.5, y: 2.2, w: 4.3, h: 0.45,
    fill: { color: theme.accent }
  });
  slide.addText("X 过度简化", {
    x: 0.5, y: 2.2, w: 4.3, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "牺牲信息真实性", options: { breakLine: true } },
    { text: "换取沟通效率", options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "= 透支可信度", options: { bold: true, color: theme.accent } }
  ], {
    x: 0.7, y: 2.8, w: 3.9, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    align: "center"
  });

  // Right: Do this
  slide.addShape("roundRect", {
    x: 5.2, y: 2.2, w: 4.3, h: 2.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.06 },
    rectRadius: 0.1
  });

  slide.addShape("rect", {
    x: 5.2, y: 2.2, w: 4.3, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("OK 合理呈现", {
    x: 5.2, y: 2.2, w: 4.3, h: 0.45,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText([
    { text: "宁可多花几句话", options: { breakLine: true } },
    { text: "把确定的和不确定的部分分开说", options: { breakLine: true } },
    { text: ', options: { breakLine: true } },
    { text: "让家长自己知道哪里是硬事实，哪里是合理推断", options: {} }
  ], {
    x: 5.4, y: 2.8, w: 3.9, h: 1.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, valign: "top",
    align: "center"
  });

  // Bottom key point
  slide.addShape("roundRect", {
    x: 0.5, y: 4.8, w: 9, h: 0.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 },
    rectRadius: 0.08
  });
  slide.addText("过度简化=偷懒，真正专业是接受复杂性并帮人理清它", {
    x: 0.7, y: 4.8, w: 8.6, h: 0.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // Page number badge
  slide.addShape("ellipse", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("28", {
    x: 0.3, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-28-preview.pptx" })
    .then(() => console.log("Created: slide-28-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide, slideConfig };
