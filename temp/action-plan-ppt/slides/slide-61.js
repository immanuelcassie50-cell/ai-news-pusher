// slide-61.js - Fogg 的发现：三个条件同时具备
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "key-insight", index: 61, title: "Fogg 的发现" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 顶部细色条
  slide.addShape("rect", {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 顶部小标签
  slide.addText("核心发现", {
    x: 0.5, y: 0.3, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Arial",
    color: theme.inkMute, charSpacing: 6, bold: true
  });

  // 大字标题
  slide.addText("一个行为要可靠地发生", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  slide.addText("需要三个条件", {
    x: 0.5, y: 1.3, w: 9, h: 0.6,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.ink, bold: true, align: "center"
  });

  // 三个色块
  const items = [
    { letter: "M", label: "动机" },
    { letter: "A", label: "能力" },
    { letter: "P", label: "提示" }
  ];

  const blockW = 1.6;
  const blockH = 1.6;
  const startX = 1.5;
  const startY = 2.3;
  const gap = 0.7;

  items.forEach((it, i) => {
    const x = startX + i * (blockW + gap);
    slide.addShape("rect", {
      x: x, y: startY, w: blockW, h: blockH,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(it.letter, {
      x: x, y: startY + 0.1, w: blockW, h: 0.9,
      fontSize: 72, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(it.label, {
      x: x, y: startY + 1.05, w: blockW, h: 0.45,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, align: "center"
    });

    // 连接符号
    if (i < 2) {
      slide.addText("×", {
        x: x + blockW, y: startY, w: gap, h: blockH,
        fontSize: 36, fontFace: "Arial",
        color: theme.primary, bold: true, align: "center", valign: "middle"
      });
    }
  });

  // 同时具备
  slide.addShape("rect", {
    x: 3.5, y: 4.1, w: 3, h: 0.05,
    fill: { color: theme.accent }, line: { color: theme.accent }
  });
  slide.addText("同时具备", {
    x: 3.5, y: 4.2, w: 3, h: 0.4,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center"
  });

  // 底部金句
  slide.addShape("rect", {
    x: 0.5, y: 4.8, w: 9, h: 0.55,
    fill: { color: theme.paperWarm }, line: { color: theme.paperWarm }
  });
  slide.addText("不是不够努力，不是态度问题 —— 是三个条件里有一个缺失了", {
    x: 0.5, y: 4.8, w: 9, h: 0.55,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
