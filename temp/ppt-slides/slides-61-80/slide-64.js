// slide-64.js - 共识建立技术
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 64,
  title: '共识建立技术'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("共识建立技术", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.0, w: 1.2, h: 0.05,
    fill: { color: theme.accent }
  });

  // Process steps - vertical flow
  const steps = [
    { num: "01", title: "差异识别", desc: "列出所有分歧点，明确争议边界" },
    { num: "02", title: "利益挖掘", desc: "区分立场与利益，寻找深层需求" },
    { num: "03", title: "方案生成", desc: "头脑风暴，不评判地收集可能选项" },
    { num: "04", title: "评估筛选", desc: "基于共同标准评估各方案" },
    { num: "05", title: "确认巩固", desc: "明确共识内容，防止误解" }
  ];

  // Flow line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 1.15, y: 1.45, w: 0.04, h: 3.6,
    fill: { color: theme.light }
  });

  steps.forEach((step, i) => {
    const y = 1.3 + i * 0.78;

    // Step number box
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.9, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: 0.9, y: y, w: 0.55, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 1.6, y: y, w: 3.8, h: 0.65,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.06 }
    });

    slide.addText(step.title, {
      x: 1.75, y: y + 0.05, w: 1.4, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(step.desc, {
      x: 1.75, y: y + 0.32, w: 3.5, h: 0.28,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side - Key principle
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.8, y: 1.3, w: 3.7, h: 3.8,
    fill: { color: theme.primary }
  });

  slide.addText("核心原则", {
    x: 5.8, y: 1.5, w: 3.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center"
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.3, y: 2.1, w: 2.7, h: 0.03,
    fill: { color: theme.accent }
  });

  const principles = [
    "共识 ≠ 让所有人满意",
    "共识 = 所有人都能接受",
    "允许\"保留意见\"存在",
    "书面记录分歧点"
  ];

  principles.forEach((p, i) => {
    slide.addText("✓ " + p, {
      x: 6.1, y: 2.35 + i * 0.65, w: 3.3, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", valign: "middle"
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("64", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };