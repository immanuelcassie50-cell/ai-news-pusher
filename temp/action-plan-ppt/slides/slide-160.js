// slide-160.js - 快速参考卡
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "cheatsheet", index: 160, title: "快速参考卡" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 小标签
  slide.addText("QUICK REFERENCE", {
    x: 0.5, y: 0.25, w: 4, h: 0.3,
    fontSize: 10, fontFace: "Arial",
    color: theme.accent, bold: true, charSpacing: 6
  });

  // 主标题
  slide.addText("快速参考卡", {
    x: 0.5, y: 0.6, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("带走这张卡：三条标准 + B=MAP + 四个工具", {
    x: 0.5, y: 1.1, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });

  // 分割线
  slide.addShape("rect", {
    x: 0.5, y: 1.5, w: 9, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });

  // 左列 - 三条标准
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 3.0, h: 3.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 1.7, w: 3.0, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("三条标准", {
    x: 0.5, y: 1.7, w: 3.0, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const standards = [
    { name: "清晰度", test: "陌生人能立刻行动吗？" },
    { name: "摩擦力", test: "依赖好状态才能启动？" },
    { name: "稳健性", test: "普通忙碌那天还会发生吗？" }
  ];

  standards.forEach((s, i) => {
    const y = 2.25 + i * 0.85;
    slide.addText(s.name, {
      x: 0.65, y: y, w: 2.7, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(s.test, {
      x: 0.65, y: y + 0.3, w: 2.7, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 中列 - B=MAP
  slide.addShape("rect", {
    x: 3.6, y: 1.7, w: 2.9, h: 3.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 3.6, y: 1.7, w: 2.9, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("B=MAP 诊断", {
    x: 3.6, y: 1.7, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const map = [
    { name: "M 动机", test: "有内在意愿吗？" },
    { name: "A 容易度", test: "那一刻做起来难吗？" },
    { name: "P 提示", test: "什么在合适时机触发？" }
  ];

  map.forEach((m, i) => {
    const y = 2.25 + i * 0.85;
    slide.addText(m.name, {
      x: 3.75, y: y, w: 2.6, h: 0.3,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(m.test, {
      x: 3.75, y: y + 0.3, w: 2.6, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, lineSpacing: 14
    });
  });

  // 右列 - 四个工具
  slide.addShape("rect", {
    x: 6.6, y: 1.7, w: 2.9, h: 3.4,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 0.5 }
  });
  slide.addShape("rect", {
    x: 6.6, y: 1.7, w: 2.9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("四个工具", {
    x: 6.6, y: 1.7, w: 2.9, h: 0.4,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, align: "center", valign: "middle"
  });

  const tools = [
    { name: "最小启动", test: "降低启动阻力" },
    { name: "锚定行为", test: "借已有触发器" },
    { name: "降低摩擦", test: "默认 / 预设 / 简化" },
    { name: "执行意图", test: "当[情境]→做[行为]" }
  ];

  tools.forEach((t, i) => {
    const y = 2.2 + i * 0.65;
    slide.addText(t.name, {
      x: 6.75, y: y, w: 2.6, h: 0.28,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(t.test, {
      x: 6.75, y: y + 0.27, w: 2.6, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.inkSoft
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 5.2, w: 9, h: 0.32,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("为「日常状态的自己」设计，而不是为「状态最好的那天的自己」设计。", {
    x: 0.5, y: 5.2, w: 9, h: 0.32,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
