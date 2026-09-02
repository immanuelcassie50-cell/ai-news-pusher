// slide-112.js - 原型迭代优化
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 112,
  title: '原型迭代优化'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("原型迭代优化", {
    x: 0.5, y: 0.4, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Subtitle
  slide.addText("测试 → 反馈 → 改进 → 再测试", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // Iteration cycle diagram - circular flow
  const cycleItems = [
    { label: "测试", angle: 0 },
    { label: "反馈", angle: 90 },
    { label: "改进", angle: 180 },
    { label: "再测试", angle: 270 }
  ];

  const centerX = 2.0;
  const centerY = 3.2;
  const radius = 1.0;

  // Draw cycle circles
  cycleItems.forEach((item, i) => {
    const rad = (item.angle - 90) * Math.PI / 180;
    const x = centerX + radius * Math.cos(rad);
    const y = centerY + radius * Math.sin(rad);

    slide.addShape(pres.shapes.OVAL, {
      x: x - 0.35, y: y - 0.35, w: 0.7, h: 0.7,
      fill: { color: i % 2 === 0 ? theme.accent : theme.primary }
    });
    slide.addText(item.label, {
      x: x - 0.35, y: y - 0.35, w: 0.7, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Arrows between circles (simplified as lines)
  slide.addText("→", {
    x: 2.6, y: 2.8, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.light, rotate: 45
  });
  slide.addText("→", {
    x: 1.3, y: 3.6, w: 0.4, h: 0.4,
    fontSize: 20, fontFace: "Arial",
    color: theme.light, rotate: 135
  });

  // Feedback collection section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 1.7, w: 6, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 1.7, w: 0.06, h: 1.3,
    fill: { color: theme.accent }
  });
  slide.addText("反馈收集", {
    x: 3.7, y: 1.8, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "定量数据：完成率、错误率、任务时间", options: { bullet: true, breakLine: true } },
    { text: "定性数据：用户感受、建议、问题描述", options: { bullet: true } }
  ], {
    x: 3.7, y: 2.15, w: 5.6, h: 0.75,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Priority sorting section
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.15, w: 6, h: 1.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 3.15, w: 0.06, h: 1.0,
    fill: { color: theme.primary }
  });
  slide.addText("优先级排序", {
    x: 3.7, y: 3.25, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("严重问题 > 核心流程 > 体验优化 > 细节完善", {
    x: 3.7, y: 3.55, w: 5.6, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // MVP Iteration case
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.3, w: 6, h: 1.0,
    fill: { color: theme.light },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
  });
  slide.addText("案例：MVP迭代", {
    x: 3.7, y: 4.4, w: 2, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("最小可行产品 → 投放市场 → 收集反馈 → 快速迭代", {
    x: 3.7, y: 4.7, w: 5.6, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("112", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
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
    primary: "333333",
    secondary: "666666",
    accent: "C41A1A",
    light: "D9D9D9",
    bg: "F5F5F5"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-112-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
