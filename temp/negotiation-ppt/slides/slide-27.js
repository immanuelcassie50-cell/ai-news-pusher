// slide-27.js - 一个经典比喻
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 27, title: '一个经典比喻' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 一个经典比喻", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("树冠 vs 树根", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("用一棵树来具象化\"立场\"和\"利益\"的关系", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Tree diagram
  // Tree top - canopy (positions)
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 1.8, w: 9.2, h: 0.9,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("树冠（立场）", {
    x: 0.55, y: 1.8, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true, valign: "middle"
  });
  slide.addText("你看到的、需要处理的、摆在谈判桌上的具体主张", {
    x: 0.55, y: 2.15, w: 9, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: "FFFFFF"
  });

  // Trunk
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.7, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("← 谈判者在\"树冠层\"来回交锋 →", {
    x: 0.4, y: 2.7, w: 9.2, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Roots - interests
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.1, w: 9.2, h: 1.5,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 1 }
  });
  slide.addText("树根（利益）", {
    x: 0.55, y: 3.15, w: 9, h: 0.35,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });
  slide.addText("你看不到的、滋养着立场的真正原因：", {
    x: 0.55, y: 3.5, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.primary
  });
  // 3 root boxes
  const roots = ["需求 (Needs)", "担忧 (Fears)", "价值 (Values)"];
  roots.forEach((r, i) => {
    const x = 0.7 + i * 2.95;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: 3.85, w: 2.7, h: 0.55,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 1 },
      rectRadius: 0.05
    });
    slide.addText(r, {
      x: x, y: 3.85, w: 2.7, h: 0.55,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, align: "center", valign: "middle"
    });
  });

  // Bottom insight
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.8, w: 9.2, h: 0.55,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("剪树冠剪不完——你砍一根，对方长两根。挖树根才能改变整棵树。", {
    x: 0.5, y: 4.8, w: 8.5, h: 0.55,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("27", {
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
  pres.writeFile({ fileName: "slide-27-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
