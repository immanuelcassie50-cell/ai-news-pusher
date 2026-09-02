// slide-27.js - 选择题
function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Top accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.accent }
  });

  // Title
  slide.addText("为什么高收入者说79元不贵容易引发反感？", {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 24,
    fontFace: "Microsoft YaHei",
    color: theme.primary,
    bold: true
  });

  // Options
  const options = [
    { letter: "A", text: "因为79元一定很贵" },
    { letter: "B", text: "因为公众反对所有高价商品" },
    { letter: "C", text: "因为站在自己的收入结构里否认了别人不同收入结构下的真实感受" },
    { letter: "D", text: "因为网民天生仇富" }
  ];

  let yPos = 1.2;
  options.forEach((opt, index) => {
    // Option card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: yPos, w: 9, h: 0.7,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08
    });

    // Letter circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.7, y: yPos + 0.15, w: 0.4, h: 0.4,
      fill: { color: opt.letter === "C" ? theme.accent : theme.secondary }
    });

    slide.addText(opt.letter, {
      x: 0.7, y: yPos + 0.15, w: 0.4, h: 0.4,
      fontSize: 14,
      fontFace: "Arial",
      color: "FFFFFF",
      bold: true,
      align: "center",
      valign: "middle"
    });

    slide.addText(opt.text, {
      x: 1.3, y: yPos + 0.1, w: 7.9, h: 0.5,
      fontSize: 14,
      fontFace: "Microsoft YaHei",
      color: theme.primary,
      valign: "middle"
    });

    yPos += 0.85;
  });

  // Answer highlight
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.55, w: 9, h: 0.45,
    fill: { color: theme.accent },
    rectRadius: 0.05
  });

  slide.addText("答案：C  |  底层规则：你可以不认同对方的结论，但不能否认对方的现实", {
    x: 0.7, y: 4.55, w: 8.6, h: 0.45,
    fontSize: 14,
    fontFace: "Microsoft YaHei",
    color: "FFFFFF",
    bold: true,
    valign: "middle"
  });

  return slide;
}

module.exports = { createSlide };
