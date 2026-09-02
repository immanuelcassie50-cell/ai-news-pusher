const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("提问链设计练习", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Practice instructions - left side
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 4.5, h: 3.8,
    fill: { color: theme.light }
  });
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 0.1, h: 3.8,
    fill: { color: theme.accent }
  });

  slide.addText("练习指导", {
    x: 0.8, y: 1.25, w: 4, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  const instructions = [
    { num: "1", text: "选择一个真实问题" },
    { num: "2", text: "设计3-5个递进式提问" },
    { num: "3", text: "预测可能的回答" },
    { num: "4", text: "准备追问方向" }
  ];

  instructions.forEach((ins, i) => {
    const insY = 1.9 + i * 0.75;

    // Number badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: insY, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });
    slide.addText(ins.num, {
      x: 0.8, y: insY, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Text
    slide.addText(ins.text, {
      x: 1.5, y: insY, w: 3.3, h: 0.5,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "left", valign: "middle", margin: 0
    });
  });

  // Time note
  slide.addShape(pres.ShapeType.rect, {
    x: 0.8, y: 4.4, w: 4, h: 0.35,
    fill: { color: theme.secondary, transparency: 70 }
  });
  slide.addText("⏱ 练习时间：15分钟", {
    x: 0.8, y: 4.4, w: 4, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  // Right side - practice template
  slide.addShape(pres.ShapeType.rect, {
    x: 5.2, y: 1.1, w: 4.3, h: 3.8,
    fill: { color: "ffffff" },
    line: { color: theme.light, width: 1 },
    shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
  });

  slide.addText("我的练习", {
    x: 5.4, y: 1.25, w: 3.9, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, margin: 0
  });

  // Template fields
  const fields = [
    { label: "我的问题", hint: "写下要讨论的问题..." },
    { label: "问题1", hint: "开放式开场" },
    { label: "问题2", hint: "递进深入" },
    { label: "问题3", hint: "继续探索" },
    { label: "预测回答", hint: "可能的回应" }
  ];

  fields.forEach((f, i) => {
    const fY = 1.85 + i * 0.6;

    slide.addText(f.label, {
      x: 5.4, y: fY, w: 1.5, h: 0.35,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });

    // Input line
    slide.addShape(pres.ShapeType.rect, {
      x: 5.4, y: fY + 0.3, w: 3.9, h: 0.02,
      fill: { color: theme.secondary, transparency: 50 }
    });

    if (i === 0) {
      slide.addText(f.hint, {
        x: 5.4, y: fY + 0.3, w: 3.9, h: 0.25,
        fontSize: 10, fontFace: "Microsoft YaHei",
        color: theme.secondary, transparency: 50,
        align: "left", margin: 0
      });
    }
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.1, w: 9, h: 0.7,
    fill: { color: theme.primary }
  });
  slide.addText("成对练习：一人提问，一人回答，然后交换角色", {
    x: 0.5, y: 5.1, w: 9, h: 0.7,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
