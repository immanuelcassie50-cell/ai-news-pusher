/**
 * Slide 113 - 卡片6：情绪释放四步法
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Card label badge
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fill: { color: theme.primary }
  });
  slide.addText("工具卡片 6", {
    x: 0.5, y: 0.35, w: 1.8, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  // Title
  slide.addText("情绪释放四步法", {
    x: 2.5, y: 0.3, w: 5, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("用时约5-8分钟的情绪处理流程", {
    x: 2.5, y: 0.85, w: 5, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Four steps - vertical timeline layout
  const steps = [
    {
      num: "1",
      title: "命名情绪",
      time: "1分钟",
      desc: "识别并给情绪贴标签",
      detail: "我感到___（焦虑、悲伤、愤怒等）",
      color: theme.primary
    },
    {
      num: "2",
      title: "深入探索",
      time: "2-3分钟",
      desc: "探索情绪背后的需求",
      detail: "这个情绪在告诉我什么？\n我有什么需要没有被满足？",
      color: theme.accent
    },
    {
      num: "3",
      title: "自我关怀",
      time: "1-2分钟",
      desc: "像对待朋友一样对待自己",
      detail: "我需要给自己什么？\n温柔地安慰自己",
      color: theme.light
    },
    {
      num: "4",
      title: "转换视角",
      time: "1分钟",
      desc: "从更宽广的视角看问题",
      detail: "这件事一年后还重要吗？\n我学到了什么？",
      color: theme.secondary
    }
  ];

  const stepW = 2.15;
  const stepH = 3.2;
  const startX = 0.5;
  const stepY = 1.35;
  const gap = 0.2;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: stepY, w: stepW, h: stepH,
      fill: { color: step.color }
    });

    // Step number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + stepW / 2 - 0.3, y: stepY + 0.15, w: 0.6, h: 0.6,
      fill: { color: i === 3 ? theme.accent : "FFFFFF" }
    });
    slide.addText(step.num, {
      x: x + stepW / 2 - 0.3, y: stepY + 0.15, w: 0.6, h: 0.6,
      fontSize: 22, fontFace: "Arial",
      color: i === 3 ? "FFFFFF" : step.color,
      bold: true, align: "center", valign: "middle"
    });

    // Time badge
    slide.addText(step.time, {
      x: x + stepW - 0.7, y: stepY + 0.2, w: 0.6, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: i === 3 ? theme.accent : (step.color === theme.accent ? theme.secondary : "FFFFFF"),
      bold: false, align: "center"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: stepY + 0.85, w: stepW - 0.2, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: i === 3 ? "FFFFFF" : (step.color === theme.accent ? theme.secondary : "FFFFFF"),
      bold: true, align: "center"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: stepY + 1.3, w: stepW - 0.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: i === 3 ? theme.accent : (step.color === theme.accent ? theme.light : "FFFFFF"),
      bold: false, align: "center"
    });

    // Divider
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.3, y: stepY + 1.75, w: stepW - 0.6, h: 0.02,
      fill: { color: i === 3 ? theme.accent : (step.color === theme.accent ? theme.secondary : "FFFFFF") }
    });

    // Detail
    slide.addText(step.detail, {
      x: x + 0.1, y: stepY + 1.9, w: stepW - 0.2, h: 1.2,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: i === 3 ? theme.accent : (step.color === theme.accent ? theme.secondary : "FFFFFF"),
      bold: false, align: "center"
    });

    // Connector arrow (except last)
    if (i < 3) {
      slide.addText("→", {
        x: x + stepW + 0.02, y: stepY + stepH / 2 - 0.2, w: 0.2, h: 0.4,
        fontSize: 16, fontFace: "Arial",
        color: theme.light, bold: true, align: "center", valign: "middle"
      });
    }
  });

  // Page number
  slide.addText("113", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.secondary, align: "center"
  });
}

const slideConfig = {
  type: "tool-card",
  module: "Tool Cards",
  title: "情绪释放四步法",
  pageNumber: 113
};

module.exports = { createSlide, slideConfig };
