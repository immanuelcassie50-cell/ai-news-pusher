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
  slide.addText("静默书写操作步骤", {
    x: 0.6, y: 0.4, w: 6, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Six steps in two columns
  const steps = [
    { num: "1", title: "准备", desc: "宣布主题和时间", time: "1分钟" },
    { num: "2", title: "静默书写", desc: "每人独立在便签上写下想法，不讨论", time: "5-8分钟" },
    { num: "3", title: "收集", desc: "所有人同时将便签贴到白板", time: "2分钟" },
    { num: "4", title: "分类", desc: "小组讨论，将相似想法归类", time: "5-10分钟" },
    { num: "5", title: "命名", desc: "为每个类别命名", time: "3分钟" },
    { num: "6", title: "排序", desc: "用投票或共识确定优先级", time: "5分钟" }
  ];

  const colW = 4.4;
  const rowH = 0.75;
  const startX = 0.6;
  const startY = 1.15;
  const gapX = 0.4;
  const gapY = 0.15;

  steps.forEach((step, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (colW + gapX);
    const y = startY + row * (rowH + gapY);

    // Step background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: colW, h: rowH,
      fill: { color: theme.light }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.12, y: y + 0.12, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(step.num, {
      x: x + 0.12, y: y + 0.2, w: 0.5, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", align: "center", bold: true
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.75, y: y + 0.12, w: 1.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.75, y: y + 0.4, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });

    // Time badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + colW - 0.9, y: y + 0.2, w: 0.75, h: 0.35,
      fill: { color: theme.primary }
    });
    slide.addText(step.time, {
      x: x + colW - 0.9, y: y + 0.25, w: 0.75, h: 0.25,
      fontSize: 9, fontFace: "Arial",
      color: "ffffff", align: "center"
    });
  });

  // Bottom tip box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.7, w: 8.8, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("关键原则：保持安静，不讨论，不评价，让每个声音都有机会被听见", {
    x: 0.8, y: 4.85, w: 8.4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "ffffff", align: "center"
  });

  return slide;
}

module.exports = { createSlide };
