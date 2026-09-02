// slide-08.js - Content: 支持部门的困境
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 8,
  title: '支持部门的困境'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("支持部门的困境", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Examples row
  const examples = ["银行的风控部", "保险的核赔部", "企业的IT部", "研发支持团队"];
  examples.forEach((item, i) => {
    const x = 0.5 + i * 2.35;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.1, w: 2.15, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(item, {
      x: x, y: 1.1, w: 2.15, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Main content card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 9, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.8, w: 0.1, h: 2.0,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "它们不直接产生营收，", options: { breakLine: true } },
    { text: "所以在资源分配上天然处于弱势。", options: { bold: true, breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "管理层问「这个部门值多少钱」，", options: { breakLine: true } },
    { text: "没有直接的销售数字可以回答。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "于是这类部门容易被看作纯粹的成本——", options: {} },
    { text: "维持就好，能省则省。", options: { color: theme.accent } }
  ], {
    x: 0.8, y: 1.95, w: 8.5, h: 1.7,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 0.6,
    fill: { color: theme.light }
  });

  slide.addText("但这个认知是错的。", {
    x: 0.7, y: 4.15, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };