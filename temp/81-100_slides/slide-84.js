// slide-84.js - 演练四：3分钟微课展示
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 84,
  title: '演练四：3分钟微课展示'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("演练四：3分钟微课展示", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Left side - Process
  slide.addText("完整流程", {
    x: 0.5, y: 1.2, w: 4.3, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const steps = [
    { time: "30秒", title: "开场", desc: "吸引注意力，说明目标" },
    { time: "2分钟", title: "主体", desc: "讲授核心知识点" },
    { time: "30秒", title: "收尾", desc: "总结要点，号召行动" }
  ];

  steps.forEach((step, i) => {
    const y = 1.7 + i * 0.85;

    // Step card
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.5, y: y, w: 4.3, h: 0.75,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.08 }
    });

    // Time badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.65, y: y + 0.18, w: 0.9, h: 0.4,
      fill: { color: theme.accent }
    });
    slide.addText(step.time, {
      x: 0.65, y: y + 0.18, w: 0.9, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    slide.addText(step.title, {
      x: 1.7, y: y + 0.1, w: 1.2, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Description
    slide.addText(step.desc, {
      x: 1.7, y: y + 0.4, w: 2.9, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Right side - Evaluation
  slide.addText("评估要点", {
    x: 5.1, y: 1.2, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.7, w: 4.4, h: 2.6,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });

  const evalPoints = [
    "内容聚焦：只有一个核心知识点",
    "结构清晰：开场-主体-收尾完整",
    "表达生动：案例/故事/数据支撑",
    "时间精准：严格控制在3分钟内",
    "互动设计：有学员参与环节"
  ];

  evalPoints.forEach((point, i) => {
    slide.addText("✓ " + point, {
      x: 5.3, y: 1.85 + i * 0.48, w: 4, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top", margin: 0
    });
  });

  // Bottom highlight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.65, w: 9, h: 0.4,
    fill: { color: theme.light }
  });
  slide.addText("准备：提前制作好PPT或教具，准备时间不超过10分钟", {
    x: 0.5, y: 4.65, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center", valign: "middle", margin: 0
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("84", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle", margin: 0
  });

  return slide;
}

// Standalone preview
if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = {
    primary: "C41E3A",
    secondary: "4A4A4A",
    accent: "FF6B6B",
    light: "F5F5F5",
    bg: "FAFAFA"
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-84-preview.pptx" });
}

module.exports = { createSlide, slideConfig };