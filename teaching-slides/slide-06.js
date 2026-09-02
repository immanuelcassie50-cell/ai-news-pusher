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
  slide.addText("行动学习循环深度解析", {
    x: 0.6, y: 0.4, w: 7, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Four quadrant layout
  const quadrants = [
    {
      title: "计划",
      desc: "聚焦问题，制定行动方案",
      detail: "明确目标，识别资源，制定可行性计划",
      color: theme.primary
    },
    {
      title: "行动",
      desc: "执行方案，收集数据",
      detail: "按计划执行，观察结果，收集反馈",
      color: theme.accent
    },
    {
      title: "反思",
      desc: "深度反思，提取经验",
      detail: "多角度思考，总结规律，提取教训",
      color: theme.secondary
    },
    {
      title: "学习",
      desc: "总结规律，指导未来",
      detail: "形成新知，更新认知，指导后续",
      color: theme.primary
    }
  ];

  const quadW = 4.3;
  const quadH = 2;
  const startX = 0.6;
  const startY = 1.25;
  const gapX = 0.4;
  const gapY = 0.3;

  quadrants.forEach((quad, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (quadW + gapX);
    const y = startY + row * (quadH + gapY);

    // Background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: quadW, h: quadH,
      fill: { color: theme.light }
    });

    // Top color bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: quadW, h: 0.12,
      fill: { color: quad.color }
    });

    // Number
    slide.addText(String(i + 1), {
      x: x + 0.2, y: y + 0.3, w: 0.5, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: quad.color, bold: true
    });

    // Title
    slide.addText(quad.title, {
      x: x + 0.75, y: y + 0.35, w: 2, h: 0.45,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(quad.desc, {
      x: x + 0.2, y: y + 0.95, w: 3.9, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });

    // Detail
    slide.addText(quad.detail, {
      x: x + 0.2, y: y + 1.4, w: 3.9, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide };
