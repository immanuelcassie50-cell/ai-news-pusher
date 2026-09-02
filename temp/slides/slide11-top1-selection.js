const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("11", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("TOP1选择的思考过程", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Steps
  const steps = [
    { num: "1", title: "列出", desc: "把所有想做的事列出来" },
    { num: "2", title: "筛选", desc: "用三个标准过滤" },
    { num: "3", title: "定位", desc: "找到在矩阵中的位置" },
    { num: "4", title: "问自己", desc: "这是我现在真正该做的吗？" }
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 2.4;

    // Step card
    slide.addShape(pres.ShapeType.roundRect, {
      x: x, y: 1.4, w: 2.2, h: 2.8,
      fill: { color: theme.bg },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });

    // Number circle
    slide.addShape(pres.ShapeType.ellipse, {
      x: x + 0.75, y: 1.7, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + 0.75, y: 1.8, w: 0.7, h: 0.5,
      fontSize: 20, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Title
    slide.addText(step.title, {
      x: x + 0.1, y: 2.6, w: 2.0, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(step.desc, {
      x: x + 0.1, y: 3.2, w: 2.0, h: 0.8,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false,
      align: "center"
    });

    // Arrow between steps
    if (i < 3) {
      slide.addText("→", {
        x: x + 2.1, y: 2.5, w: 0.4, h: 0.5,
        fontSize: 20, fontFace: "Arial",
        color: theme.accent, bold: false,
        align: "center"
      });
    }
  });

  // Bottom reminder
  slide.addText("最终只选一个：那个最重要、最该现在做的", {
    x: 0.5, y: 4.8, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
