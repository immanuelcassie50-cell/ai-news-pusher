function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Title
  slide.addText("摆拍感公式", {
    x: 0.5, y: 0.35, w: 9, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 28, color: theme.primary,
    bold: true, align: "center"
  });

  // Definition
  slide.addText("定义：不是事实层面，是体验层面", {
    x: 0.5, y: 1.0, w: 9, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 14, color: theme.secondary,
    align: "center"
  });

  // Formula box - main highlight
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.6, y: 1.5, w: 8.8, h: 1.8,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });

  slide.addText("摆拍感 =", {
    x: 0.8, y: 1.65, w: 2, h: 0.7,
    fontFace: "Microsoft YaHei", fontSize: 26, color: "FFFFFF",
    align: "right", valign: "middle"
  });

  // Formula components
  const formulaY = 2.0;
  const compW = 2.6;
  const compH = 1.1;
  const startX = 2.9;

  const components = [
    "强烈传播意图",
    "日常场景刻意选择",
    "呈现方式与叙事目标不匹配"
  ];

  components.forEach((comp, i) => {
    const compX = startX + i * (compW + 0.15);

    slide.addShape(pres.ShapeType.roundRect, {
      x: compX, y: formulaY, w: compW, h: compH,
      fill: { color: theme.accent },
      rectRadius: 0.08
    });

    slide.addText(comp, {
      x: compX + 0.1, y: formulaY + 0.15, w: compW - 0.2, h: compH - 0.3,
      fontFace: "Microsoft YaHei", fontSize: 14, color: "FFFFFF",
      align: "center", valign: "middle"
    });

    if (i < 2) {
      slide.addText("+", {
        x: compX + compW, y: formulaY + 0.2, w: 0.3, h: 0.7,
        fontFace: "Arial", fontSize: 24, color: "FFFFFF",
        align: "center", valign: "middle"
      });
    }
  });

  // Explanation box
  slide.addShape(pres.ShapeType.roundRect, {
    x: 1.5, y: 3.6, w: 7, h: 0.9,
    fill: { color: "FFFFFF" },
    line: { color: theme.light, width: 1 },
    rectRadius: 0.08
  });

  slide.addText("想讲日常却用过度专业化拍摄阵仗", {
    x: 1.7, y: 3.75, w: 6.6, h: 0.6,
    fontFace: "Microsoft YaHei", fontSize: 18, color: theme.secondary,
    align: "center", valign: "middle"
  });

  // Visual contrast
  slide.addText("日常化场景 ≠ 真实", {
    x: 0.6, y: 4.7, w: 4.2, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.primary,
    align: "center"
  });

  slide.addText("专业拍摄阵仗 + 日常内容 = 摆拍感", {
    x: 5.2, y: 4.7, w: 4.2, h: 0.5,
    fontFace: "Microsoft YaHei", fontSize: 16, color: theme.accent,
    align: "center"
  });

  return slide;
}
module.exports = { createSlide };
