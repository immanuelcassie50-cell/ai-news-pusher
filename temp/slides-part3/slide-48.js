// slide-48.js - 下一步
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'transition',
  index: 48,
  title: '下一步'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.35, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("下一步", {
    x: 0.7, y: 0.5, w: 8.8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("进入第四部分：案例表单验证与落地", {
    x: 0.7, y: 1.3, w: 8.8, h: 0.6,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Arrow
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.1, w: 2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.4, w: 8.8, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 10, offset: 3, angle: 135, opacity: 0.12 }
  });

  slide.addText("在那里，你将：", {
    x: 1.0, y: 2.6, w: 8.2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    "与有经验的同事交叉验证你的话术和SOP",
    "用案例检验工具的实战效果",
    "完善并定稿你的服务工具包"
  ];

  items.forEach((item, i) => {
    const y = 3.2 + i * 0.55;
    slide.addShape(pres.shapes.OVAL, {
      x: 1.0, y: y + 0.1, w: 0.25, h: 0.25,
      fill: { color: theme.secondary }
    });
    slide.addText(item, {
      x: 1.4, y: y, w: 7.8, h: 0.45,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("48", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "22223b",
    secondary: "c94134",
    accent: "c9ada7",
    light: "f5f5f5",
    bg: "fafafa"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/slides-part3/slide-48-preview.pptx" });
}

module.exports = { createSlide, slideConfig };