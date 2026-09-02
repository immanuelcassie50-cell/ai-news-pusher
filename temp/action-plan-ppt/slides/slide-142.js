// slide-142.js - 现实预期 70-80%
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "number-callout", index: 142, title: "现实预期" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("REALISTIC EXPECTATION", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("一个关于「多少任务需要重新设计」的现实预期", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 左侧大数字区
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 4.3, h: 3.5,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.55, w: 4.3, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("需要调整的任务占比", {
    x: 0.7, y: 1.75, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 巨型数字
  slide.addText("70", {
    x: 0.7, y: 2.05, w: 1.8, h: 1.4,
    fontSize: 120, fontFace: "Arial",
    color: theme.primary, bold: true
  });
  slide.addText("-80%", {
    x: 2.3, y: 2.7, w: 2, h: 1,
    fontSize: 44, fontFace: "Arial",
    color: theme.accent, bold: true
  });

  slide.addText("大多数行动计划中需要调整的任务", {
    x: 0.7, y: 3.7, w: 3.9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("只有 20%–30% 的任务可以基本不动。", {
    x: 0.7, y: 4.05, w: 3.9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  slide.addText("它们已经足够具体、触发器可靠、难度适中。", {
    x: 0.7, y: 4.35, w: 3.9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 右侧说明
  slide.addText("不要期待只调整三五条就结束", {
    x: 5.1, y: 1.75, w: 4.4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("从增加执行意图这样的小改动，到彻底重写一条任务这样的大改动——都有。", {
    x: 5.1, y: 2.2, w: 4.4, h: 0.7,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });

  // 提示
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 4.4, h: 1.95,
    fill: { color: theme.paperWarm }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 3.1, w: 0.06, h: 1.95,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });

  slide.addText("不要沮丧——", {
    x: 5.3, y: 3.2, w: 4.1, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("这恰恰说明：", {
    x: 5.3, y: 3.55, w: 4.1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  slide.addText("你开始用「真实状态下的执行者」的视角，看待自己的计划了。", {
    x: 5.3, y: 3.9, w: 4.1, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, lineSpacing: 18
  });

  slide.addText("这是行为设计真正的开始。", {
    x: 5.3, y: 4.65, w: 4.1, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
