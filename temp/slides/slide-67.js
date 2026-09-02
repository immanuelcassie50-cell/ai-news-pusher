const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 67,
  title: '信息真实性要求'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar with warning accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Warning icon (triangle) in title
  slide.addShape(pres.ShapeType.triangle, {
    x: 0.4, y: 0.2, w: 0.5, h: 0.5,
    fill: { color: "FFFFFF" }
  });

  slide.addText("信息真实性要求", {
    x: 1.0, y: 0.15, w: 8.5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Subtitle line
  slide.addText("Information Authenticity Requirement", {
    x: 1.0, y: 0.55, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: "DDDDDD", margin: 0
  });

  // Left column - Core warning card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.3, y: 1.1, w: 4.4, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 2 },
    rectRadius: 0.1
  });

  // Accent stripe on left card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.3, y: 1.1, w: 0.12, h: 3.8,
    fill: { color: theme.accent }
  });

  // Warning icon in left card
  slide.addShape(pres.ShapeType.triangle, {
    x: 0.7, y: 1.35, w: 0.4, h: 0.35,
    fill: { color: theme.accent }
  });

  slide.addText("核心原则", {
    x: 1.2, y: 1.3, w: 3.2, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Principle 1
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65, y: 1.9, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.65, y: 1.9, w: 0.35, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("摆出来的信息必须真实、经得起对方再核实", {
    x: 1.1, y: 1.85, w: 3.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Principle 2
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65, y: 2.4, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 0.65, y: 2.4, w: 0.35, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("不能只摆对自己有利的，把不利的藏起来", {
    x: 1.1, y: 2.35, w: 3.4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Principle 5
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.65, y: 2.9, w: 0.35, h: 0.35,
    fill: { color: theme.primary }
  });
  slide.addText("5", {
    x: 0.65, y: 2.9, w: 0.35, h: 0.35,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });
  slide.addText("哪怕这条信息会削弱自己原本的判断，也要摆出来", {
    x: 1.1, y: 2.85, w: 3.4, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, margin: 0
  });

  // Divider line
  slide.addShape(pres.ShapeType.line, {
    x: 0.7, y: 3.55, w: 3.7, h: 0,
    line: { color: theme.light, width: 1, dashType: "dash" }
  });

  // Emphasis box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 3.7, w: 3.9, h: 1.0,
    fill: { color: theme.bg },
    rectRadius: 0.08
  });

  slide.addText("真实筛选客户，真实感赢得客户", {
    x: 0.75, y: 3.85, w: 3.6, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addText("——这是信任建立的基石", {
    x: 0.75, y: 4.2, w: 3.6, h: 0.35,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light, italic: true, margin: 0
  });

  // Right column - Warning card
  slide.addShape(pres.ShapeType.roundRect, {
    x: 4.9, y: 1.1, w: 4.8, h: 3.8,
    fill: { color: "FFFFFF" },
    line: { color: theme.secondary, width: 1 },
    rectRadius: 0.1
  });

  // Dark header stripe
  slide.addShape(pres.ShapeType.rect, {
    x: 4.9, y: 1.1, w: 4.8, h: 0.55,
    fill: { color: theme.secondary }
  });

  slide.addText("警示要点", {
    x: 5.1, y: 1.18, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, margin: 0
  });

  // Principle 3
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 1.85, w: 0.08, h: 0.7,
    fill: { color: theme.accent }
  });

  slide.addText("3", {
    x: 5.25, y: 1.85, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.accent, bold: true, margin: 0
  });

  slide.addText("这个诱惑一直都在——", {
    x: 5.25, y: 2.1, w: 4.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });

  slide.addText("尤其是时间紧张、家长态度强硬时", {
    x: 5.55, y: 2.35, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, margin: 0
  });

  // Principle 4
  slide.addShape(pres.ShapeType.rect, {
    x: 5.1, y: 2.85, w: 0.08, h: 1.3,
    fill: { color: theme.primary }
  });

  slide.addText("4", {
    x: 5.25, y: 2.85, w: 0.3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addText('一旦从"让家长自己看见信息差"', {
    x: 5.25, y: 3.1, w: 4.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });

  slide.addText('退化回"设计一场说服"', {
    x: 5.25, y: 3.35, w: 4.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, margin: 0
  });

  slide.addText("本质就变了", {
    x: 5.25, y: 3.65, w: 4.2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });

  // Bottom warning bar
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.3, y: 5.0, w: 9.4, h: 0.45,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });

  slide.addText("诚信为本 = 可持续发展", {
    x: 0.5, y: 5.05, w: 9.0, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", margin: 0
  });

  // Page number badge (circle style at x: 0.3, y: 5.1)
  slide.addShape(pres.ShapeType.ellipse, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });

  slide.addText("67", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
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
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
