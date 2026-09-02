// slide-05.js - 学习目标
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 5, title: '学习目标' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("学习目标  ·  LEARNING OBJECTIVES", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Title
  slide.addText("八项能力，一一对应你将带走的成果", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 8 ability cards in 2x4 grid
  const abilities = [
    "七个模块的完整谈判思维框架",
    "区分\"立场\"和\"利益\"的能力",
    "完整的谈判前准备清单",
    "锚定、让步节奏、信息管理技术",
    "识别 7 种常见谈判战术",
    "关系型谈判中既维护利益又强化关系",
    "知道什么时候离开谈判桌",
    "九大高频场景的具体应用能力"
  ];

  abilities.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.5 + row * 0.9;

    // Card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 0.75,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    // Left accent
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 0.75,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    // Number
    slide.addText(`0${i + 1}`, {
      x: x + 0.2, y: y, w: 0.7, h: 0.75,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true, valign: "middle"
    });
    // Text
    slide.addText(a, {
      x: x + 0.95, y: y, w: 3.5, h: 0.75,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
  });

  // Footer
  slide.addText("能力  +  成果 = 你带走的真正价值", {
    x: 0.4, y: 5.05, w: 8.5, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("05", {
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
