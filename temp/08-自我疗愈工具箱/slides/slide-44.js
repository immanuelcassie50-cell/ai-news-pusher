const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "场景应用总览表",
  type: "content",
  pageNumber: 44
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

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("44", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("场景应用总览表", {
    x: 0.5, y: 0.35, w: 6, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "left", valign: "middle"
  });

  // Gold underline
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.0, w: 1.5, h: 0.04,
    fill: { color: theme.accent }
  });

  // Table header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.2, w: 9, h: 0.5,
    fill: { color: theme.primary }
  });

  const headers = ["场景", "推荐练习", "时长"];
  const colWidths = [2.5, 4.5, 2];
  let xPos = 0.5;

  headers.forEach((header, i) => {
    slide.addText(header, {
      x: xPos, y: 1.2, w: colWidths[i], h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    xPos += colWidths[i];
  });

  // Table rows
  const scenarios = [
    { scene: "🌅 早晨起床", practice: "身体扫描 + 深呼吸3次", duration: "2-3分钟" },
    { scene: "🚇 通勤路上", practice: "STOP五感练习（候车/站立）", duration: "1-2分钟" },
    { scene: "💼 上班前", practice: "三分钟呼吸空间", duration: "3分钟" },
    { scene: "☕ 工作间隙", practice: "迷你冥想：Just Breathe", duration: "1分钟" },
    { scene: "📋 开会前", practice: "STOP + 聚焦呼吸", duration: "1-2分钟" },
    { scene: "🍱 午餐时", practice: "正念饮食（品尝每一口）", duration: "5-10分钟" },
    { scene: "😰 情绪波动时", practice: "STOP五感 + 身体扎根", duration: "2-3分钟" },
    { scene: "⏳ 排队等待", practice: "嵌入式正念（感受双脚）", duration: "随时" }
  ];

  scenarios.forEach((row, i) => {
    const y = 1.7 + i * 0.45;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;

    // Row background
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.45,
      fill: { color: bgColor }
    });

    // Scene
    slide.addText(row.scene, {
      x: 0.5, y: y, w: 2.5, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Practice
    slide.addText(row.practice, {
      x: 3, y: y, w: 4.5, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "middle"
    });

    // Duration
    slide.addShape(pres.ShapeType.rect, {
      x: 7.7, y: y + 0.08, w: 1.3, h: 0.3,
      fill: { color: theme.accent }
    });
    slide.addText(row.duration, {
      x: 7.7, y: y + 0.08, w: 1.3, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
