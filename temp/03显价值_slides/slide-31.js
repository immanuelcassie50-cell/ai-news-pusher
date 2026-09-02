// slide-31.js - Content: 困境三：这些损失明明是上游造成的
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 31,
  title: '困境三：这些损失明明是上游造成的'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("困境三：这些损失明明是上游造成的", {
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
    x: 0.5, y: 1.1, w: 9, h: 2.2,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.1, w: 0.1, h: 2.2,
    fill: { color: theme.accent }
  });

  slide.addText("这张表不是用来追责的。", {
    x: 0.8, y: 1.25, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText("它的目的是搞清楚「损失在哪里」，至于根因在哪个环节，是后面找瓶颈要回答的问题。", {
    x: 0.8, y: 1.75, w: 8.5, h: 0.8,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Key message
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.55, w: 8.5, h: 0.6,
    fill: { color: theme.light }
  });

  slide.addText("先把损失的事实说清楚，责任和改善路径，是另一步。", {
    x: 1.0, y: 2.6, w: 8.1, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };