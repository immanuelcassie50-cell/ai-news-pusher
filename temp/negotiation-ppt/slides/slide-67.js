// slide-67.js - 怎么开价
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 67, title: '怎么开价' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M4 · 怎么开价：锚定的具体技术", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("3 种开价策略 + 3 个注意事项", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  slide.addText("开价不是\"漫天要价\"——是\"留出足够让步空间 + 让对方愿意听\"", {
    x: 0.4, y: 1.3, w: 9.2, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });

  // Strategies
  const strats = [
    {
      n: "01", t: "高于期望的\"虚高\"开价",
      d: "比期望值高 20-30%，给对方留让步空间",
      e: "期望 18 万 → 报 22 万"
    },
    {
      n: "02", t: "有依据的开价",
      d: "每个数字都能说出理由——成本、参照、价值",
      e: "\"22 万 = 同行 top 30% 水平 + 这个岗位的稀缺度\""
    },
    {
      n: "03", t: "非数字开价",
      d: "用范围、公式、参考点开价——把具体数字的博弈变成方法的博弈",
      e: "\"我们通常按 X 算法 / 这类项目在 Y 区间\""
    }
  ];

  strats.forEach((s, i) => {
    const y = 1.7 + i * 0.7;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.6,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.55, h: 0.6,
      fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
    });
    slide.addText(s.n, {
      x: 0.4, y: y, w: 0.55, h: 0.6,
      fontSize: 14, fontFace: "Arial",
      color: theme.accent, bold: true, align: "center", valign: "middle"
    });
    slide.addText(s.t, {
      x: 1.1, y: y, w: 3.0, h: 0.6,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(s.d, {
      x: 4.2, y: y, w: 3.2, h: 0.6,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle", lineSpacing: 13
    });
    slide.addText(s.e, {
      x: 7.5, y: y, w: 2.0, h: 0.6,
      fontSize: 9.5, fontFace: "Microsoft YaHei",
      color: theme.accent, italic: true, valign: "middle"
    });
  });

  // Cautions
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.4, y: 3.95, w: 9.2, h: 1.0,
    fill: { color: "FFFFFF" }, line: { color: theme.secondary, width: 1 }
  });
  slide.addText("三个注意事项", {
    x: 0.55, y: 4.0, w: 9, h: 0.3,
    fontSize: 11, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });
  slide.addText("·  太离谱的开价 = 失去信任 / 对方直接拒绝听\n·  数字+理由 一起出——避免对方说\"凭什么\"\n·  第一次出价后坚持至少 3 轮才让步——避免显得急", {
    x: 0.55, y: 4.3, w: 9, h: 0.65,
    fontSize: 10.5, fontFace: "Microsoft YaHei",
    color: theme.primary, lineSpacing: 14
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("67", {
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
  pres.writeFile({ fileName: "slide-67-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
