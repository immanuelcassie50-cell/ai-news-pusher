// slide-81.js - 演练一：1分钟自我介绍
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'content',
  index: 81,
  title: '演练一：1分钟自我介绍'
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
  slide.addText("演练一：1分钟自我介绍", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 0.95, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // Instructions card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 4.3, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.2, w: 0.08, h: 3.8,
    fill: { color: theme.primary }
  });
  slide.addText("演练要求", {
    x: 0.75, y: 1.35, w: 3.8, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const instructions = [
    "介绍自己的姓名、部门、工作年限",
    "说明自己的岗位和核心职责",
    "分享一个最成功的培训案例",
    "用简洁有力的方式收尾",
    "时间控制：1分钟"
  ];
  instructions.forEach((item, i) => {
    slide.addText("▸ " + item, {
      x: 0.75, y: 1.85 + i * 0.55, w: 3.9, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top", margin: 0
    });
  });

  // Evaluation criteria card
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.2, w: 4.4, h: 3.8,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 135, opacity: 0.1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.2, w: 0.08, h: 3.8,
    fill: { color: theme.accent }
  });
  slide.addText("评估维度", {
    x: 5.35, y: 1.35, w: 3.9, h: 0.45,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });

  const criteria = [
    { dim: "内容结构", desc: "逻辑清晰，重点突出" },
    { dim: "表达力", desc: "语言流畅，有感染力" },
    { dim: "时间控制", desc: "在1分钟内完成" },
    { dim: "专业形象", desc: "姿态自然得体" },
    { dim: "个人特色", desc: "有独特的记忆点" }
  ];
  criteria.forEach((item, i) => {
    slide.addText(item.dim, {
      x: 5.35, y: 1.9 + i * 0.55, w: 1.2, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "top", margin: 0
    });
    slide.addText(item.desc, {
      x: 6.55, y: 1.9 + i * 0.55, w: 2.8, h: 0.45,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top", margin: 0
    });
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("81", {
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
  pres.writeFile({ fileName: "D:/CC/temp/81-100_slides/slide-81-preview.pptx" });
}

module.exports = { createSlide, slideConfig };