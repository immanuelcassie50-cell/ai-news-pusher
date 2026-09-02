const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "睡前工具组合C/D",
  type: "content",
  pageNumber: 90
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
  slide.addText("90", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("睡前工具组合 C / D", {
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

  // Option C
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 3.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  // Option C header
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.25, w: 4.3, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("组合 C", {
    x: 0.5, y: 1.25, w: 4.3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("书写整合版", {
    x: 0.5, y: 2.0, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // C steps
  const cSteps = [
    { time: "5-7分钟", desc: "四步情绪释放或自由书写" },
    { time: "2-3分钟", desc: "深呼吸过渡" }
  ];

  cSteps.forEach((s, i) => {
    const y = 2.6 + i * 0.8;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 0.8, y: y + 0.15, w: 0.12, h: 0.12,
      fill: { color: theme.accent }
    });

    slide.addText(s.time, {
      x: 1.0, y: y, w: 1.0, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(s.desc, {
      x: 2.0, y: y, w: 2.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // C tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.7, y: 4.2, w: 3.9, h: 0.6,
    fill: { color: theme.bg }
  });

  slide.addText("适合：有话想说、想整理思绪时", {
    x: 0.7, y: 4.2, w: 3.9, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Option D
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.25, w: 4.3, h: 3.7,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
  });

  // Option D header
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.25, w: 4.3, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("组合 D", {
    x: 5.2, y: 1.25, w: 4.3, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("感恩收尾版", {
    x: 5.2, y: 2.0, w: 4.3, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    align: "center", valign: "middle"
  });

  // D steps
  const dSteps = [
    { time: "3-5分钟", desc: "感恩日记：写下3件今天的事" },
    { time: "2-3分钟", desc: "腹式呼吸，在床上回忆" }
  ];

  dSteps.forEach((s, i) => {
    const y = 2.6 + i * 0.8;

    slide.addShape(pres.ShapeType.ellipse, {
      x: 5.5, y: y + 0.15, w: 0.12, h: 0.12,
      fill: { color: theme.primary }
    });

    slide.addText(s.time, {
      x: 5.7, y: y, w: 1.0, h: 0.4,
      fontSize: 12, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(s.desc, {
      x: 6.7, y: y, w: 2.6, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "left", valign: "middle"
    });
  });

  // D tip
  slide.addShape(pres.ShapeType.rect, {
    x: 5.4, y: 4.2, w: 3.9, h: 0.6,
    fill: { color: theme.bg }
  });

  slide.addText("适合：希望带着正面情绪入睡", {
    x: 5.4, y: 4.2, w: 3.9, h: 0.6,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center", valign: "middle"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.35, w: 10, h: 0.275,
    fill: { color: theme.primary }
  });

  return slide;
}

module.exports = { createSlide, slideConfig };
