const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Header accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("静默书写-分类-排序", {
    x: 0.6, y: 0.4, w: 6, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Subtitle
  slide.addText("让每个声音都被听见", {
    x: 0.6, y: 1, w: 5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent
  });

  // Three steps with flow arrows
  const steps = [
    {
      num: "1",
      title: "静默书写",
      desc: "独立思考，匿名书写",
      detail: "每人写下自己的想法，不讨论、不评判"
    },
    {
      num: "2",
      title: "分类",
      desc: "将想法归类分组",
      detail: "找出相似想法，归入同一类别"
    },
    {
      num: "3",
      title: "排序",
      desc: "集体投票，确定优先级",
      detail: "通过投票或共识确定重要顺序"
    }
  ];

  const stepW = 2.8;
  const stepH = 2.8;
  const startX = 0.8;
  const startY = 1.8;
  const gap = 0.5;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);

    // Step card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: startY, w: stepW, h: stepH,
      fill: { color: theme.light }
    });

    // Step number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + stepW / 2 - 0.4, y: startY + 0.3, w: 0.8, h: 0.8,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + stepW / 2 - 0.4, y: startY + 0.45, w: 0.8, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: "ffffff", align: "center", bold: true
    });

    // Step title
    slide.addText(step.title, {
      x: x + 0.2, y: startY + 1.3, w: stepW - 0.4, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, align: "center", bold: true
    });

    // Step description
    slide.addText(step.desc, {
      x: x + 0.2, y: startY + 1.8, w: stepW - 0.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.accent, align: "center"
    });

    // Step detail
    slide.addText(step.detail, {
      x: x + 0.15, y: startY + 2.25, w: stepW - 0.3, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, align: "center"
    });

    // Arrow between steps (except last)
    if (i < steps.length - 1) {
      const arrowX = x + stepW + 0.05;
      slide.addShape(pres.ShapeType.rect, {
        x: arrowX, y: startY + stepH / 2, w: gap - 0.1, h: 0.06,
        fill: { color: theme.secondary }
      });
      // Arrow head
      slide.addText(">", {
        x: arrowX + gap - 0.25, y: startY + stepH / 2 - 0.15, w: 0.3, h: 0.35,
        fontSize: 16, fontFace: "Arial",
        color: theme.secondary, bold: true
      });
    }
  });

  return slide;
}

module.exports = { createSlide };
