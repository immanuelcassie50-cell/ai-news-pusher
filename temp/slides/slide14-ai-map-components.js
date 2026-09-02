const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("14", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("AI重构地图的四大要素", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Four elements
  const elements = [
    { num: "01", title: "目标场景", desc: "你要解决什么问题？达成什么效果？" },
    { num: "02", title: "当前状态", desc: "现状是怎样的？卡点在哪里？" },
    { num: "03", title: "目标状态", desc: "想要达到什么样子？具体指标？" },
    { num: "04", title: "行动路径", desc: "用什么AI工具？分哪几步？" }
  ];

  elements.forEach((el, i) => {
    const y = 1.2 + i * 1.05;

    // Number badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.5, y: y, w: 0.8, h: 0.8,
      fill: { color: theme.primary },
      rectRadius: 0.08
    });
    slide.addText(el.num, {
      x: 0.5, y: y + 0.15, w: 0.8, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: theme.bg, bold: true,
      align: "center"
    });

    // Title
    slide.addText(el.title, {
      x: 1.5, y: y, w: 3, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    // Description
    slide.addText(el.desc, {
      x: 1.5, y: y + 0.4, w: 7.5, h: 0.4,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: false
    });

    // Separator line
    if (i < 3) {
      slide.addShape(pres.ShapeType.line, {
        x: 0.5, y: y + 0.95, w: 9, h: 0,
        line: { color: theme.light, width: 0.5 }
      });
    }
  });

  return slide;
}

module.exports = { createSlide };
