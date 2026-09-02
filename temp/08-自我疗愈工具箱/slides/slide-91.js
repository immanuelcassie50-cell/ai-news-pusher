const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "睡前使用指南",
  type: "content",
  pageNumber: 91
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
  slide.addText("91", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("睡前使用指南", {
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

  // Timing section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.1, h: 1.3,
    fill: { color: theme.primary }
  });

  slide.addText("时机", {
    x: 0.75, y: 1.35, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('上床后、准备入睡时\n不是"必须睡着"，而是"准备入睡"', {
    x: 0.75, y: 1.75, w: 3.9, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Environment
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 4.5, h: 1.3,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 0.1, h: 1.3,
    fill: { color: theme.accent }
  });

  slide.addText("环境", {
    x: 5.25, y: 1.35, w: 4.1, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("灯光昏暗或关灯\n安静或白噪音\n手机/电脑放到一边", {
    x: 5.25, y: 1.75, w: 4.1, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // If awake >20 min
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.75, w: 9, h: 1.0,
    fill: { color: theme.primary }
  });

  slide.addText("如果躺在床上超过20分钟还清醒", {
    x: 0.7, y: 2.85, w: 8.6, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("起床进行正式练习（PMR或身体扫描），困了再回床", {
    x: 0.7, y: 3.25, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent,
    align: "left", valign: "middle"
  });

  // Tips
  slide.addText("关键心态", {
    x: 0.5, y: 4.0, w: 2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const tips = [
    '目标是放松，不是"努力入睡"',
    "允许思绪来去，不追逐",
    '把"睡不着"视为正常，不焦虑'
  ];

  tips.forEach((tip, i) => {
    const y = 4.5 + i * 0.3;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.7, y: y + 0.05, w: 0.1, h: 0.1,
      fill: { color: theme.light }
    });

    slide.addText(tip, {
      x: 0.95, y: y, w: 8.5, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
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
