const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "工作间隙使用指南",
  type: "content",
  pageNumber: 82
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
  slide.addText("82", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("工作间隙使用指南", {
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

  // Best timing
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 0.1, h: 1.5,
    fill: { color: theme.primary }
  });

  slide.addText("最佳时机", {
    x: 0.75, y: 1.35, w: 3.9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText('感觉疲劳或注意力下降时\n不需要等到完全疲惫\n感觉"走神"时立刻开始', {
    x: 0.75, y: 1.8, w: 3.9, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Environment
  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 4.5, h: 1.5,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  slide.addShape(pres.ShapeType.rect, {
    x: 5.0, y: 1.25, w: 0.1, h: 1.5,
    fill: { color: theme.accent }
  });

  slide.addText("适用环境", {
    x: 5.25, y: 1.35, w: 4.1, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  slide.addText("办公桌前 | 会议室 | 休息室\n甚至在工位上假装看手机", {
    x: 5.25, y: 1.8, w: 4.1, h: 0.85,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "left", valign: "top"
  });

  // Tips section
  slide.addText("实用技巧", {
    x: 0.5, y: 3.0, w: 2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  const tips = [
    { tip: "眼睛半闭也可以", desc: "减少视觉刺激，更易聚焦" },
    { tip: "周围有人也无妨", desc: "隐蔽性强，他人看不出你在做什么" },
    { tip: "不需要取下耳机", desc: "可以播放轻音乐或白噪音" }
  ];

  tips.forEach((t, i) => {
    const y = 3.55 + i * 0.6;

    // Tip card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.5,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.08 }
    });

    slide.addText(t.tip, {
      x: 0.7, y: y, w: 2.5, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(t.desc, {
      x: 3.2, y: y, w: 6.1, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.light,
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
