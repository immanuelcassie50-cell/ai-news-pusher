const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.85,
    fill: { color: theme.primary }
  });
  slide.addText("持续成长路径", {
    x: 0.5, y: 0.2, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Growth path - stepping stones design
  const levels = [
    {
      title: "初级催化官",
      desc: "100场会议经验",
      color: theme.secondary
    },
    {
      title: "中级催化官",
      desc: "跨行业催化能力",
      color: theme.primary
    },
    {
      title: "高级催化官",
      desc: "培养他人成为催化官",
      color: theme.accent
    },
    {
      title: "催化导师",
      desc: "传授催化技术",
      color: theme.accent
    }
  ];

  // Draw stepping stones
  levels.forEach((l, i) => {
    const x = 0.7 + i * 2.35;
    const y = 3.5 - i * 0.4; // Rising path

    // Stone
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 2.1, h: 1.4,
      fill: { color: l.color },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 3, angle: 135, opacity: 0.15 }
    });

    // Title
    slide.addText(l.title, {
      x: x, y: y + 0.25, w: 2.1, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: "ffffff", bold: true,
      align: "center"
    });

    // Description
    slide.addText(l.desc, {
      x: x, y: y + 0.75, w: 2.1, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: "ffffff",
      align: "center"
    });

    // Level number
    slide.addText(String(i + 1), {
      x: x + 0.08, y: y + 0.08, w: 0.35, h: 0.35,
      fontSize: 14, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });
  });

  // Connecting arrows/lines between stones
  for (let i = 0; i < 3; i++) {
    const x1 = 2.8 + i * 2.35;
    const y1 = 3.2 - i * 0.4;
    const x2 = 0.7 + (i + 1) * 2.35;
    const y2 = 3.1 - (i + 1) * 0.4;

    // Draw diagonal connector
    slide.addShape(pres.ShapeType.line, {
      x: x1, y: y1, w: x2 - x1, h: y2 - y1,
      line: { color: theme.secondary, width: 2, dashType: "dash" }
    });
  }

  // Left side labels
  slide.addText("成长阶梯", {
    x: 0.3, y: 2.0, w: 0.4, h: 2.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true,
    rotate: 270
  });

  // Bottom description
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 5.15, w: 10, h: 0.6,
    fill: { color: theme.light }
  });
  slide.addText("从入门到精通，成为行动学习催化专家", {
    x: 0.5, y: 5.15, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
