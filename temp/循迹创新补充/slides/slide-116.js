// slide-116.js - A/B测试
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 116,
  title: 'A/B测试 | A/B Testing'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("A/B测试", {
    x: 0.5, y: 0.4, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("A/B Testing", {
    x: 5.5, y: 0.5, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Arial",
    color: theme.secondary
  });
  slide.addText("用数据选择最优方案", {
    x: 0.5, y: 1.0, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Left section - principles
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.4, h: 3.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("A/B测试原理", {
    x: 0.7, y: 1.65, w: 4, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const principles = [
    "将用户随机分为A、B两组",
    "A组保持对照，B组引入变量",
    "收集两组关键指标数据",
    "通过统计显著性判断最优方案"
  ];

  principles.forEach((p, i) => {
    slide.addText((i + 1) + ". " + p, {
      x: 0.7, y: 2.1 + i * 0.45, w: 4, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Steps section
  slide.addText("实施步骤", {
    x: 0.7, y: 3.95, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("确定目标 → 设计方案 → 分配流量 → 收集数据 → 分析结论", {
    x: 0.7, y: 4.25, w: 4, h: 0.5,
    fontSize: 9, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right section - key points
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.5, w: 4.4, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("样本量计算", {
    x: 5.3, y: 1.65, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText([
    { text: "• 统计功效: 80%", options: { breakLine: true } },
    { text: "• 置信水平: 95%", options: { breakLine: true } },
    { text: "• 最小可检测效应值", options: {} }
  ], {
    x: 5.3, y: 2.0, w: 4, h: 0.9,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Bottom right - precautions
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 3.1, w: 4.4, h: 1.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
  });

  slide.addText("注意事项", {
    x: 5.3, y: 3.25, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  const precautions = [
    "每次只测试一个变量",
    "确保流量分配随机均匀",
    "测试周期要足够长",
    "避免新奇效应的影响"
  ];
  precautions.forEach((p, i) => {
    slide.addText("• " + p, {
      x: 5.3, y: 3.6 + i * 0.32, w: 4, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Success case at bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 0.08, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("成功案例：某电商通过A/B测试优化按钮颜色，点击率提升23%", {
    x: 0.7, y: 5.05, w: 8, h: 0.35,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("116", {
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
  pres.writeFile({ fileName: "slide-116-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
