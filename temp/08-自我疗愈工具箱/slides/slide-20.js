const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "完整身体扫描5分钟版",
  type: "content",
  pageNumber: 20
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
  slide.addText("完整身体扫描5分钟版", {
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

  // Note about lying down
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 1.2, w: 8.8, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("推荐姿势：躺下，双手放在身体两侧，保持温暖舒适的室温", {
    x: 0.8, y: 1.2, w: 8.4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // 11 body areas as step cards
  const areas = [
    { name: "脚趾", detail: "卷曲/放松" },
    { name: "脚底", detail: "接触地面" },
    { name: "双脚", detail: "整体感受" },
    { name: "小腿", detail: "肌肉紧张" },
    { name: "膝盖", detail: "弯曲放松" },
    { name: "大腿", detail: "沉重感" },
    { name: "髋部", detail: "接触平面" },
    { name: "腹部", detail: "呼吸起伏" },
    { name: "胸部", detail: "心跳感受" },
    { name: "双手", detail: "温暖/刺麻" },
    { name: "面部", detail: "眉心放松" }
  ];

  // Two rows layout
  const cardW = 1.35;
  const cardH = 0.85;
  const gapX = 0.12;
  const gapY = 0.15;
  const row1Y = 1.75;
  const row2Y = 2.7;

  areas.forEach((area, i) => {
    const row = i < 6 ? 0 : 1;
    const col = row === 0 ? i : i - 6;
    const x = 0.6 + col * (cardW + gapX);
    const y = row === 0 ? row1Y : row2Y;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.25, h: cardH,
      fill: { color: theme.primary }
    });
    slide.addText(String(i + 1), {
      x: x, y: y, w: 0.25, h: cardH,
      fontSize: 10, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Area name
    slide.addText(area.name, {
      x: x + 0.3, y: y + 0.1, w: cardW - 0.4, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Detail
    slide.addText(area.detail, {
      x: x + 0.3, y: y + 0.45, w: cardW - 0.4, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // Timing guide
  slide.addShape(pres.ShapeType.rect, {
    x: 0.6, y: 3.7, w: 8.8, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
  });

  slide.addText("时间分配", {
    x: 0.8, y: 3.8, w: 2, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Timing bar
  const timeSections = [
    { label: "下身(1-6)", width: 2.2, color: theme.primary },
    { label: "核心(7-9)", width: 1.8, color: theme.light },
    { label: "上身(10-11)", width: 1.4, color: theme.accent }
  ];

  let timeX = 0.9;
  timeSections.forEach((sec) => {
    slide.addShape(pres.ShapeType.rect, {
      x: timeX, y: 4.25, w: sec.width, h: 0.5,
      fill: { color: sec.color }
    });
    slide.addText(sec.label, {
      x: timeX, y: 4.25, w: sec.width, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    timeX += sec.width + 0.1;
  });

  slide.addText("每部位约20-30秒，总计5分钟左右", {
    x: 6.2, y: 4.25, w: 3, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary,
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
  slide.addText("20", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
