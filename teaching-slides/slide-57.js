const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("学习心得分享", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Three question cards
  const questions = [
    {
      num: "01",
      question: "最有收获的一个工具是什么？",
      hint: "思考这个工具如何帮助你的工作"
    },
    {
      num: "02",
      question: "最具挑战的是什么？",
      hint: "面对挑战时如何克服"
    },
    {
      num: "03",
      question: "计划如何应用所学？",
      hint: "具体的应用场景和时间"
    }
  ];

  questions.forEach((q, i) => {
    const y = 1.1 + i * 1.25;

    // Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.5, y: y, w: 6.0, h: 1.1,
      fill: { color: theme.light }
    });

    // Number
    slide.addText(q.num, {
      x: 0.7, y: y + 0.15, w: 0.8, h: 0.8,
      fontSize: 32, fontFace: "Arial",
      color: theme.accent, bold: true
    });

    // Question
    slide.addText(q.question, {
      x: 1.6, y: y + 0.2, w: 4.7, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Hint
    slide.addText(q.hint, {
      x: 1.6, y: y + 0.65, w: 4.7, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Right side - sharing area
  slide.addShape(pres.ShapeType.rect, {
    x: 6.7, y: 1.1, w: 2.9, h: 3.6,
    fill: { color: theme.primary }
  });

  slide.addText("分享区", {
    x: 6.9, y: 1.25, w: 2.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center"
  });

  // Share icon
  slide.addText("💬", {
    x: 6.9, y: 1.9, w: 2.5, h: 1.5,
    fontSize: 60,
    align: "center", valign: "middle"
  });

  slide.addText("写下你的心得", {
    x: 6.9, y: 3.5, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center"
  });

  slide.addText("与同伴交流", {
    x: 6.9, y: 3.9, w: 2.5, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light,
    align: "center"
  });

  // Bottom bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.1, w: 10, h: 0.65,
    fill: { color: theme.accent }
  });
  slide.addText("分享是最好的学习方式", {
    x: 0.5, y: 5.1, w: 9, h: 0.65,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
