const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("16", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("练习：绘制你的AI重构地图", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Exercise steps
  const steps = [
    { num: "1", title: "选择TOP1", desc: "从你的待办中选出最重要的一件事" },
    { num: "2", title: "填写四要素", desc: "目标场景/当前状态/目标状态/行动路径" },
    { num: "3", title: "分解4周", desc: "把行动路径分解为4周的具体任务" }
  ];

  steps.forEach((step, i) => {
    const y = 1.3 + i * 1.3;

    // Step number
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 0.7, h: 0.7,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(step.num, {
      x: 0.5, y: y + 0.1, w: 0.7, h: 0.5,
      fontSize: 22, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Step title
    slide.addText(step.title, {
      x: 1.4, y: y, w: 3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Step description
    slide.addText(step.desc, {
      x: 1.4, y: y + 0.4, w: 7.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });
  });

  // Time indicator
  slide.addShape(pres.ShapeType.roundRect, {
    x: 0.5, y: 4.8, w: 9, h: 0.5,
    fill: { color: theme.light, transparency: 50 },
    rectRadius: 0.08
  });
  slide.addText("预计用时：10分钟", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
