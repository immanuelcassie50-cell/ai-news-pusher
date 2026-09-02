const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "简化版PMR 3分钟",
  type: "content",
  pageNumber: 22
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();

  // Background
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg }
  });

  // Left red accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 0.15, h: 5.625,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("简化版PMR 3分钟", {
    x: 0.6, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // 6 muscle groups as process flow
  const muscleGroups = [
    { name: "手/前臂", action: "握拳收紧", time: "5秒" },
    { name: "二头肌", action: "弯曲手臂", time: "5秒" },
    { name: "面部", action: "皱眉咬牙", time: "5秒" },
    { name: "肩部", action: "耸起贴近耳朵", time: "5秒" },
    { name: "胸/腹部", action: "深吸气屏住", time: "5秒" },
    { name: "全身", action: "从头到脚紧绷", time: "5秒" }
  ];

  // Two rows of 3
  const cardW = 2.8;
  const cardH = 1.4;
  const gapX = 0.3;
  const gapY = 0.25;
  const row1Y = 1.25;
  const row2Y = 2.9;

  muscleGroups.forEach((group, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.7 + col * (cardW + gapX);
    const y = row === 0 ? row1Y : row2Y;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4,
      fill: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: x + 0.15, y: y + 0.15, w: 0.4, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Muscle group name
    slide.addText(group.name, {
      x: x + 0.6, y: y + 0.15, w: cardW - 0.8, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    // Action
    slide.addText(group.action, {
      x: x + 0.15, y: y + 0.6, w: cardW - 0.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });

    // Time badge
    slide.addShape(pres.ShapeType.rect, {
      x: x + cardW - 0.7, y: y + cardH - 0.45, w: 0.55, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(group.time, {
      x: x + cardW - 0.7, y: y + cardH - 0.45, w: 0.55, h: 0.3,
      fontSize: 9, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Instructor tips
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 4.45, w: 8.8, h: 0.7,
    fill: { color: theme.primary }
  });

  slide.addText("讲师引导要点：", {
    x: 0.8, y: 4.5, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("每个部位先绷紧→保持→释放，提醒学员感受紧张与放松的差异。3分钟版本适合办公室或公共场合使用。", {
    x: 0.8, y: 4.8, w: 8.4, h: 0.3,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    align: "left", valign: "middle"
  });

  // Bottom decorative bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("22", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
