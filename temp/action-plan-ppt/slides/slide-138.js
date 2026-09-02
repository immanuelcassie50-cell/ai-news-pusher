// slide-138.js - 练习说明：重新设计工作表
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "exercise", index: 138, title: "练习说明" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具标签
  slide.addText("练习 · 用四个工具重新设计任务", {
    x: 0.5, y: 0.18, w: 6, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.inkMute, bold: true
  });

  // 标题
  slide.addText("练习：重新设计 3 个任务", {
    x: 0.5, y: 0.5, w: 9, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true
  });

  // 副标题
  slide.addText("本模块迄今最重要的练习", {
    x: 0.5, y: 1.0, w: 9, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, italic: true
  });

  // 三步操作
  const steps = [
    { num: "1", title: "选择", desc: "从 B=MAP 诊断里识别的高风险任务中选 3 个" },
    { num: "2", title: "选择工具", desc: "根据主要弱点选合适的工具，可同时用多个" },
    { num: "3", title: "写出新版本", desc: "按照各工具的格式写出重新设计后的任务描述" }
  ];

  steps.forEach((s, i) => {
    const x = 0.5 + i * 3.1;
    slide.addShape("rect", {
      x: x, y: 1.5, w: 2.9, h: 1.4,
      fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
    });
    // 数字
    slide.addShape("ellipse", {
      x: x + 1.15, y: 1.65, w: 0.5, h: 0.5,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(s.num, {
      x: x + 1.15, y: 1.65, w: 0.5, h: 0.5,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    // 标题
    slide.addText(s.title, {
      x: x + 0.2, y: 2.25, w: 2.5, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true, align: "center"
    });
    // 描述
    slide.addText(s.desc, {
      x: x + 0.2, y: 2.55, w: 2.5, h: 0.4,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, align: "center"
    });
  });

  // 工作表
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 9, h: 1.55,
    fill: { color: theme.paper }, line: { color: theme.paperLine, width: 1 }
  });
  slide.addShape("rect", {
    x: 0.5, y: 3.1, w: 9, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("任务重新设计工作表", {
    x: 0.7, y: 3.15, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });

  // 表头行
  const colX = [0.7, 2.5, 4.3, 5.7];
  const colW = [1.8, 1.8, 1.4, 3.7];
  const headers = ["原始任务描述", "B=MAP 主要弱点", "选用的工具", "重新设计后的任务描述"];
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i], y: 3.55, w: colW[i], h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.ink, bold: true
    });
  });
  // 分隔线
  slide.addShape("rect", {
    x: 0.7, y: 3.85, w: 8.6, h: 0.02,
    fill: { color: theme.paperLine }, line: { color: theme.paperLine }
  });
  // 三行空白
  for (let i = 0; i < 3; i++) {
    const y = 3.95 + i * 0.22;
    slide.addShape("rect", {
      x: 0.7, y: y, w: 8.6, h: 0.02,
      fill: { color: theme.paperLine }, line: { color: theme.paperLine }
    });
  }

  // 底部
  slide.addShape("rect", {
    x: 0.5, y: 4.75, w: 9, h: 0.45,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("写完后做：清晰度检验 + 触发器检验 + 坏日子测试", {
    x: 0.5, y: 4.75, w: 9, h: 0.45,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
