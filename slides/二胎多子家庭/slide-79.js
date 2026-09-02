// slide-79.js - 互动练习5：创建语言公约
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 79,
  title: '练习：创建语言公约'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("练习：创建语言公约", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "left", valign: "middle"
  });

  // Instruction
  slide.addText("请为你的家庭制定一条语言公约", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  // Practice template card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.6, w: 9, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Template sections
  // Section 1: We will NOT say...
  slide.addText("我们不会说（避免）", {
    x: 0.7, y: 1.8, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 2.25, w: 4, h: 0.8,
    fill: { color: theme.accent, transparency: 92 }
  });
  slide.addText('例如："你看看你哥哥..."', {
    x: 0.9, y: 2.35, w: 3.6, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "left", valign: "top"
  });

  // Section 2: We WILL say...
  slide.addText("我们会说（推荐）", {
    x: 5.0, y: 1.8, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "left", valign: "middle"
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 2.25, w: 4.3, h: 0.8,
    fill: { color: theme.primary, transparency: 92 }
  });
  slide.addText('例如："我看到你在..."', {
    x: 5.2, y: 2.35, w: 3.9, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "left", valign: "top"
  });

  // Writing area
  slide.addText("我的家庭语言公约：", {
    x: 0.7, y: 3.2, w: 8.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left", valign: "middle"
  });

  // Lines for writing
  for (let i = 0; i < 3; i++) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: 3.65 + i * 0.45, w: 8.5, h: 0.02,
      fill: { color: theme.light, transparency: 50 }
    });
  }

  // Tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.85, w: 0.05, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("公约要全家认可，共同遵守才能真正有效", {
    x: 0.7, y: 4.85, w: 8, h: 0.5,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false,
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
  pres.writeFile({ fileName: "slide-79-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
