// slide-63.js - Content: 重新审视看不见的手
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 63,
  title: '重新审视"看不见的手"'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Slide title
  slide.addText('重新审视"看不见的手"', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    margin: 0
  });

  // Subtitle line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Left side - concept clarification
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 2.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("原文语境", {
    x: 0.7, y: 1.35, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText('"看不到"≠"不存在"', {
    x: 0.7, y: 1.75, w: 3.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  slide.addText([
    { text: "斯密的限定条件：", options: { bold: true, breakLine: true } },
    { text: "• 完全竞争", options: { breakLine: true } },
    { text: "• 完全信息", options: { breakLine: true } },
    { text: "• 参与者理性", options: { breakLine: true } },
    { text: "• 无外部性问题", options: {} }
  ], {
    x: 0.7, y: 2.2, w: 3.9, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right side - modern failure scenarios
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.2, w: 4.4, h: 2.5,
    fill: { color: theme.secondary }
  });

  slide.addText("失效场景", {
    x: 5.3, y: 1.35, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("当代市场失灵的典型场景：", {
    x: 5.3, y: 1.8, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light
  });

  slide.addText([
    { text: "信息不对称 → 柠檬市场", options: { bullet: true, breakLine: true } },
    { text: "外部性 → 环境污染", options: { bullet: true, breakLine: true } },
    { text: "垄断 → 市场权力滥用", options: { bullet: true, breakLine: true } },
    { text: "公共品 → 供给不足", options: { bullet: true } }
  ], {
    x: 5.3, y: 2.15, w: 4, h: 1.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    paraSpaceAfter: 4
  });

  // Bottom - key conclusion
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 3.9, w: 9, h: 1.35,
    fill: { color: theme.primary }
  });

  slide.addText("重新校准市场与政府的关系边界", {
    x: 0.7, y: 4.05, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Balance visual - two columns
  slide.addText([
    { text: "市场", options: { bold: true, breakLine: true } },
    { text: "资源配置效率\n价格信号引导" }
  ], {
    x: 0.7, y: 4.5, w: 3.5, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.bg
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.4, y: 4.55, w: 1.2, h: 0.06,
    fill: { color: theme.accent }
  });

  slide.addText([
    { text: "政府", options: { bold: true, breakLine: true } },
    { text: "制度框架保障\n纠正市场失灵" }
  ], {
    x: 5.8, y: 4.5, w: 3.5, h: 0.7,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.bg
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("63", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
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
    primary: "780000",
    secondary: "003049",
    accent: "c1121f",
    light: "669bbc",
    bg: "fdf0d5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-63-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
