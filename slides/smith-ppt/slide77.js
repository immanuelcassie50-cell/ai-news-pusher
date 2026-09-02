const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.accent }
  });
  slide.addText("练习二", {
    x: 0.5, y: 0.2, w: 4, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Main title
  slide.addText("判断对错", {
    x: 0.5, y: 1.1, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Georgia",
    color: theme.primary, bold: true
  });

  // Instructions
  slide.addText("请判断以下说法是否正确，并说明理由", {
    x: 0.5, y: 1.75, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });

  // Questions
  const questions = [
    { num: "1", text: "斯密认为自私是人的唯一本性", answer: "✗ 错", reason: "斯密认为人有多重情感，自私只是其中之一" },
    { num: "2", text: "看不见的手可以让所有个人利益与社会利益协调", answer: "✗ 错", reason: "斯密认为存在市场失灵，需要政府干预" },
    { num: "3", text: "斯密是自由放任经济的坚定支持者", answer: "✗ 错", reason: "斯密主张有限政府，而非无政府" }
  ];

  questions.forEach((q, i) => {
    const y = 2.25 + i * 1.05;
    // Question box
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 9, h: 0.9,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 45, opacity: 0.1 }
    });
    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 0.5, h: 0.9,
      fill: { color: theme.primary }
    });
    slide.addText(q.num, {
      x: 0.5, y: y, w: 0.5, h: 0.9,
      fontSize: 16, fontFace: "Calibri",
      color: "FFFFFF", align: "center", valign: "middle"
    });
    // Question text
    slide.addText(q.text, {
      x: 1.1, y: y + 0.1, w: 5.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
    // Answer
    slide.addText(q.answer, {
      x: 1.1, y: y + 0.5, w: 1, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    // Reason
    slide.addText(q.reason, {
      x: 2.1, y: y + 0.5, w: 7.2, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Page number badge
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("77", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri",
    color: "FFFFFF", align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
