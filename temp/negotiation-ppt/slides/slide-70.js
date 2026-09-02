// slide-70.js - 让步节奏演示
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 70, title: '让步节奏演示' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 让步节奏：可视化演示", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("同样让 5 万，节奏不同 = 完全不同结果", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("案例：客户要降价 5 万，从 50 万降到 45 万", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Comparison: 错误节奏 vs 正确节奏
  // BAD
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.7, w: 4.5, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.7, w: 4.5, h: 0.45,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("X  错误：均匀让步", {
    x: 0.55, y: 1.7, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  // Steps
  const badSteps = [
    { r: "R1", v: "50 → 48", a: "-2 万" },
    { r: "R2", v: "48 → 46", a: "-2 万" },
    { r: "R3", v: "46 → 45", a: "-1 万" }
  ];
  badSteps.forEach((s, i) => {
    const y = 2.3 + i * 0.4;
    slide.addText(s.r, {
      x: 0.55, y: y, w: 0.5, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(s.v, {
      x: 1.1, y: y, w: 1.5, h: 0.3,
      fontSize: 11, fontFace: "Arial",
      color: theme.primary, valign: "middle"
    });
    slide.addText(s.a, {
      x: 2.7, y: y, w: 2.0, h: 0.3,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 3.65, w: 4.2, h: 1.15,
    fill: { color: theme.bg }, line: { color: theme.secondary, width: 0.5 }
  });
  slide.addText("问题：", {
    x: 0.65, y: 3.7, w: 4.0, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("·  对方看到\"还有空间\"\n·  继续压你 / 不愿意接受\n·  最终可能只让 5 万还嫌不够\n·  对方觉得你\"会一直让\"", {
    x: 0.65, y: 3.95, w: 4.0, h: 0.8,
    fontSize: 9.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 12
  });

  // GOOD
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.7, w: 4.5, h: 3.2,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1.5 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.7, w: 4.5, h: 0.45,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("V  正确：递减让步", {
    x: 5.25, y: 1.7, w: 4.2, h: 0.45,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  const goodSteps = [
    { r: "R1", v: "50 → 47.5", a: "-2.5 万 (大让步)" },
    { r: "R2", v: "47.5 → 46", a: "-1.5 万 (中让步)" },
    { r: "R3", v: "46 → 45.2", a: "-0.8 万 (微小让步)" },
    { r: "R4", v: "45.2 → 45", a: "-0.2 万 (极限让步)" }
  ];
  goodSteps.forEach((s, i) => {
    const y = 2.3 + i * 0.32;
    slide.addText(s.r, {
      x: 5.25, y: y, w: 0.5, h: 0.28,
      fontSize: 10, fontFace: "Arial",
      color: theme.accent, bold: true, valign: "middle"
    });
    slide.addText(s.v, {
      x: 5.8, y: y, w: 1.4, h: 0.28,
      fontSize: 10, fontFace: "Arial",
      color: theme.primary, valign: "middle"
    });
    slide.addText(s.a, {
      x: 7.3, y: y, w: 2.2, h: 0.28,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.25, y: 3.65, w: 4.2, h: 1.15,
    fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
  });
  slide.addText("效果：", {
    x: 5.35, y: 3.7, w: 4.0, h: 0.25,
    fontSize: 10, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  slide.addText("·  对方感觉\"到底了\"\n·  越往后越难压你\n·  4 轮让完 = 显得诚意足\n·  最终在 45 万附近成交", {
    x: 5.35, y: 3.95, w: 4.0, h: 0.8,
    fontSize: 9.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 12
  });

  // Bottom
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("让步的核心是\"信号\"——让对方觉得越往后越难", {
    x: 0.5, y: 4.95, w: 8.5, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("70", {
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
  pres.writeFile({ fileName: "slide-70-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
