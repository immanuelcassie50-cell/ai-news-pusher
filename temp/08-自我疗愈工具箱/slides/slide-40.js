const pptxgen = require("pptxgenjs");

const slideConfig = {
  title: "STOP五感正念步骤",
  type: "content",
  pageNumber: 40
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
  slide.addText("40", {
    x: 9.3, y: 5.1, w: 0.6, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  // Title
  slide.addText("STOP五感正念步骤", {
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

  // STOP acronym cards
  const steps = [
    {
      letter: "S",
      word: "Stop",
      chinese: "停止",
      desc: "暂停当前活动",
      color: theme.primary
    },
    {
      letter: "T",
      word: "Take in",
      chinese: "接收",
      desc: "5视觉 | 4听觉 | 3嗅觉\n2味觉 | 3触觉",
      color: theme.light
    },
    {
      letter: "O",
      word: "Observe",
      chinese: "观察",
      desc: "留意当下的\n身心状态",
      color: theme.accent
    },
    {
      letter: "P",
      word: "Proceed",
      chinese: "继续",
      desc: "带着觉知\n回归活动",
      color: theme.secondary
    }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 2.4;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: 1.2, w: 2.2, h: 2.6,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.1 }
    });

    // Letter badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.7, y: 1.35, w: 0.8, h: 0.8,
      fill: { color: step.color }
    });
    slide.addText(step.letter, {
      x: x + 0.7, y: 1.35, w: 0.8, h: 0.8,
      fontSize: 28, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Word
    slide.addText(step.word, {
      x: x, y: 2.25, w: 2.2, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: step.color, bold: true,
      align: "center", valign: "middle"
    });

    // Chinese
    slide.addText(step.chinese, {
      x: x, y: 2.6, w: 2.2, h: 0.4,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "center", valign: "middle"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: 3.05, w: 2, h: 0.7,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center", valign: "middle"
    });
  });

  // "Take in" details box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 9, h: 1.1,
    fill: { color: "FFFFFF" },
    shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
  });

  // Left accent
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 0.1, h: 1.1,
    fill: { color: theme.light }
  });

  slide.addText("T - Take in 五感接收", {
    x: 0.75, y: 4.05, w: 3, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Senses layout
  const senses = [
    { num: "5", sense: "视觉", item: "看到的5样东西" },
    { num: "4", sense: "听觉", item: "听到的4种声音" },
    { num: "3", sense: "嗅觉", item: "闻到的3种气味" },
    { num: "2", sense: "味觉", item: "尝到的2种味道" },
    { num: "3", sense: "触觉", item: "感受到的3种触感" }
  ];

  senses.forEach((s, i) => {
    const sx = 0.8 + i * 1.8;

    slide.addText(s.num, {
      x: sx, y: 4.4, w: 0.35, h: 0.3,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(s.sense, {
      x: sx + 0.35, y: 4.4, w: 0.6, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true,
      align: "left", valign: "middle"
    });

    slide.addText(s.item, {
      x: sx, y: 4.7, w: 1.6, h: 0.3,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.light,
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
