// slide-09.js - 放大的问题
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "compare", index: 9, title: "放大的问题" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 标签
  slide.addText("SCALING UP", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 顶部问题
  slide.addText("放大的问题", {
    x: 0.5, y: 0.6, w: 9, h: 0.5,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 中心金句
  slide.addShape("rect", {
    x: 0.5, y: 1.25, w: 9, h: 0.85,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.25, w: 0.08, h: 0.85,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("如果连自己想做的事都难坚持——\n怎么期望团队执行计划？", {
    x: 0.8, y: 1.3, w: 8.5, h: 0.75,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, lineSpacing: 26
  });

  // 对比双栏
  // 左侧 - 个人
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 4.3, h: 2.6,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addText("SELF", {
    x: 0.7, y: 2.55, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 4, bold: true
  });
  slide.addText("个人层面", {
    x: 0.7, y: 2.85, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addShape("rect", {
    x: 0.7, y: 3.3, w: 0.3, h: 0.03,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("自己想做的事\n都这么容易被打断和遗忘", {
    x: 0.7, y: 3.45, w: 4, h: 0.7,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft, lineSpacing: 18
  });
  slide.addText("→ 几乎所有人都有这种经历", {
    x: 0.7, y: 4.3, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 中间箭头
  slide.addText("→", {
    x: 4.85, y: 3.4, w: 0.3, h: 0.5,
    fontSize: 32, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center"
  });

  // 右侧 - 团队
  slide.addShape("rect", {
    x: 5.2, y: 2.4, w: 4.3, h: 2.6,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("TEAM", {
    x: 5.4, y: 2.55, w: 2, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.redLight, charSpacing: 4, bold: true
  });
  slide.addText("团队层面", {
    x: 5.4, y: 2.85, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addShape("rect", {
    x: 5.4, y: 3.3, w: 0.3, h: 0.03,
    fill: { color: theme.goldAccent }, line: { color: theme.goldAccent }
  });
  slide.addText("团队里的每一个人\n在日复一日的忙碌中\n可靠地执行一份计划", {
    x: 5.4, y: 3.45, w: 4, h: 0.8,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.redLight, lineSpacing: 18
  });
  slide.addText("→ 这件事，我们真的期望得合理吗？", {
    x: 5.4, y: 4.3, w: 4, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF", italic: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
