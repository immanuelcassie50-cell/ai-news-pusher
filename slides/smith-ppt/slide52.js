const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });
  slide.addText("柠檬市场的机制", {
    x: 0.5, y: 0.2, w: 8.5, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei", color: "FFFFFF",
    bold: true
  });

  // Page number
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.primary }
  });
  slide.addText("52", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Spiral diagram showing deterioration
  slide.addText("市场萎缩的螺旋", {
    x: 0.5, y: 1.15, w: 9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  // Spiral stages
  const spiralStages = [
    { label: "信息不对称\n存在", color: theme.light },
    { label: "买家只愿\n出平均价", color: theme.secondary },
    { label: "好车车主的\n保留价格 > 平均价", color: theme.accent },
    { label: "好车退出\n市场", color: theme.primary }
  ];

  spiralStages.forEach((stage, i) => {
    const angle = i * (Math.PI / 2) - Math.PI / 4;
    const centerX = 2.5;
    const centerY = 3.2;
    const radius = 1.4;
    const x = centerX + radius * Math.cos(angle) - 0.7;
    const y = centerY + radius * Math.sin(angle) - 0.35;

    slide.addShape(pres.shapes.OVAL, {
      x: x, y: y, w: 1.4, h: 0.7,
      fill: { color: stage.color }
    });
    slide.addText(stage.label, {
      x: x, y: y, w: 1.4, h: 0.7,
      fontSize: 10, fontFace: "Microsoft YaHei", color: "FFFFFF",
      align: "center", valign: "middle"
    });

    if (i < 3) {
      slide.addText("→", {
        x: centerX + (radius - 0.3) * Math.cos(angle + Math.PI / 4) - 0.15,
        y: centerY + (radius - 0.3) * Math.sin(angle + Math.PI / 4) - 0.15,
        w: 0.3, h: 0.3,
        fontSize: 14, color: theme.accent, align: "center"
      });
    }
  });

  // Final outcome
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 4.5, h: 0.5,
    fill: { color: theme.primary }, rectRadius: 0.08
  });
  slide.addText("市场崩溃：只剩坏车 = 柠檬", {
    x: 0.5, y: 4.6, w: 4.5, h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei", color: "FFFFFF",
    align: "center", valign: "middle"
  });

  // Right side - modern examples
  slide.addText("信息经济学的现实映射", {
    x: 5.3, y: 1.15, w: 4.2, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei", color: theme.accent,
    bold: true
  });

  const examples = [
    { market: "保险市场", issue: "逆选择：高风险者更倾向投保" },
    { market: "信贷市场", issue: "征信缺失导致利率一刀切" },
    { market: "劳动力市场", issue: "学历成为信号筛选机制" },
    { market: "电商平台", issue: "评价体系解决信息不对称" }
  ];

  examples.forEach((ex, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.3, y: 1.6 + i * 0.85, w: 4.2, h: 0.75,
      fill: { color: "FFFFFF" }, rectRadius: 0.08,
      line: { color: theme.light, width: 1 }
    });
    slide.addText(ex.market, {
      x: 5.45, y: 1.65 + i * 0.85, w: 1.3, h: 0.35,
      fontSize: 12, fontFace: "Microsoft YaHei", color: theme.primary,
      bold: true
    });
    slide.addText(ex.issue, {
      x: 5.45, y: 1.97 + i * 0.85, w: 3.9, h: 0.35,
      fontSize: 11, fontFace: "Calibri", color: theme.secondary
    });
  });

  return slide;
}

module.exports = { createSlide };
