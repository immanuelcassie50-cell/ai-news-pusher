// slide-03.js - Course positioning
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 3, title: '课程定位' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top dark header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });

  // Header text
  slide.addText("课程定位  ·  COURSE POSITIONING", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Main title
  slide.addText("一场课，把你从\"本能谈判\"升级到\"框架谈判\"", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Three positioning blocks
  const blocks = [
    { tag: "01", title: "底层观", body: "拆除三个最常见的谈判误解，建立\"谈判无处不在、谈判是创造价值、谈判权力在双方\"的认知" },
    { tag: "02", title: "方法论", body: "七模块完整框架 + 18+ 核心工具：从认识到准备到执行到心理战到关系到情境的完整链路" },
    { tag: "03", title: "实操性", body: "60% 演练、40% 讲授；学员带着真实谈判场景来；7 份可立刻使用的产出物" }
  ];

  blocks.forEach((b, i) => {
    const x = 0.4 + i * 3.1;
    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 2.7,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Top accent strip
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.7, w: 2.9, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    // Tag
    slide.addText(b.tag, {
      x: x + 0.2, y: 1.85, w: 1, h: 0.5,
      fontSize: 32, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    // Title
    slide.addText(b.title, {
      x: x + 0.2, y: 2.45, w: 2.5, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Divider
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.2, y: 2.95, w: 0.4, h: 0.02,
      fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
    });
    // Body
    slide.addText(b.body, {
      x: x + 0.2, y: 3.05, w: 2.5, h: 1.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 16
    });
  });

  // Bottom callout
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.7, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("核心理念：谈判不是天生的能力，是学来的能力。", {
    x: 0.6, y: 4.7, w: 8.8, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("03", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
