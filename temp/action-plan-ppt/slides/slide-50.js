// slide-50.js - 模式四：找时间
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "pattern", index: 50, title: "模式四：找时间" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部小标签
  slide.addText("PATTERN 04", {
    x: 0.5, y: 0.3, w: 3, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, charSpacing: 4, bold: true
  });

  // 大数字
  slide.addText("04", {
    x: 8.0, y: 0.3, w: 1.5, h: 1.0,
    fontSize: 56, fontFace: "Arial",
    color: theme.redLight, bold: true, align: "right"
  });

  // 主标题
  slide.addText("模式四：\"找时间\"型", {
    x: 0.5, y: 0.6, w: 7, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 标题装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.2, w: 0.5, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("时间不会自己找来", {
    x: 0.5, y: 1.3, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 大金句卡片
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 9, h: 1.3,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.85, w: 0.12, h: 1.3,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  slide.addText("没有固定时间段预留给这件事，", {
    x: 0.8, y: 2.05, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("它就会永远在\"找时间\"的状态里。", {
    x: 0.8, y: 2.45, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("→ 忙起来之后，这是最先被放弃的任务类型", {
    x: 0.8, y: 2.85, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 时间轴对比
  slide.addText("\"找时间\"的真相", {
    x: 0.5, y: 3.35, w: 9, h: 0.35,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 时间线
  const tlY = 4.5;
  slide.addShape("rect", {
    x: 0.7, y: tlY, w: 8.6, h: 0.06,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });

  // 三个时间点
  const points = [
    { x: 1.5, label: "周一", text: "等有时间" },
    { x: 5.0, label: "周三", text: "还没找到" },
    { x: 8.5, label: "周五", text: "放弃了" }
  ];

  points.forEach((p, i) => {
    slide.addShape("ellipse", {
      x: p.x - 0.1, y: tlY - 0.07, w: 0.2, h: 0.2,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p.label, {
      x: p.x - 0.4, y: tlY - 0.55, w: 0.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
    slide.addText(p.text, {
      x: p.x - 0.6, y: tlY + 0.2, w: 1.2, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, align: "center", italic: true
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.15, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("不是\"找时间\"——是\"留时间\"。", {
    x: 0.5, y: 5.2, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", align: "center", bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
