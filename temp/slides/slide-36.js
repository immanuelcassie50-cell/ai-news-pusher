/**
 * Slide 36 - Admitting Possible Mistakes
 * 高考志愿填报师培训课程
 */

const pptxgen = require("pptxgenjs");

// Theme: Red-Gray (Soft & Balanced style)
const theme = {
  primary: "8B0000",    // deep red
  secondary: "333333",  // dark gray
  accent: "C41E3A",     // bright red
  light: "999999",      // gray
  bg: "F5F5F5"          // light gray background
};

// Layout constants (Soft & Balanced style)
const MARGIN = 0.4;
const ELEM_GAP = 0.2;
const BLOCK_GAP = 0.4;
const RECT_RADIUS = 0.1;

// Slide dimensions (16:9)
const SLIDE_W = 10;
const SLIDE_H = 5.625;

// Page number badge position
const PAGE_NUM_X = 0.3;
const PAGE_NUM_Y = 5.1;

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // === Title Section ===
  // Left accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: MARGIN,
    y: MARGIN,
    w: 0.08,
    h: 0.5,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  // Title text
  slide.addText("承认判断可能错", {
    x: MARGIN + 0.2,
    y: MARGIN,
    w: SLIDE_W - MARGIN * 2 - 0.2,
    h: 0.5,
    fontSize: 28,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });

  // Subtitle / intro line
  slide.addText("产业判断的本质是概率，而非预言", {
    x: MARGIN,
    y: MARGIN + 0.65,
    w: SLIDE_W - MARGIN * 2,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "middle"
  });

  // === Main Content Cards ===
  const cardStartY = MARGIN + 1.2;
  const cardW = (SLIDE_W - MARGIN * 2 - BLOCK_GAP) / 2;
  const cardH = 1.1;
  const cardGap = 0.2;

  // Card 1: Top Left - 核心认知
  slide.addShape(pres.ShapeType.roundRect, {
    x: MARGIN,
    y: cardStartY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 0.5 },
    rectRadius: RECT_RADIUS
  });

  // Card 1 icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: MARGIN + 0.2,
    y: cardStartY + 0.25,
    w: 0.5,
    h: 0.5,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("1", {
    x: MARGIN + 0.2,
    y: cardStartY + 0.25,
    w: 0.5,
    h: 0.5,
    fontSize: 16,
    fontFace: "Arial",
    color: theme.accent,
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("产业判断 ≠ 预测未来", {
    x: MARGIN + 0.85,
    y: cardStartY + 0.2,
    w: cardW - 1.1,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });
  slide.addText("真正要做的是给出「相对更可能成立」的判断", {
    x: MARGIN + 0.85,
    y: cardStartY + 0.55,
    w: cardW - 1.1,
    h: 0.4,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "top"
  });

  // Card 2: Top Right - 坦诚沟通
  slide.addShape(pres.ShapeType.roundRect, {
    x: MARGIN + cardW + cardGap,
    y: cardStartY,
    w: cardW,
    h: cardH,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 0.5 },
    rectRadius: RECT_RADIUS
  });

  // Card 2 icon circle
  slide.addShape(pres.ShapeType.ellipse, {
    x: MARGIN + cardW + cardGap + 0.2,
    y: cardStartY + 0.25,
    w: 0.5,
    h: 0.5,
    fill: { color: theme.accent, transparency: 15 }
  });
  slide.addText("2", {
    x: MARGIN + cardW + cardGap + 0.2,
    y: cardStartY + 0.25,
    w: 0.5,
    h: 0.5,
    fontSize: 16,
    fontFace: "Arial",
    color: theme.accent,
    bold: true,
    align: "center",
    valign: "middle"
  });

  slide.addText("坦诚告诉客户不确定性", {
    x: MARGIN + cardW + cardGap + 0.85,
    y: cardStartY + 0.2,
    w: cardW - 1.1,
    h: 0.35,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });
  slide.addText("让客户了解判断的局限性，建立信任", {
    x: MARGIN + cardW + cardGap + 0.85,
    y: cardStartY + 0.55,
    w: cardW - 1.1,
    h: 0.4,
    fontSize: 11,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "top"
  });

  // === Bottom Section - Key Message ===
  const bottomY = cardStartY + cardH + BLOCK_GAP;

  // Full-width insight card
  slide.addShape(pres.ShapeType.roundRect, {
    x: MARGIN,
    y: bottomY,
    w: SLIDE_W - MARGIN * 2,
    h: 1.3,
    fill: { color: theme.primary, transparency: 92 },
    line: { color: theme.primary, width: 1, transparency: 70 },
    rectRadius: RECT_RADIUS
  });

  // Left accent mark
  slide.addShape(pres.ShapeType.rect, {
    x: MARGIN + 0.25,
    y: bottomY + 0.3,
    w: 0.06,
    h: 0.7,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });

  slide.addText("这份工作的价值", {
    x: MARGIN + 0.5,
    y: bottomY + 0.2,
    w: SLIDE_W - MARGIN * 2 - 0.7,
    h: 0.4,
    fontSize: 16,
    fontFace: "Microsoft YaHei",
    color: theme.secondary,
    bold: true,
    valign: "middle"
  });
  slide.addText("在于比「闭着眼睛选」靠谱得多", {
    x: MARGIN + 0.5,
    y: bottomY + 0.55,
    w: SLIDE_W - MARGIN * 2 - 0.7,
    h: 0.35,
    fontSize: 13,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    valign: "middle"
  });
  slide.addText("需要每天更新判断，不是一次性判断", {
    x: MARGIN + 0.5,
    y: bottomY + 0.85,
    w: SLIDE_W - MARGIN * 2 - 0.7,
    h: 0.3,
    fontSize: 12,
    fontFace: "Microsoft YaHei",
    color: theme.light,
    valign: "middle"
  });

  // === Page Number Badge ===
  slide.addShape(pres.ShapeType.ellipse, {
    x: PAGE_NUM_X,
    y: PAGE_NUM_Y,
    w: 0.35,
    h: 0.35,
    fill: { color: theme.accent },
    line: { color: theme.accent, width: 0 }
  });
  slide.addText("36", {
    x: PAGE_NUM_X,
    y: PAGE_NUM_Y,
    w: 0.35,
    h: 0.35,
    fontSize: 11,
    fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    align: "center",
    valign: "middle"
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.defineLayout({ name: "CUSTOM", width: 10, height: 5.625 });
  pres.layout = "CUSTOM";

  createSlide(pres, theme);

  pres.writeFile({ fileName: "D:/CC/temp/slides/slide-36-preview.pptx" })
    .then(() => console.log("Created: slide-36-preview.pptx"))
    .catch(err => console.error(err));
}

module.exports = { createSlide };
