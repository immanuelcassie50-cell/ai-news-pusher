// slide-141.js - 这一部分要做什么
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "content-text", index: 141, title: "这一部分要做什么" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("PART 04 / OPENING", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("这一部分要做什么", {
    x: 0.5, y: 0.6, w: 9, h: 0.6,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("综合实践：把整份计划系统地过一遍", {
    x: 0.5, y: 1.15, w: 9, h: 0.35,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.6, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 已建立的内容
  slide.addText("前面三部分，你已经：", {
    x: 0.5, y: 1.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  const built = [
    { num: "01", text: "建立了识别高风险任务的三条标准（清晰度 / 摩擦力 / 稳健性）" },
    { num: "02", text: "掌握了诊断行为弱点的 B=MAP 框架" },
    { num: "03", text: "学习了四个行为设计工具（最小启动 / 锚定 / 降摩擦 / 执行意图）" },
    { num: "04", text: "完成了 3 个任务的初步重新设计" }
  ];

  built.forEach((b, i) => {
    const y = 2.2 + i * 0.42;
    slide.addText(b.num, {
      x: 0.7, y: y, w: 0.5, h: 0.32,
      fontSize: 13, fontFace: "Arial",
      color: theme.primary, bold: true
    });
    slide.addText(b.text, {
      x: 1.2, y: y, w: 7.8, h: 0.32,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部强调框
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 9, h: 0.95,
    fill: { color: theme.paperWarm }, line: { color: theme.accent, width: 0 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 4.25, w: 0.08, h: 0.95,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("第四部分的任务", {
    x: 0.75, y: 4.32, w: 8.7, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("完成一份经过行为设计审视的修订版行动计划——真实可用、能落地。", {
    x: 0.75, y: 4.65, w: 8.7, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
