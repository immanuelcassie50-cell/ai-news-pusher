const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "情绪低落10分钟深度版",
  type: "content",
  pageNumber: 85
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
  slide.addText("85", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("情绪低落10分钟深度版", {
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

  // Timeline steps
  const steps = [
    { time: "3分钟", title: "感恩日记", desc: "写下3件值得感恩的事", detail: "哪怕很小的事：温暖的阳光、一杯水" },
    { time: "5分钟", title: "四步情绪释放", desc: "命名-允许-接受-放下", detail: "给情绪一个出口" },
    { time: "2分钟", title: "4-7-8呼吸法", desc: "重复4个循环", detail: "平复神经系统" }
  ];

  // Vertical timeline
  slide.addShape(pres.ShapeType.rect, {
    x: 1.8, y: 1.5, w: 0.04, h: 3.4,
    fill: { color: theme.accent }
  });

  steps.forEach((step, i) => {
    const y = 1.5 + i * 1.2;

    // Timeline node
    slide.addShape(pres.ShapeType.ellipse, {
      x: 1.65, y: y + 0.1, w: 0.35, h: 0.35,
      fill: { color: theme.primary }
    });

    // Time badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.9, h: 0.55,
      fill: { color: theme.accent }
    });
    slide.addText(step.time, {
      x: 0.5, y: y, w: 0.9, h: 0.55,
      fontSize: 12, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Content card
    slide.addShape(pres.ShapeType.rect, {
      x: 2.3, y: y - 0.1, w: 7.2, h: 1.0,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    slide.addText(step.title, {
      x: 2.5, y: y, w: 2.5, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(step.desc, {
      x: 5.0, y: y, w: 2.2, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "left", valign: "middle"
    });

    slide.addText(step.detail, {
      x: 2.5, y: y + 0.4, w: 6.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
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
