// slide-129.js - 课程评估与反馈
const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: 'summary',
  index: 129,
  title: '课程评估与反馈'
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: 5.625,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("课程评估与反馈", {
    x: 0.5, y: 0.35, w: 6, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("你的收获与建议", {
    x: 0.5, y: 0.85, w: 6, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Decorative line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.25, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  // 4 feedback areas - vertical cards
  const feedbackAreas = [
    {
      title: "学习效果评估",
      icon: "✓",
      items: ["知识掌握程度", "工具运用能力", "创新思维提升"]
    },
    {
      title: "满意度调查",
      icon: "★",
      items: ["课程内容满意度", "讲师授课满意度", "整体学习体验"]
    },
    {
      title: "改进建议",
      icon: "✎",
      items: ["内容优化建议", "形式改进建议", "时间安排建议"]
    },
    {
      title: "持续支持",
      icon: "♥",
      items: ["后续答疑渠道", "实践辅导支持", "资源分享计划"]
    }
  ];

  const cardW = 4.4;
  const cardH = 1.4;
  const startX = 0.5;
  const startY = 1.5;
  const gapX = 0.25;
  const gapY = 0.2;

  feedbackAreas.forEach((area, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.08 }
    });

    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(area.icon, {
      x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(area.title, {
      x: x + 0.85, y: y + 0.25, w: 3.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Items
    slide.addText(area.items.join(" | "), {
      x: x + 0.2, y: y + 0.8, w: 4, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom quote
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.7, w: 9, h: 0.65,
    fill: { color: theme.light }
  });

  slide.addText("\"你的反馈是我们持续改进的动力\"", {
    x: 0.5, y: 4.82, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("129", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 10, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
