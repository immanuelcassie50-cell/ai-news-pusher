// slide-164.js - 两种思维对比
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "two-col-comparison", index: 164, title: "两种思维对比" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("OLD VS NEW / MINDSET", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("两种思维方式的对比", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 左栏 - 旧
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 3.25,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 0.5,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("旧思维 / 人的问题", {
    x: 0.7, y: 1.85, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("「为什么没执行？」", {
    x: 0.7, y: 2.45, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, italic: true
  });

  const oldItems = [
    { label: "归因", text: "意志力不够、不够在乎、态度问题" },
    { label: "方向", text: "找「人」哪里出了问题" },
    { label: "干预", text: "再强调重要性、加强问责" },
    { label: "假设", text: "「只要足够想做，就会做」" }
  ];
  oldItems.forEach((it, i) => {
    const y = 3.0 + i * 0.5;
    slide.addText(it.label, {
      x: 0.7, y: y, w: 0.7, h: 0.32,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(it.text, {
      x: 1.45, y: y, w: 3.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 右栏 - 新
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 3.25,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("新思维 / 设计的问题", {
    x: 5.3, y: 1.85, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("「计划哪里没设计好？」", {
    x: 5.3, y: 2.45, w: 4, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, italic: true
  });

  const newItems = [
    { label: "归因", text: "清晰度 / 摩擦 / 触发器的缺失" },
    { label: "方向", text: "找「设计」哪里可以改进" },
    { label: "干预", text: "用工具重新设计任务描述" },
    { label: "假设", text: "B=MAP，三条件缺一不可" }
  ];
  newItems.forEach((it, i) => {
    const y = 3.0 + i * 0.5;
    slide.addText(it.label, {
      x: 5.3, y: y, w: 0.7, h: 0.32,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(it.text, {
      x: 6.05, y: y, w: 3.3, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.2, w: 9, h: 0.32,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("不只是方法上的转变——是思维框架上的转变。", {
    x: 0.5, y: 5.2, w: 9, h: 0.32,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
