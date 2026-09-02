// slide-59.js - 准备中的常见错误
const pptxgen = require("pptxgenjs");

const slideConfig = { type: 'content', index: 59, title: '准备中的常见错误' };

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.6,
    fill: { color: theme.primary }, line: { color: theme.primary, width: 0 }
  });
  slide.addText("M3 · 准备中的 5 个常见错误", {
    x: 0.4, y: 0, w: 9.2, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "FFFFFF", valign: "middle", charSpacing: 4
  });

  slide.addText("为什么你准备过了还是谈不好？", {
    x: 0.4, y: 0.8, w: 9.2, h: 0.5,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const errors = [
    {
      n: "01", t: "只算自己的数字",
      d: "BATNA、底线、期望都算了，但没估对方的——等于半个准备"
    },
    {
      n: "02", t: "BATNA 是编的",
      d: "\"我有别的选择\"——其实没有 → 现场被识破 → 议价力归零"
    },
    {
      n: "03", t: "没准备对方的提问",
      d: "只准备了自己的话——结果被对方一问就乱了节奏"
    },
    {
      n: "04", t: "没演练",
      d: "脑子里想得清楚，一开口就乱——演练是必须的，不是可选项"
    },
    {
      n: "05", t: "带着情绪准备",
      d: "生气、委屈、不服——带着情绪准备会把底线算错，会失控"
    }
  ];

  errors.forEach((e, i) => {
    const y = 1.55 + i * 0.65;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 9.2, h: 0.55,
      fill: { color: "FFFFFF" }, line: { color: theme.light, width: 0.5 }
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fill: { color: theme.secondary }, line: { color: theme.secondary, width: 0 }
    });
    slide.addText(e.n, {
      x: 0.4, y: y, w: 0.55, h: 0.55,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true, align: "center", valign: "middle"
    });
    slide.addText(e.t, {
      x: 1.1, y: y, w: 3.0, h: 0.55,
      fontSize: 12.5, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true, valign: "middle"
    });
    slide.addText(e.d, {
      x: 4.2, y: y, w: 5.4, h: 0.55,
      fontSize: 10.5, fontFace: "Microsoft YaHei",
      color: theme.secondary, valign: "middle"
    });
  });

  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent }, line: { color: theme.accent, width: 0 }
  });
  slide.addText("59", {
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
  pres.writeFile({ fileName: "slide-59-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
