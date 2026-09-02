const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  slide.addText("催化师的角色边界", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Subtitle
  slide.addText("Facilitator Role Boundaries", {
    x: 0.5, y: 1.1, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: theme.secondary, italic: true
  });

  // Four principle cards in 2x2 grid
  const principles = [
    {
      title: "不提供答案",
      desc: "催化师的职责是引导思考，而非给出结论。保持中立，让参与者自己找到答案。",
      icon: "✗"
    },
    {
      title: "不表达个人立场",
      desc: "无论观点对错，催化师都不应流露个人偏好，以免影响团队决策的客观性。",
      icon: "✗"
    },
    {
      title: "不参与讨论决策",
      desc: "催化师是过程的守护者，不是参与者。避免将个人意见混入群体讨论中。",
      icon: "✗"
    },
    {
      title: "保持过程中立",
      desc: "关注过程而非内容，确保每位参与者有平等发言机会，维护讨论秩序。",
      icon: "✗"
    }
  ];

  const cardW = 4.3;
  const cardH = 1.8;
  const startX = 0.5;
  const startY = 1.7;
  const gapX = 0.4;
  const gapY = 0.35;

  principles.forEach((p, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light },
      line: { color: theme.secondary, width: 0.5 }
    });

    // Left accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Warning icon circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.25, y: y + 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.accent }
    });

    slide.addText(p.icon, {
      x: x + 0.25, y: y + 0.25, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "ffffff", bold: true, align: "center", valign: "middle"
    });

    // Principle title
    slide.addText(p.title, {
      x: x + 0.9, y: y + 0.25, w: 3.2, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Principle description
    slide.addText(p.desc, {
      x: x + 0.25, y: y + 0.85, w: 3.9, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "top"
    });
  });

  // Bottom emphasis box
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.6,
    fill: { color: theme.primary }
  });

  slide.addText("核心原则：催化师 = 过程专家 ≠ 内容专家", {
    x: 0.5, y: 5.0, w: 9, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
