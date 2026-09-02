const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("第一模块小结", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true, margin: 0
  });

  // Section label
  slide.addText("MODULE 01 | Austrian School", {
    x: 0.5, y: 1.05, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Georgia",
    color: theme.light, italic: true
  });

  // Key takeaways - 2x2 grid
  const cardW = 4.4;
  const cardH = 1.2;
  const cardGap = 0.2;
  const startY = 1.5;

  const takeaways = [
    { num: "01", title: "边际革命", desc: "主观价值论取代劳动价值论，奠定现代经济学基础" },
    { num: "02", title: "方法论个人主义", desc: "从个体行动出发解释社会现象，拒绝集体主义叙事" },
    { num: "03", title: "自发秩序", desc: "市场是发现程序，价格传递分散信息，无需中央设计" },
    { num: "04", title: "创造性破坏", desc: "企业家创新推动经济发展，旧秩序不断被新组合取代" }
  ];

  takeaways.forEach((t, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.5 + col * (cardW + cardGap);
    const y = startY + row * (cardH + cardGap);

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      shadow: { type: "outer", blur: 5, offset: 2, angle: 135, color: "000000", opacity: 0.08 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.5, h: cardH,
      fill: { color: i < 2 ? theme.primary : theme.accent }
    });
    slide.addText(t.num, {
      x: x, y: y, w: 0.5, h: cardH,
      fontSize: 18, fontFace: "Georgia",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    slide.addText(t.title, {
      x: x + 0.65, y: y + 0.15, w: cardW - 0.8, h: 0.35,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.desc, {
      x: x + 0.65, y: y + 0.55, w: cardW - 0.8, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });

  // Bottom: connection to overall course
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 4.2, w: 9, h: 0.75,
    fill: { color: theme.primary }
  });
  slide.addText("模块之间的联系", {
    x: 0.7, y: 4.3, w: 2.5, h: 0.25,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.light, bold: true
  });
  slide.addText("奥地利学派将斯密的洞见系统化，并为后续的制度经济学、演化经济学、行为经济学奠定了方法论基础。", {
    x: 0.7, y: 4.6, w: 8.6, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.bg
  });

  // Page number badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }
  });
  slide.addText("28", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 12, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
