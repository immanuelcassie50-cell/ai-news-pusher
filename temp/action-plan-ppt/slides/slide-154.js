// slide-154.js - 修订1：一对一
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "case-comparison", index: 154, title: "修订1 一对一" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("REVISION 01 / 04", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("修订 1：每周一对一辅导", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.45, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 左栏 - 原
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 3.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.8, w: 4.4, h: 0.45,
    fill: { color: theme.inkMute }, line: { color: theme.inkMute }
  });
  slide.addText("原  计划", {
    x: 0.7, y: 1.83, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("每周一对一辅导", {
    x: 0.7, y: 2.35, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  slide.addText("（4 个直属下属，每人 30 分钟）", {
    x: 0.7, y: 2.75, w: 4, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute
  });

  // 诊断
  slide.addText("诊断：", {
    x: 0.7, y: 3.2, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const issues1 = [
    "A 低：需协调时间、想议题",
    "P 弱：无固定触发器",
    "实际负荷：每周 2 小时"
  ];
  issues1.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 0.8, y: 3.55 + i * 0.3, w: 0.08, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent }
    });
    slide.addText(t, {
      x: 0.95, y: 3.5 + i * 0.3, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 右栏 - 改后
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 3.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 5.1, y: 1.8, w: 4.4, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("改  后", {
    x: 5.3, y: 1.83, w: 4, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("固定时间 + 模板化议题", {
    x: 5.3, y: 2.35, w: 4, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 改后要点
  slide.addText("改后要点：", {
    x: 5.3, y: 2.8, w: 4, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const fixed1 = [
    "每周二、四 16:00 各 2 个（日历锁定）",
    "固定议题：进展 / 挑战 / 支持",
    "对方前一天发送主要挑战（预设化）"
  ];
  fixed1.forEach((t, i) => {
    slide.addShape("ellipse", {
      x: 5.4, y: 3.18 + i * 0.4, w: 0.08, h: 0.08,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(t, {
      x: 5.55, y: 3.13 + i * 0.4, w: 3.8, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("日历锁定 + 模板化 = 默认化与预设化的组合", {
    x: 0.5, y: 5.0, w: 9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
