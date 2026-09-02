/**
 * Slide 96 - 评估你的压力节奏
 */

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }
  });

  // Title
  slide.addText("评估你的压力节奏", {
    x: 0.5, y: 0.35, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  // Subtitle
  slide.addText("了解你的起点，才能找到适合你的方案", {
    x: 0.5, y: 0.95, w: 9, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.light, bold: false
  });

  // Intro text
  slide.addText('在开始之前，请认真思考以下六个问题。这不是考试，没有"正确答案"——诚实面对自己，才能找到真正有效的工具。', {
    x: 0.5, y: 1.45, w: 9, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false
  });

  // Questions grid - 2 columns x 3 rows
  const questions = [
    { num: "1", text: "你目前整体的压力水平如何？（1-10分）" },
    { num: "2", text: "你每天有多少大块时间（15分钟以上）？" },
    { num: "3", text: "你每天有多少碎片化时间？" },
    { num: "4", text: "你在一天中的什么时候感到最压力大？" },
    { num: "5", text: "你进行心理保养的核心目标是什么？" },
    { num: "6", text: "你曾经尝试过哪些方法？效果如何？" }
  ];

  const cardW = 4.3;
  const cardH = 0.95;
  const startX = 0.5;
  const startY = 2.1;
  const gapX = 0.4;
  const gapY = 0.2;

  questions.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 45, opacity: 0.08 }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(q.num, {
      x: x + 0.15, y: y + 0.22, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Question text
    slide.addText(q.text, {
      x: x + 0.75, y: y + 0.15, w: cardW - 0.95, h: cardH - 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      valign: "middle"
    });
  });

  // Purpose note at bottom
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.45,
    fill: { color: theme.accent, transparency: 85 }
  });
  slide.addText("目的：帮助你了解自己的压力模式、时间状况和核心需求，为后续选择工具组合提供依据", {
    x: 0.7, y: 5.0, w: 8.6, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: false,
    valign: "middle"
  });

  // Page number badge
  slide.addShape(pres.ShapeType.rect, {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fill: { color: theme.accent }
  });
  slide.addText("96", {
    x: 9.3, y: 5.1, w: 0.5, h: 0.35,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

const slideConfig = {
  type: "content",
  module: "Module 7",
  title: "评估你的压力节奏",
  pageNumber: 96
};

module.exports = { createSlide, slideConfig };
