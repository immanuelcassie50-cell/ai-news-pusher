/**
 * Slide 70 - 情绪释放四步法概述
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("情绪释放四步法", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("当情绪来袭时的自我疏导工具", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // 4 steps in horizontal flow
  const steps = [
    {
      step: "01",
      title: "命名情绪",
      time: "1分钟",
      desc: "识别并命名你正在经历的情绪",
      color: theme.primary
    },
    {
      step: "02",
      title: "深入探索",
      time: "2-3分钟",
      desc: "这个情绪背后有什么故事？",
      color: theme.accent
    },
    {
      step: "03",
      title: "自我慈悲",
      time: "1-2分钟",
      desc: "对自己说理解、接纳的话语",
      color: theme.light
    },
    {
      step: "04",
      title: "转换视角",
      time: "1分钟",
      desc: "从更大的视角看待这件事",
      color: theme.secondary
    }
  ];

  const cardW = 2.1;
  const cardH = 2.8;
  const cardY = 1.55;
  const gap = 0.3;
  const startX = 0.5;

  steps.forEach((step, i) => {
    const cardX = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 6, offset: 2, angle: 45, opacity: 0.1 }
    });

    // Top accent
    slide.addShape(pres.ShapeType.rect, {
      x: cardX, y: cardY, w: cardW, h: 0.6,
      fill: { color: step.color }
    });

    // Step number
    slide.addText(step.step, {
      x: cardX, y: cardY + 0.05, w: cardW, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", align: "center", bold: true
    });

    // Title
    slide.addText(step.title, {
      x: cardX + 0.1, y: cardY + 0.7, w: cardW - 0.2, h: 0.5,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: true
    });

    // Time badge
    slide.addShape(pres.ShapeType.rect, {
      x: cardX + 0.55, y: cardY + 1.25, w: 1, h: 0.35,
      fill: { color: step.color, transparency: 20 }
    });
    slide.addText(step.time, {
      x: cardX + 0.55, y: cardY + 1.25, w: 1, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: step.color, align: "center", valign: "middle", bold: false
    });

    // Description
    slide.addText(step.desc, {
      x: cardX + 0.15, y: cardY + 1.75, w: cardW - 0.3, h: 0.9,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center", bold: false,
      lineSpaceMult: 1.3
    });
  });

  // Bottom arrow flow indicator
  const arrowY = 4.55;
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: arrowY, w: 9, h: 0.04,
    fill: { color: theme.accent }
  });

  // Arrow circles
  for (let i = 0; i < 4; i++) {
    const circleX = 1.3 + i * 2.4;
    slide.addShape(pres.ShapeType.ellipse, {
      x: circleX, y: arrowY - 0.08, w: 0.2, h: 0.2,
      fill: { color: theme.accent }
    });
  }

  // Total time
  slide.addText("总时长约 5-7 分钟", {
    x: 0.5, y: 4.75, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, align: "center", bold: false
  });

  // Page number
  slide.addText("70", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 5",
  title: "情绪释放四步法概述",
  pageNumber: 70
};

module.exports = { createSlide, slideConfig };
