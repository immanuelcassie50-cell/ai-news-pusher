// slide-124.js - 工具四引入：执行意图
const pptxgen = require("pptxgenjs");
const { addFooterMark } = require("../design-system.js");

const slideConfig = { type: "tool-intro", index: 124, title: "工具四：执行意图" };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  // 左侧深红色大色块
  slide.addShape("rect", {
    x: 0, y: 0, w: 4.5, h: 5.625,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });

  // 工具编号
  slide.addText("TOOL 04", {
    x: 0.5, y: 0.6, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Arial",
    color: "FFFFFF", charSpacing: 8, bold: true
  });

  // 装饰线
  slide.addShape("rect", {
    x: 0.5, y: 1.05, w: 0.5, h: 0.04,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });

  // 大字工具名
  slide.addText("执行", {
    x: 0.5, y: 1.4, w: 4, h: 0.9,
    fontSize: 80, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });
  slide.addText("意图", {
    x: 0.5, y: 2.3, w: 4, h: 0.9,
    fontSize: 80, fontFace: "Microsoft YaHei",
    color: theme.redLight, bold: true
  });

  // 英文小字
  slide.addText("Implementation Intention", {
    x: 0.5, y: 3.3, w: 4, h: 0.3,
    fontSize: 13, fontFace: "Arial",
    color: theme.redLight, italic: true
  });

  // B=MAP 徽章
  slide.addShape("ellipse", {
    x: 0.5, y: 4.2, w: 0.5, h: 0.5,
    fill: { color: "FFFFFF" }, line: { color: "FFFFFF" }
  });
  slide.addText("P", {
    x: 0.5, y: 4.2, w: 0.5, h: 0.5,
    fontSize: 24, fontFace: "Arial",
    color: theme.primary, bold: true, align: "center", valign: "middle"
  });
  slide.addText("改善 Prompt（提示）", {
    x: 1.2, y: 4.25, w: 3, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle"
  });

  // 右侧副标题区
  slide.addText("预先决定\"什么时候、在哪里、如何\"做一件事，", {
    x: 5.0, y: 1.4, w: 4.7, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.inkSoft
  });
  slide.addText("让大脑无需做额外决定，直接行动。", {
    x: 5.0, y: 1.85, w: 4.7, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 三条要点
  const points = [
    "格式：\"当[情境]，我将[行为]\"",
    "Gollwitzer 验证：完成率 2-3 倍",
    "消除决策负荷 + 条件性提示"
  ];
  points.forEach((p, i) => {
    const y = 2.7 + i * 0.5;
    slide.addShape("rect", {
      x: 5.0, y: y + 0.1, w: 0.15, h: 0.15,
      fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addText(p, {
      x: 5.3, y: y, w: 4.4, h: 0.4,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.inkSoft, valign: "middle"
    });
  });

  // 底部金句
  slide.addShape("rect", {
    x: 5.0, y: 4.5, w: 4.7, h: 0.04,
    fill: { color: theme.primary }, line: { color: theme.primary }
  });
  slide.addText("\"If-then planning\" · 行为促进工具", {
    x: 5.0, y: 4.65, w: 4.7, h: 0.3,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.primary, italic: true, bold: true
  });

  addFooterMark(slide, theme);
  return slide;
}

module.exports = { createSlide, slideConfig };
