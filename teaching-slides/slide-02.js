const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // White background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: "100%",
    fill: { color: theme.bg }
  });

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: "100%", h: 0.08,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("课程简介", {
    x: 0.6, y: 0.4, w: 4, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left content area
  const contentX = 0.6;
  const contentY = 1.4;

  // Content card 1
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY, w: 4.5, h: 1.1,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("行动学习核心理念", {
    x: contentX + 0.25, y: contentY + 0.15, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("在行动中学习，在学习中行动", {
    x: contentX + 0.25, y: contentY + 0.55, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Content card 2
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY + 1.3, w: 4.5, h: 1.1,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY + 1.3, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("催化师角色价值", {
    x: contentX + 0.25, y: contentY + 1.45, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("创造空间，赋能团队", {
    x: contentX + 0.25, y: contentY + 1.85, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Content card 3
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY + 2.6, w: 4.5, h: 1.1,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: contentX, y: contentY + 2.6, w: 0.08, h: 1.1,
    fill: { color: theme.accent }
  });
  slide.addText("四天学习路径图", {
    x: contentX + 0.25, y: contentY + 2.75, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("认识 → 掌握 → 运用 → 精进", {
    x: contentX + 0.25, y: contentY + 3.15, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Right illustration area - learning journey diagram
  const rightX = 5.8;

  // Day boxes
  const days = [
    { label: "Day 1", title: "认识", color: theme.primary },
    { label: "Day 2", title: "掌握", color: theme.secondary },
    { label: "Day 3", title: "运用", color: theme.accent },
    { label: "Day 4", title: "精进", color: theme.primary }
  ];

  days.forEach((day, i) => {
    const yPos = 1.3 + i * 1.05;
    // Day box
    slide.addShape(pres.ShapeType.rect, {
      x: rightX, y: yPos, w: 1.2, h: 0.8,
      fill: { color: day.color }
    });
    slide.addText(day.label, {
      x: rightX, y: yPos + 0.15, w: 1.2, h: 0.5,
      fontSize: 12, fontFace: "Arial",
      color: "ffffff", align: "center"
    });
    // Title next to box
    slide.addText(day.title, {
      x: rightX + 1.4, y: yPos + 0.1, w: 2, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    // Connector line (except last)
    if (i < 3) {
      slide.addShape(pres.ShapeType.rect, {
        x: rightX + 0.55, y: yPos + 0.8, w: 0.1, h: 0.25,
        fill: { color: theme.secondary }
      });
    }
  });

  return slide;
}

module.exports = { createSlide };
