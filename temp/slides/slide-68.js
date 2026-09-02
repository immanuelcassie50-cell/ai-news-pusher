const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 68,
  title: '因人而异调整语言'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("因人而异调整语言", {
    x: 0.5,
    y: 0.3,
    w: 9,
    h: 0.7,
    fontSize: 32,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Subtitle line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5,
    y: 1.0,
    w: 1.2,
    h: 0.05,
    fill: { color: theme.accent }
  });

  // Left column card
  const cardY = 1.4;
  const cardH = 2.8;
  const leftX = 0.5;
  const rightX = 5.1;
  const cardW = 4.4;

  // Left card background
  slide.addShape(pres.ShapeType.roundRect, {
    x: leftX,
    y: cardY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 0.5 },
    rectRadius: 0.1
  });

  // Left card header bar
  slide.addShape(pres.ShapeType.rect, {
    x: leftX,
    y: cardY,
    w: cardW,
    h: 0.5,
    fill: { color: theme.secondary }
  });

  // Left card header text
  slide.addText("理性分析型", {
    x: leftX,
    y: cardY,
    w: cardW,
    h: 0.5,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Left card icon area
  slide.addShape(pres.ShapeType.rect, {
    x: leftX + 0.3,
    y: cardY + 0.7,
    w: 0.6,
    h: 0.6,
    fill: { color: theme.secondary, transparency: 15 }
  });
  slide.addText("📊", {
    x: leftX + 0.3,
    y: cardY + 0.7,
    w: 0.6,
    h: 0.6,
    fontSize: 20,
    align: "center",
    valign: "middle"
  });

  // Left card audience label
  slide.addText("受教育程度高、习惯看数据说话的家长", {
    x: leftX + 1.0,
    y: cardY + 0.7,
    w: 3.2,
    h: 0.6,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Left card approach label
  slide.addText("推荐方式", {
    x: leftX + 0.3,
    y: cardY + 1.5,
    w: 1.0,
    h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Left card approach content
  slide.addText("偏理性分析、数据图表", {
    x: leftX + 0.3,
    y: cardY + 1.85,
    w: 3.8,
    h: 0.7,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Left card visual elements
  slide.addShape(pres.ShapeType.rect, {
    x: leftX + 0.3,
    y: cardY + 2.3,
    w: 1.8,
    h: 0.3,
    fill: { color: theme.accent, transparency: 80 }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: leftX + 2.3,
    y: cardY + 2.3,
    w: 1.5,
    h: 0.3,
    fill: { color: theme.secondary, transparency: 80 }
  });

  // Right card background
  slide.addShape(pres.ShapeType.roundRect, {
    x: rightX,
    y: cardY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 },
    rectRadius: 0.1
  });

  // Right card header bar
  slide.addShape(pres.ShapeType.rect, {
    x: rightX,
    y: cardY,
    w: cardW,
    h: 0.5,
    fill: { color: theme.accent }
  });

  // Right card header text
  slide.addText("直觉口碑型", {
    x: rightX,
    y: cardY,
    w: cardW,
    h: 0.5,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  // Right card icon area
  slide.addShape(pres.ShapeType.rect, {
    x: rightX + 0.3,
    y: cardY + 0.7,
    w: 0.6,
    h: 0.6,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("💬", {
    x: rightX + 0.3,
    y: cardY + 0.7,
    w: 0.6,
    h: 0.6,
    fontSize: 20,
    align: "center",
    valign: "middle"
  });

  // Right card audience label
  slide.addText("依赖直觉和口碑的家长", {
    x: rightX + 1.0,
    y: cardY + 0.7,
    w: 3.2,
    h: 0.6,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    valign: "middle"
  });

  // Right card approach label
  slide.addText("推荐方式", {
    x: rightX + 0.3,
    y: cardY + 1.5,
    w: 1.0,
    h: 0.35,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Right card approach content
  slide.addText("偏具体有血有肉的案例场景", {
    x: rightX + 0.3,
    y: cardY + 1.85,
    w: 3.8,
    h: 0.7,
    fontSize: 18,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    bold: true
  });

  // Right card visual elements
  slide.addShape(pres.ShapeType.rect, {
    x: rightX + 0.3,
    y: cardY + 2.3,
    w: 3.5,
    h: 0.3,
    fill: { color: theme.accent, transparency: 80 }
  });

  // Warning note at bottom
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5,
    y: 4.4,
    w: 6.2,
    h: 0.5,
    fill: { color: theme.accent, transparency: 90 },
    rectRadius: 0.08
  });
  slide.addText("⚠️ 用错了语言，效果会差很多", {
    x: 0.7,
    y: 4.4,
    w: 6,
    h: 0.5,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.accent,
    valign: "middle"
  });

  // Tip note
  slide.addText("💡 需要在谈话头几分钟里快速判断对方更容易被哪种方式打动", {
    x: 0.5,
    y: 5.0,
    w: 8.5,
    h: 0.4,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.light
  });

  // Page number badge (circle style)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("68", {
    x: 0.3,
    y: 5.1,
    w: 0.4,
    h: 0.4,
    fontSize: 12,
    fontFace: "Arial",
    color: "FFFFFF",
    align: "center",
    valign: "middle"
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
  pres.writeFile({ fileName: "slide-68-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
