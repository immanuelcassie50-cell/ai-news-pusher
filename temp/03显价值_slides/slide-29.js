// slide-29.js - Content: 困境一：我们部门根本没有数据
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 29,
  title: '困境一：我们部门根本没有数据'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("困境一：我们部门根本没有数据", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.85, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Response card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 9, h: 3.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 3.0,
    fill: { color: theme.accent }
  });

  slide.addText("很多基层团队确实没有系统性的流程数据。", {
    x: 0.8, y: 1.25, w: 8.5, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  slide.addText("但你知道的，比你以为的要多——", {
    x: 0.8, y: 1.7, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "你知道每天大约处理多少件，", options: { breakLine: true } },
    { text: "每件大概卡多久，", options: { breakLine: true } },
    { text: "每周大概要发多少封催件邮件。", options: { breakLine: true } },
    { text: "", options: { breakLine: true } },
    { text: "把这些「大概知道」的信息填进公式里，", options: { breakLine: true } },
    { text: "数字虽然粗糙，但比「没有数字」要有力100倍。", options: { bold: true, color: theme.accent } }
  ], {
    x: 0.8, y: 2.2, w: 8.5, h: 1.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  return slide;
}

module.exports = { createSlide, slideConfig };