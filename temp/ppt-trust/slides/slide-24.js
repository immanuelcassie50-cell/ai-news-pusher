function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("雷军金句+提醒", {
    x: 0.5, y: 0.3, w: 9, h: 0.55,
    fontFace: "Microsoft YaHei", fontSize: 26, color: theme.primary,
    bold: true, align: "center"
  });

  // Main quote box - centered large
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 0.95, w: 8.8, h: 1.5,
    fill: { color: theme.accent },
    rectRadius: 0.1
  });

  slide.addText("金句", {
    x: 0.8, y: 1.05, w: 8.4, h: 0.3,
    fontFace: "Microsoft YaHei", fontSize: 12, color: "FFFFFF",
    align: "left"
  });

  slide.addText("真诚不是不做传播，而是不能让传播机制比行为本身更抢戏", {
    x: 0.8, y: 1.35, w: 8.4, h: 0.95,
    fontFace: "Microsoft YaHei", fontSize: 22, color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  // Four reminders section
  slide.addText("四条提醒", {
    x: 0.6, y: 2.65, w: 8.8, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.secondary,
    align: "center"
  });

  // 2x2 grid of reminders
  const reminders = [
    "用真实行动生成内容，不为内容设计真实行动",
    "少做身份反差过大的接地气表演",
    "日常化场景不等于真实",
    "不要高频宣布我却很真实"
  ];

  const gridStartX = 0.6;
  const gridStartY = 3.1;
  const cardW = 4.3;
  const cardH = 1.05;
  const gapX = 0.4;
  const gapY = 0.2;

  reminders.forEach((text, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const cardX = gridStartX + col * (cardW + gapX);
    const cardY = gridStartY + row * (cardH + gapY);

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08
    });

    // Number badge
    slide.addShape(pres.ShapeType.ellipse, {
      x: cardX + 0.15, y: cardY + 0.25, w: 0.5, h: 0.5,
      fill: { color: theme.primary }
    });

    slide.addText(String(i + 1), {
      x: cardX + 0.15, y: cardY + 0.28, w: 0.5, h: 0.45,
      fontFace: "Arial", fontSize: 16, color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });

    // Reminder text
    slide.addText(text, {
      x: cardX + 0.75, y: cardY + 0.15, w: cardW - 0.95, h: cardH - 0.3,
      fontFace: "Microsoft YaHei", fontSize: 14, color: theme.primary,
      align: "left", valign: "middle"
    });
  });

  return slide;
}
module.exports = { createSlide };
