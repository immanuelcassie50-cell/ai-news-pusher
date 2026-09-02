// slide-12.js - 谈判的三个必要条件
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 12, title: '三个必要条件' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M1 · 谈判发生的条件", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("什么时候是谈判？三个条件同时存在", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // 3 condition cards
  const conds = [
    { n: "01", t: "双方各有诉求", d: "不是单方面的请求或命令，而是双方都有想要的东西" },
    { n: "02", t: "诉求不一致", d: "如果诉求完全一致，那是协作而不是谈判" },
    { n: "03", t: "无单方面强制权", d: "如果有一方可单方面决定结果，那是命令而不是谈判" }
  ];

  conds.forEach((c, i) => {
    const x = 0.4 + i * 3.1;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.5, w: 2.9, h: 1.5,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 1 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 1.5, w: 2.9, h: 0.08,
      fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
    });
    slide.addText(c.n, {
      x: x + 0.2, y: 1.65, w: 1, h: 0.5,
      fontSize: 28, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    slide.addText(c.t, {
      x: x + 0.2, y: 2.15, w: 2.5, h: 0.4,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(c.d, {
      x: x + 0.2, y: 2.55, w: 2.5, h: 0.45,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, lineSpacing: 13
    });
  });

  // Logic equation
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.2, w: 9.2, h: 0.7,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("三方条件  =  谈判情境", {
    x: 0.4, y: 3.2, w: 9.2, h: 0.7,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true, align: "center", valign: "middle"
  });

  // Scenarios scan table
  slide.addText("场景扫描：这是不是谈判？", {
    x: 0.4, y: 4.05, w: 9.2, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const scans = [
    { s: "老板要求你加班", a: "❌ 命令" },
    { s: "你要求老板加薪", a: "✅ 谈判" },
    { s: "供应商要求涨价", a: "✅ 谈判" },
    { s: "客户要求返工", a: "✅ 谈判" },
    { s: "伴侣讨论周末安排", a: "✅ 谈判" }
  ];

  scans.forEach((sc, i) => {
    const x = 0.4 + i * 1.86;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: 4.4, w: 1.78, h: 0.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addText(sc.s, {
      x: x + 0.1, y: 4.42, w: 1.6, h: 0.3,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.primary, valign: "middle"
    });
    slide.addText(sc.a, {
      x: x + 0.1, y: 4.7, w: 1.6, h: 0.3,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: sc.a.includes("✅") ? theme.accent : theme.secondary,
      bold: true, valign: "middle"
    });
  });

  // Page badge
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("12", {
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
  pres.writeFile({ fileName: "slide-12-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
