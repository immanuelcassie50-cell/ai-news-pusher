// slide-100.js - Opportunity for Newcomers
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 100,
  title: '对新人的机会'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.08, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("对新人的机会", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Before/After comparison section
  // Before card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.25, w: 2.7, h: 1.3,
    fill: { color: theme.light, transparency: 30 },
    rectRadius: 0.1
  });
  slide.addText("以前入行", {
    x: 0.5, y: 1.3, w: 2.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("需要先死记硬背大量政策和数据细节", {
    x: 0.6, y: 1.7, w: 2.5, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "top"
  });

  // Arrow between before/after
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.35, y: 1.8, w: 0.45, h: 0.06,
    fill: { color: theme.accent }
  });
  slide.addText(">", {
    x: 3.7, y: 1.65, w: 0.3, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  // After card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.1, y: 1.25, w: 2.7, h: 1.3,
    fill: { color: theme.accent, transparency: 85 },
    rectRadius: 0.1
  });
  slide.addText("现在", {
    x: 4.1, y: 1.3, w: 2.7, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("基础工作有工具辅助，可以更早投入判断力训练", {
    x: 4.2, y: 1.7, w: 2.5, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    align: "center", valign: "top"
  });

  // Right side - opportunity highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.1, y: 1.25, w: 2.4, h: 1.3,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("机会", {
    x: 7.1, y: 1.3, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("跳过死记硬背阶段", {
    x: 7.2, y: 1.65, w: 2.2, h: 0.8,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: false,
    align: "center", valign: "top"
  });

  // Divider line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 2.75, w: 9, h: 0.02,
    fill: { color: theme.light, transparency: 50 }
  });

  // Three action items in cards
  const cardY = 3.0;
  const cardH = 1.45;
  const cardW = 2.9;

  // Card 1
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: cardY + 0.15, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("1", {
    x: 0.7, y: cardY + 0.15, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("深度聊天", {
    x: 1.15, y: cardY + 0.15, w: 2.1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });
  slide.addText("多跟真实的孩子和家庭深度聊天", {
    x: 0.65, y: cardY + 0.6, w: 2.6, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "top"
  });

  // Card 2
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.55, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 3.75, y: cardY + 0.15, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("2", {
    x: 3.75, y: cardY + 0.15, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("行业研究", {
    x: 4.2, y: cardY + 0.15, w: 2.1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });
  slide.addText("多花时间研究具体行业的真实动态", {
    x: 3.7, y: cardY + 0.6, w: 2.6, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "top"
  });

  // Card 3
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.6, y: cardY, w: cardW, h: cardH,
    fill: { color: "FFFFFF" },
    rectRadius: 0.1,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 6.8, y: cardY + 0.15, w: 0.35, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("3", {
    x: 6.8, y: cardY + 0.15, w: 0.35, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("长期扎实", {
    x: 7.25, y: cardY + 0.15, w: 2.1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    valign: "middle", margin: 0
  });
  slide.addText("起步看起来\"不够专业\"，但长期更扎实", {
    x: 6.75, y: cardY + 0.6, w: 2.6, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "top"
  });

  // Bottom insight bar
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fill: { color: theme.primary, transparency: 10 },
    rectRadius: 0.08
  });
  slide.addText("对新人：尽早投入判断力训练，不要死记硬背", {
    x: 0.5, y: 4.7, w: 9, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: false,
    align: "center", valign: "middle"
  });

  // Page number badge - circle style at bottom-left
  slide.addShape(pres.shapes.OVAL, {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("100", {
    x: 0.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

// Standalone preview
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
  pres.writeFile({ fileName: "slide-100-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
