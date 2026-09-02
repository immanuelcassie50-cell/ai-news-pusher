const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '核心观点'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.background = { color: theme.bg };

  // Decorative accent bar at top
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("核心观点", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Large decorative quote mark (left)
  slide.addText("“", {
    x: 0.6, y: 1.3, w: 1.5, h: 1.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Large decorative quote mark (right)
  slide.addText("”", {
    x: 8.0, y: 3.2, w: 1.5, h: 1.5,
    fontSize: 120, fontFace: "Georgia",
    color: theme.accent, bold: true
  });

  // Main quote card with soft rounded corners
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.0, y: 1.6, w: 8.0, h: 2.6,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 0.5 },
    rectRadius: 0.1,
    shadow: { type: 'outer', blur: 8, offset: 3, angle: 45, color: '000000', opacity: 0.1 }
  });

  // Quote accent bar on left side of card
  slide.addShape(pres.ShapeType.rect, {
    x: 1.0, y: 1.6, w: 0.12, h: 2.6,
    fill: { color: theme.accent }
  });

  // Main quote text
  slide.addText("说服是我告诉你我是对的，你听我的；这份工作里真正管用的，是把你看不到的那部分信息摆出来，让你自己得出跟我一样的结论。", {
    x: 1.4, y: 1.8, w: 7.3, h: 2.2,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle",
    lineSpacingMultiple: 1.5
  });

  // Bottom decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 4.6, w: 3.0, h: 0.03,
    fill: { color: theme.light }
  });

  // Page number badge (circle style at x: 0.3, y: 5.1)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("64", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", align: "center", valign: "middle", bold: true
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "8B0000",
    secondary: "333333",
    accent: "C41E3A",
    light: "999999",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-64-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
