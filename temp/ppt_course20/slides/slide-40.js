const createSlide = (pres, theme) => {
  const slide = pres.addSlide();
  slide.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 10, h: 5.625, fill: { color: theme.bg } });
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.1,
    fill: { color: theme.primary }
  });
  slide.addText("如何找到你的核心锚点？", {
    x: 0.5, y: 0.25, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei", bold: true,
    color: "FFFFFF", margin: 0
  });
  slide.addText("通过四个关键问题，找到你的核心锚点", {
    x: 0.5, y: 1.25, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  const questions = [
    {
      num: "01",
      question: "你希望孩子20年后成为什么样的人？",
      hint: "写下3-5个关键词"
    },
    {
      num: "02",
      question: "哪种育儿方式让你感到内心平静？",
      hint: "而不是焦虑或愧疚"
    },
    {
      num: "03",
      question: "当你违背了什么会让你感到后悔？",
      hint: "这往往指向真正的价值"
    },
    {
      num: "04",
      question: "如果只能选一件事，你会坚持什么？",
      hint: "这就是你的核心锚点"
    }
  ];
  questions.forEach((q, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.7;
    const y = 1.75 + row * 1.75;
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 4.4, h: 1.55,
      fill: { color: "FFFFFF" },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.6, h: 1.55,
      fill: { color: theme.primary }
    });
    slide.addText(q.num, {
      x: x, y: y, w: 0.6, h: 1.55,
      fontSize: 18, fontFace: "Arial", bold: true,
      color: "FFFFFF", align: "center", valign: "middle"
    });
    slide.addText(q.question, {
      x: x + 0.75, y: y + 0.15, w: 3.5, h: 0.8,
      fontSize: 13, fontFace: "Microsoft YaHei", bold: true,
      color: theme.primary
    });
    slide.addText(q.hint, {
      x: x + 0.75, y: y + 0.95, w: 3.5, h: 0.45,
      fontSize: 11, fontFace: "Microsoft YaHei", italic: true,
      color: theme.light
    });
  });
  slide.addShape(pres.ShapeType.ellipse, {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fill: { color: theme.secondary }
  });
  slide.addText("40", {
    x: 9.3, y: 5.1, w: 0.36, h: 0.36,
    fontSize: 12, fontFace: "Arial", bold: true,
    color: "FFFFFF", align: "center", valign: "middle"
  });
  return slide;
};
module.exports = { createSlide };
