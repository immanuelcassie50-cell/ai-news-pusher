// slide-120.js - 策略二：预设化
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "strategy", index: 120, title: "策略二：预设化" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("工具三 · 降低摩擦", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 三个策略导航
  const strategies = [
    { num: "1", title: "默认化", active: false },
    { num: "2", title: "预设化", active: true },
    { num: "3", title: "简化化", active: false }
  ];

  strategies.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 0.55, w: 2.9, h: 0.55,
      fill: { color: s.active ? theme.primary : theme.paper }, line: { color: s.active ? theme.primary : theme.paperLine, width: 1 }
    });
    slide.addShape("ellipse", {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fill: { color: s.active ? "FFFFFF" : theme.inkMute }, line: { color: s.active ? "FFFFFF" : theme.inkMute }
    });
    slide.addText(s.num, {
      x: x + 0.15, y: 0.65, w: 0.35, h: 0.35,
      fontSize: 13, fontFace: "Arial",
      color: s.active ? theme.primary : "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.title, {
      x: x + 0.6, y: 0.65, w: 2.2, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: s.active ? "FFFFFF" : theme.ink, bold: true, valign: "middle"
    });
  });

  // 大标题
  slide.addText("策略二 · 预设化", {
    x: 0.5, y: 1.3, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("在执行前，把启动所需的准备工作预先完成", {
    x: 0.5, y: 1.85, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 核心解释
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 9, h: 1.0,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 2.4, w: 0.15, h: 1.0,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("预设化 = 把\"执行前需要的准备\"提前做完", {
    x: 0.9, y: 2.5, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });
  slide.addText("执行的那个时刻，不需要做任何准备工作，直接进入", {
    x: 0.9, y: 2.9, w: 8.5, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 例子
  slide.addShape("rect", {
    x: 0.5, y: 3.6, w: 9, h: 1.15,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("举例", {
    x: 0.7, y: 3.7, w: 1, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("每周五提前把下周一一对一的议题框架发给对方 →", {
    x: 0.7, y: 4.0, w: 5.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.ink
  });
  slide.addText("周一开会时不需要现场想\"谈什么\"", {
    x: 0.7, y: 4.3, w: 5.5, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  // 时间线对比
  slide.addText("执行时", {
    x: 6.5, y: 3.7, w: 1.5, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });
  slide.addText("→ 直接开始", {
    x: 6.5, y: 4.0, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("无现场准备", {
    x: 6.5, y: 4.3, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 底部
  slide.addText("预设的本质：把执行时刻的\"决定\"挪到上一个时间窗口", {
    x: 0.5, y: 4.95, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, align: "center"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
