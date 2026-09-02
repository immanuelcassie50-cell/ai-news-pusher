function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("三条给个人IP的提醒", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 32, color: theme.primary,
    bold: true, align: "center"
  });

  // Three cards
  const cardY = 1.4;
  const cardH = 3.2;
  const cardW = 2.8;
  const gap = 0.3;
  const startX = (10 - 3 * cardW - 2 * gap) / 2;

  const reminders = [
    { num: "1", text: "可以推荐但不要默认别人应该支持" },
    { num: "2", text: "可以讲关系讲交情但不要把关系变成义务" },
    { num: "3", text: "可以做商业转化但不要借公益地域群体身份加码" }
  ];

  reminders.forEach((item, i) => {
    const cardX = startX + i * (cardW + gap);

    // Card background
    slide.addShape(pres.ShapeType.roundRect, {
      x: cardX, y: cardY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: cardX + cardW / 2 - 0.35, y: cardY + 0.3, w: 0.7, h: 0.7,
      fill: { color: theme.accent }
    });

    slide.addText(item.num, {
      x: cardX + cardW / 2 - 0.35, y: cardY + 0.35, w: 0.7, h: 0.6,
      fontFace: "Arial", fontSize: 24, color: "FFFFFF",
      bold: true, align: "center", valign: "middle"
    });

    // Reminder text
    slide.addText(item.text, {
      x: cardX + 0.2, y: cardY + 1.3, w: cardW - 0.4, h: 1.6,
      fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary,
      align: "center", valign: "top"
    });
  });

  // Bottom accent line
  slide.addShape(pres.ShapeType.rect, {
    x: 3.5, y: 4.9, w: 3, h: 0.05,
    fill: { color: theme.accent }
  });

  return slide;
}
module.exports = { createSlide };
