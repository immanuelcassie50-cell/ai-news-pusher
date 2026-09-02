const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "工作间隙修复工具概述",
  type: "content",
  pageNumber: 80
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
  slide.addText("80", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("工作间隙修复工具概述", {
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

  // Key times section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 9, h: 1.4,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addText("关键时间点", {
    x: 0.7, y: 1.35, w: 2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Time badges
  const times = [
    { label: "上午10-11点", desc: "第一波疲劳开始" },
    { label: "下午3-4点", desc: "午后的能量低谷" }
  ];

  times.forEach((t, i) => {
    const x = 1.5 + i * 3.5;

    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.85, w: 2.5, h: 0.6,
      fill: { color: theme.primary }
    });

    slide.addText(t.label, {
      x: x, y: 1.85, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(t.desc, {
      x: x, y: 2.2, w: 2.5, h: 0.25,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center", valign: "middle"
    });
  });

  // Goal section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.85, w: 4.3, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 2.85, w: 0.1, h: 2.0,
    fill: { color: theme.accent }
  });

  slide.addText("目标", {
    x: 0.75, y: 2.95, w: 3.9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("快速重启\n不打断工作流程\n恢复心理能量\n重新聚焦注意力", {
    x: 0.75, y: 3.45, w: 3.9, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Characteristics
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 2.85, w: 4.5, h: 2.0,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 2.85, w: 0.1, h: 2.0,
    fill: { color: theme.primary }
  });

  slide.addText("特点", {
    x: 5.25, y: 2.95, w: 4.1, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("时间短（1-5分钟）\n隐蔽性强（可坐着完成）\n无需特殊设备\n融入工作场景", {
    x: 5.25, y: 3.45, w: 4.1, h: 1.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
