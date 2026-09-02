const pptxgen = require("pptxgenjs");

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // Page badge
  slide.addText("17", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.25,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: false,
    align: "center"
  });

  // Title
  slide.addText("练习模板：AI重构地图", {
    x: 0.5, y: 0.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Template quadrants
  const quadW = 4.3;
  const quadH = 1.9;
  const quads = [
    {
      title: "目标场景",
      content: "我要解决什么问题？",
      x: 0.5, y: 1.0
    },
    {
      title: "当前状态",
      content: "现状是怎样的？（痛点）",
      x: 5.0, y: 1.0
    },
    {
      title: "目标状态",
      content: "希望达到什么效果？（指标）",
      x: 0.5, y: 3.1
    },
    {
      title: "行动路径",
      content: "用哪些AI工具？分几步？",
      x: 5.0, y: 3.1
    }
  ];

  quads.forEach((q) => {
    slide.addShape(pres.ShapeType.roundRect, {
      x: q.x, y: q.y, w: quadW, h: quadH,
      fill: { color: theme.bg },
      line: { color: theme.primary, width: 1.5, dashType: "dash" },
      rectRadius: 0.1
    });

    // Title bar
    slide.addShape(pres.ShapeType.rect, {
      x: q.x, y: q.y, w: quadW, h: 0.5,
      fill: { color: theme.primary }
    });
    slide.addText(q.title, {
      x: q.x + 0.15, y: q.y + 0.1, w: quadW - 0.3, h: 0.3,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.bg, bold: true
    });

    // Placeholder content
    slide.addText(q.content, {
      x: q.x + 0.15, y: q.y + 0.7, w: quadW - 0.3, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: false
    });
  });

  // Bottom tip
  slide.addText("提示：在下方写出你的具体内容", {
    x: 0.5, y: 5.15, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: false,
    align: "center"
  });

  return slide;
}

module.exports = { createSlide };
