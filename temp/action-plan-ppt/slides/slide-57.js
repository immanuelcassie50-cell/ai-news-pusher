// slide-57.js - 流行迷思：态度问题 vs 设计问题
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "contrast", index: 57, title: "流行迷思" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标题
  slide.addText("先破一个很流行的迷思", {
    x: 0.5, y: 0.25, w: 9, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("计划没执行，问题的根源到底是什么？", {
    x: 0.5, y: 0.75, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 左栏 - 错误归因
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 3.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.4, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("流行迷思", {
    x: 0.7, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("态度问题", {
    x: 0.7, y: 2.0, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  slide.addText("「意识不够」「态度有问题」", {
    x: 0.7, y: 2.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, italic: true
  });

  slide.addText("解决方案：", {
    x: 0.7, y: 3.0, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const myths = [
    "再强调一次这件事有多重要",
    "加强问责和监督",
    "提升思想认识"
  ];
  myths.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 0.8, y: 3.4 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.inkMute }, line: { color: theme.inkMute }
    });
    slide.addText(t, {
      x: 1.0, y: 3.35 + i * 0.4, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 右栏 - 正确视角
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 3.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.4, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("B=MAP 视角", {
    x: 5.3, y: 1.45, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("设计问题", {
    x: 5.3, y: 2.0, w: 4, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("「行为设计没到位」", {
    x: 5.3, y: 2.55, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  slide.addText("诊断方向：", {
    x: 5.3, y: 3.0, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  const truths = [
    "M：动机有没有真正建立？",
    "A：这一刻做起来难不难？",
    "P：有什么在合适的时机触发？"
  ];
  truths.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 5.4, y: 3.4 + i * 0.4, w: 0.1, h: 0.1,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(t, {
      x: 5.6, y: 3.35 + i * 0.4, w: 3.7, h: 0.3,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("迷思的盲点：它假设「人只要足够想做，就会做」", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
