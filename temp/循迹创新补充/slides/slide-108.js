// slide-108.js - 低保真原型
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 108,
  title: '低保真原型 | Low-Fidelity Prototype'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("低保真原型", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("Low-Fidelity Prototype", {
    x: 0.5, y: 0.95, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Arial",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.35, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("快速、简单、低成本", {
    x: 0.5, y: 1.5, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Left column - 3 types with icons
  const types = [
    { icon: "✏️", title: "纸笔草图", desc: "最快速的表达方式，用手绘草图呈现核心界面和流程" },
    { icon: "📄", title: "纸质原型", desc: "用纸和卡纸制作可交互的立体模型，模拟真实界面" },
    { icon: "📐", title: "框架线框图", desc: "用绘图工具绘制简洁的线框图，呈现布局结构" }
  ];

  types.forEach((item, i) => {
    const y = 2.0 + i * 1.0;

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.light }
    });
    slide.addText(item.icon, {
      x: 0.5, y: y, w: 0.5, h: 0.5,
      fontSize: 16, align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.15, y: y, w: 3, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: 1.15, y: y + 0.32, w: 3.5, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right column - pros/cons box
  const rightX = 5.0;

  // Applicable scenarios
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: 2.0, w: 4.5, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: 2.0, w: 4.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("适用场景", {
    x: rightX, y: 2.0, w: 4.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("概念初期 / 想法验证 / 早期沟通 / 设计头脑风暴", {
    x: rightX + 0.15, y: 2.45, w: 4.2, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Pros
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: 3.25, w: 2.15, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX, y: 3.25, w: 2.15, h: 0.3,
    fill: { color: "4CAF50" }
  });
  slide.addText("优点", {
    x: rightX, y: 3.25, w: 2.15, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "制作快速", options: { bullet: true, breakLine: true } },
    { text: "修改方便", options: { bullet: true, breakLine: true } },
    { text: "成本低廉", options: { bullet: true, breakLine: true } },
    { text: "聚焦核心", options: { bullet: true } }
  ], {
    x: rightX + 0.1, y: 3.6, w: 1.95, h: 1.2,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Cons
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX + 2.35, y: 3.25, w: 2.15, h: 1.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: rightX + 2.35, y: 3.25, w: 2.15, h: 0.3,
    fill: { color: theme.accent }
  });
  slide.addText("缺点", {
    x: rightX + 2.35, y: 3.25, w: 2.15, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText([
    { text: "精度有限", options: { bullet: true, breakLine: true } },
    { text: "体验不真实", options: { bullet: true, breakLine: true } },
    { text: "难以测试复杂交互", options: { bullet: true } }
  ], {
    x: rightX + 2.45, y: 3.6, w: 1.95, h: 1.2,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("108", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
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
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-108-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
