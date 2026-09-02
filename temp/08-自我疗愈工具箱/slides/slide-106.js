/**
 * Slide 106 - 模块七小结
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Left colored panel
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 3.5, h: 5.625,
    fill: { color: theme.primary }
  });

  // Module number
  slide.addText("07", {
    x: 0.35, y: 0.8, w: 2.8, h: 1,
    fontSize: 60, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  // Module name
  slide.addText("MODULE", {
    x: 0.35, y: 1.75, w: 2.8, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.accent, bold: true,
    charSpacing: 3
  });

  // Decorative line
  slide.addShape(pres.ShapeType.rect, {
    x: 0.35, y: 2.15, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  // Summary title on left
  slide.addText("小结", {
    x: 0.35, y: 2.4, w: 2.8, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // Key message at bottom of left panel
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 4.4, w: 3.5, h: 1.225,
    fill: { color: theme.secondary }
  });
  slide.addText('这是一份活的文档——\n随着你的成长而调整', {
    x: 0.35, y: 4.55, w: 2.8, h: 0.85,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    italic: true
  });

  // Right content - 4 key learnings
  slide.addText("本模块要点回顾", {
    x: 3.85, y: 0.4, w: 5.8, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 3.85, y: 0.9, w: 1.5, h: 0.05,
    fill: { color: theme.accent }
  });

  const learnings = [
    { num: "1", title: "评估压力节奏", desc: "通过6个问题了解自己的压力模式、时间状况和核心需求" },
    { num: "2", title: "选择工具组合", desc: "根据不同需求选择匹配的工具：快速平静、改善睡眠、提升专注等" },
    { num: "3", title: "建立微习惯", desc: "从小开始、依附锚点、记录庆祝、逐步扩展——让改变可持续" },
    { num: "4", title: "制定个人计划", desc: "创建属于你自己的每日保养清单，包含核心习惯、场景工具和预警信号" }
  ];

  const cardStartY = 1.1;
  const cardH = 0.95;
  const cardGap = 0.15;

  learnings.forEach((item, i) => {
    const y = cardStartY + i * (cardH + cardGap);

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 3.85, y: y, w: 5.8, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.06 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: 4.05, y: y + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(item.num, {
      x: 4.05, y: y + 0.22, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 4.7, y: y + 0.12, w: 4.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });

    // Description
    slide.addText(item.desc, {
      x: 4.7, y: y + 0.48, w: 4.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Bottom message
  slide.addShape(pres.ShapeType.rect, {
    x: 3.85, y: 5.05, w: 5.8, h: 0.45,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("记住：最佳计划是你会坚持的那个。不完美但持续，胜过完美但放弃", {
    x: 4.0, y: 5.05, w: 5.5, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("106", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "summary",
  module: "Module 7",
  title: "模块七小结",
  pageNumber: 106
};

module.exports = { createSlide, slideConfig };
