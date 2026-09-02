// slide-49.js - 三个数字的应用
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 49, title: '三个数字的应用' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 三个数字：在谈判中怎么用", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("三个数字，三种公开方式", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("BATNA 决定你能不能走 / 底线决定你该不该签 / 期望决定你开局怎么报", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Comparison table
  const headers = ["", "BATNA 值", "底线值", "期望值"];
  const rows = [
    ["作用", "安全网", "尊严线", "开局牌"],
    ["公开度", "可以说有，但不细说", "永远不说", "可以主动亮（甚至夸大）"],
    ["何时用", "对方逼太紧时", "准备走人时", "第一次报价"],
    ["对方知道时", "对方开始让步", "对方停止逼你", "对方开始压价"],
    ["计算依据", "备选方案的实际价值", "成本 + 必要利润", "价值锚点 + 对方承受力"]
  ];

  const colX = [0.4, 2.2, 4.6, 7.0];
  const colW = [1.75, 2.35, 2.35, 2.6];

  // Header row
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.75, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  headers.forEach((h, i) => {
    slide.addText(h, {
      x: colX[i] + 0.1, y: 1.75, w: colW[i] - 0.2, h: 0.5,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true, valign: "middle",
      align: i === 0 ? "left" : "center"
    });
  });

  rows.forEach((r, i) => {
    const y = 2.25 + i * 0.5;
    const bgColor = i % 2 === 0 ? "FFFFFF" : theme.bg;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.5,
      fill: { color: bgColor }, line: { color: theme.light, width: 0.5 }
    });
    r.forEach((c, j) => {
      const isFirst = j === 0;
      slide.addText(c, {
        x: colX[j] + 0.1, y: y, w: colW[j] - 0.2, h: 0.5,
        fontSize: isFirst ? 11 : 10.5,
        fontFace: "Microsoft YaHei",
        color: isFirst ? theme.accent : theme.primary,
        bold: isFirst, valign: "middle",
        align: isFirst ? "left" : (j === 0 ? "left" : "left"),
        lineSpacing: 13
      });
    });
  });

  // Bottom warning
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.9, w: 9.2, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("警告：底线定得太低 = 签了也难受；定得太高 = 经常走人。合理定线需要真实数据支撑", {
    x: 0.5, y: 4.9, w: 8.5, h: 0.45,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("49", {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fontSize: 11, fontFace: "Arial", color: "FFFFFF",
    bold: true, align: "center", valign: "middle"
  });

  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9';
  const theme = { primary: "1A2B4C", secondary: "8B5A3C", accent: "C9A961", light: "E8E0D0", bg: "FAF7F2" };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-49-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
