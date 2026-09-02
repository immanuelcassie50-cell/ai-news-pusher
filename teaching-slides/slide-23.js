const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Header bar with warning style
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.9,
    fill: { color: theme.primary }
  });

  // Warning icon
  slide.addShape(pres.ShapeType.rect, {
    x: 0.4, y: 0.15, w: 0.6, h: 0.6,
    fill: { color: theme.accent }
  });
  slide.addText("!", {
    x: 0.4, y: 0.1, w: 0.6, h: 0.7,
    fontSize: 32, fontFace: "Arial",
    color: "ffffff", bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("群体思维（Groupthink）", {
    x: 1.2, y: 0.2, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true, margin: 0
  });

  // Definition card
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 1.1, w: 9, h: 0.9,
    fill: { color: theme.accent, transparency: 90 },
    line: { color: theme.accent, width: 2 }
  });
  slide.addText("定义", {
    x: 0.7, y: 1.15, w: 1, h: 0.35,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, margin: 0
  });
  slide.addText("为了维护表面和谐而压制不同意见的心理倾向，导致团队决策质量下降", {
    x: 0.7, y: 1.45, w: 8.5, h: 0.45,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, margin: 0
  });

  // Four harms - horizontal cards
  const harms = [
    { num: "01", title: "决策质量下降", desc: "不同声音被压制" },
    { num: "02", title: "风险被忽视", desc: "问题被美化回避" },
    { num: "03", title: "创新受阻", desc: "想法趋同单一" },
    { num: "04", title: "责任分散", desc: "集体责任模糊" }
  ];

  const hStartX = 0.5;
  const hStartY = 2.2;
  const hW = 2.15;
  const hH = 1.6;
  const hGap = 0.15;

  harms.forEach((harm, i) => {
    const x = hStartX + i * (hW + hGap);

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: hStartY, w: hW, h: hH,
      fill: { color: "ffffff" },
      line: { color: theme.light, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Red top bar
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: hStartY, w: hW, h: 0.08,
      fill: { color: theme.accent }
    });

    // Number
    slide.addText(harm.num, {
      x: x + 0.15, y: hStartY + 0.2, w: 0.6, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent, bold: true, margin: 0
    });

    // Title
    slide.addText(harm.title, {
      x: x + 0.15, y: hStartY + 0.7, w: hW - 0.3, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, margin: 0
    });

    // Description
    slide.addText(harm.desc, {
      x: x + 0.15, y: hStartY + 1.1, w: hW - 0.3, h: 0.4,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary, margin: 0
    });
  });

  // Recognition signals section
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 4.0, w: 0.08, h: 0.5,
    fill: { color: theme.primary }
  });
  slide.addText("识别信号", {
    x: 0.7, y: 4.0, w: 2, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "left", valign: "middle"
  });

  // Signal tags
  const signals = [
    "一致同意的错觉",
    "无人质疑的沉默",
    "合理化糟糕决策",
    "从众压力"
  ];

  let sigX = 0.5;
  signals.forEach((sig) => {
    const sigW = sig.length * 0.22 + 0.4;
    slide.addShape(pres.ShapeType.rect, {
      x: sigX, y: 4.6, w: sigW, h: 0.45,
      fill: { color: theme.secondary, transparency: 80 },
      line: { color: theme.secondary, width: 1 }
    });
    slide.addText(sig, {
      x: sigX, y: 4.6, w: sigW, h: 0.45,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary,
      align: "center", valign: "middle"
    });
    sigX += sigW + 0.15;
  });

  // Bottom tip
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 5.3, w: 9, h: 0.8,
    fill: { color: theme.light }
  });
  slide.addText("催化师职责：鼓励开放讨论，尊重不同意见，营造安全的表达环境", {
    x: 0.5, y: 5.3, w: 9, h: 0.8,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
