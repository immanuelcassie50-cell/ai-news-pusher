// slide-25.js - M2 内容地图
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 25, title: 'M2 内容地图' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M2 · 本模块地图", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("立场 vs 利益 · 七层递进", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const items = [
    { n: "01", t: "核心区分", d: "立场是\"要什么\"，利益是\"为什么想要\"" },
    { n: "02", t: "深度案例", d: "薪资 / 跨部门 / 价格 三个常见场景的对比" },
    { n: "03", t: "提问技术", d: "挖掘利益的三件套问题设计" },
    { n: "04", t: "四维分析", d: "实质 / 程序 / 关系 / 原则 利益的不同层次" },
    { n: "05", t: "心理机制", d: "为什么人会死守立场——四个心理根源" },
    { n: "06", t: "信息策略", d: "用战略性透明打开对方——黑箱到白箱的转换" }
  ];

  // 2 columns x 3 rows
  items.forEach((it, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.7;
    const y = 1.55 + row * 1.05;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 4.5, h: 0.95,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 0.08, h: 0.95,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(it.n, {
      x: x + 0.2, y: y + 0.1, w: 0.6, h: 0.4,
      fontSize: 22, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(it.t, {
      x: x + 0.9, y: y + 0.1, w: 3.5, h: 0.35,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(it.d, {
      x: x + 0.9, y: y + 0.45, w: 3.5, h: 0.5,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
  });

  // Bottom bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 4.85, w: 9.2, h: 0.5,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("时长：2.5-3 小时  |  演练：每讲完一组概念配 1 个案例 + 1 轮现场演练", {
    x: 0.5, y: 4.85, w: 8.5, h: 0.5,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, valign: "middle"
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("25", {
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
  pres.writeFile({ fileName: "slide-25-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
