const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 0.15,
    fill: { color: theme.accent }
  });

  // Warning diagonal stripe on left
  slide.addShape(pres.ShapeType.rect, {
    x: 0, y: 0.15, w: 0.12, h: 7.5,
    fill: { color: theme.accent }
  });

  // Title area with warning icon
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 0.4, w: 9, h: 1.0,
    fill: { color: theme.primary },
    shadow: { type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.15 }
  });

  slide.addText("!", {
    x: 0.7, y: 0.5, w: 0.8, h: 0.8,
    fontSize: 44, fontFace: "Arial",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  slide.addText("边界模糊的信号", {
    x: 1.5, y: 0.4, w: 7.5, h: 1.0,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "ffffff", bold: true,
    align: "left", valign: "middle"
  });

  // Subtitle
  slide.addText("角色边界被侵蚀的四个预警信号", {
    x: 0.5, y: 1.55, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "left"
  });

  // Warning signals - 2x2 grid
  const signals = [
    { num: "1", text: "被邀请参加决策会议" },
    { num: "2", text: "被要求提供专业建议" },
    { num: "3", text: "客户私下征求意见" },
    { num: "4", text: "开始主导讨论方向" }
  ];

  const cardW = 4.2;
  const cardH = 2.0;
  const startX = 0.5;
  const startY = 2.2;
  const gapX = 4.4;
  const gapY = 2.2;

  signals.forEach((sig, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = startX + col * gapX;
    const y = startY + row * gapY;

    // Card background
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: theme.light },
      line: { color: theme.secondary, width: 0.5 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });

    // Red left accent
    slide.addShape(pres.ShapeType.rect, {
      x: x, y: y, w: 0.08, h: cardH,
      fill: { color: theme.accent }
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fill: { color: theme.accent }
    });

    slide.addText(sig.num, {
      x: x + 0.25, y: y + 0.25, w: 0.55, h: 0.55,
      fontSize: 20, fontFace: "Arial",
      color: "ffffff", bold: true,
      align: "center", valign: "middle"
    });

    // Signal text
    slide.addText(sig.text, {
      x: x + 0.9, y: y + 0.25, w: cardW - 1.1, h: 0.55,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "left", valign: "middle"
    });

    // Warning indicator bar
    slide.addShape(pres.ShapeType.rect, {
      x: x + 0.25, y: y + 1.0, w: cardW - 0.5, h: 0.08,
      fill: { color: theme.accent, transparency: 40 }
    });

    // Checkmark area
    slide.addText("⚠", {
      x: x + cardW - 0.6, y: y + cardH - 0.7, w: 0.5, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.accent,
      align: "center", valign: "middle"
    });
  });

  // Bottom emphasis text
  slide.addShape(pres.ShapeType.rect, {
    x: 0.5, y: 6.7, w: 9, h: 0.6,
    fill: { color: theme.primary, transparency: 90 },
    line: { color: theme.accent, width: 1.5 }
  });

  slide.addText("识别这些信号，及时调整角色定位，保持催化师的中立性", {
    x: 0.5, y: 6.7, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary,
    align: "center", valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
