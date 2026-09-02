/**
 * Slide 53 - 要素一：善待自己
 * Comparison layout: Inner Critic vs Self-Kindness
 */
function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 540, {
    fill: { color: theme.bg }
  });

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, 0, 0, 960, 8, {
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("要素一：善待自己", {
    x: 40, y: 30, w: 880, h: 55,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true, align: "left"
  });

  // Subtitle
  slide.addText("像对待好朋友一样对待自己", {
    x: 40, y: 82, w: 880, h: 30,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false, align: "left"
  });

  // Definition box
  slide.addShape(pres.ShapeType.rect, 40, 120, 880, 50, {
    fill: { color: theme.accent, transparency: 85 }
  });

  slide.addText("定义：像对待好朋友一样对待自己，当自己犯错或失败时，给予理解和支持而不是批评和指责", {
    x: 55, y: 120, w: 850, h: 50,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Two comparison columns
  const colWidth = 400;
  const colHeight = 200;
  const startY = 190;
  const gap = 80;
  const leftX = 40;
  const rightX = leftX + colWidth + gap;

  // LEFT COLUMN - 内在批判 (negative, red tones)
  // Card background
  slide.addShape(pres.ShapeType.rect, leftX, startY, colWidth, colHeight, {
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 2 }
  });

  // Header
  slide.addShape(pres.ShapeType.rect, leftX, startY, colWidth, 45, {
    fill: { color: theme.primary }
  });

  slide.addText("内在批判的声音", {
    x: leftX, y: startY, w: colWidth, h: 45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Quote
  slide.addText('"你怎么这么笨，这点事都做不好"', {
    x: leftX + 20, y: startY + 60, w: colWidth - 40, h: 120,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false, italic: true,
    align: "center", valign: "middle"
  });

  // X icon
  slide.addText("✗", {
    x: leftX + colWidth/2 - 20, y: startY + 155, w: 40, h: 35,
    fontSize: 28, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });

  // RIGHT COLUMN - 自我关怀 (positive, gold/green tones)
  // Card background
  slide.addShape(pres.ShapeType.rect, rightX, startY, colWidth, colHeight, {
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 2 }
  });

  // Header
  slide.addShape(pres.ShapeType.rect, rightX, startY, colWidth, 45, {
    fill: { color: theme.accent }
  });

  slide.addText("自我关怀的声音", {
    x: rightX, y: startY, w: colWidth, h: 45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Quote
  slide.addText('"这确实很难，但你已经尽力了"', {
    x: rightX + 20, y: startY + 60, w: colWidth - 40, h: 120,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false, italic: true,
    align: "center", valign: "middle"
  });

  // Checkmark icon
  slide.addText("✓", {
    x: rightX + colWidth/2 - 20, y: startY + 155, w: 40, h: 35,
    fontSize: 28, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // VS badge in center
  slide.addShape(pres.ShapeType.ellipse, 450, startY + 70, 60, 60, {
    fill: { color: theme.secondary }
  });

  slide.addText("VS", {
    x: 450, y: startY + 70, w: 60, h: 60,
    fontSize: 16, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Exercise section
  slide.addShape(pres.ShapeType.rect, 40, 410, 880, 80, {
    fill: { color: "FFFFFF" },
    line: { color: theme.accent, width: 1 }
  });

  // Exercise icon/badge
  slide.addShape(pres.ShapeType.rect, 55, 425, 50, 50, {
    fill: { color: theme.accent }
  });

  slide.addText("练习", {
    x: 55, y: 425, w: 50, h: 50,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Exercise text
  slide.addText("如果你的好朋友遇到同样的问题，你会怎么安慰TA？\n把这个温暖的声音也送给自己吧。", {
    x: 120, y: 410, w: 780, h: 80,
    fontSize: 15, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "left", valign: "middle"
  });

  // Page number badge at x:9.3, y:5.1
  slide.addText("53", {
    x: 893, y: 490, w: 40, h: 30,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, bold: false,
    align: "center", valign: "middle"
  });

  return slide;
}

const slideConfig = {
  title: "要素一：善待自己",
  pageNumber: 53,
  layout: "comparison"
};

module.exports = { createSlide, slideConfig };
