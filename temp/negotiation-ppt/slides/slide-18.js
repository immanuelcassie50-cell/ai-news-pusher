// slide-18.js - 差距在哪里：框架总结
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 18, title: '差距在哪里' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 差距在哪里", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  // Big statement
  slide.addText("不在能力，不在职位。", {
    x: 0.4, y: 0.85, w: 9.2, h: 0.5,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  slide.addText("在\"是否用谈判的框架去思考\"。", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.55,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Two columns
  // Left: 错误框架
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.0, w: 4.5, h: 2.8,
    fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 2.0, w: 0.08, h: 2.8,
    fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
  });
  slide.addText("错误框架", {
    x: 0.65, y: 2.15, w: 4.0, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const wrongs = [
    { l: "小林", t: "把 offer 当成\"通知\"——我有一个 offer，你看着办" },
    { l: "张经理", t: "把报价当成\"结果\"——已经低于预算了，没什么好谈" }
  ];
  wrongs.forEach((w, i) => {
    const y = 2.65 + i * 1.05;
    slide.addText(w.l, {
      x: 0.65, y: y, w: 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary, bold: true
    });
    slide.addText(w.t, {
      x: 0.65, y: y + 0.3, w: 4.0, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 15
    });
  });

  // Right: 正确框架
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 4.5, h: 2.8,
    fill: { color: "FFFFFF" }, line: { color: theme.accent, width: 2 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 2.0, w: 0.08, h: 2.8,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("正确框架", {
    x: 5.35, y: 2.15, w: 4.0, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });

  const rights = [
    { l: "小李", t: "把 offer 当成\"谈判筹码\"——它改变了整个对话的权力结构" },
    { l: "小王", t: "把报价当成\"起点\"——所有报价都可以谈，差别在你有没有 BATNA" }
  ];
  rights.forEach((r, i) => {
    const y = 2.65 + i * 1.05;
    slide.addText(r.l, {
      x: 5.35, y: y, w: 0.9, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.accent, bold: true
    });
    slide.addText(r.t, {
      x: 5.35, y: y + 0.3, w: 4.0, h: 0.6,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 15
    });
  });

  // Bottom takeaway
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.95, w: 9.2, h: 0.4,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("核心：不是\"你会不会谈判\"，是\"你有没有用谈判的框架去看每一场需要交换的场景\"", {
    x: 0.5, y: 4.95, w: 8.8, h: 0.4,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("18", {
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
  pres.writeFile({ fileName: "slide-18-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
