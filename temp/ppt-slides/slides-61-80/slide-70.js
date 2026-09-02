// slide-70.js - 筛选过滤技术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 70,
  title: '筛选过滤技术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("筛选过滤技术", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Funnel visualization
  const funnelStages = [
    { label: "所有想法", count: "30+", width: 4.0, color: theme.secondary },
    { label: "去除重复", count: "-", width: 3.3, color: theme.secondary },
    { label: "可行性筛选", count: "-", width: 2.6, color: theme.primary },
    { label: "优先级排序", count: "-", width: 1.9, color: theme.accent },
    { label: "最终产出", count: "3-5", width: 1.2, color: theme.accent }
  ];

  funnelStages.forEach((stage, i) => {
    const y = 1.3 + i * 0.78;
    const x = (5 - stage.width) / 2 + 2.5;

    // Funnel bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: stage.width, h: 0.6,
      fill: { color: stage.color }
    });

    // Label
    slide.addText(stage.label, {
      x: 0.5, y: y, w: 2.2, h: 0.6,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle", align: "right"
    });

    // Count
    slide.addText(stage.count, {
      x: 7.5, y: y, w: 2, h: 0.6,
      fontSize: 14, fontFace: "Arial",
      color: stage.color, bold: true, valign: "middle"
    });
  });

  // Right side - Criteria box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.3, w: 4, h: 2.0,
    fill: { color: theme.light }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.5, y: 1.3, w: 4, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("筛选标准", {
    x: 5.5, y: 1.3, w: 4, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const criteria = [
    "可行性：资源条件是否具备？",
    "价值度：对目标贡献有多大？",
    "紧急性：时间窗口是否允许？",
    "共识性：大多数人是否认可？"
  ];

  criteria.forEach((c, i) => {
    slide.addText("• " + c, {
      x: 5.7, y: 1.85 + i * 0.35, w: 3.6, h: 0.32,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom tip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 8.5, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("黄金法则：最终产出控制在3-5个，确保可执行性", {
    x: 0.7, y: 5.0, w: 8.3, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("70", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };