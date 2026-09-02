// slide-14.js - 错误认知 1+2 详解
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 14, title: '错误认知 1+2' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 错误认知 ① + ②", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // ①
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.85, w: 4.5, h: 4.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 0.85, w: 4.5, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("①  谈判 = 砍价 / 天生能力", {
    x: 0.5, y: 0.85, w: 4.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("错误：", {
    x: 0.55, y: 1.4, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("\"谈判是少数人的特殊能力，谁更会耍赖谁赢\"", {
    x: 0.55, y: 1.65, w: 4.2, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true
  });
  slide.addText("为什么错：", {
    x: 0.55, y: 2.2, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });
  slide.addText("\"用'耍赖'赢一次，往往输掉后面所有轮次——因为对方不会再与你合作\"", {
    x: 0.55, y: 2.45, w: 4.2, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 3.1, w: 4.2, h: 1.55,
    fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("✓  正确认知", {
    x: 0.7, y: 3.15, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true
  });
  slide.addText("谈判的真正目标不是\"在这次博弈中赢多少\"，而是\"在长期关系中维持双方都愿意继续合作的状态\"。", {
    x: 0.7, y: 3.5, w: 4, h: 1.1,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 16
  });

  // ②
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 0.85, w: 4.5, h: 4.0,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 0.85, w: 4.5, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("②  谈判 = 零和游戏", {
    x: 5.2, y: 0.85, w: 4.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("错误：", {
    x: 5.25, y: 1.4, w: 1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, bold: true
  });
  slide.addText("\"对方赢了我就输了，一方多就意味着另一方少\"", {
    x: 5.25, y: 1.65, w: 4.2, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true
  });
  slide.addText("为什么错：", {
    x: 5.25, y: 2.2, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, bold: true
  });
  slide.addText("\"哈佛与 MIT 研究：双方在不同维度的需求优先级几乎从不完全一样，总是存在让双方都更好的方案\"", {
    x: 5.25, y: 2.45, w: 4.2, h: 0.55,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.secondary, italic: true, lineSpacing: 14
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 3.1, w: 4.2, h: 1.55,
    fill: { color: theme.bg }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("✓  正确认知", {
    x: 5.4, y: 3.15, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei", color: theme.accent, bold: true
  });
  slide.addText("把\"如何让对方输\"换成\"如何让双方都比不谈更好\"，整个谈判的策略空间就完全打开了。", {
    x: 5.4, y: 3.5, w: 4, h: 1.1,
    fontSize: 11, fontFace: "Microsoft YaHei", color: theme.primary, lineSpacing: 16
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("14", {
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
  pres.writeFile({ fileName: "slide-14-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
