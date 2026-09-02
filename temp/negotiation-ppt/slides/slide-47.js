// slide-47.js - 改善 BATNA 的方法
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 47, title: '改善 BATNA' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 改善 BATNA 的 5 个方法", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("\"我没有 BATNA\"——其实你有，只是没挖掘", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("BATNA 可以主动构建——这才是准备阶段最有杠杆的动作", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // 5 methods in grid
  const methods = [
    {
      n: "01", t: "增加候选",
      d: "主动联系 2-3 家备选供应商/候选人/合作方",
      e: "例：只和 1 家谈 → 弱势；和 3 家谈 → 强势"
    },
    {
      n: "02", t: "透明信息",
      d: "让对方知道你有备选——不必细说，但要让对方知道",
      e: "例：\"我们也在看其他方案\""
    },
    {
      n: "03", t: "降低依赖",
      d: "把关键资源、关键人物、关键时间的依赖度降低",
      e: "例：数据备份 / 多人接触 / 提前预留 buffer"
    },
    {
      n: "04", t: "预演拒绝",
      d: "想象并演练\"如果谈崩了，我具体怎么办\"",
      e: "把 BATNA 从\"想法\"变成\"计划\""
    },
    {
      n: "05", t: "提高替代价值",
      d: "为备选方案投入资源，让它真实存在",
      e: "例：花 1 周时间认真评估备选，让它不只是\"口头选项\""
    }
  ];

  methods.forEach((m, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.4 + col * 3.1;
    const y = 1.7 + row * 1.55;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 1.45,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y, w: 2.9, h: 0.45,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(m.n + " · " + m.t, {
      x: x + 0.15, y: y, w: 2.7, h: 0.45,
      fontSize: 11.5, fontFace: "Microsoft YaHei",
      color: "FFFFFF", bold: true, valign: "middle"
    });
    slide.addText(m.d, {
      x: x + 0.15, y: y + 0.55, w: 2.65, h: 0.5,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.primary, lineSpacing: 13
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 1.05, w: 2.65, h: 0.32,
      fill: { color: theme.bg }, line: { color: theme.accent, width: 0.5 }
    });
    slide.addText(m.e, {
      x: x + 0.25, y: y + 1.05, w: 2.45, h: 0.32,
      fontSize: 9, fontFace: "Microsoft YaHei",
      color: theme.secondary, italic: true, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("47", {
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
  pres.writeFile({ fileName: "slide-47-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
