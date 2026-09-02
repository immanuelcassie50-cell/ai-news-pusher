// slide-94.js - 大脑的评估
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "concept", index: 94, title: "大脑的评估" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具一 · 最小启动动作", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("大脑在评估什么", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 左侧文字
  slide.addText("你的大脑在决定\"要不要做这件事\"时，", {
    x: 0.5, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("评估的不是整件事有多麻烦", {
    x: 0.5, y: 1.6, w: 4.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("而是", {
    x: 0.5, y: 2.1, w: 4.5, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("\"开始的那一步有多麻烦\"", {
    x: 0.5, y: 2.5, w: 4.5, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 0.4, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("如果开始的那一步是轻松的，大脑不太容易拒绝。", {
    x: 0.5, y: 3.3, w: 4.5, h: 0.7,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("→ 一旦你做了第一步，", {
    x: 0.5, y: 4.1, w: 4.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });
  slide.addText("很多时候会自然地继续", {
    x: 0.5, y: 4.4, w: 4.5, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 右侧图示
  // 大脑圆圈
  slide.addShape("ellipse", {
    x: 5.5, y: 1.4, w: 4, h: 1.2,
    fill: { color: theme.redLight }, line: { color: theme.redLight }
  });
  slide.addText("大脑评估系统", {
    x: 5.5, y: 1.5, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.redDeep, bold: true, align: "center"
  });
  slide.addText("\"现在要做的那一步难不难？\"", {
    x: 5.5, y: 1.95, w: 4, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.redDeep, italic: true, align: "center"
  });

  // 箭头
  slide.addShape("downArrow", {
    x: 7.3, y: 2.7, w: 0.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 两个结果
  slide.addShape("rect", {
    x: 5.5, y: 3.3, w: 1.9, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.primary, width: 1 }
  });
  slide.addText("开始那一步", {
    x: 5.5, y: 3.4, w: 1.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("轻松", {
    x: 5.5, y: 3.7, w: 1.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });
  slide.addText("→ 启动", {
    x: 5.5, y: 4.2, w: 1.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  slide.addShape("rect", {
    x: 7.6, y: 3.3, w: 1.9, h: 1.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addText("开始那一步", {
    x: 7.6, y: 3.4, w: 1.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, align: "center"
  });
  slide.addText("麻烦", {
    x: 7.6, y: 3.7, w: 1.9, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true, align: "center"
  });
  slide.addText("→ 拖延", {
    x: 7.6, y: 4.2, w: 1.9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkMute, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
