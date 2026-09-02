// slide-62.js - 模型的颠覆性：大多数计划只处理了M
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "insight", index: 62, title: "模型的颠覆性" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("这个模型真正颠覆性的地方", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("大多数行动计划只处理了一个要素 —— 动机", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左侧 - 现实
  slide.addShape("rect", {
    x: 0.5, y: 1.3, w: 4.4, h: 3.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("大多数计划的做法", {
    x: 0.7, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 大M
  slide.addText("M", {
    x: 0.7, y: 1.85, w: 1.5, h: 1.5,
    fontSize: 110, fontFace: "Arial",
    color: theme.inkMute, bold: true, align: "center"
  });

  // 暗色A和P
  slide.addText("A", {
    x: 2.6, y: 2.1, w: 1.1, h: 1.0,
    fontSize: 60, fontFace: "Arial",
    color: theme.paperLine, bold: true, align: "center"
  });
  slide.addText("P", {
    x: 3.6, y: 2.1, w: 1.1, h: 1.0,
    fontSize: 60, fontFace: "Arial",
    color: theme.paperLine, bold: true, align: "center"
  });

  slide.addShape("rect", {
    x: 0.7, y: 3.5, w: 0.4, h: 0.03,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  slide.addText("只告诉大家这件事为什么重要", {
    x: 0.7, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("争取到大家的认可和支持", {
    x: 0.7, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("A 和 P 没有被设计", {
    x: 0.7, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });
  slide.addText("→ 行为仍然很难可靠发生", {
    x: 0.7, y: 4.5, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 右侧 - 真相
  slide.addShape("rect", {
    x: 5.1, y: 1.3, w: 4.4, h: 3.6,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("B=MAP 的真相", {
    x: 5.3, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 三个全亮
  slide.addText("M", {
    x: 5.3, y: 1.9, w: 1.3, h: 1.4,
    fontSize: 100, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("A", {
    x: 6.6, y: 1.9, w: 1.3, h: 1.4,
    fontSize: 100, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("P", {
    x: 7.9, y: 1.9, w: 1.3, h: 1.4,
    fontSize: 100, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  slide.addShape("rect", {
    x: 5.3, y: 3.5, w: 0.4, h: 0.03,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("动机是必要条件", {
    x: 5.3, y: 3.6, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("但 不是 充分条件", {
    x: 5.3, y: 3.9, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("需要 A 和 P 一起配合", {
    x: 5.3, y: 4.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("→ 行为才能可靠发生", {
    x: 5.3, y: 4.5, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("只解决 M 的计划，相当于给一辆没油的车反复强调目的地", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
